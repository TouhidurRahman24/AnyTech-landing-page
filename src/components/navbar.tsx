"use client"
import Link from "next/link"
import { Button } from "./ui/button"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span
            className={cn(
              "text-2xl font-bold transition-colors duration-300",
              scrolled ? "text-blue-600" : "text-white",
            )}
          >
            ANYTECH
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#"
            className={cn(
              "text-sm hover:text-blue-600 transition-colors duration-300",
              scrolled ? "text-gray-600" : "text-white",
            )}
          >
            Solutions ▾
          </Link>
          <Link
            href="#"
            className={cn(
              "text-sm hover:text-blue-600 transition-colors duration-300",
              scrolled ? "text-gray-600" : "text-white",
            )}
          >
            Services
          </Link>
          <Link
            href="#"
            className={cn(
              "text-sm hover:text-blue-600 transition-colors duration-300",
              scrolled ? "text-gray-600" : "text-white",
            )}
          >
            About Us
          </Link>
          <div className="relative">
            <button
              className={cn(
                "flex items-center text-sm hover:text-blue-600 transition-colors duration-300",
                scrolled ? "text-gray-600" : "text-white",
              )}
            >
              EN ▾
            </button>
            {/* Dropdown menu */}
          </div>
        </div>
        <Button className="bg-[#00A3FF] hover:bg-[#0096EA] text-white px-6 py-2 text-sm rounded-md">
          Contact Us ▾
        </Button>
      </div>
    </nav>
  )
}