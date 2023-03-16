import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <ul className="Navbar">
      <li id="logo">
        <p>Logo</p>
      </li>
      <li id="hamburger">
        <FontAwesomeIcon icon={faThumbsUp} size="2x" />
      </li>
    </ul>
  );
};

export default Navbar;
