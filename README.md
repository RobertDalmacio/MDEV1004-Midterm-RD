# Facebook Favourites REST API

This is a RESTful API for interacting with a dataset of Facebook posts and user profiles. The API allows users to fetch posts, user profiles, and group posts by location. It is built using Node.js and Express.

---

## Features

- **List All Posts**: Fetches all posts from the dataset.
- **List All Users**: Retrieves all user profiles associated with the posts.
- **Group Posts by Location**: Groups posts based on the users' locations.
- **Find a Post by ID**: Retrieves detailed information about a specific post using its unique ID.
- **Find a User by Name**: Retrieves detailed information about a specific user by their name.

---

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Web framework for building the API.
- **CORS**: Middleware to handle cross-origin requests.
- **JSON**: Dataset stored in a JSON file.

---

## File Structure

- **server.js**: Main server file that sets up the Express app and loads the dataset.
- **api.js**: Defines the API routes and logic for handling requests.
- **favourites.json**: Contains the dataset of Facebook posts and user profiles.
- **index.html**: Front-end interface for interacting with the API.
- **styles.css**: Stylesheet for the front-end interface.

---

## API Reference

### List All Posts
- **Method**: `GET`
- **Endpoint**: `/api/posts`
- **Description**: Fetches all posts from the dataset.

### List All Users
- **Method**: `GET`
- **Endpoint**: `/api/users`
- **Description**: Retrieves all user profiles associated with the posts.

### Group Posts by Location
- **Method**: `GET`
- **Endpoint**: `/api/posts-by-location`
- **Description**: Groups posts based on the users' locations.

### Find a Post by ID
- **Method**: `GET`
- **Endpoint**: `/api/post/:id`
- **Description**: Retrieves detailed information about a specific post using its unique ID.

### Find a User by Name
- **Method**: `GET`
- **Endpoint**: `/api/user/:name`
- **Description**: Retrieves detailed information about a specific user by their name.
