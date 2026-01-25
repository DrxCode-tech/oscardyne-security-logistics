'use client'

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, Send, Loader2, Home, Bot, PlayCircle, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

// Components
import Nav from "@/components/Nav";
import MobileMenu from "@/components/MobileMenu";
import ParallaxHero from "@/components/ParallaxHero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import AIChat from "@/components/AIChat";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-black text-white antialiased w-full">
      <Nav onOpen={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="pt-20">
        <ParallaxHero />
        <Services />
        <WhyUs />
        <Testimonials />
        <Careers />
        <Contact />
        <AIChat />
      </main>

      <Footer />

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50">
        <motion.a 
          whileHover={{ scale: 1.05 }} 
          href="#contact" 
          className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-yellow-400 text-black font-bold shadow-2xl"
        >
          Emergency Service
        </motion.a>
      </div>
    </div>
  );
}