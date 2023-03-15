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
      <li id="logo">
        <p>Logo</p>
      </li>
      <li id="hamburger">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </li>
      <div className="icons">
        <li className="hamburger-icon">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faUserTie} size="2x" />
          </a>
        </li>
        <li className="hamburger-icon">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faComments} size="2x" />
          </a>
        </li>
        <li className="hamburger-icon">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>
        <li className="hamburger-icon">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faHippo} size="2x" />
          </a>
        </li>
      </div>
    </ul>
  );
};

export default Navbar;
