"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-gray-300 hover:text-blue-400 transition mb-6"
    >
      <ArrowLeft size={18} />
      Back to Services
    </Link>
  );
}
