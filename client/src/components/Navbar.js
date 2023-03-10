import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <ul className="Navbar">
      <li id="logo" className="nav-item">
        <p>Logo</p>
      </li>
      <li id="hamburger" className="nav-item">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </li>
    </ul>
  );
};

export default Navbar;
