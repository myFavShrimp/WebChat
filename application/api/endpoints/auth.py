from fastapi import APIRouter, Depends, Response
from fastapi_jwt_auth import AuthJWT
from sqlalchemy.orm import Session

from application.api import schema
from application.api.database import get_db
from application.api.database.operations import (user as user_action,
                                                 access_token_blacklist as access_token_blacklist_action)

auth_router = APIRouter(prefix='/auth', tags=['auth'])


@auth_router.post('/login', response_model=schema.Login, status_code=200)
def post_login(login: schema.UserLogin,
               Authorize: AuthJWT = Depends(), db: Session = Depends(get_db)):
    login = user_action.login(db, login.username)

    if not login:
        login = user_action.create(db, login.username)

    access_token = Authorize.create_access_token(subject=login.id)
    return {'access_token': access_token}


@auth_router.post('/logout', status_code=204, description='Removes all cookies from the browser',
                  response_class=Response, responses={401: {"model": schema.FeedbackMessage}})
def post_logout(Authorize: AuthJWT = Depends(), db: Session = Depends(get_db)):
    Authorize.jwt_required()
    jti = Authorize.get_raw_jwt()['jti']
    print(jti)
    access_token_blacklist_action.create(db, jti)
    return
