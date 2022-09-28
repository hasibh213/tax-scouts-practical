import Searchbar from "./Searchbar";
import BookData from "../mock-data.json";

function Navbar(props) {
  return (
    <div>
      <div>
        <Searchbar
          placeholder="Title, author, keyword or ISBN"
          data={BookData}
        />
      </div>
    </div>
  );
}

export default Navbar;
