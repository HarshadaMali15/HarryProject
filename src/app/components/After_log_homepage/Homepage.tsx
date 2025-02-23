"use client"

import { useEffect, useState } from "react"
import { Heart, ShoppingCart, ChevronLeft, ChevronRight, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "./Navbar"
import Link from "next/link"



const slides = [
  {
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070",
    title: "10% OFF YOUR FIRST ORDER",
    subtitle: "Reasonable Price",
  },
  {
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070",
    title: "NEW SUMMER COLLECTION",
    subtitle: "Fashion Forward",
  },
  {
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070",
    title: "EXCLUSIVE DEALS",
    subtitle: "Limited Time Offer",
  },
]

const categories = [
  {
    name: "Dresses",
    subcategories: ["Casual Dresses", "Party Dresses", "Maxi Dresses"],
  },
  {
    name: "Shirts",
    subcategories: ["T-Shirts", "Formal Shirts", "Casual Shirts"],
  },
  {
    name: "Jeans",
    subcategories: ["Skinny", "Bootcut", "Straight"],
  },
  {
    name: "Swimwear",
    subcategories: ["Bikinis", "One Piece", "Cover Ups"],
  },
  {
    name: "Sleepwear",
    subcategories: ["Pajamas", "Nightgowns", "Robes"],
  },
  {
    name: "Sportswear",
    subcategories: ["Tops", "Leggings", "Sets"],
  },
  {
    name: "Jumpsuits",
    subcategories: ["Casual", "Formal", "Denim"],
  },
  {
    name: "Blazers",
    subcategories: ["Casual", "Business", "Evening"],
  },
  {
    name: "Jackets",
    subcategories: ["Winter", "Spring", "Leather"],
  },
  {
    name: "Shoes",
    subcategories: ["Heels", "Flats", "Sneakers"],
  },
]

const pages = ["Shopping Cart", "Checkout", "My Account", "Track Order"]

export default function HomePage() {

  
  const [currentSlide, setCurrentSlide] = useState(0)
 
  const [activeCategory, setActiveCategory] = useState<number | null>(null)




  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen">
     <Navbar />
      {/* Main Content */}
      <main>
        {/* Categories Sidebar + Hero Section */}
        <div className="container mx-auto px-4 flex">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0 pr-6">
            <ul className="border rounded-lg overflow-hidden">
              {categories.map((category, index) => (
                <li
                  key={category.name}
                  className="relative group"
                  onMouseEnter={() => setActiveCategory(index)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <Link
                    href={`/category/${category.name.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-primary hover:text-white transition-colors border-b last:border-b-0 flex justify-between items-center"
                  >
                    {category.name}
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  {activeCategory === index && (
                    <div className="absolute left-full top-0 w-48 bg-white border rounded-lg shadow-lg ml-1 z-50">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub}
                          href={`/category/${category.name.toLowerCase()}/${sub.toLowerCase()}`}
                          className="block px-4 py-2 hover:bg-primary hover:text-white transition-colors"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero Section */}
          <div className="flex-1 relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    backgroundImage: `url('${slide.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/40">
                    <div className="h-full flex flex-col items-center justify-center text-white text-center">
                      <h2 className="text-2xl mb-4">{slide.title}</h2>
                      <h1 className="text-6xl font-bold mb-8">{slide.subtitle}</h1>
                      <Button size="lg" variant="secondary">
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Slider Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

