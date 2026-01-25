"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BackButton from "@/components/BackButton";

export default function ResidentialSecurityPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-white">
      <BackButton />

      {/* HERO */}
      <div className="relative mb-14 rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,120,255,0.2)]">
        <Image
          src="/images/resident.jpg"
          alt="Residential Security"
          width={1200}
          height={400}
          className="w-full h-[280px] md:h-[350px] object-cover opacity-80"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90" />

        <div className="absolute bottom-6 left-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Residential Security
          </h2>
          <p className="text-gray-300 mt-2">
            Keeping homes safe, secure, and protected.
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
          Your Home, Fully Protected
        </h3>

        <p>
          Whether it’s burglary, break-ins, property damage, or neighborhood
          threats, Oscardyne Security provides full-coverage residential
          protection engineered to ensure peace of mind for homeowners and
          families.
        </p>

        <h3 className="text-xl font-semibold text-white">
          Our Residential Services
        </h3>

        <ul className="list-disc pl-6 space-y-4">
          <li>
            <span className="font-semibold text-white">
              Home Security Systems:
            </span>{" "}
            CCTV, motion sensors, alarms & perimeter monitoring.
          </li>
          <li>
            <span className="font-semibold text-white">
              24/7 Rapid Response:
            </span>{" "}
            Emergency deployment when threats arise.
          </li>
          <li>
            <span className="font-semibold text-white">
              Guard Patrol:
            </span>{" "}
            Trained officers stationed or patrolling around the property.
          </li>
          <li>
            <span className="font-semibold text-white">
              Smart Access Control:
            </span>{" "}
            Secure locking systems and visitor authorization.
          </li>
          <li>
            <span className="font-semibold text-white">
              Family Safety Planning:
            </span>{" "}
            Safety protocols and emergency planning for households.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-white">
          A Safe Home Is a Confident Home
        </h3>

        <p>
          Our goal is to eliminate fear, stop intrusions, and provide a security
          environment where you can sleep, relax, and live comfortably without
          worrying about threats.
        </p>
      </motion.div>
    </section>
  );
}
