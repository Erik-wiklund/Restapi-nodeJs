const express = require("express");
const { createBookInDB, updateBookInDb, deleteBookInDb } = require("./booksDb");
const { getAllBooks, getBookById } = require("./books.controllers");

// Create router object
const router = express.Router();

// Defined endpoints
router.get("/api/books", getAllBooks);
router.get("/api/books/:id", getBookById);
router.post("/api/books", createBookInDB);
router.put("/api/books/:id", updateBookInDb);
router.delete("/api/books/:id", deleteBookInDb);

// Export router object
module.exports = router;