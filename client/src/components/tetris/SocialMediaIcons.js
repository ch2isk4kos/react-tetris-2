import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/SocialMediaIcons.css";

const SocialMediaIcons = () => {
  const twitter = <FontAwesomeIcon icon={faTwitter} />;
  const gitHub = <FontAwesomeIcon icon={faGithub} />;
  const medium = <FontAwesomeIcon icon={faMedium} />;

  return (
    <div className="SocialMediaIcons">
      <a
        className="icon"
        href="https://github.com/ch2isk4kos"
        target="_blank"
        rel="noreferrer"
      >
        {gitHub}
      </a>
      <a
        className="icon"
        href="https://chriskakos.medium.com/"
        target="_blank"
        rel="noreferrer"
      >
        {medium}
      </a>
      <a
        className="icon"
        href="https://twitter.com/ch2isk4kos"
        target="_blank"
        rel="noreferrer"
      >
        {twitter}
      </a>
    </div>
  );
};

export default SocialMediaIcons;
