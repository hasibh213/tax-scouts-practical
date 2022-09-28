import { useState } from "react";
import "./Searchbar.css";
import { getWorks } from "../api";
import { SearchIcon } from "./Searchbar.style";
import { ExitIcon } from "./Searchbar.style";
import styled from "styled-components";

function Searchbar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = async (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const results = await getWorks(searchWord);

    setFilteredData(results);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs"></div>
      <input
        type="text"
        placeholder={placeholder}
        value={wordEntered}
        onChange={handleFilter}
      ></input>
      <div className="searchIcon">
        {filteredData.length === 0 ? (
          <SearchIcon />
        ) : (
          <ExitIcon id="clearBtn" onClick={clearInput} />
        )}
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <div>
                <p>{value.titleweb}</p>
                <p>by {value.authorweb}</p>
                {
                  <a
                    href={`https://www.amazon.co.uk/s?k=${
                      value.titles.isbn[0]?.$ || value.titles.isbn?.$
                    }`}
                    target="_blank"
                  >
                    Buy now
                  </a>
                }
                {/* <p>{value.imageLink}</p> */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Searchbar;
