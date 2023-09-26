import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import { Link } from "react-router-dom";

const HomeSecondBlock = () => {
  const { findProductByName } = useAppContext();

  return (
    <Link
      to={`/products/${findProductByName("iPhone 14 Plus").id}`}
      className="home-second-block"
    >
      <div
        className="image-block home-second-block-image"
        style={{ backgroundImage: `url("iphone14-2.jpg")` }}
      ></div>

      <div className="content">
        <h2 className="uppercase color-dark-purple font-weight-500">
          iPhone 14 Plus &
        </h2>
      </div>

      <div className="home-second-colors">
        <div className="color-wrapper background-white flex-block">
          <div
            className="color-block"
            style={{ backgroundColor: "#A7BACB" }}
          ></div>
          <div
            className="color-block"
            style={{ backgroundColor: "#E5DDEA" }}
          ></div>
          <div
            className="color-block"
            style={{ backgroundColor: "#FC1533" }}
          ></div>
          <div
            className="color-block"
            style={{ backgroundColor: "#FFF496" }}
          ></div>
          <div
            className="color-block"
            style={{ backgroundColor: "#FAF7F2" }}
          ></div>
          <div
            className="color-block"
            style={{ backgroundColor: "#353B43" }}
          ></div>
        </div>

        <div className="flex-block choose-color-block">
          <div className="uppercase">Choose color</div>
          <svg
            width="93"
            height="18"
            viewBox="0 0 93 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M92 9L83.9444 1M92 9L83.9444 17M92 9H63H1.5"
              stroke="#5C469C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default HomeSecondBlock;
