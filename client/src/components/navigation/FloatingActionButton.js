import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";

const FloatingActionButton = ({ actions }) => {
  const [open, setOpen] = useState(false);
  // Set open state to true if user hover over "ul" element
  const mouseEnter = () => setOpen(true);
  // Set open state to false if user hover out of "ul" element
  const mouseLeave = () => setOpen(false);

  return (
    <ul
      className="fab-container"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {/* <li className="fab-button"> */}
      <li id="hamburger" className="nav-item">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </li>
      {/* </li> */}
      {actions.map((action, index) => (
        <li
          style={{ transitionDelay: `${index * 25}ms` }}
          className={classnames("fab-action", { open })}
          key={action.label}
          onClick={action.onClick}
        >
          {action.icon}
          <span className="tooltip">{action.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default FloatingActionButton;
