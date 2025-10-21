# Week 1 — App Containerization
BACKEND:
docker build --network=host  -t backend-flask ./backend-flask

docker run --rm -p 4567:4567 -it -e FRONTEND_URL='*' -e BACKEND_URL='*' backend-flask

docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker rmi $(docker images -a -q)

FRONTEND:
docker build --network=host -t frontend-react-js ./frontend-react-js

cd frontend-react-js
npm i

docker run -p 3000:3000 -d frontend-react-js

DOCKER-COMPOSE:
docker compose up --build





