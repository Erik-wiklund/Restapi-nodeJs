const { Request, Response, NextFunction } = require("express");
const books = require("./booksDb");

// const bookIdIndex = 1;
// const books = [
//   {
//     id: 0,
//     name: "palettblad",
//     antalsidor: 5,
//   },
// ];

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
 * @param {NextFunction} next
 */

function getOneBook(req, res, next) {
  const { id } = req.params;

  const book = books.find((book) => book.id == id);

  if (!book) {
    res.status(404).json(`Book with ${id} not found`);
  } else {
    res.status(200).json(book);
  }
}

/**
 * Responds with status if posted or not
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

function CreatedNewBook(req, res, next) {
  if (req.body) {
    books.push(req.body);
    res.status(201).json(req.body);
  }
  else res.status(500).json("Missing body");
}

/**
 * Responds with status if posted or not
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

function updateBook(req, res, next) {
   const { id } = req.params;
   const book = books.find((book) => book.id == id);

   if (!book) {
    res.status(404).json(`Book with ${id} not found`);
  } else {
    let updated = {
          id: book.id,
          name: req.body.name,
          pages: req.body.pages,
      };
      let targetIndex = books.indexOf(book);

     books.splice(targetIndex, 1, updated);
    };
    res.status(200).json(`Book with ID ${id} updated`);
  

  
  
      
};

/**
 * Responds with status if deleted
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

function deleteBook(req,res,next) {
  const { id } = req.params;
  const book = books.find((book) => book.id == id);

  if (!book) {
    res.status(404).json(`Book with ${id} not found`);
  } else {
    let targetIndex = books.indexOf(book);
    books.splice(targetIndex,1);
    res.status(200).json(`Book with ID ${id} deleted`);
  }

  
}

// Export modules
module.exports = {
  getOneBook,
  getBooks,
  CreatedNewBook,
  updateBook,
  deleteBook
};
