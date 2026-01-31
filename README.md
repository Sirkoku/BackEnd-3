# Adoptme API
API REST para gestión de usuarios, mascotas y adopciones.

## Tecnologías
- Node.js
- Express
- MongoDB + Mongoose
- Swagger (OpenAPI)
- Docker
- Mocha / Chai / Supertest

## Documentación API
La documentación de la API fue realizada con Swagger.

Una vez levantado el proyecto, se puede acceder desde:
http://localhost:8080/api/docs

## Tests
Se desarrollaron tests funcionales para todos los endpoints del router de adopciones.

Los tests fueron implementados utilizando:
- Mocha
- Chai
- Supertest
Para ejecutar los tests:

npm test

## Docker
La imagen del proyecto se encuentra disponible en DockerHub:
https://hub.docker.com/r/crivellifausto/adoptme-api

Para ejecutar el proyecto utilizando Docker:

docker run -p 3000:8080 crivellifausto/adoptme-api

## Uso
Una vez ejecutado el contenedor, la API estará disponible en:

http://localhost:3000



