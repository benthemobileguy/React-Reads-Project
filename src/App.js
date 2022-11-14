import "./css/App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getAll, update } from "./utils/BooksAPI";
import Home from "./Home/HomePage";
import Search from "./Search/Search";
import Error from "./common/ErrorHandler";
import useHookQuery from "./hook/useHookQuery";

function App() {
  const [booksData, setBooksData] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchBookQuery, setSearchBookQuery] = useHookQuery(searchQuery);

  const [mergedBooks, setMergedBooks] = useState([]);
  const [mapOfIdBooks, setMapOfIdBooks] = useState(new Map());
  // async func to grab the data from the Api
  const getAllBooksData = async () => {
    await getAll().then((res) => {
      setBooksData(res);
      setMapOfIdBooks(createMapOfBooks(res));
    });
  };

  const handleUpdateShelf = async (book, shelf) => {
    await update(book, shelf);
    getAllBooksData();
  };

  const handleSearchQuery = (e) => {
    let inputValue = e.target.value;
    setSearchQuery(inputValue);
  };

  /* TODO: create new map of books to get the new data updated
  with the new shelf you choose 1. map 2. create constant to check 
  if the data that return from the api has the same id if it's get it and start update
*/
  useEffect(() => {
    const combiningBooksShelf = searchBookQuery.map((book) => {
      if (mapOfIdBooks.has(book.id)) {
        return mapOfIdBooks.get(book.id);
      } else {
        return book;
      }
    });
    setMergedBooks(combiningBooksShelf);
  }, [searchBookQuery]);

  const createMapOfBooks = (books) => {
    const map = new Map();
    books.map((book) => map.set(book.id, book));
    return map;
  };

  // TODO: testing the data fetched successfully or n't and search Input
  // console.log(booksData, valueSearch, searchBookQuery, mergedBooks);

  // TODO: fire functions in the useEffect to render in the first time app run and this is the lifecycle
  useEffect(() => {
    getAllBooksData();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/search"
          element={
            <Search
              mergedBooks={mergedBooks}
              searchQuery={searchQuery}
              handleSearchQuery={handleSearchQuery}
              handleUpdateShelf={handleUpdateShelf}
            />
          }
        />
        <Route
          path="/"
          element={
            <Home booksData={booksData} handleUpdateShelf={handleUpdateShelf} />
          }
        />
        {/* error component this will redirect any one who writes wrong url to an error page  */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
