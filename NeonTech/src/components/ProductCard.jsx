import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
      className="bg-gray-800 p-4 rounded-lg shadow-lg text-white"
    >
      <motion.img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-32 md:h-40 object-cover rounded-md"
        whileHover={{ scale: 1.1 }}
      />
      <h3 className="mt-2 font-bold text-sm md:text-lg">{product.name}</h3>
      <p className="text-gray-400 text-sm md:text-base">${product.price}</p>
    </motion.div>
  );
};


export default ProductCard;