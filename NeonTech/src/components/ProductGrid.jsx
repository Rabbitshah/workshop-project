import React from "react";

import ProductCard from "./ProductCard";


const ProductGrid = ({ products }) => {
  return (
    <section className="p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductGrid;