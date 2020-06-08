class Config(object):
    '''This class is the default config for FLASK'''

    DEBUG=True
    TESTING=False
    SESSION_COOKIE_SECURE=True
    FLASK_APP='grandpy.py'

class DevelopmentConfig(Config):
    '''Class handling the development env'''
    DEBUG=True
    ENV='development'