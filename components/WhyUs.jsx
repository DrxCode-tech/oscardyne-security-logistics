"use client";

import { useRouter } from "next/navigation";

export default function WhyUs() {
  const router = useRouter();

  const points = [
    "Licensed & Vetted Personnel",
    "24/7 Operations & Rapid Response",
    "Custom Security Plans",
    "Modern Equipment & Monitoring",
  ];

  return (
    <section id="why" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Why Choose Oscardyne
          </h2>

          <p className="text-gray-300 mb-6">
            We combine local expertise with global standards to provide secure,
            reliable and discreet protection services for businesses, events and
            individuals.
          </p>

          <ul className="grid gap-3">
            {points.map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-300"
              >
                <span className="mt-1 text-blue-400 font-bold">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl overflow-hidden bg-white/4 backdrop-blur-lg border border-white/8 p-6">
          <h3 className="text-xl font-semibold text-white mb-3">
            Custom Security Plan
          </h3>

          <p className="text-gray-300 text-sm">
            Tell us about your site and we&apos;ll craft a security plan to fit
            your needs. Free assessment available.
          </p>

          <div className="mt-4">
            <button
              onClick={() => router.push("/assessment")}
              className="inline-flex items-center px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-yellow-400 text-black font-semibold"
            >
              Get Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
