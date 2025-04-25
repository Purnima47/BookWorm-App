# Bookworm Backend API

This repository contains the backend API for the Bookworm application. Built using the MERN stack (MongoDB, Express.js, Node.js), it provides the necessary endpoints for managing books and users, including authentication via JWT.

## Output With Frontend

![Bookworm](https://github.com/user-attachments/assets/5d830e23-a9b8-486c-862e-51e2f1cbb37d)

## Table of Contents

*   [Features](#features)
*   [Prerequisites](#prerequisites)
*   [Installation](#installation)
*   [Configuration](#configuration)
*   [Running the API](#running-the-api)
*   [API Endpoints](#api-endpoints)
*   [Database Setup](#database-setup)
*   [Environment Variables](#environment-variables)

## Features

*   **User Authentication:** Secure user registration and login using JWT.
*   **Book Management:** Create, read, update, and delete book records.
*   **User Profile Management:**  Basic user profile information retrieval.

## Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js:** (Recommended version: >=16) [https://nodejs.org/](https://nodejs.org/)
*   **npm** (usually included with Node.js) or **yarn** [https://yarnpkg.com/](https://yarnpkg.com/)
*   **MongoDB:** (Either a local installation or a cloud-based service like MongoDB Atlas) [https://www.mongodb.com/](https://www.mongodb.com/)

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Purnima47/BookWorm-App.git
    cd BookWorm-App/backend
    ```

2.  **Install dependencies:**

    ```bash
    npm install  # or yarn install
    ```

## Configuration

1.  **Create a `.env` file:** Create a file named `.env` in the root directory of the backend. This file will store your environment-specific variables (API keys, database connection string, etc.).

    **Example `.env` file:**

    ```
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/bookworm
    JWT_SECRET=your_super_secret_key
    ```

    **Important:** Never commit your `.env` file to your repository. Ensure that it is added to your `.gitignore` file.  (You should already have `.env` in your `.gitignore` but it's good to be sure).

## Running the API

1.  **Start the development server:**

    ```bash
    npm run dev
    ```

    This command uses `nodemon` to automatically restart the server when changes are detected.  It's configured in the `package.json`.
2.  **The API will be accessible at `http://localhost:5000`.** (or the port specified in your `.env` file).

## API Endpoints

Here's a basic overview of the available endpoints.  You can consult the `routes` directory in the `backend` folder for the complete list.

*   **Authentication (`/api/auth`):**
    *   `POST /api/auth/register`: Registers a new user.
    *   `POST /api/auth/login`: Logs in an existing user and returns a JWT.
*   **Books (`/api/books`):**
    *   `GET /api/books`: Retrieves a list of all books.
    *   `POST /api/books`: Creates a new book.
    *   `DELETE /api/books/:id`: Deletes a specific book by ID.
*   **Users (`/api/users`):**
    *   `GET /api/users/:id`: Retrieves a specific user's profile by ID.  *(Note: this should generally be protected for privacy).*

## Database Setup

1.  **MongoDB Connection:**
    *   Ensure your MongoDB server is running.
    *   The API connects to MongoDB using the `MONGODB_URI` specified in the `.env` file.
    *   Modify the `MONGODB_URI` to connect to your MongoDB instance.

## Environment Variables

The following environment variables are used by the API:

*   `PORT`: The port the server listens on (default: 5000).
*   `MONGODB_URI`: The connection string to your MongoDB database.
*   `JWT_SECRET`: A secret key used for signing JSON Web Tokens (JWT) for authentication. **Keep this secret secure!**

## Contributing

Contributions are welcome! Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`
3.  Make your changes and commit them: `git commit -m "Add your descriptive commit message"`
4.  Push your changes to your fork: `git push origin feature/your-feature-name`
5.  Submit a pull request.
