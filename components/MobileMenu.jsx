'use client'

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Home, Bot, PlayCircle, ShieldCheck } from "lucide-react";
import Image from "next/image";

function GradientIcon({ Icon, className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <defs>
        <linearGradient id="gradStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#facc15" />
        </linearGradient>
      </defs>
      {React.createElement(Icon, { stroke: "url(#gradStroke)" })}
    </svg>
  );
}

export default function MobileMenu({ open, onClose }) {
  const menuItems = [
    { label: "Services", href: "#services", Icon: ShieldCheck },
    { label: "Why Us", href: "#why", Icon: Home },
    { label: "Testimonials", href: "#testimonials", Icon: PlayCircle },
    { label: "Contact", href: "#contact", Icon: Phone },
    { label: "Oscardyne_AI", href: "#oscardyne_ai", Icon: Bot },
    { label: "Careers", href: "#careers", Icon: PlayCircle },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed inset-y-0 right-0 w-4/5 bg-black/95 backdrop-blur-xl border-l border-white/10 shadow-[-20px_0_40px_rgba(0,0,0,0.35)] z-50 p-6 overflow-y-auto rounded-l-3xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center justify-between mb-8 pb-4 border-b border-white/10"
          >
            <div className="flex items-center gap-3">
              <Image 
                src="/images/logo.png" 
                alt="logo" 
                width={40} 
                height={40} 
                className="rounded-md object-cover shadow-[0_0_10px_rgba(255,255,255,0.15)]" 
              />
              <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-400 tracking-wide">
                Menu
              </div>
            </div>

            <motion.button 
              onClick={onClose} 
              whileHover={{ rotate: 90, scale: 1.15 }} 
              whileTap={{ scale: 0.9 }} 
              transition={{ type: "spring", stiffness: 300 }} 
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10"
            >
              <X size={22} className="text-white" />
            </motion.button>
          </motion.div>

          <nav className="flex flex-col gap-3 text-gray-200">
            {menuItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, type: "spring", stiffness: 300, damping: 25 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="relative flex items-center gap-3 py-3 px-4 rounded-lg bg-white/0 hover:bg-white/5 transition-all"
              >
                <GradientIcon Icon={item.Icon} className="w-5 h-5" />
                {item.label}
              </motion.a>
            ))}

            <motion.a 
              href="#contact" 
              onClick={onClose} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              transition={{ delay: 0.2 }} 
              className="mt-6 inline-block text-center px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-yellow-500 text-black font-bold shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            >
              Emergency Service
            </motion.a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}