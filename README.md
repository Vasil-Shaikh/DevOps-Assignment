# DevOps-Assignment
This repo contains files for DevOps Assignment

Send a POST request to http://localhost:3000/generate with JSON payload containing the fields and count parameters.
Example
-------
curl -X POST -H "Content-Type: application/json" -d '{"fields":["firstName","lastName","email","phoneNumber"],"count":10}' http://your-ecs-instance-ip/generate
