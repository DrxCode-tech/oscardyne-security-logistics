'use client'

import { Menu } from "lucide-react";
import Image from "next/image";

export default function Nav({ onOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/6">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex justify-start items-center gap-3">
            <Image 
              src="/images/logo.png" 
              alt="Oscardyne Logo" 
              width={96} 
              height={96} 
              className="object-contain rounded-md" 
            />
            <div className="text-xl md:text-2xl sm:text-md font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400">
              Oscardyne Security Logistics
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-200">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#why" className="hover:text-white transition">Why Us</a>
            <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#careers" className="hover:text-white transition">Careers</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="#contact" 
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-yellow-500 text-black font-semibold hover:scale-105 transition"
            >
              Emergency Service
            </a>

            <button 
              onClick={onOpen} 
              className="p-2 rounded-md bg-white/6 backdrop-blur-sm hover:scale-105 transition md:hidden"
            >
              <Menu size={22} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}