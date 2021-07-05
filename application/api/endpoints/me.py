from fastapi import Depends, APIRouter
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from application.api import schema
from application.api.authorization import jwt_authorization


me_router = APIRouter(prefix='/me', tags=['me'])


@me_router.get('/history', response_model=schema.PageWithMessages)
def get_history(current_user: jwt_authorization = Depends()):
    return {'items': current_user.messages}
