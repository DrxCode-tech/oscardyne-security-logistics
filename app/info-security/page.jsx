"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Service3 from "@/public/images/info.jpg";
import Layout from "@/components/Layout";

export default function InformationSecurity() {
  return (
    <Layout>
      <section className="min-h-screen bg-black text-white py-24 px-6">

        {/* NAVBAR */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-6xl mx-auto flex justify-between items-center mb-10"
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <ArrowLeft size={20} /> Back to Services
          </Link>

          <div />
        </motion.nav>

        {/* HERO AREA */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mb-16 rounded-3xl overflow-hidden border border-white/10 
            bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,120,255,0.25)]"
          >
            <motion.div
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full h-[280px] md:h-[360px]"
            >
              <Image
                src={Service3}
                alt="Information Security"
                fill
                priority
                className="object-cover opacity-80"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute bottom-6 left-6"
            >
              <h1 className="text-3xl md:text-4xl font-bold">
                Information Security
              </h1>
              <p className="text-gray-300 mt-2">
                Protecting data, systems, and organisations from internal & external threats.
              </p>
            </motion.div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-gray-300 leading-relaxed"
          >
            <h2 className="text-2xl font-bold text-white">
              What is Information Security?
            </h2>

            <p>
              Information Security (InfoSec) is the backbone of every modern business. It ensures that
              sensitive information remains protected from unauthorized access, tampering, theft, and misuse.
              In today’s world where cybercrime is rising, InfoSec is no longer optional — it is a necessity.
            </p>

            <h3 className="text-xl font-semibold text-white">
              Our Information Security Services
            </h3>

            <ul className="list-disc pl-6 space-y-4">
              <li>
                <span className="font-semibold text-white">Data Protection:</span>{" "}
                Ensuring that sensitive company information is encrypted, backed up, and secured from unauthorized users.
              </li>

              <li>
                <span className="font-semibold text-white">Regulatory Compliance:</span>{" "}
                Helping your organisation meet standards like GDPR, ISO 27001, PCI-DSS, NDPR, and more.
              </li>

              <li>
                <span className="font-semibold text-white">Information Handling Policies:</span>{" "}
                Creating structured guidelines for how data is stored, shared, and accessed.
              </li>

              <li>
                <span className="font-semibold text-white">Secure Access Control:</span>{" "}
                Ensuring only authorized personnel have access to critical systems and documents.
              </li>

              <li>
                <span className="font-semibold text-white">Internal Risk Assessment:</span>{" "}
                Identifying weaknesses within your organisation before criminals exploit them.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-white">
              Why It Matters
            </h3>

            <p>
              A single data breach can destroy a company’s reputation, cause legal battles, and even
              shut down operations. With Oscardyne Security, your organisation gets world-class protection
              from both internal and external threats — keeping your data confidential, intact, and available
              only to the right people.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
