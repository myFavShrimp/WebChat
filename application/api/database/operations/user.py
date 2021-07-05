from sqlalchemy.orm import Session

from application.api.database.models import User


def login(db: Session, username: str):
    """
    :return: user.id if the login is correct, False if not
    """
    db_user = db.query(User).filter_by(username=username).first()
    if db_user:
        return db_user

    return create(db, username)


def create(db: Session, username: str):
    db_user = User(username=username)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def read_by_id(db: Session, user_id: int):
    user = db.query(User).filter_by(id=user_id).first()
    return user
