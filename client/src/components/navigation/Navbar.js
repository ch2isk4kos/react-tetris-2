import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faComments,
  faHippo,
  faUserTie,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnOpen = () => {
    setIsOpen(true);
  };

  const handleOnClose = (e) => {
    e.preventDefault();
    setIsOpen(false);
    console.log("event:", e);
    console.log("event:", e.target.viewPortElement);
  };

  return (
    <ul className="Navbar">
      <li id="logo" className="nav-item">
        <p>Logo</p>
      </li>
      {isOpen ? (
        <div className="hamburger-icons">
          <li className="hamburger-icon">
            <FontAwesomeIcon
              className="close-icon"
              icon={faXmark}
              size="2x"
              onClick={handleOnClose}
            />
          </li>
          <li className="hamburger-icon">
            <FontAwesomeIcon icon={faUserTie} size="2x" />
          </li>
          <li className="hamburger-icon">
            <FontAwesomeIcon icon={faComments} size="2x" />
          </li>
          <li className="hamburger-icon">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </li>
          <li className="hamburger-icon">
            <FontAwesomeIcon icon={faHippo} size="2x" />
          </li>
        </div>
      ) : (
        <li
          id="hamburger"
          className="nav-item"
          onClick={(e) => handleOnOpen(e)}
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
        </li>
      )}
    </ul>
  );
};

export default Navbar;
