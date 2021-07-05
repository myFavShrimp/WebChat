from dotenv import load_dotenv
import os
from pathlib import Path

from pydantic import BaseModel


load_dotenv(Path('.') / '.env')  # .env file path


class Config(BaseModel):
    debug_enabled: bool = os.getenv('DEBUG')
    host: str = os.getenv('HOST')
    port: int = int(os.getenv('PORT'))
    sqlalchemy_database_uri: str = os.getenv('DATABASE_URI')
    sqlalchemy_track_modifications: bool = os.getenv('DATABASE_TRACK_MODIFICATIONS')
    authjwt_access_token_expires: int = os.getenv('AUTHJWT_ACCESS_TOKEN_EXPIRES')
    authjwt_secret_key: str = os.getenv('AUTHJWT_SECRET_KEY')
