// components/Footer.jsx
'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const router = useRouter();
  
  return (
    <footer className="w-full bg-black/95 border-t border-white/10 mt-16 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/images/Security1.jpg"
                alt="logo"
                width={48}
                height={48}
                className="object-contain rounded-lg shadow-md"
              />
              <h2 className="text-lg font-bold text-white tracking-wide">
                Oscardyne Security Logistics
              </h2>
            </div>

            <button
              onClick={() => router.push("/admin")}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-md hover:shadow-blue-600/30 hover:scale-105 transition-all"
            >
              View Job Applications
            </button>
          </div>

          <p className="text-gray-400 text-xs mt-6">
            © {new Date().getFullYear()} Oscardyne Fitness and Security Logistics.
            <br />All rights reserved.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div>
            <h3 className="text-white font-semibold mb-3 tracking-wide">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#careers" className="hover:text-white transition">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 tracking-wide">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => router.push("/terms-of-use")} 
                  className="hover:text-yellow-400 transition"
                >
                  Terms of Use
                </button>
              </li>
              <li>
                <button 
                  onClick={() => router.push("/privacy-policy")} 
                  className="hover:text-yellow-400 transition"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-white font-semibold mb-3 tracking-wide">Follow Us</h3>
            <div className="flex items-center gap-5">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                <FaLinkedin size={22} />
              </a>
              <a href="https://wa.me/14034721928" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition">
                <FaWhatsapp size={22} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition">
                <FaFacebook size={22} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition">
                <FaInstagram size={22} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition">
                <FaYoutube size={24} />
              </a>
              <a href="https://x.com/oscardynefitnes?s=21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition">
                <FaXTwitter size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 tracking-wide">Trusted By</h3>
            <div className="flex items-center gap-4">
              <Image src="/images/Security6.jpg" alt="badge" width={48} height={48} className="opacity-90 hover:opacity-100 transition" />
              <Image src="/images/Security8.jpg" alt="badge" width={48} height={48} className="opacity-90 hover:opacity-100 transition" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}