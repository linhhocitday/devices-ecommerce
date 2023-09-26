import React from "react";
import Navigation from "./Navigation";
import Account from "./Account";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex-block header uppercase">
          <div className="header-logo">
            <NavLink to={"/"}>
              <span className="color-dark-purple">Significant</span>.logo
            </NavLink>
          </div>
          <Navigation />
          <Account />
        </div>
      </div>
    </header>
  );
};

export default Header;
