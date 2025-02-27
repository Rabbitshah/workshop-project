import React from "react";
import { motion } from "framer-motion";

import ProductCard from "./ProductCard";
import CategoryCard from "./CategoryCard";

// const ProductGrid = ({ products }) => {
//   const categories = [...new Set(products.map((product) => product.category))];
  
//   return (
//     <section className="p-6 md:p-10">
//       {categories.map((category, index) => (
//         <motion.div
//           key={category}
//           className="mb-10"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: index * 0.2 }}
//         >
//           <h2 className="text-xl md:text-2xl font-bold text-neon mb-4">{category}</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {products.filter((product) => product.category === category).map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </motion.div>
//       ))}
//     </section>
//   );
// };

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