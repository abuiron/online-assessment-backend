# Online Assessment Backend

This repository contains the backend code for the Online Assessment System, which is built using Node.js, Express, and MongoDB. The backend provides APIs for user authentication, exam management, and result tracking.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Frontend Repository](#frontend-repository)
- [Backend Live Link](#backend-live-link)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/abuiron/online-assessment-backend.git
   cd online-assessment-backend

2. **Install Dependencies

   Make sure you have Node.js installed on your machine. Then, install the required dependencies by running:

   ```bash
   npm install

## The project uses the following main packages:

   - bcryptjs
   - cors
   - dotenv
   - express
   - jsonwebtoken
   - mongoose
   - nodemon

## Environment Variables

   To run this project, you will need to create a .env file in the root directory and add the following environment variables:

   
   <br>MONGO_URL = your-mongo-db-url
   JWT_SECRET = your-jwt-secret
   PORT = your-port<br>

   Make sure to replace your-mongo-db-url, your-jwt-secret, and your-port with the appropriate values for your project.

## Running the Application
To start the development server with nodemon, run the following command:

   ```bash
   npm run dev

  This will run the backend on the port specified in your .env file.

## API Endpoints
The backend provides various API endpoints to manage users, exams, and results. These endpoints include:

  - Authentication: Register, login, and token validation
  - Exam Management: Create, update, delete, and retrieve exams
  - Results: Submit and retrieve exam results
For detailed API documentation, refer to the codebase or the API testing tool used during development.

## Technologies Used

  - Node.js: Server-side JavaScript runtime
  - Express: Web framework for building APIs
  - MongoDB: NoSQL database for data storage
  - Mongoose: ODM (Object Data Modeling) for MongoDB
  - JWT: JSON Web Tokens for authentication
  - bcryptjs: Library for password hashing

## Frontend Repository
You can find the frontend of this project here: [Frontend Repository](https://github.com/abuiron/online-assessment-frontend)

## Backend Live Link
The live backend of this project can be accessed at: [Backend Live Link](gh)