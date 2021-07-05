from typing import List
from pydantic import BaseModel


class _BaseModel(BaseModel):
    class Config:
        orm_mode = True


class UserLogin(_BaseModel):
    username: str


class NewMessage(_BaseModel):
    text: str


class FeedbackMessage(_BaseModel):
    message: str


class Login(_BaseModel):
    access_token: str


class Message(_BaseModel):
    id: int
    text: str
    username: str
    created_on: float


# Page
class PageWithMessages(_BaseModel):
    items: List[Message] = []
