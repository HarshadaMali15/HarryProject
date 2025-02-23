"use client"

import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear stored authentication tokens (Modify based on how you store tokens)
    localStorage.removeItem("authToken"); // Example if you use localStorage
    sessionStorage.removeItem("authToken"); // Example if you use sessionStorage

    // Redirect to login page
    router.push("/");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-2xl mx-8">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search for more than 20,000 products"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logout Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white font-bold py-2 px-4 rounded-full shadow-lg"
            >
              Logout
            </motion.button>

            {/* Shopping Cart Icon */}
            <ShoppingCart className="w-6 h-6 text-gray-700" />
          </div>
        </div>
      </div>
    </nav>
  );
}
