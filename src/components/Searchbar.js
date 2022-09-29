import { useState } from "react";
import { getWorks } from "../api";
import { SearchIcon } from "./Icons";
import { ExitIcon } from "./Icons";
import styled from "styled-components";

const Formbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  background-color: #ffc3f4;
  width: 100vw;
  height: 1.5rem;
  margin: auto;
  padding-top: 0px;
  padding-bottom: 0px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
`;

const Inputwrapper = styled.input`
  display: flex;
  background-color: #ffdff9;
  border: 0;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  font-size: 1rem;
  padding: 12px;
  color: #fe4ddd;
  width: 20rem;
`;

const Iconbox = styled.div`
  height: 24px;
  width: 32px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-items: center;
  font-size: 0.85rem;
`;

const Outputresult = styled.div`
  margin-top: 24px;
  width: 40rem;
  min-height: 12.5rem;
  background-color: #ffe0f9;
  overflow: hidden;
  overflow-y: auto;
  border-radius: 3px;
  position: absolute;
  font-size: 0.85rem;
`;

const Item = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: left;
  color: #fe4ddd;
  padding: 0.75rem;
  background-color: #ffe0f9;
  font-size: 0.85rem;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.85rem;
`;

const Link = styled.a`
  display: flex;
  justify-items: center;
  align-items: center;
  padding-right: 1rem;
  font-size: 0.85rem;
  min-width: 10rem;
  text-decoration: none;

  &:link {
    color: #fe4ddd;
    text-decoration: none;
  }

  &:visited {
    color: #fe4ddd;
    text-decoration: none;
  }
  &:hover {
    color: #00ab65;
    text-decoration: none;
  }
  &:active {
    color: #fe4ddd;
    text-decoration: none;
  }
`;

const Webtitle = styled.p`
  font-size: 0.95rem;
`;

const Authorname = styled.p`
  font-size: 0.75rem;
`;

function Searchbar({ placeholder }) {
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
    <Formbar>
      <Inputwrapper
        type="text"
        placeholder={placeholder}
        value={wordEntered}
        onChange={handleFilter}
      ></Inputwrapper>
      <Iconbox>
        {filteredData.length === 0 ? (
          <SearchIcon />
        ) : (
          <ExitIcon onClick={clearInput} />
        )}
      </Iconbox>
      {filteredData.length != 0 && (
        <Outputresult>
          {filteredData.map((value) => {
            return (
              <Item>
                <Text>
                  <Webtitle>{value.titleweb}</Webtitle>
                  <Authorname>by {value.authorweb}</Authorname>
                </Text>
                {
                  <Link
                    href={`https://www.amazon.co.uk/s?k=${
                      value.titles.isbn[0]?.$ || value.titles.isbn?.$
                    }`}
                    target="_blank"
                  >
                    View on Amazon
                  </Link>
                }
              </Item>
            );
          })}
        </Outputresult>
      )}
    </Formbar>
  );
}

export default Searchbar;
