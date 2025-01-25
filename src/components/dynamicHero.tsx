import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroData = [
  {
    image: "/images/imageone.jpg",
    title: "EMPOWER",
    subtitle: "African Youth Through Technology",
    description:
      "Join our mission to provide quality computer science education and create opportunities for the next generation of African tech leaders.",
  },
  {
    image: "/images/imagetwo.jpg",
    title: "INNOVATE",
    subtitle: "Building a Brighter Future for Africa",
    description:
      "Our workshops and mentorship programs are shaping the next generation of African innovators and problem-solvers.",
  },
  {
    image: "/images/imagethree.jpg",
    title: "TRANSFORM",
    subtitle: "Bridging the Digital Divide",
    description:
      "Through our initiatives, we're working to ensure that every young African has access to quality tech education and resources.",
  },
];

export function DynamicHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90svh] flex items-center justify-center overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#356795] opacity-10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#FF8F03] opacity-10 blur-3xl" />
      </div>

      {heroData.map((hero, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={hero.image || "/placeholder.svg"}
            alt={hero.title}
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(45deg, rgba(53, 103, 149, 0.85), rgba(255, 143, 3, 0.65))",
            }}
          />
        </div>
      ))}

      <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-4">
        <div className="relative">
          <h1 className="text-[15vw] md:text-[120px] font-black text-white leading-none mb-4 opacity-20 break-words">
            {heroData[currentIndex].title}
          </h1>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
            {heroData[currentIndex].subtitle}
          </h2>
        </div>
        <p className="text-lg md:text-2xl text-white/90 mb-8 mt-12 transition-all duration-500 max-w-2xl mx-auto">
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

        {/* Navigation Dots */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-[#FF8F03]"
                  : "bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div> */}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent" />
    </section>
  );
}
