import React from "react";
import ProductDetailColor from "./ProductDetailColor";
import ProductDetailStorage from "./ProductDetailStorage";
import ProductDetailFunctionBtn from "./ProductDetailFunctionBtn";

const ProductInformation = ({ product }) => {
  return (
    <div>
      <div className="product-detail right-side">
        <h3 className="uppercase product-detail-type color-light-purple">
          {product.type}
        </h3>

        <h1 className="uppercase product-detail-name">{product.name}</h1>

        <h2 className="uppercase product-detail-price color-dark-purple">
          From ${product.price}
        </h2>

        <p className="product-detail-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <ProductDetailColor product={product} />

        <ProductDetailStorage product={product} />

        <ProductDetailFunctionBtn product={product} />
      </div>
    </div>
  );
};

export default ProductInformation;
