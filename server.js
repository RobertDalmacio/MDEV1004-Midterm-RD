/*
  File: server.js
  Student: Robert Dalmacio
  Student ID: 200606074
  Date: 2025-10-19

  Sets up the Express server and API routes.
*/

const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware setup for handling CORS, JSON requests, and serving static files
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Load data from the JSON file
const data = JSON.parse(fs.readFileSync('./data/favourites.json'));

// Setup API routes
require('./routes/api')(app, data);

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
