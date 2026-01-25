"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";

export default function CommercialSecurity() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-6 py-12 text-white">

        {/* BACK BUTTON */}
        <BackButton />

        {/* HERO */}
        <div className="relative mb-14 rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,120,255,0.2)]">
          <Image
            src="/images/commercial.jpg"
            alt="Commercial Security"
            width={1400}
            height={500}
            priority
            className="w-full h-[280px] md:h-[350px] object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90" />

          <div className="absolute bottom-6 left-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Commercial Security
            </h2>
            <p className="text-gray-300 mt-2">
              Professional protection for businesses & organisations.
            </p>
          </div>
        </div>

        {/* BODY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 text-gray-300 leading-relaxed"
        >
          <h3 className="text-2xl font-bold text-white">
            Protecting Your Business the Smart Way
          </h3>

          <p>
            Businesses face unique security challenges: burglary, insider
            threats, unauthorized access, corporate espionage, and emergency
            risks. Oscardyne Security provides structured, technology-driven
            commercial security solutions that protect your people, property,
            and confidential information.
          </p>

          <h3 className="text-xl font-semibold text-white">
            What We Offer
          </h3>

          <ul className="list-disc pl-6 space-y-4">
            <li>
              <span className="font-semibold text-white">
                24/7 On-site Security Officers:
              </span>{" "}
              Skilled guards trained for business environments.
            </li>
            <li>
              <span className="font-semibold text-white">
                Intrusion Detection Systems:
              </span>{" "}
              Alarms, sensors, and surveillance technology.
            </li>
            <li>
              <span className="font-semibold text-white">
                Access Control:
              </span>{" "}
              Restricting unauthorized entry into sensitive zones.
            </li>
            <li>
              <span className="font-semibold text-white">
                Surveillance Monitoring:
              </span>{" "}
              CCTV operations with real-time threat detection.
            </li>
            <li>
              <span className="font-semibold text-white">
                Emergency Response:
              </span>{" "}
              Fire, medical, and crisis reaction teams.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white">
            Why Businesses Trust Oscardyne
          </h3>

          <p>
            Our solutions reduce theft, prevent operational disruptions, and
            create a secure environment where both employees and customers feel
            protected.
          </p>
        </motion.div>
      </section>
    </Layout>
  );
}
