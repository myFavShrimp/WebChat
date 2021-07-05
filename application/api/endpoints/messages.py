from fastapi import Depends, APIRouter
from fastapi_jwt_auth import AuthJWT
from sqlalchemy.orm import Session

from application.api import schema
from application.api.database import get_db
from application.api.database.operations import message as message_action


messages_router = APIRouter(prefix='/messages', tags=['messages'])


@messages_router.get('/all', response_model=schema.PageWithMessages)
def get_history(Authorize: AuthJWT = Depends(), db: Session = Depends(get_db)):
    Authorize.jwt_required()

    db_messages = message_action.read_all(db)

    result = []
    for message in db_messages:
        result.append({
            'id': message.id,
            'text': message.text,
            'username': message.user.username,
            'created_on': message.created_on
        })

    return {'items': result}

