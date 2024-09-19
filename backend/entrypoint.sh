# python manage.py makemigration
# python manage.py migrate --no-input
# python manage.py collectstatic --no-input

# gunicorn backend.wsgi:application --bind 0.0.0.0:8000

#!/bin/sh

# Apply database migrations
python manage.py makemigrations
python manage.py migrate --no-input

# Collect static files
python manage.py collectstatic --no-input

# Start the Gunicorn server
gunicorn backend.wsgi:application --bind 0.0.0.0:8000
