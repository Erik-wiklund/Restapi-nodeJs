const express = require("express");
const { getBooks, getOneBook, CreatedNewBook } = require("./books.controllers");

// Create router object
const router = express.Router();

// Defined endpoints
router.get("/api/books", getBooks);
router.get("/api/books/:id", getOneBook);
router.post("/api/books", CreatedNewBook);


// Export router object
module.exports = router;