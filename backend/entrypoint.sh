#!/bin/sh

# qucik exit on error
set -o errexit

# migrations
python manage.py migrate

# start server
# python manage.py runserver 0.0.0.0:8000
gunicorn --config gunicorn.conf --bind 0.0.0.0:${PORT:-8000} wsgi:application --workers 3
