import React, { useState, useEffect } from "react";
import { api } from "./api";
import "./SearchBar.css";
import "./App.css";
import Book from "./Book";

function SearchBar({ placeholder }) {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");

  const search = async (event) => {
    const currentSearchPhrase = event.target.value;
    setSearchPhrase(currentSearchPhrase);
    if (currentSearchPhrase) {
      const books = await api.searchBook(currentSearchPhrase);
      setFilteredBooks(books.items);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("Run after 5 secound");
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  const clearInput = () => {
    setFilteredBooks([]);
    setSearchPhrase("");
  };

  const bookList = filteredBooks.slice(0, 12).map((book) => {
    if (filteredBooks.length !== 0) {
      return (
        <Book
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          thumbnailUrl={book.volumeInfo.imageLinks?.thumbnail}
          description={book.volumeInfo.description}
        />
      );
    }
  });

  return (
    <div>
      <div>
        <form className="searchInputs">
          <input
            placeholder={placeholder}
            className="search"
            type="text"
            value={searchPhrase}
            onChange={search}
          />
          {filteredBooks.length === 0 ? (
            <i className="search icon" id="iIcon"></i>
          ) : (
            <i
              className="close link icon"
              id="clearButton"
              onClick={clearInput}
            ></i>
          )}
        </form>
      </div>
      {bookList}
    </div>
  );
}

export default SearchBar;
