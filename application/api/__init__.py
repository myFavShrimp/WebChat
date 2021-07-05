from fastapi import APIRouter

from application.api.authorization import setup_jwt
from application.api.endpoints.auth import auth_router
from application.api.endpoints.me import me_router
from application.api.endpoints.messages import messages_router


api_router = APIRouter(prefix='/api')

setup_jwt()


api_router.include_router(auth_router)
api_router.include_router(me_router)
api_router.include_router(messages_router)
