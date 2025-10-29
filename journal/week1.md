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
docker compose up
docker compose down


zoltano@ACL-CH0026-06:/mnt/c/Dev/aws-bootcamp-cruddur-2023$ docker ps
CONTAINER ID   IMAGE                          COMMAND                  CREATED         STATUS         PORTS                                         NAMES
148e86a5c0be   frontend-react-js:latest       "docker-entrypoint.s…"   9 minutes ago   Up 9 minutes   0.0.0.0:3000->3000/tcp, [::]:3000->3000/tcp   aws-bootcamp-cruddur-2023-frontend-react-js-1
e9a72a6980dc   postgres:13-alpine             "docker-entrypoint.s…"   9 minutes ago   Up 9 minutes   0.0.0.0:5432->5432/tcp, [::]:5432->5432/tcp   aws-bootcamp-cruddur-2023-db-1
f8150bccf14d   amazon/dynamodb-local:latest   "java -jar DynamoDBL…"   9 minutes ago   Up 9 minutes   0.0.0.0:8000->8000/tcp, [::]:8000->8000/tcp   dynamodb-local
94e4f0eed510   backend-flask:latest           "python3 -m flask ru…"   9 minutes ago   Up 9 minutes   0.0.0.0:4567->4567/tcp, [::]:4567->4567/tcp   aws-bootcamp-cruddur-2023-backend-flask-1


zoltano@ACL-CH0026-06:/mnt/c/Dev/aws-bootcamp-cruddur-2023$ docker exec -it 148e86a5c0be sh
cat node_modules/aws-amplify/package.json | grep '"version"'





