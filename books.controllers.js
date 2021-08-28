const { Request, Response } = require("express");
const { books } = require("./booksDb");

/**
 * Responds with all the books or no books
 * @param {Request} req
 * @param {Response} res
 */
function getAllBooks(req,res) {
  if (books == 0) {
    res.status(404).json(`No books found`);
  } else {
    res.json(books);
  }
}

/**
 * Responds with the requested book or not found
 * @param {Request} req
 * @param {Response} res
 */
function getBookById(req, res) {
  const { id } = req.params;
  const book = books.find((book) => book.id == id);
  if (!book) {
    res.status(404).json(`Book with ID ${id} not found`);
  } else {
    res.status(200).json(book);
  }
}

// Export modules
module.exports = {
  getBookById,
  getAllBooks,
};
