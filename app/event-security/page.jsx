"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";

export default function EventSecurity() {
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
          <BackButton />
          <div />
        </motion.nav>

        {/* HERO AREA */}
        <div className="max-w-6xl mx-auto">
          <div className="relative mb-16 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,120,255,0.25)]">
            <Image
              src="/images/Security5.jpg"
              alt="Event Security"
              width={1400}
              height={600}
              priority
              className="w-full h-[280px] md:h-[360px] object-cover opacity-80"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90" />

            {/* TITLE */}
            <div className="absolute bottom-6 left-6">
              <h1 className="text-3xl md:text-4xl font-bold">
                Event Security
              </h1>
              <p className="text-gray-300 mt-2">
                Ensuring smooth, safe, and controlled events for all attendees.
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 text-gray-300 leading-relaxed"
          >
            <h2 className="text-2xl font-bold text-white">
              Professional Event Protection
            </h2>

            <p>
              Events attract large crowds — which makes them vulnerable to
              disturbances, criminal activities, or unexpected incidents.
              Oscardyne Security provides well-trained personnel to maintain
              order, safety, and smooth operations throughout your event.
            </p>

            <h3 className="text-xl font-semibold text-white">
              Our Event Security Services
            </h3>

            <ul className="list-disc pl-6 space-y-4">
              <li>
                <span className="font-semibold text-white">
                  Crowd Management:
                </span>{" "}
                Ensuring safe movement of people, preventing overcrowding, and
                controlling entrances/exits.
              </li>

              <li>
                <span className="font-semibold text-white">
                  VIP & Executive Protection:
                </span>{" "}
                Discreet and professional bodyguard services for high-profile
                guests.
              </li>

              <li>
                <span className="font-semibold text-white">
                  Access Control:
                </span>{" "}
                Securing entrances, checking passes, and ensuring only
                authorized individuals enter restricted zones.
              </li>

              <li>
                <span className="font-semibold text-white">
                  Emergency Response:
                </span>{" "}
                Rapid action for medical emergencies, fights, or unexpected
                threats.
              </li>

              <li>
                <span className="font-semibold text-white">
                  Surveillance Monitoring:
                </span>{" "}
                Using CCTV and trained personnel to detect suspicious activity
                early.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-white">
              Suitable For:
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>Concerts & Festivals</li>
              <li>Corporate Events</li>
              <li>Political Gatherings</li>
              <li>Weddings & Private Occasions</li>
              <li>Sports Events</li>
            </ul>

            <p>
              With Oscardyne Security handling your event, you guarantee a
              peaceful atmosphere where people can enjoy themselves without
              fear or disruptions.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
