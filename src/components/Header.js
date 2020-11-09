import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <h1 className="header__title">Imad Machi</h1>
    <nav className="header__nav">
      <NavLink className="header__nav__navLink" to="/" exact={true}>
        About
      </NavLink>
      <NavLink className="header__nav__navLink" to="/portfolio">
        Portfolio
      </NavLink>
      <NavLink className="header__nav__navLink" to="/contact">
        contact
      </NavLink>
    </nav>
  </header>
);
console.log(NavLink);
export default Header;
