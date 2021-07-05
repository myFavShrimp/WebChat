import uvicorn

from application import app
from config import Config

uvicorn.run(app, host=Config().host, port=Config().port, debug=Config().debug_enabled)
