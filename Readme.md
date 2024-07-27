# Inventory Management
App live at http://makertracker.s3-website.eu-north-1.amazonaws.com/

## Tech Stack
- Backend developed using Java with Spring Boot, deployed within an EC2 instance on AWS.
- Relational database created with Postgresql, production utilises AWS' Remote Database Service (RDS).
- Frontend developed using JavaScript with React, deployed in an S3 bucket, also on AWS.
  

## MVP
To create a management app for a fabrication company/etsy shop/ etc, giving users control over their parts and orders.
  - Individual parts which will be assignable to specific orders.
  - Parts will be assignable to multiple orders so as to be reusable.
  - Orders which will display parts and quantities as well as status.
  - Progress tracking of parts and orders.
  - Full application deployed on AWS.

## Local Set Up
- clone the repository onto local machine

- In a terminal create database with name 'maker_tracker'

- To run the backend:
  - Open the project 'inventoryService' in IDE such as IntelliJ
  - Run CoursebookingsApplication.java (this will run the DataLoader component to populate the database)

- To run the frontend:
  - cd into folder 'inventoryFrontEnd' in the terminal
  - run command 'npm run dev'
