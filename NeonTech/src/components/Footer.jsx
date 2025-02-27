import React from "react";
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-black text-white text-center p-4"
    >
      <p className="text-sm md:text-base">© 2025 TechStore. All Rights Reserved.</p>
    </motion.footer>
  );
};

export default Footer;
  