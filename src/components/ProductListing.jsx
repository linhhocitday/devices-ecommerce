import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const { products } = useAppContext();

  return (
    <ul className="product-list grid-block">
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/products/${product.id}`} className="flex-block">
            <div className="text-align-center content-wrapper">
              <div
                className="image-block"
                style={{ backgroundImage: `url("${product.thumbnail}")` }}
              ></div>

              <h3 className="uppercase font-weight-500">{product.name}</h3>

              {product.preOrder === "true" && (
                <p className="color-dark-purple pre-order-note">Pre-order</p>
              )}

              <p className="product-price">From ${product.price}</p>
            </div>

            <div className="product-color-options flex-block">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className="product-color"
                  style={{ backgroundColor: `${color}` }}
                ></div>
              ))}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductListing;
