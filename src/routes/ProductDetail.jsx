import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";

const ProductDetail = () => {
  const { productId } = useParams();

  const { findProductById } = useAppContext();

  let product = findProductById(productId);

  return (
    <main>
      <div className="container">
        <h1>{product.name}</h1>
      </div>
    </main>
  );
};

export default ProductDetail;
