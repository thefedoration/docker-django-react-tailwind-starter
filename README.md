# docker-django-react-tailwind-starter
This is a starter project for a containerized django backend and a react frontend.



## Key Components
- python3 docker container
- postgres database
- django 3.1.6
- docker-compose
- django rest framework, with jwt authentication
- gunicorn web server
- react 16.7
- react-router
- tailwind css precompilation
- jwt token authentication + refresh capabilities
- authentication required + optional routes

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
- comes with template `/api/v1/user-config/` Django Rest API that frontend can ingest

## TODO
- csrf token between frontend running on port 3000 and backend on port 8000. at the moment, we don't have ability for authenticated requests from the frontend. one way to solve this is to have port 8000 serve up the frontend bundle and that would give us a csrf token that can be sent with the request. Another way would be to add a JWT auth backend to 8000 and make an API that gives the token if the user is logged in, and have 3000 send that along with every request upon initial load.
- swap out django runservers for gunicorn

## Deploying

### Render
render.com is pretty great, so I'll write up how to deploy there, but you 

### Application configuration
- `frontend/src/utils/axios.js`, change `https://yourrenderappname.onrender.com`
- `backend/app/settings` add the frontend urls to `CORS_ORIGIN_WHITELIST`

