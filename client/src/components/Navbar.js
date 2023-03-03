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
            <img
              src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png"
              alt="github logo"
              width="50"
              height="50"
            ></img>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://chriskakos.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn3.iconfinder.com/data/icons/social-media-2285/1151/Medium_logo_-_black-512.png"
              alt="medium logo"
              width="50"
              height="50"
            ></img>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://twitter.com/ch2isk4kos"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn3.iconfinder.com/data/icons/picons-social/57/03-twitter-512.png"
              alt="twitter logo"
              width="50"
              height="50"
            ></img>
          </a>
        </li>
      </div>
    </ul>
  );
};

export default Navbar;
