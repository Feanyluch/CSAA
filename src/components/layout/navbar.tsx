import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Twitter, Linkedin, Facebook, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b">
      <nav className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 h-20">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#356795] to-[#FF8F03] flex items-center justify-center overflow-hidden">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center transform rotate-45">
                  <span className="text-lg font-bold text-[#356795] transform -rotate-45">CS</span>
                </div>
              </div>
              <div>
                <span className="hidden md:block text-lg font-semibold text-[#356795]">
                  Computer Science <span className="text-[#FF8F03]">Academy Africa</span>
                </span>
                <span className="block md:hidden text-lg font-semibold text-[#356795]">
                  CSA<span className="text-[#FF8F03]">Africa</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#FF8F03] hover:bg-gray-100 rounded-md transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#FF8F03] hover:bg-gray-100 rounded-md transition-colors"
            >
              About
            </Link>
            <Link
              href="/team"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#FF8F03] hover:bg-gray-100 rounded-md transition-colors"
            >
              Team
            </Link>
            <Link
              href="/workshops"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#FF8F03] hover:bg-gray-100 rounded-md transition-colors"
            >
              Workshops
            </Link>
            <Link
              href="/activities"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#FF8F03] hover:bg-gray-100 rounded-md transition-colors"
            >
              Activities
            </Link>
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-gray-600 hover:text-[#FF8F03] transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#FF8F03] transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#FF8F03] transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#FF8F03] transition-colors">
              <Youtube className="h-5 w-5" />
            </Link>
            <Button className="bg-gradient-to-r from-[#356795] to-[#FF8F03] text-white hover:from-[#FF8F03] hover:to-[#356795] transition-all duration-300">
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#FF8F03] hover:bg-gray-100"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#FF8F03] hover:bg-gray-100"
            >
              About
            </Link>
            <Link
              href="/team"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#FF8F03] hover:bg-gray-100"
            >
              Team
            </Link>
            <Link
              href="/workshops"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#FF8F03] hover:bg-gray-100"
            >
              Workshops
            </Link>
            <Link
              href="/activities"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#FF8F03] hover:bg-gray-100"
            >
              Activities
            </Link>
            <div className="flex items-center gap-4 px-3 py-2">
              <Link href="#" className="text-gray-600 hover:text-[#FF8F03] transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#FF8F03] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#FF8F03] transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#FF8F03] transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

