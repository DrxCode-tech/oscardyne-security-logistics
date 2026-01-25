"use client";
import { useEffect, useState } from "react";

type Application = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  fileUrl?: string;
  submittedAt: string;
};

export default function CareerDashboard() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch("/api/grant");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        // Convert Firestore timestamps to strings
        const formatted: Application[] = data.map((doc: any) => ({
          id: doc.id,
          name: doc.name,
          email: doc.email,
          phone: doc.phone || "",
          fileUrl: doc.fileUrl || "",
          submittedAt: new Date(doc.submittedAt._seconds * 1000).toLocaleDateString(),
        }));

        setApplications(formatted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading)
    return <p className="text-center text-gray-400 py-10">Loading applications...</p>;

  if (applications.length === 0)
    return <p className="text-center text-gray-400 py-10">No applications yet.</p>;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-400">Job Applications</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-gray-300">
              <th className="py-3 px-2">Name</th>
              <th className="py-3 px-2">Email</th>
              <th className="py-3 px-2">Phone</th>
              <th className="py-3 px-2">Resume</th>
              <th className="py-3 px-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr
                key={app.id}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >
                <td className="py-3 px-2">{app.name}</td>
                <td className="py-3 px-2 text-blue-400">{app.email}</td>
                <td className="py-3 px-2">{app.phone}</td>
                <td className="py-3 px-2">
                  {app.fileUrl ? (
                    <a
                      href={app.fileUrl}
                      target="_blank"
                      className="text-yellow-400 hover:underline"
                    >
                      View
                    </a>
                  ) : (
                    "—"
                  )}
                </td>
                <td className="py-3 px-2 text-gray-400">{app.submittedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
