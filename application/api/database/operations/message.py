from sqlalchemy.orm import Session

from application.api.database.models import Message


def create(db: Session, text: str, user_id: int):
    db_message = Message(text=text, user_id=user_id)
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message


def read_all(db: Session):
    db_message = db.query(Message).all()
    return db_message
