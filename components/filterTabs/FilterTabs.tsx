import React, { useState } from "react";

const products = [
  { id: 1, name: "Product 1", category: "Category 1" },
  { id: 2, name: "Product 2", category: "Category 2" },
  { id: 3, name: "Product 3", category: "Category 1" },
  { id: 4, name: "Product 4", category: "Category 3" },
  { id: 5, name: "Product 5", category: "Category 2" },
  { id: 6, name: "Product 6", category: "Category 1" },
];

const FilterTabs = () => {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
        <option value="Category 3">Category 3</option>
      </select>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterTabs;
