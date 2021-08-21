import giftlogo from "../images/giftlogo.gif";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-cards">
      <Link to="/">
        <div>
          <img
            className="header-cards__logo"
            src={giftlogo}
            alt="profile-cards"
          />
        </div>
      </Link>
      {/* <h1 className="header-cards__title">Create your business card</h1> */}
    </header>
  );
}

export default Header;
