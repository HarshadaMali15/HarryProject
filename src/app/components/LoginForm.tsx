"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function LoginForm({ onClose, onSwitch }: { onClose: () => void, onSwitch: () => void }) {
  const [isOpen, setIsOpen] = useState(true); // Modal is initially open

  if (!isOpen) return null; // If modal is closed, return nothing

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg p-8 shadow-xl max-w-md w-full relative"
      >
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-yellow-600">Login to Sell</h2>

        <form className="space-y-4">
         
         
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Login
          </motion.button>

          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <button onClick={onSwitch} className="text-yellow-600 hover:text-yellow-700 transition-colors">
            Sign Up
          </button>
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}
