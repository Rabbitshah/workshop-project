import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white p-6 md:p-10 text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold">Next-Gen Tech is Here</h2>
      <p className="text-gray-400 mt-2 text-sm md:text-lg">Discover the latest gadgets with futuristic design and performance.</p>
      <motion.button 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }}
        className="mt-4 bg-neon text-black px-4 py-2 md:px-6 md:py-3 rounded-md"
      >
        Shop Now
      </motion.button>
    </motion.section>
  );
};
export default HeroSection;