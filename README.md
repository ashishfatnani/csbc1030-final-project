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
 1. Nodemon -> npm run start
 2. node server.js

# Contact Me
 feel free to contact at ashishfatnani3@gmail.com for any doubts or issues

```
