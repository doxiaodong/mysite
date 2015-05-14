# coding: utf-8
"""
Django settings for mysite project.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.7/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
BASE_DIR = os.path.dirname(os.path.dirname(__file__)).replace('\\', '/')


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.7/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'wf#4#1(!g4mg0#=wy^52m8g=j6kpf^v%p87sernvp9%yqaly#a'

# SECURITY WARNING: don't run with debug turned on in production!
import socket
hostname = socket.gethostname()
if hostname == 'iZ94zbdp1q5Z':
    IS_LOCAL = False
    USER_SESSION_EXPIRE = 10 * 60
    DEBUG = False
    EMPLATE_DEBUG = False
else:
    IS_LOCAL = True
    # 会话有效期
    USER_SESSION_EXPIRE = None
    DEBUG = True
    TEMPLATE_DEBUG = True

ALLOWED_HOSTS = ['localhost', '127.0.0.1', 'darlin.me', 'www.darlin.me']


# Application definition

DEFAULT_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
)

LOCAL_APPS = (
    'apps.home',
    'apps.article',
    'apps.account',
    'apps.comments',
    'apps.socket_io',
)

THIRD_APPS = (
    'DjangoUeditor',
    'pagination',
)

INSTALLED_APPS = DEFAULT_APPS + LOCAL_APPS + THIRD_APPS

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

    'pagination.middleware.PaginationMiddleware',
)

TEMPLATE_CONTEXT_PROCESSORS = (
    'django.contrib.auth.context_processors.auth',
    'django.core.context_processors.debug',
    'django.core.context_processors.i18n',
    'django.core.context_processors.media',
    'django.core.context_processors.static',
    'django.core.context_processors.tz',
    'django.contrib.messages.context_processors.messages',
    'django.core.context_processors.request',
    'mysite.context_processors.config',
)

ROOT_URLCONF = 'mysite.urls'

WSGI_APPLICATION = 'mysite.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.7/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Asia/Shanghai'

USE_I18N = True

USE_L10N = True

USE_TZ = True

AUTH_USER_MODEL = 'account.Profile'


# Template
TEMPLATE_DIRS = (
    os.path.join(BASE_DIR, 'dist/templates'),
)


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.7/howto/static-files/

STATIC_URL = '/static/'

if IS_LOCAL:
    pass
else:
    STATIC_ROOT = os.path.join(BASE_DIR, "dist/static")

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'dist/static'),
)

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

LOGIN_URL = '/'

# DEFAULT_USER = STATIC_URL + 'img/user-default.jpg'

"""
QQ and Weibo
"""
QQ = {
    'APP_ID': '101210479',
    'URL': 'https://graph.qq.com/oauth2.0/authorize',
    'APP_KEY': 'ca2571d6fe227084942862edd2367191',
}

"""
superuser: duxiaodong
pwd: shiwei122
"""


