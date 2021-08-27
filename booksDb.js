const { v1: uuidv1 } = require("uuid");

// In-memory db
const books = [
  {
    name: "Testar",
    pages: 500,
    id: 0,
  },
];

/**
 * Responds with status if posted or not
 * @param {Request} req
 * @param {Response} res
 */
function createBookInDB(req, res) {
  if (!req.body.name || !req.body.pages) {
    console.log(req.body);
    res.status(500).json({Message: "Please type name and number of pages in the correct format"});
  } else {
    const book = { ...req.body, id: uuidv1() };
    books.push(book);
    res.status(201).json({Message: "Book successfully added"});
    console.log(book);
  }
}

/**
 * Responds with status if updated or book not found
 * @param {Request} req
 * @param {Response} res
 */
function updateBookInDb(req, res) {
  const { id } = req.params;
  const book = books.find((book) => book.id == id);

  if (!book) {
    res.status(404).json(`Book with ID ${id} not found`);
  }
  else if (!req.body.name || !req.body.pages) {
    res.status(500).json({Message: "Please type name and number of pages in the correct format"});
  }
  else {
    let updated = {
      id: book.id,
      name: req.body.name,
      pages: req.body.pages,
    };
    let targetIndex = books.indexOf(book);

    books.splice(targetIndex, 1, updated);
    res.status(200).json(`Book with ID ${id} updated`);
  }
}

/**
 * Responds with status if deleted
 * @param {Request} req
 * @param {Response} res
 */

function deleteBookInDb(req, res) {
  const { id } = req.params;
  const book = books.find((book) => book.id == id);

  if (!book) {
    res.status(404).json(`Book with ID ${id} not found`);
  } else {
    let targetIndex = books.indexOf(book);
    books.splice(targetIndex, 1);
    res.status(200).json(`Book with ID ${id} deleted`);
  }
}

// Modules for export db
module.exports = {
  books,
  createBookInDB,
  updateBookInDb,
  deleteBookInDb,
};
