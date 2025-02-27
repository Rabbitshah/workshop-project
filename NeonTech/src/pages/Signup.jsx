import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Signup = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="text-3xl font-bold mb-4">
      NeonTech
      </Link>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Signup on Wanderlust
        </h1>
        <form action="/signup" method="post" className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              name="username"
              type="text"
              id="username"
              className="w-full p-2 rounded-md bg-gray-700 text-white focus:bg-gray-700"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="w-full p-2 rounded-md bg-gray-700 text-white focus:bg-gray-700"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              className="w-full p-2 rounded-md bg-gray-700 text-white focus:bg-gray-700"
              required
            />
          </div>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition duration-300">
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Signup;
