import React from "react";
import { NavLink } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex-block header-menu background-white">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>

        <li>
          <NavLink to={"about"}>About</NavLink>
        </li>

        <li>
          <NavLink to={"products"}>Products</NavLink>
        </li>

        <li className="header-cart-icon">
          <NavLink to={"cart"}>
            <PiShoppingCart />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
