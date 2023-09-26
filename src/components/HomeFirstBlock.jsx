import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import { Link } from "react-router-dom";

const HomeFirstBlock = () => {
  const { findProductByName } = useAppContext();

  return (
    <Link
      to={`/products/${findProductByName("iPhone 15 Pro").id}`}
      className="home-first-block"
    >
      <div
        className="image-block home-first-block-image"
        style={{ backgroundImage: `url("iphone15-2.jpg")` }}
      ></div>

      <div className="content">
        <div className="flex-block">
          <div className="pre-order font-weight-500 uppercase">Pre-order</div>
          <div className="arrow">
            <svg
              width="93"
              height="18"
              viewBox="0 0 93 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M91.5 9L83.4444 1M91.5 9L83.4444 17M91.5 9H62.5H1"
                stroke="#5C469C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <h2 className="font-weight-500 uppercase">
          iPhone 15 <span className="gradient-text">Pro</span>
        </h2>
      </div>
    </Link>
  );
};

export default HomeFirstBlock;
