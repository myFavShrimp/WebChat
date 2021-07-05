from sqlalchemy import Column, Integer, Float, String, ForeignKey
from sqlalchemy.orm import relationship
import time

from application.api.database import Base


class User(Base):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True)
    username = Column(String(), unique=True, nullable=False)


class Message(Base):
    __tablename__ = 'message'

    id = Column(Integer, primary_key=True)
    text = Column(String())

    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship('User', backref="messages")

    created_on = Column(Float, default=time.time)


class AccessTokenBlacklist(Base):
    __tablename__ = 'access_token_blacklist'

    id = Column(Integer, primary_key=True)
    token = Column(String())
