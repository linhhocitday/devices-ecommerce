import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import { Link } from "react-router-dom";

const ProductListing = ({ activeOption }) => {
  const { products } = useAppContext();

  const filteredProducts =
    activeOption === "All products"
      ? products
      : activeOption === "Phone"
      ? products.filter((product) => product.type == "phone")
      : activeOption === "Laptop"
      ? products.filter((product) => product.type == "laptop")
      : activeOption === "Tablet"
      ? products.filter((product) => product.type == "tablet")
      : products.filter((product) => product.type == "watch");
  // TODO: fix get only watch to filter != phone, laptop, tablet

  return (
    <ul className="product-list grid-block">
      {filteredProducts.map((product) => (
        <li key={product.id}>
          <Link to={`${product.id}`} className="flex-block">
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
