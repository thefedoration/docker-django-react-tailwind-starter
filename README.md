# docker-django-react-tailwind-starter
This is a starter project for a containerized django backend and a react frontend.

This repo can be cloned and modified if you need:
- An API server, database, and a frontend
- JWT authentication (better than default django CSRF auth if you want to support mobile apps)
- Tailwind support in your frontend app

## Dependencies
- docker
- docker-compose
- npm

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
- copy `backend/app/.env.example` to `backend/app/.env`, which is out of source control.
- in `.env`, fill in the same value for `DB_PASSWORD` as `POSTGRES_PASSWORD`, and fill in `SECRET_KEY`
- `make build` and go make yourself a cup of coffee while you wait
- `make up`, then visit `http://localhost:8000/health/` to see healthcheck 
- `make create_admin` to create a superuser (make sure to set an email to log in from the frontend)
- you can log in to the django admin at `http://localhost:8000/admin/`
- `make test` to run the test suite

### Frontend
- `make install_frontend` to install npm packages
- `make start_frontend` and go check out the app at `http://localhost:3000/`
- `/` and `/about/` can be accessed without authentication, `/account/` will kick you to `/login/` if you are not authenticated


## Other Handy Things
- check out `makefile` to see the various commands available
- `/health/` endpoint
- comes with template `/api/v1/user-config/` Django Rest API that frontend can ingest
- comes with tailwind precompiled (see the `prestart` npm script in package.json)

## Deploying
You can deploy the docker container and static frontend on the cloud provider of your choice.
Mine is Render, so here are instructions on how to deploy there.

### Render
render.com is pretty great, I like it because of:
- Ease of setup for both webservers and static sites
- Transparent & consistent pricing
- Public roadmap, with input from customers
- Developer community
- Automatic zero-downtime deploys, easy rollbacks
- Preview environments for open PRs
- Slack deploy + failure notifications
- Cronjobs for periodic tasks
- Redirect rules
- Infrastructure as code

### To deploy on render
- make a render.com account
- `frontend/src/utils/axios.js`, change `https://yourrenderappname.onrender.com`
- `backend/app/settings` add the frontend urls to `CORS_ORIGIN_WHITELIST`
- Check out the `render.yaml` and modify any of the service names as you see fit
- Go to the render dashboard, press "YAML" in the left sidebar, and import from YAML for this repo
- It should take a couple minutes to create everything, go check out the render dashboard to see the features render provides
- The services created will show you the urls at which they are available, and you can set a custom domain on the frontend if you wish

