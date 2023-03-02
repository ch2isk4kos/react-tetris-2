import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <ul className="Navbar">
      <li id="logo" className="nav-item">
        <p>Logo</p>
      </li>
      <li className="nav-item">
        <a href="#">Something</a>
      </li>
      <li className="nav-item">
        <a href="#">About</a>
      </li>
      <li className="nav-item">
        <a
          href="https://twitter.com/ch2isk4kos"
          target="_blank"
          rel="noreferrer"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
