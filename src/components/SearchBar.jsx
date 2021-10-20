import React from "react";
import "./SearchBar.css";

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEnetered, setWordEntered] = useState("");

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

        return (
          <div>
            <div className="searchInputs">
              <input
                className="search"
                type="text"
                placeholder={placeholder}
                value={wordEnetered}
                onChange={handleFilter}
              />
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
                    // eslint-disable-next-line react/jsx-no-target-blank
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