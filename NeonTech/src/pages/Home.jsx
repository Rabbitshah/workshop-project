import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import sampleProducts from "./ProductDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

  const handleSearch = (query) => {
    setFilteredProducts(
      sampleProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar onSearch={handleSearch} />
      <HeroSection />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex justify-center mt-4">
        <Link to="/categories" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md shadow-md hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out">Browse</Link>
      </motion.div>
      <ProductGrid products={filteredProducts} />
    </div>
  );
};


export default Home;