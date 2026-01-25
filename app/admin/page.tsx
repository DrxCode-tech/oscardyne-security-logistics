"use client";

import { useState } from "react";
import CareerDashboard from "./CareerDashboard";
import ContactReports from "./ContactReports";

export default function AdminPage() {
  const [page, setPage] = useState<"applications" | "reports">("applications");

  return (
    <section className="min-h-screen bg-black/95 p-6 text-white">
      <div className="max-w-6xl mx-auto">

        {/* TABS */}
        <div className="flex gap-4 mb-10">
          <button
            onClick={() => setPage("applications")}
            className={`px-5 py-3 rounded-xl font-semibold transition 
              ${
                page === "applications"
                  ? "bg-blue-600 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
          >
            Job Applications
          </button>

          <button
            onClick={() => setPage("reports")}
            className={`px-5 py-3 rounded-xl font-semibold transition 
              ${
                page === "reports"
                  ? "bg-yellow-500 text-black"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
          >
            Contact Reports
          </button>
        </div>

        {/* CONTENT */}
        {page === "applications" ? (
          <CareerDashboard />
        ) : (
          <ContactReports />
        )}
      </div>
    </section>
  );
}
