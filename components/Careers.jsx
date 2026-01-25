// components/Careers.jsx
'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Careers() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const qualifications = [
    "At least 18 years old with a high school diploma or GED",
    "Citizen or permanent resident of the working country",
    "Clean criminal background (felonies or serious misdemeanors disqualify candidates)",
    "Required security licensing and certifications, including training hours and exams",
    "Armed security roles require firearms training and licensing",
    "Physical and health requirements: medical exam, drug screening, physical fitness",
    "Training on company protocols, emergency procedures, and customer service",
    "Advanced roles may require certifications in loss prevention, cybersecurity, or management",
    "Strong communication and interpersonal skills; driving license for certain roles",
    "Specialized roles may require prior security experience, IT knowledge, or supervisory experience",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) {
      setSelectedFile(null);
      return;
    }
    setSelectedFile({ preview: URL.createObjectURL(file), file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      if (selectedFile?.file) formData.append("file", selectedFile.file);

      const response = await fetch("/api/career", { 
        method: "POST", 
        body: formData 
      });
      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        setMessage("Application submitted successfully!");
        setForm({ name: "", email: "", phone: "" });
        setSelectedFile(null);
      } else {
        setMessage("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error submitting application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="careers" className="py-20 bg-black/70 relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-black/50 to-yellow-900/20 pointer-events-none blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400 text-center mb-6"
        >
          Join Our Team
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7 }} 
          className="text-gray-300 text-center mb-10 text-lg"
        >
          If you meet the following requirements, apply to become a professional member of our security team.
        </motion.p>

        <motion.ul 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }} 
          className="grid gap-4 max-w-3xl mx-auto mb-12"
        >
          {qualifications.map((q, i) => (
            <li 
              key={i} 
              className="flex items-start gap-4 text-gray-200 backdrop-blur-md bg-white/5 rounded-xl p-4 border border-white/10 shadow-lg hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] transition-all duration-300 group"
            >
              <span className="mt-1 text-blue-400 font-bold text-xl group-hover:text-yellow-400 transition-colors">•</span>
              <span className="text-sm md:text-base">{q}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }} 
          className="rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_15px_40px_rgba(0,120,255,0.25)] max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400">
            Apply Now
          </h3>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              placeholder="Full name" 
              required 
              className="p-4 rounded-xl bg-black/60 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
            />
            <input 
              name="email" 
              type="email" 
              value={form.email} 
              onChange={handleChange} 
              placeholder="Email" 
              required 
              className="p-4 rounded-xl bg-black/60 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
            />
            <input 
              name="phone" 
              value={form.phone} 
              onChange={handleChange} 
              placeholder="Phone number" 
              required 
              className="p-4 rounded-xl bg-black/60 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
            />

            <input
              type="file"
              name="file"
              accept="image/*,.pdf,.doc,.docx"
              onChange={handleFileChange}
              className="p-4 rounded-xl bg-black/60 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            {selectedFile && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.35 }} 
                className="mt-4 flex justify-center"
              >
                <Image 
                  src={selectedFile.preview} 
                  alt="Selected" 
                  width={300} 
                  height={300} 
                  className="rounded-xl shadow-lg border border-white/10" 
                />
              </motion.div>
            )}

            <motion.button 
              type="submit" 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.97 }} 
              disabled={loading} 
              className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-yellow-400 text-black font-bold shadow-lg transition-transform duration-300"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </motion.button>

            {message && <p className="mt-2 text-center text-green-400">{message}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
}