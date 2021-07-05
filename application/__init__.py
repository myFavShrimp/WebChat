from fastapi import FastAPI
from fastapi_jwt_auth.exceptions import AuthJWTException
from starlette.requests import Request
from starlette.responses import JSONResponse

from application.api import api_router
from application.api.database import Base, engine
from application.api.database import with_database

from application.api.database import models
from application.websocket import app as socket_app


app = FastAPI(title='WebChat', description='The famous WebChat project!', version='1.0', docs_url='/api/docs',
              redoc_url='/api/redoc', debug=True)

Base.metadata.create_all(bind=engine)


app.include_router(api_router)

app.mount("/", socket_app)


# exceptions

@app.exception_handler(AuthJWTException)
def authjwt_exception_handler(request: Request, exc: AuthJWTException):
    """Creates a response in case of an AuthJWTException"""
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": [{'msg': exc.message}]}
    )
