import Searchbar from "./Searchbar";
import styled from "styled-components";

const Homebar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #ffc3f4;
  width: 100vw;
  height: 4rem;
  padding: 1rem;
`;

function Navbar(props) {
  return (
    <Homebar>
      <Searchbar placeholder="Title, author or keyword" />
    </Homebar>
  );
}

export default Navbar;
