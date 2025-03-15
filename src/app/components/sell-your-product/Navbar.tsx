"use client";


import { useSellerAuth } from "@/context/authContextSeller";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const { seller, logoutSeller } = useSellerAuth();

  const handleLogout = async () => {
    await logoutSeller();
    router.replace("/Sell-log-in"); // ✅ Use `replace` to prevent back navigation
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
          </div>

          <div className="flex items-center space-x-8">
            {seller ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">{seller.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => router.replace("/Sell-log-in")}
                className="bg-green-500 text-white font-bold py-2 px-4 rounded"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
