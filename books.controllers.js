const { Request, Response, NextFunction } = require("express");

/**
 * Responds with all the books from db
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

function getBooks(req, res, next) {
  res.json(books);
}

/**
 * Responds with the requested book or nothing if not found
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} nex
 */

function getOneBook(req, res, next) {
  const { id } = req.params;

  const book = books.find((book) => book.id == id);

  if (!book) {
    res.status(404).json(`Book with ${id} not found`);
  } else {
    res.status(200).json(book);
  }
};

// Export modules
module.exports = {
    getOneBook,
    getBooks
};