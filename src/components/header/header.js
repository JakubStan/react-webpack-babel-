import * as React from "react";
import logo from "../../assets/logo.png";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="header-menu">
            <input class="menu-btn" type="checkbox" id="menu-btn" />

            <label class="menu-icon" for="menu-btn">
              <span class="navicon"></span>
            </label>

            <ul class="menu">
              <div className="nav nav-left">
                <li>
                  <a className="line" to="">
                    O NAS
                  </a>
                </li>

                <li>
                  <a className="line" to="">
                    OFERTA
                  </a>
                </li>
              </div>

              <li>
                <a to="/">
                  <img className="logo" src={logo} alt="Naprawy Awarie" />
                </a>
              </li>

              <div className="nav nav-right">
                <li>
                  <a className="line" to="">
                    REALIZACJE
                  </a>
                </li>
                <li>
                  <a to="">KONTAKT</a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
