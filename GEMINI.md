# Gemini Project Information

This file provides context for the Gemini AI assistant.

## Project Overview

*   **Project Name**: memories-api
*   **Description**: A simple REST API for creating, reading, and deleting notes.
*   **Technology Stack**:
    *   **Backend**: Node.js, Express.js
    *   **Database**: MongoDB with Mongoose
    *   **Dependencies**: `express`, `mongoose`, `cors`, `body-parser`

## Key Files

*   `app.js`: The main Express application setup file.
*   `bin/www`: The script to launch the application.
*   `routes/noteController.js`: Defines the API routes and logic for handling note operations.
*   `database/schema/note_item.js`: The Mongoose schema for a note.
*   `database/connect_to_mongo.js`: Handles the connection to the MongoDB database.
*   `package.json`: Lists project dependencies and scripts.

## Development Workflow

*   **Running the app**: Use `npm start`.
*   **Dependencies**: Managed with `npm`. Install new dependencies with `npm install <package>`.
*   **Style**: Please follow the existing coding style (e.g., `var` for variable declarations, callback-based async operations).
