# csbc1030-final-project

Express.js Application with Mysql database

# ExpressJS Project

## Goal

The goal of this project is to build a scalable ExpressJS application that allows users to post and comment on posts. This README provides instructions for setting up and running the project.

## Instructions

1. **Create a New Branch**

   - Create a new branch for this project, branching from the main branch.
   - In this case its already created - feat/development

2. **REST API with MySQL Database**

   - Develop a REST API ExpressJS application connected to a MySQL database.

3. **User Authentication**

   - Unauthenticated Endpoints:
     - `/users`: Fetch all users.
     - `/login`: Return an authentication token for the user. (Passwords should NOT be stored in plaintext).

4. **Authenticated Endpoints**

   - All authenticated endpoints should process data relevant to the sender's user id.

5. **Fetching Data**

   - `GET /posts`: Fetch all posts by a sender.
   - `GET /posts/:id`: Fetch a single post made by a sender.
   - `GET /posts/:id/comments`: Fetch all comments about a post.

6. **Adding Data**

   - `POST /posts`: Create a new post.
   - `POST /posts/:id/comments`: Add a new comment to a post.

7. **Updating Data**

   - `PATCH /posts/:id`: Update a post.
   - `PATCH /posts/:id/comments`: Update a comment.

8. **Deleting Data**
   - `DELETE /posts/:id/comments`: Delete a comment.

## Getting Started

Follow these steps to set up and run the project:

```bash
# Clone the repository
git clone https://github.com/ashishfatnani/csbc1030-final-project.git

# Change into the project directory
cd csbc1030-final-project

git checkout feat/development

# Install dependencies
npm install

# Set up the database
Add your Mysql databases creds in config/sequelize.js file

# Run the application
 1. Nodemon -> npm run start or
 2. node server.js

# Run test cases
 1. Unit test -> npm run unit-test
 2. End-to-End -> npm run end-test


# Run from Database
CREATE DATABASE csbc1030finalproject;
USE csbc1030finalproject;

# Create Tables
CREATE TABLE Users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE Posts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userId INT,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Comments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  postId INT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


# Contact Me
 feel free to contact at ashishfatnani3@gmail.com for any doubts or issues

```
