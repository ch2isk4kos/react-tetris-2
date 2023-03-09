import React from "react";
import gitHub from "../../assets/images/icons/github_icon.png";
import medium from "../../assets/images/icons/medium_icon.png";
import twitter from "../../assets/images/icons/twitter_icon.png";
import "../styles/SocialMediaIcons.css";

const SocialMediaIcons = () => {
  return (
    <ul className="SocialMediaIcons">
      <li className="icon">
        <a
          href="https://github.com/ch2isk4kos"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="icon-img"
            src={gitHub}
            alt="github logo"
            width="50"
            height="50"
          ></img>
        </a>
      </li>
      <li className="icon">
        <a
          href="https://chriskakos.medium.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="icon-img"
            src={medium}
            alt="medium logo"
            width="50"
            height="50"
          ></img>
        </a>
      </li>
      <li className="icon">
        <a
          href="https://twitter.com/ch2isk4kos"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="icon-img"
            src={twitter}
            alt="twitter logo"
            width="50"
            height="50"
          ></img>
        </a>
      </li>
    </ul>
  );
};

export default SocialMediaIcons;
