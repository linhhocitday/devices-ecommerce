import React from "react";

const ProductDetailColor = ({ product }) => {
  return (
    <div className="product-detail-color-container">
      <div className="color-dark-purple uppercase font-weight-500">Color</div>

      <div className="grid-block">
        {product.colors.map((color) => (
          <div
            key={color}
            className="product-detail-color"
            style={{ backgroundColor: `${color}` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailColor;
