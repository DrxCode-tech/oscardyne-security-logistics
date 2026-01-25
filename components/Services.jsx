'use client'

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Services() {
  const items = [
    { 
      img: '/images/physic.jpg', 
      title: "Physical Security", 
      desc: "Guards, surveillance, and access control to ensure safety of people and property.", 
      link: "/physic-security" 
    },
    { 
      img: '/images/cyber.jpg', 
      title: "Cybersecurity", 
      desc: "Threat detection, penetration testing, and incident response to protect digital assets.", 
      link: "/cyber-security" 
    },
    { 
      img: '/images/info.jpg', 
      title: "Information Security", 
      desc: "Data protection, compliance, and secure handling of sensitive information.", 
      link: "/info-security" 
    },
    { 
      img: '/images/Security4.jpg', 
      title: "Event Security", 
      desc: "Protecting crowds, managing access, and VIP protection for events.", 
      link: "/event-security" 
    },
    { 
      img: '/images/commercial.jpg', 
      title: "Commercial Security", 
      desc: "Safeguarding businesses and offices against theft, intrusion, and emergencies.", 
      link: "/commercial-security" 
    },
    { 
      img: '/images/resident.jpg', 
      title: "Residential Security", 
      desc: "Home protection systems and security services for residential properties.", 
      link: "/residential-security" 
    },
  ];

  const router = useRouter();

  return (
    <section id="services" className="py-16 bg-black/80">
      <div className="py-20 max-w-6xl relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-900/50 to-transparent blur-3xl pointer-events-none"></div>
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <motion.article 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.06 }} 
              whileHover={{ scale: 1.03 }} 
              className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 flex flex-col gap-4 shadow-[0_10px_30px_rgba(0,120,255,0.12)] hover:shadow-[0_15px_40px_rgba(0,120,255,0.25)] transition-all duration-300 group"
            >
              <div className="h-36 w-full rounded-md overflow-hidden relative">
                <Image 
                  src={it.img} 
                  alt={it.title} 
                  fill 
                  className="object-cover opacity-90" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-overlay pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/40 to-transparent blur-sm pointer-events-none"></div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{it.title}</h3>
                <p className="mt-2 text-gray-300 text-sm">{it.desc}</p>
              </div>

              <div className="mt-4">
                <motion.button 
                  whileTap={{ scale: 0.96 }} 
                  transition={{ type: "spring", stiffness: 380, damping: 22 }} 
                  onClick={() => router.push(it.link)} 
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-yellow-400 text-black font-semibold shadow-[0_8px_25px_rgba(0,120,255,0.15)] hover:scale-105 hover:shadow-[0_12px_35px_rgba(0,120,255,0.25)] transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}