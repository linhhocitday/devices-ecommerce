import React from "react";
import ProductInformation from "./ProductInformation";

const ProductDetailContainer = ({ product }) => {
  return (
    <div className="product-container grid-block">
      <div>
        <div className="product-detail">
          <div className="product-detail-img-container">
            <div
              className="product-detail-img"
              style={{
                backgroundImage: `url("/product-detail-iphone15.jpg")`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <ProductInformation product={product} />
    </div>
  );
};

export default ProductDetailContainer;
