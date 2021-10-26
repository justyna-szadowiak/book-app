import React, { useState, useEffect } from "react";
import { api } from "./api";
import "./SearchBar.css";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);

  const search = async (event) => {
    const books = await api.searchBook(event.target.value);
    setFilteredData(books.items);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("Run after 5 secound");
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  const clearInput = () => {
    setFilteredData([]);
  };

  return (
    <div>
      <div className="searchInputs">
        <form>
          <input
            className="search"
            type="text"
            placeholder={placeholder}
            onChange={search}
          />
        </form>
        {filteredData.length === 0 ? (
          <i className="search icon" id="iIcon"></i>
        ) : (
          <i
            className="close link icon"
            id="clearButton"
            onClick={clearInput}
          ></i>
        )}
      </div>

      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <div className="bookPlaceholder">
                <h4>{value.volumeInfo.title}</h4>
                <h5>{value.volumeInfo.authors}</h5>
                <img
                  src={value.volumeInfo.imageLinks.thumbnail}
                  alt="images"
                ></img>
                <p>{value.volumeInfo.description}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
