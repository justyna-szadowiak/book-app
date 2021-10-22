import React, { useState } from "react";
import "./SearchBar.css";
import request from 'superagent';

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEnetered, setWordEntered] = useState("");

    searchBook = (event) => {
      event.preventDefault();
        request
          .get("https://www.googleapis.com/books/v1/volumes")
          .query({ q: this.searchWord })
          .then((data) => {
              console.log(data);
          });
    };

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
          return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
          } else {
            setFilteredData(newFilter);
          }
        };

        const clearInput = () => {
          setFilteredData([]);
        };

        return (
          <div>
            <div className="searchInputs">
              <form onSubmit={props.searchBook} action="">
                <input
                  className="search"
                  type="text"
                  placeholder={placeholder}
                  value={wordEnetered}
                  onChange={handleFilter}
                />
              </form>
              {filteredData.length === 0 ? (
                <i class="search icon" id="iIcon"></i>
              ) : (
                <i class="close link icon" id="clearButton" onClick={clearInput}></i>
              )}
            </div>
            {filteredData.length !== 0 && (
              <div className="dataResult">
                {filteredData.slice(0, 5).map((value, key) => {
                  return (
                    <a className="dataItem" href={value.link} target="_blank">
                      <p>{value.title}</p>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        );
};

export default SearchBar;