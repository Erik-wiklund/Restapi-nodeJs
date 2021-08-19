
  const books = [];
  let bookId = 0;
function setId(book) {
  book.id = bookId++;
  books.push(book);
}
// Module for export db
module.exports = books;