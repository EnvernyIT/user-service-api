# User-Service-API

This project is an API that has been dockerized on a very low-level for beginner-educative purposes.

### API-Javascript
This is a low-level API built with node.js & express.js

## What is Docker
Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.

## Dockerize 
Within the project a .dockerfile has been made to turn this project to an image file. This so I can begin understand the use of docker.
This image runs on a base-image of node, that was pulled from Docker Hub.
https://hub.docker.com/_/node

## .dockerfile
This file consists of commands that docker will use, so that it knows how to run and contain your application.

#### Installation Docker Engine
https://docs.docker.com/engine/install/
#### Virtual Machine - UBUNTU