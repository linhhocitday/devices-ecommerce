import React, { useState } from "react";
import ProductFilterOptions from "../components/ProductFilterOptions";
import ProductListing from "../components/ProductListing";

const ProductList = () => {
  const [activeOption, setActiveOption] = useState("All products");

  const handleChangeOption = (option) => {
    setActiveOption(option);
  };

  return (
    <main>
      <div className="container">
        <div className="product-wrapper">
          <div className="text-align-center">
            <h1 className="uppercase product-title color-dark-purple">
              Grab your{" "}
              <span>
                device
                <svg
                  width="172"
                  height="89"
                  viewBox="0 0 172 89"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M107.5 1.5C72.9999 5 21.4999 25.5 7.99991 56.5C-5.50009 87.5 63.4999 83.5 98.9999 75.5C134.5 67.5 174 49 170 31C166 13 121.5 7 88.4999 13C55.4999 19 15.9999 29.5 1.99991 67C-12.0001 104.5 141 88 166.5 38C186.9 -2 101 13 55.5 25.5"
                    stroke="#D4ADFC"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </h1>

            <ProductFilterOptions
              activeOption={activeOption}
              onChangeOption={handleChangeOption}
            />
          </div>

          <ProductListing activeOption={activeOption} />
        </div>
      </div>
    </main>
  );
};

export default ProductList;
