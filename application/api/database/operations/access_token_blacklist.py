from sqlalchemy.orm import Session

from application.api.database.models import AccessTokenBlacklist


def create(db: Session, token: str):
    db_token = AccessTokenBlacklist(token=token)
    db.add(db_token)
    db.commit()
    db.refresh(db_token)
    return db_token


def read_by_token(db: Session, token: str):
    db_token = db.query(AccessTokenBlacklist).filter_by(token=token).first
    return db_token


def delete_by_token(db: Session, token: str):
    db.query(AccessTokenBlacklist).filter_by(token=token).delete()
    db.commit()
