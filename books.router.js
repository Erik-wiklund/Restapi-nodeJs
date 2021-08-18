const express = require("express");
const { getBooks, getOneBook } = require("./books.controllers");

// Create router object
const router = express.Router();

// Defined endpoints
router.get("/api/books", getBooks);
router.get("/api/books/:id", getOneBook);


// Export router object
module.exports = router;