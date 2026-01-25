"use client";
import { useEffect, useState } from "react";

type Report = {
  id: string;
  name: string;
  phone?: string;
  email: string;
  message: string;
  createdAt: string;
};

export default function ContactReports() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await fetch("/api/getContactReports");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        const formatted: Report[] = data.map((doc: any) => ({
          id: doc.id,
          name: doc.name,
          phone: doc.phone || "",
          email: doc.email,
          message: doc.message,
          createdAt: new Date(doc.createdAt._seconds * 1000).toLocaleDateString(),
        }));

        setReports(formatted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  if (loading)
    return <p className="text-center text-gray-400 py-10">Loading contact reports...</p>;

  if (reports.length === 0)
    return <p className="text-center text-gray-400 py-10">No contact reports yet.</p>;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-yellow-400">Contact Reports</h2>
      <div className="space-y-6">
        {reports.map((report) => (
          <div
            key={report.id}
            className="p-5 rounded-xl bg-black/40 border border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div>
                <p className="font-semibold">{report.name}</p>
                <p className="text-sm text-blue-400">{report.email}</p>
              </div>
              <span className="text-sm text-gray-400 mt-2 md:mt-0">
                {report.createdAt}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">{report.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
