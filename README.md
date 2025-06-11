# D&D Character Manager

This repository contains a minimal [Spring Boot](https://spring.io/) web application for managing
Dungeons & Dragons characters. It is configured for PostgreSQL, Spring Data JPA and Spring Security.

## Requirements
- Java 21
- Maven 3
- PostgreSQL running locally on `localhost:5432` with user `postgres` and password `postgres` (or update `application.properties`)

## Building and Running
To build and start the Spring Boot application:

```bash
mvn -f spring/pom.xml spring-boot:run
```

The application exposes a secured endpoint at `http://localhost:8080/characters` which requires Basic authentication (`user`/`password`).

## Front-end Angular App

The `front-end` directory contains a simple Angular application. You will need Node.js 20 or newer and npm installed.
Start the development server with:

```bash
cd front-end
npm start
```
