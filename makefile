up:
	docker-compose up

build:
	docker-compose build

down:
	docker-compose down

bash:
	docker-compose exec django bash

shell:
	docker-compose exec django python manage.py shell

test:
	docker-compose exec django python manage.py test ${case}

create_admin:
	docker-compose exec django python manage.py createsuperuser

logs:
	docker-compose logs -f

check_flake8:
	pip install flake8
	flake8

start_frontend:
	cd frontend/ && npm start

install_frontend:
	cd frontend/ && npm install

build_frontend:
	cd frontend/ && npm build

