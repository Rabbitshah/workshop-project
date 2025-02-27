import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

import ProductGrid from "./ProductGrid";
import Footer from "./Footer";
import sampleProducts from "../pages/ProductDetails";
import CategoryCard from "./CategoryCard";

const CategoryPage = () => {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <section className="p-6 md:p-10 grid grid-cols-1 gap-6">
          {[...new Set(sampleProducts.map(product => product.category))].map((category) => (
            <CategoryCard key={category} category={category} products={sampleProducts.filter(product => product.category === category)} />
          ))}
        </section>
      </motion.div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
