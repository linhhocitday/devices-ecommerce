import React from "react";

const ProductDetailStorage = ({ product }) => {
  return (
    <div className="product-detail-storage-container">
      <div className="color-dark-purple uppercase font-weight-500">Storage</div>

      {Object.entries(product.storages).map(([key, value]) => (
        <div key={key} className="flex-block color-dark-purple">
          <div className="font-weight-500">{key}</div>
          <div>${value}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetailStorage;
