import gitHub from "../assets/images/icons/github_icon.png";
import hamburger from "../assets/images/icons/hamburger_icon.png";
import medium from "../assets/images/icons/medium_icon.png";
import twitter from "../assets/images/icons/twitter_icon.png";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <ul className="Navbar">
      <li id="logo" className="nav-item">
        <p>Logo</p>
      </li>
      <div className="nav-links">
        <li className="nav-item">
          <a
            href="https://github.com/ch2isk4kos"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gitHub} alt="github logo" width="50" height="50"></img>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://chriskakos.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={medium} alt="medium logo" width="50" height="50"></img>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://twitter.com/ch2isk4kos"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter logo" width="50" height="50"></img>
          </a>
        </li>
        <li id="hamburger" className="nav-item">
          <img src={hamburger} alt="twitter logo" width="50" height="50"></img>
        </li>
      </div>
    </ul>
  );
};

export default Navbar;
