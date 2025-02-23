"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"

export default function ProductForm() {
  const searchParams = useSearchParams()
  const subcategory = searchParams.get("subcategory") || "Unknown"
  const router = useRouter()

  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    description: "",
    image: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Product submitted:", formData)
    router.push(`/categories`) // Redirect back to categories after submission
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-yellow-800 text-center mb-6">
          Sell a Product in {subcategory}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            className="w-full px-4 py-2 border rounded-lg"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="price"
            placeholder="Price (₹)"
            className="w-full px-4 py-2 border rounded-lg"
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Product Description"
            className="w-full px-4 py-2 border rounded-lg"
            rows={3}
            onChange={handleChange}
            required
          ></textarea>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="w-full px-4 py-2 border rounded-lg"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700"
          >
            Submit Product
          </button>
        </form>
        <button
          onClick={() => router.push(`/categories/${subcategory}`)}
          className="mt-4 w-full text-yellow-800 underline"
        >
          Back to {subcategory}
        </button>
      </div>
    </div>
  )
}
