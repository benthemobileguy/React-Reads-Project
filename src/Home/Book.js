import React from "react";
import { PropTypes } from "prop-types";
import BookShelfSelector from "./BookShelfSelector";

const Book = ({ book, handleUpdateShelf }) => {
  // initialize to empty String if Undefined
  const str = book.authors || "";
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                book.imageLinks && `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <BookShelfSelector
              handleUpdateShelf={handleUpdateShelf}
              book={book}
            />
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{str[0]}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleUpdateShelf: PropTypes.func.isRequired,
};
export default Book;
