FROM python:3.8.2
ENV PYTHONUNBUFFERED 1

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . /home/docker/backend
WORKDIR /home/docker/backend

