import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";
import ProductDetailContainer from "../components/ProductDetailContainer";

const ProductDetail = () => {
  const { productId } = useParams();

  const { findProductById } = useAppContext();

  let product = findProductById(productId);

  return (
    <main>
      <div className="container">
        <Link
          to={"/products"}
          className="color-dark-purple flex-block back-to-products"
        >
          <div className="back-arrow">
            <svg
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6.5L6 11.5M1 6.5L6 1.5M1 6.5H19"
                stroke="#5C469C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="uppercase font-weight-500">Products</div>
        </Link>

        <ProductDetailContainer product={product} />
      </div>
    </main>
  );
};

export default ProductDetail;
