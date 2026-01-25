'use client'

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ParallaxHero() {
  const ref = useRef(null);
  const offsetRef = useRef(0);
  const [offset, setOffset] = useState(0);
  const [index, setIndex] = useState(0);
  const tickRef = useRef(null);
  const images = [
    '/images/logo.png', 
    '/images/Security2.jpg', 
    '/images/Security3.jpg', 
    '/images/Security4.jpg', 
    '/images/Security5.jpg'
  ];

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const top = ref.current.getBoundingClientRect().top;
      offsetRef.current = Math.max(-top / 10, -60);
      if (!tickRef.current) {
        tickRef.current = requestAnimationFrame(() => {
          setOffset(offsetRef.current);
          tickRef.current = null;
        });
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (tickRef.current) cancelAnimationFrame(tickRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setIndex((p) => (p + 1) % images.length), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative w-full min-h-[75vh] flex items-center overflow-hidden">
      {images.map((img, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 scale-105"
          style={{ transform: `translateY(${offset}px)` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === i ? 1 : 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <Image 
            src={img} 
            alt="Hero background" 
            fill 
            className="object-cover" 
            priority={i === 0} 
          />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-black/55 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          Oscardynefitness and Security Logistics
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.12 }} 
          className="mt-6 text-gray-300 max-w-2xl mx-auto"
        >
          Full-spectrum private security — corporate guards, surveillance, rapid-response units, escort services, and high-risk logistics. Reliable. Disciplined. Operational 24/7.
        </motion.p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-yellow-400 text-black font-semibold shadow-[0_15px_40px_rgba(0,120,255,0.14)] hover:scale-105 transition"
          >
            Request Quote
          </a>
          <a 
            href="#services" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-white/6 backdrop-blur-md text-gray-200 hover:bg-white/10 transition"
          >
            Our Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none">
        <div className="mx-auto w-3/4 h-full bg-gradient-to-t from-blue-700/20 to-transparent blur-3xl" />
      </div>
    </section>
  );
}