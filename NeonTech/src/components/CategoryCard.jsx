import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Search, User } from "lucide-react";
import ProductCard from "./ProductCard";

const CategoryCard = ({ category, products }) => {
    const [expanded, setExpanded] = useState(false);
  
    return (
      <motion.div 
        className="bg-gray-900 p-4 rounded-lg shadow-lg text-white cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setExpanded(!expanded)}
      >
        <h2 className="text-xl font-bold text-neon">{category}</h2>
        {expanded && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4 }}
            className="mt-4 grid grid-cols-1 gap-6"
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        )}
      </motion.div>
    );
  };
  
export default CategoryCard;