"use client"

import { useEffect, useState } from "react"
import CategorySection from "./category-section"
import Navbar from "./Navbar"
import BestSellingProducts from "./Best-Selling-Products"
import Promotions from "./Promotions"
import Features from "./Features"

const slides = [
  {
    title: (
      <>
        <span className="text-green-500">Organic</span> Foods
        <br />
        at your
        <br />
        Doorsteps
      </>
    ),
    subtitle: "Dignissim massa diam elementum.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-BF9a86LB1diLsGpJIEdS3yZ29eUds1.png",
    bgColor: "bg-[#FFE17D]",
  },
  {
    title: (
      <>
        <span className="text-green-500">Fresh</span> Veggies
        <br />
        Daily
        <br />
        Delivery
      </>
    ),
    subtitle: "Farm fresh vegetables for your family.",
    image: "/placeholder.svg?height=600&width=800",
    bgColor: "bg-[#E8F5E9]",
  },
  {
    title: (
      <>
        <span className="text-green-500">Healthy</span> Food
        <br />
        Healthy
        <br />
        Lifestyle
      </>
    ),
    subtitle: "Choose the best for your health.",
    image: "/placeholder.svg?height=600&width=800",
    bgColor: "bg-[#FFF3E0]",
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Carousel */}
      <div className="relative overflow-hidden">
        <div className="relative w-full" style={{ height: "600px" }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              } ${slide.bgColor}`}
            >
              <div className="max-w-7xl mx-auto px-6 py-20 h-full">
                <div className="max-w-2xl">
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight">{slide.title}</h1>
                  <p className="mt-6 text-xl text-gray-700">{slide.subtitle}</p>
                </div>
              </div>
              <div
                className="absolute right-0 top-0 w-1/2 h-full bg-contain bg-right-top bg-no-repeat transition-transform duration-1000"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-8 bg-green-500" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Category Section */}
      <CategorySection />

      {/* Best Selling Products */}
      <BestSellingProducts />

      {/* Promotions Section */}
      <Promotions />

      {/* Features Section */}
      <Features />
    </div>
  )
}

