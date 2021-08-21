import React from "react";
// import "./stylesheets/App.scss"; No debe tener el importa llega desde index.js a todo el componente
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import giftlogo from "./images/giftlogo.gif";

class Landing extends React.Component {
  render() {
    return (
      <div className="page">
        <main class="main-container">
          <img
            class="main-container__logo"
            src={giftlogo}
            alt="profile-cards"
          />
          <h1 class="main-container__title">Digital business cards</h1>
          <p class="main-container__text">
            Create a customizable business card for any occasion
            <span> and share it with your network</span>
          </p>
          <nav class="nav-container">
            <ul class="nav-container__list">
              <li class="nav-container__list--item">
                <i class="far fa-object-group nav-container__list--icon"></i>
                <span class="nav-container__list--text">Design</span>
              </li>
              <li class="nav-container__list--item">
                <i class="far fa-keyboard nav-container__list--icon"></i>
                <span class="nav-container__list--text">Complete</span>
              </li>
              <li class="nav-container__list--item">
                <i class="fas fa-share-alt nav-container__list--icon"></i>
                <span class="nav-container__list--text">Share</span>
              </li>
            </ul>
          </nav>
          <Link to="/card">
            <button type="button" className="main-container__link">
              start
            </button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Landing;
