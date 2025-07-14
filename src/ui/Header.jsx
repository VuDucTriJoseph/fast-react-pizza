import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Pizza order React.co</Link>
      <SearchOrder />
      <p>Joseph Vu</p>
    </header>
  );
}

export default Header;
