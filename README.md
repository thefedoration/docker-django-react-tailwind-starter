# docker-django-react-tailwind-starter
This is a starter project for a containerized django backend and a hot-reloading react frontend pre-installed with tailwindcss

## Key Components
- python3 docker container
- postgres database
- django 3.1.6
- docker-compose
- django rest framework
- gunicorn web server (TODO, still django runserver right now)
- react 16.7
- react-router
- tailwind css

## Quickstart

### Backend
- copy 'backend/app/.env.example' to 'backend/app/.env', which is out of source control.
- in `.env`, fill in the same value for `DB_PASSWORD` as `POSTGRES_PASSWORD`, and fill in `SECRET_KEY`
- `make build` and go make yourself a cup of coffee while you wait
- `make up`, then visit `http://localhost:8000/health/` to see healthcheck 
- `make create_admin` to create a superuser, then you can log in at `http://localhost:8000/admin/`
- `make test` to run the test suite

### Frontend
- `make install_frontend` to install npm packages
- `make start_frontend` and go check out the app at `http://localhost:3000/`


## Other Handy Things
- check out `makefile` to see the various commands available
- `/health/` endpoint
- comes with template `/api/v1/user-config/` API that frontend can ingest

## Deploying

### Render
- WIP...

### Application configuration
- `frontend/src/utils/axios.js`, change `https://yourrenderappname.onrender.com`

