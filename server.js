const express = require("express");
const booksRouter = require("./books.router");

// Create server application
const app = express();

// Parse incoming json
app.use(express.json());

// Add resources
app.use(booksRouter);

// 404 error handler
app.use((res) => res.status(404).json("Resource not found"));

// add error handler
app.use((err, res) => {
  console.trace(err);
  res.status(500).json("something went wrong..");
});

// Start the server
app.listen(3000);
