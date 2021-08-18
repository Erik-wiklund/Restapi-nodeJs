const express = require('express');
const booksRouter = require('./books.router');

// Create server application
const app = express();

// Parse incoming json
app.use(express.json());

// Add resources
app.use(booksRouter);

// Error handlers

// Start the server
app.listen(3000);