const express = require("express");
const { getBooks, getOneBook, CreatedNewBook, updateBook, deleteBook } = require("./books.controllers");

// Create router object
const router = express.Router();

// Defined endpoints
router.get("/api/books", getBooks);
router.get("/api/books/:id", getOneBook);
router.post("/api/books", CreatedNewBook);
router.put("/api/books/:id", updateBook);
router.delete("/api/books/:id", deleteBook);


// Export router object
module.exports = router;