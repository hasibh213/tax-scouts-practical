import Navbar from "./components/Navbar";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0%;
  padding: 0px;
  background-color: #c3ffce;
`;

function App() {
  return (
    <Body>
      <Navbar />
    </Body>
  );
}

export default App;
