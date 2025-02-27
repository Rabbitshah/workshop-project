import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white p-4 flex justify-between items-center shadow-md"
    >
      <Link to="/" className="text-2xl md:text-3xl font-bold text-neon cursor-pointer">NeonTech</Link>
      <div className="flex gap-6 items-center">
        <motion.div 
          className="relative flex items-center"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <motion.input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm} 
            onChange={handleSearch} 
            className="p-2 rounded-md text-black bg-gray-300 transition-all duration-300"
            animate={{ width: isExpanded ? "200px" : "0px", opacity: isExpanded ? 1 : 0, backgroundColor: isExpanded ? "#ffffff" : "#d1d5db", left: isExpanded ? "-200px" : "0px" }}
            transition={{ duration: 0.3 }}
          />
          {!isExpanded && <Search className=" top-2 left-2 cursor-pointer transition-opacity duration-300" animate={{ opacity: isExpanded ? 0 : 1 }} />}
        </motion.div>
        <Link to="/login"><User className="cursor-pointer" /></Link>
        <ShoppingCart className="cursor-pointer" />
      </div>
    </motion.nav>
  );
};
export default Navbar;