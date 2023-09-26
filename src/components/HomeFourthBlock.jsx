import React from "react";

const HomeFourthBlock = () => {
  return (
    <div className="home-fourth-block">
      <div
        className="image-block home-fourth-block-image"
        style={{ backgroundImage: `url("home-block-4.png")` }}
      ></div>

      <div className="grid-block z-index-1 color-dark-purple">
        <div>
          <h3>80+</h3>
          <p className="uppercase">Brands</p>
        </div>
        <div>
          <h3>200</h3>
          <p className="uppercase">Products</p>
        </div>
        <div>
          <h3>16K</h3>
          <p className="uppercase">Customers</p>
        </div>
      </div>
    </div>
  );
};

export default HomeFourthBlock;
