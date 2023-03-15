import { useState } from "react";
import FloatingActionButton from "./FloatingActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faComments,
  faEnvelope,
  faHippo,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/Navbar.css";

const Navbar = () => {
  const actions = [
    {
      label: "About",
      icon: <FontAwesomeIcon icon={faUserTie} size="2x" />,
      onClick: console.log,
    },
    {
      label: "Contact",
      icon: <FontAwesomeIcon icon={faComments} size="2x" />,
      onClick: console.log,
    },
    {
      label: "Me",
      icon: <FontAwesomeIcon icon={faHippo} size="2x" />,
      onClick: console.log,
    },
    {
      label: "Connect",
      icon: <FontAwesomeIcon icon={faLinkedin} size="2x" />,
      onClick: console.log,
    },
  ];
  return (
    <ul className="Navbar">
      <li id="logo" className="nav-item">
        <p>Logo</p>
      </li>
      <li id="hamburger" className="nav-item">
        {/* <FontAwesomeIcon icon={faBars} size="2x" /> */}
        <FloatingActionButton actions={actions} />
      </li>
    </ul>
  );
};

export default Navbar;
