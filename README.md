# Memories API

A simple Node.js and Express-based API for managing notes.

## Description

This API provides basic CRUD (Create, Read, Delete) functionality for notes. It uses a MongoDB database to store the note data.

## Installation

1.  Clone the repository.
2.  Install the dependencies:
    ```bash
    npm install
    ```

## Running the Application

To start the server, run the following command:

```bash
npm start
```

The API will be available at `http://localhost:3000` (assuming the default port).

## API Endpoints

All endpoints are prefixed with `/notes`.

*   **GET /**: Retrieve a random sample of notes.
    *   **Query Parameters**: `frame_size` (integer) - The maximum number of notes to return.
    *   **Response**: A JSON array of note objects.

*   **POST /**: Create a new note.
    *   **Request Body**: A JSON object with a `content` field.
      ```json
      {
        "content": "This is a new note."
      }
      ```

*   **DELETE /:id**: Delete a note by its ID.
    *   **URL Parameters**: `id` (string) - The ID of the note to delete.