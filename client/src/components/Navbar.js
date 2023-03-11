import hamburger from "../assets/images/icons/hamburger_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <ul className="Navbar">
      <li id="logo" className="nav-item">
        <p>Logo</p>
      </li>
      <div className="nav-links">
        <li id="hamburger" className="nav-item">
          {/* <img src={hamburger} alt="twitter logo" width="50" height="50"></img> */}
          <FontAwesomeIcon icon={faBars} size="2x" />
        </li>
      </div>
    </ul>
  );
};

export default Navbar;
