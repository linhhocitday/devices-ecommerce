import React, { useState } from "react";

const ProductFilterOptions = () => {
  const [activeOption, setActiveOption] = useState("All products");

  const options = ["All products", "Phone", "Laptop", "Tablet", "Others"];

  return (
    <ul className="product-options-list flex-block">
      {options.map((option) => (
        <li>{option}</li>
      ))}
    </ul>
  );
};

export default ProductFilterOptions;
