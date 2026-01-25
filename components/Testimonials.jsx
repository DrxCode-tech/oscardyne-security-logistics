
// components/Testimonials.jsx
'use client'

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    { 
      quote: "Reliable and professional. We use them for our corporate sites.", 
      name: "Michael Carter, Ops Manager" 
    },
    { 
      quote: "Fast response and well-trained guards.", 
      name: "Emily Johnson, Events Co." 
    }
  ];
  
  return (
    <section id="testimonials" className="py-16 bg-black/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">What Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((it, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }} 
              viewport={{ once: true }} 
              className="p-6 rounded-xl bg-white/4 backdrop-blur-lg border border-white/8 text-left"
            >
              <div className="text-gray-200 italic">"{it.quote}"</div>
              <div className="mt-4 font-semibold text-white">— {it.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}