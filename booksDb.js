// In-memory db
let bookIdIndex = 1;
const books = [
  {
    id: 0,
    name: "Test",
    pages: 500,
  },
];

/**
 * Responds with status if posted or not
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function createBook(req, res, next) {
  if (req.body) {
    const book = { ...req.body, id: bookIdIndex++ };
    books.push(book);
    res.status(201).json(book);
  } else res.status(500).json("Missing body");
}

// Modules for export db
module.exports = {
  books,
  createBook,
};
