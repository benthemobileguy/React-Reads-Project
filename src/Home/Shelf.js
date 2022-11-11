import React from "react";
import Book from "./Book";
import { PropTypes } from "prop-types";

const Shelf = ({ titleName, booksData, shelf, handleUpdateShelf }) => {
  const bookShelf = booksData.filter((book) => book.shelf === shelf);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{titleName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookShelf.map((book) => (
            <div key={book.id}>
              <Book book={book} handleUpdateShelf={handleUpdateShelf} />
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  titleName: PropTypes.string.isRequired,
  booksData: PropTypes.array.isRequired,
  handleUpdateShelf: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired,
};
export default Shelf;
