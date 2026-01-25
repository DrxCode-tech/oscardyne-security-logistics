"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function CareerDashboard() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  // Selected application for modal
  const [selected, setSelected] = useState(null);
  const [grantDate, setGrantDate] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    async function fetchApps() {
      try {
        const res = await fetch("/api/careerApplications");
        const data = await res.json();
        setApps(data.applications || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchApps();
  }, []);

  async function grantApplication() {
    if (!grantDate) return alert("Please enter a date.");

    setSending(true);

    try {
      const res = await fetch("/api/grant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: selected.email,
          name: selected.name,
          date: grantDate,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      alert("Application granted and email sent!");
      setSelected(null);
      setGrantDate("");
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="min-h-screen bg-black/90 py-16 px-4">
      <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text">
        Job Applications
      </h1>

      {loading && (
        <p className="text-center text-gray-400 text-lg">Loading...</p>
      )}

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {apps.map((app) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setSelected(app)}
            className="cursor-pointer bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(0,120,255,0.25)] transition-all"
          >
            {app.fileUrl && (
              <img
                src={app.fileUrl}
                alt="Applicant file"
                className="w-full h-48 object-cover rounded-xl mb-4 border border-white/10"
              />
            )}

            <div className="text-white space-y-2">
              <p className="text-xl font-bold">{app.name}</p>
              <p className="text-blue-300 text-sm">{app.email}</p>
              <p className="text-gray-300 text-sm">{app.phone}</p>
              <p className="text-xs text-gray-400 mt-2">
                Applied:{" "}
                {app.submittedAt
                  ? dayjs(
                      app.submittedAt._seconds
                        ? new Date(app.submittedAt._seconds * 1000)
                        : new Date(app.submittedAt)
                    ).fromNow()
                  : "Unknown"}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* EMPTY */}
      {!loading && apps.length === 0 && (
        <p className="text-center text-gray-400 text-lg mt-10">
          No applications yet.
        </p>
      )}

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center p-6 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 border border-white/20 rounded-2xl p-8 max-w-2xl w-full text-white relative"
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✕
            </button>

            {/* BIG IMAGE */}
            {selected.fileUrl && (
              <img
                src={selected.fileUrl}
                className="w-full h-80 object-cover rounded-xl mb-6"
              />
            )}

            {/* DETAILS */}
            <h2 className="text-3xl font-bold mb-2">{selected.name}</h2>
            <p className="text-blue-300">{selected.email}</p>
            <p className="text-gray-300 mb-6">{selected.phone}</p>

            {/* DATE INPUT */}
            <div className="mb-6">
              <label className="block mb-2 text-gray-300">
                Enter appointment date:
              </label>
              <input
                type="date"
                value={grantDate}
                onChange={(e) => setGrantDate(e.target.value)}
                className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white"
              />
            </div>

            {/* GRANT BUTTON */}
            <button
              onClick={grantApplication}
              disabled={sending}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-yellow-400 text-black font-bold shadow-lg disabled:opacity-50"
            >
              {sending ? "Sending..." : "Grant Application"}
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
