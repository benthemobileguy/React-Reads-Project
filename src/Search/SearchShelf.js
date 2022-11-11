import React, { useDeferredValue } from "react";
import Book from "../Home/Book";
import { PropTypes } from "prop-types";

const SearchShelf = ({ handleUpdateShelf, searchQuery, mergedBooks }) => {
  const noData = <div className="no_data">nothing found </div>;
  const deferredMergedBooks = useDeferredValue(mergedBooks);
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {deferredMergedBooks && searchQuery
          ? deferredMergedBooks.map((book) => {
              return (
                <Book
                  key={book.id}
                  book={book}
                  handleUpdateShelf={handleUpdateShelf}
                />
              );
            })
          : noData}
      </ol>
    </div>
  );
};

SearchShelf.propTypes = {
  handleUpdateShelf: PropTypes.func.isRequired,
  mergedBooks: PropTypes.array.isRequired,
  searchQuery: PropTypes.string,
};
export default SearchShelf;
