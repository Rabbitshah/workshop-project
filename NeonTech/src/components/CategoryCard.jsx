import React, { useState } from "react";
import { motion } from "framer-motion";

const CategoryCard = ({ category, products }) => {
    const [expanded, setExpanded] = useState(false);
  
    return (
      <div className="p-4">
        <motion.div 
          className="cursor-pointer p-4 bg-gray-800 text-white rounded-md shadow-md"
          onClick={() => setExpanded(!expanded)}
        >
          <h2 className="text-xl font-bold">{category}</h2>
        </motion.div>
        {expanded && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"
          >
            {products.map((product) => (
              <div key={product.id} className="p-4 bg-gray-700 text-white rounded-md shadow-md">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-2" />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p>${product.price}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    );
  };
  
  
export default CategoryCard;