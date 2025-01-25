"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const heroData = [
  {
    image:
      "/images/imageone.jpg",
    title: "EMPOWER",
    subtitle: "African Youth Through Technology",
    description:
      "Join our mission to provide quality computer science education and create opportunities for the next generation of African tech leaders.",
  },
  {
    image:
      "/images/imagetwo.jpg",
    title: "INNOVATE",
    subtitle: "Building a Brighter Future for Africa",
    description:
      "Our workshops and mentorship programs are shaping the next generation of African innovators and problem-solvers.",
  },
  {
    image:
      "/images/imagethree.jpg",
    title: "TRANSFORM",
    subtitle: "Bridging the Digital Divide",
    description:
      "Through our initiatives, we're working to ensure that every young African has access to quality tech education and resources.",
  },
]

export function DynamicHero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#356795] opacity-40 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#84CC16] opacity-10 blur-3xl" />
      </div>

      {heroData.map((hero, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={hero.image || "/placeholder.svg"} alt={hero.title} fill className="object-cover" priority />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(53, 103, 149, 0.6)" }} />
        </div>
      ))}

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="relative">
          <h1 className="text-[120px] font-black text-white leading-none mb-4 opacity-20">
            {heroData[currentIndex].title}
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            {heroData[currentIndex].subtitle}
          </h2>
        </div>
        <p className="text-xl md:text-2xl text-white/90 mb-8 mt-12 transition-all duration-500">
          {heroData[currentIndex].description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-white hover:bg-white/90 text-[#356795]">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button className="border-white text-white hover:bg-white/10 bg-white/30">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

