import logo2 from "../images/logo.png";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <small className="footer--small">
        Digital Business Cards &copy;2021{" "}
      </small>
      <Link to="/">
        <a className="footer--logo" title="Business cards" target="_blank">
          <small className="footer--logo__name">
            Created by Jana D. Titarchuk
          </small>
          <img className="footer--logo__icon" src={logo} alt="Logo" />
        </a>
      </Link>
    </footer>
  );
}

export default Footer;
