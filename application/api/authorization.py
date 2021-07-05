from fastapi_jwt_auth import AuthJWT
from fastapi import Request, Response, Depends
from sqlalchemy.orm import Session
from fastapi_jwt_auth.exceptions import RevokedTokenError

from application.api.database.models import User, AccessTokenBlacklist
from application.api.database.operations.user import read_by_id
from application.api.database import get_db, with_database
from config import Config


def jwt_authorization(req: Request = None, res: Response = None, db: Session = Depends(get_db)):
    """
    Helper function to check if a user is logged in and then retrieve their database entry
    """
    Authorize = AuthJWT(req, res)
    Authorize.jwt_required()
    user_id = Authorize.get_jwt_subject()
    user = read_by_id(db, user_id)
    return user.item


def setup_jwt():
    """Initial configuration for the AuthJWT class"""

    @AuthJWT.load_config
    def configure():
        return Config()

    @AuthJWT.token_in_denylist_loader
    @with_database
    def is_token_allowed(db: Session, decoded_jwt):
        """Checks if a JWT is valid. Raises RevokedTokenError if not"""
        db_user = db.query(User).filter_by(id=decoded_jwt['sub']).first()
        if not db_user:
            raise RevokedTokenError(401, 'Login invalid')

        db_token = db.query(AccessTokenBlacklist).filter_by(token=decoded_jwt['jti']).first()
        if db_token:
            raise RevokedTokenError(401, 'Login invalid')

        return False
