import socketio
from fastapi_jwt_auth import AuthJWT
from fastapi_jwt_auth.exceptions import MissingTokenError, AuthJWTException, RevokedTokenError, InvalidHeaderError

from application.api.database import get_session as get_db_session
from application.api.database.operations import message as message_action


sio = socketio.AsyncServer(async_mode="asgi", cors_allowed_origins='*')

app = socketio.ASGIApp(socketio_server=sio, static_files={'/': './static/'})
"""socketio server and frontend"""


connections = []


def get_connection(sid):
    """
    Retrieves a connection from the connections list by session id
    :param sid: session id
    :return: dict
    """
    for item in connections:
        if item['sid'] == sid:
            return item


@sio.event
async def connect(sid, environ):
    """
    Handles client connections and user authentication
    :param sid: session id
    :param environ: request
    """
    token = ''
    token_valid = True
    auth = None
    try:
        auth = AuthJWT(req=None)
    except Exception:
        pass

    for item in environ['asgi.scope']['headers']:
        if item[0].decode("utf-8") == 'authorization':
            token = item[1].decode("utf-8")

    try:
        auth.jwt_required(auth_from='websocket', token=token)
    except Exception as e:
        if type(e) in (MissingTokenError, AuthJWTException, RevokedTokenError, InvalidHeaderError):
            token_valid = False
        else:
            raise e

    if not token_valid:
        await sio.emit('refused', to=sid)
        await sio.disconnect(sid)
    else:
        connections.append({'user_id': auth.get_raw_jwt(token)['sub'], 'sid': sid})
        await sio.emit('accepted', to=sid)


@sio.event
async def disconnect(sid):
    """
    Handles disconnects. Removes disconnected session from connections list
    :param sid: session id
    """
    connection = get_connection(sid)
    connections.remove(connection)


@sio.on('message')
async def message_event(sid, data):
    """
    Handles sent messages
    :param sid: session id
    :param data: message text
    """
    # check if message text is empty
    if not data or data.isspace():
        return

    db = get_db_session()
    connection = get_connection(sid)
    db_message = message_action.create(db, data, connection['user_id'])

    message = {
        'id': db_message.id,
        'text': db_message.text,
        'created_on': db_message.created_on,
        'username': db_message.user.username,
    }

    db.close()

    # send message to all clients
    await sio.emit('message', message)
