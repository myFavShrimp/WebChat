from functools import wraps

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from config import Config

engine = create_engine(
    Config().sqlalchemy_database_uri, connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def with_database(function):
    """
    Decorator that provides a db session and automatically closes it
    :param function: First argument needs to be a session
    """
    @wraps(function)
    def wrapper(*args, **kwargs):
        session = SessionLocal()
        function(session, *args, **kwargs)
        session.close()
    return wrapper


def get_session():
    """
    Provides a db session which has to be closed again.
    :return:
    """
    return SessionLocal()
