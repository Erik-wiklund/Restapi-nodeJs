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
 */
function createBookInDB(req, res) {
  if (req.body) {
    const book = { ...req.body, id: bookIdIndex++ };
    books.push(book);
    res.status(201).json(book);
  } else res.status(500).json("Missing body");
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
 } else {
   let updated = {
         id: book.id,
         name: req.body.name,
         pages: req.body.pages,
     };
     let targetIndex = books.indexOf(book);

    books.splice(targetIndex, 1, updated);
    res.status(200).json(`Book with ID ${id} updated`);   
   };
};

/**
 * Responds with status if deleted
 * @param {Request} req
 * @param {Response} res
 */

 function deleteBookInDb(req,res) {
  const { id } = req.params;
  const book = books.find((book) => book.id == id);

  if (!book) {
    res.status(404).json(`Book with ID ${id} not found`);
  } else {
    let targetIndex = books.indexOf(book);
    books.splice(targetIndex,1);
    res.status(200).json(`Book with ID ${id} deleted`);
  }  
}

// Modules for export db
module.exports = {
  books,
  createBookInDB,
  updateBookInDb,
  deleteBookInDb
};
