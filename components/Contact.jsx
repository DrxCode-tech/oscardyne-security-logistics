// components/Contact.jsx
'use client'

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setMsg("Request submitted successfully!");
        e.target.reset();
      } else {
        setMsg("Failed to send request. Try again.");
      }
    } catch (err) {
      setMsg("Network error. Try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-6 bg-white/4 backdrop-blur-lg border border-white/8">
            <h3 className="text-xl font-semibold text-white mb-3">Request a Quote</h3>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                name="name"
                className="p-3 rounded-md bg-black/60 border border-white/8 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Full name"
                required
              />
              <input
                name="phone"
                className="p-3 rounded-md bg-black/60 border border-white/8 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Phone number"
                required
              />
              <input
                name="email"
                type="email"
                className="p-3 rounded-md bg-black/60 border border-white/8 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Email"
                required
              />
              <textarea
                name="message"
                className="p-3 rounded-md bg-black/60 border border-white/8 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                rows={4}
                placeholder="Is there anything important you would like Oscardyne to know?"
                required
              />

              <button
                disabled={loading}
                className="mt-3 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-yellow-400 text-black font-semibold hover:scale-105 transition"
              >
                {loading ? "Sending..." : "Submit Request"}
              </button>

              {msg && <p className="text-sm text-green-400 mt-2">{msg}</p>}
            </form>
          </div>

          <div
            className="rounded-2xl p-6 border border-white/6 bg-black/60 bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: "url('/images/special.jpg')" }}
          >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white">Contact</h3>

              <div className="mt-3 text-gray-300 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <MapPin size={18} /> Calgary Alberta, Canada
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} /> (403) 472 1938
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} /> oscarfitnessco@gmail.com
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm text-gray-300 mb-2">Office Hours</h4>
                <div className="text-gray-400 text-sm">Mon — Sun: 24/7</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}