"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Service2 from "@/public/images/cyber.jpg";

export default function CyberSecurityDetail() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full px-6 md:px-12 py-4 flex items-center justify-between 
        bg-black/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50"
      >
        {/* SITE NAME */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-400 to-yellow-400"
        >
          Oscardyne Security
        </Link>

        {/* BACK BUTTON */}
        <Link
          href="/"
          className="px-4 py-2 rounded-xl bg-white/10 text-white border border-white/20 
          hover:bg-white/20 transition"
        >
          ← Back
        </Link>
      </motion.nav>

      {/* MAIN SECTION */}
      <section className="py-20 px-6 md:px-16 lg:px-28">

        {/* HERO IMAGE + TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-80 md:h-[420px] rounded-3xl overflow-hidden 
          shadow-[0_15px_50px_rgba(0,120,255,0.25)] relative mb-16"
        >
          <Image
            src={Service2}
            alt="Cybersecurity"
            fill
            priority
            className="object-cover opacity-80"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* TITLE */}
          <div className="absolute bottom-8 left-8">
            <h1 className="text-3xl md:text-5xl font-extrabold">
              Cybersecurity
            </h1>
            <p className="text-gray-300 mt-2 max-w-xl text-lg">
              Protecting your digital world with intelligence-driven defence.
            </p>
          </div>
        </motion.div>

        {/* CONTENT SECTION */}
        <div className="max-w-5xl mx-auto flex flex-col gap-12">

          {/* OVERVIEW */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 
            border border-white/10 shadow-[0_10px_40px_rgba(0,120,255,0.2)]"
          >
            <h2 className="text-3xl font-semibold text-blue-400 mb-4">
              Overview
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              As cyber threats evolve, businesses face risks that can cripple operations.
              Oscardyne’s cybersecurity unit defends your digital assets using 
              advanced monitoring, threat intelligence, and rapid response strategies 
              designed to keep your systems secure around the clock.
            </p>
          </motion.article>

          {/* SERVICES OFFERED */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 
            border border-white/10 shadow-[0_10px_40px_rgba(0,120,255,0.2)]"
          >
            <h2 className="text-3xl font-semibold text-blue-400 mb-4">
              Services Offered
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
              <li>Real-time threat monitoring and alerting.</li>
              <li>Penetration testing to uncover vulnerabilities early.</li>
              <li>Incident response teams ready for rapid containment.</li>
              <li>Malware & ransomware defence systems.</li>
              <li>Security audits and compliance standards enforcement.</li>
              <li>Network & server hardening using military-grade frameworks.</li>
            </ul>
          </motion.article>

          {/* WHY CHOOSE US */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 
            border border-white/10 shadow-[0_10px_40px_rgba(0,120,255,0.2)]"
          >
            <h2 className="text-3xl font-semibold text-blue-400 mb-4">
              Why Our Cybersecurity Team is Different
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Cyber attacks are fast — we are faster.  
              Our analysts combine human expertise with AI-powered intelligence 
              to detect, neutralize, and prevent attacks before they escalate.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you're a startup or a government agency, we ensure that 
              your systems remain protected, compliant, and operational.
            </p>
          </motion.article>

        </div>
      </section>
    </div>
  );
}
