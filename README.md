# DevOps-Assignment - Dummy Data App
This repo contains files for DevOps Assignment 

# Architecture Diagram
![image](https://github.com/Vasil-Shaikh/DevOps-Assignment/blob/main/Architecture%20Diagram.jpg)

# To test this app
Send a POST request to http://localhost:3000/generate with JSON payload containing the fields and count parameters.

# Example
curl -X POST -H "Content-Type: application/json" -d '{"fields":["first_name","last_name","email","phone"],"count":10}' http://localhost:3000/generate

# Sample Output
![image](https://github.com/Vasil-Shaikh/DevOps-Assignment/blob/main/Sample%20Output.png)
