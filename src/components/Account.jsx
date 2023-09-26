import React from "react";
import { NavLink } from "react-router-dom";

const Account = () => {
  return (
    <nav>
      <ul className="flex-block header-account background-white">
        <li className="background-dark-purple header-sign-in-button color-white">
          <NavLink to={"/sign-in"}>Sign in</NavLink>
        </li>
        <li className="header-sign-up-button">
          <NavLink to={"/sign-up"}>Sign up</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Account;
