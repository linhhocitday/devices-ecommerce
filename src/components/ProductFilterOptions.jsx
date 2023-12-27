import React from "react";

const ProductFilterOptions = ({ activeOption, onChangeOption }) => {
  const options = ["All products", "Phone", "Laptop", "Tablet", "Others"];

  const optionsRendering = options.map((option) =>
    activeOption == option ? (
      <li key={option} active="true">
        {option}
      </li>
    ) : (
      <li key={option} active="false" onClick={() => onChangeOption(option)}>
        {option}
      </li>
    )
  );

  return (
    <ul className="product-options-list flex-block">{optionsRendering}</ul>
  );
};

export default ProductFilterOptions;
