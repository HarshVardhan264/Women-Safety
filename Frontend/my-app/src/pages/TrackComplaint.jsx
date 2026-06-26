import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  FiSearch,
  FiRefreshCcw,
  FiFilter,
  FiEye,
  FiShield,
  FiAlertCircle,
} from "react-icons/fi";

const complaints = [
  {
    id: "WS-001",
    category: "Cyber Harassment",
    anonymous: "Yes",
    status: "Pending",
    priority: "High",
    date: "24 May 2025, 07:30 PM",
  },
  {
    id: "WS-002",
    category: "Domestic Violence",
    anonymous: "No",
    status: "Investigating",
    priority: "Medium",
    date: "23 May 2025, 04:15 PM",
  },
];

const TrackComplaint = () => {
  const [complaintId, setComplaintId] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [viewTable, setViewTable] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (complaintId.trim() && captcha.trim()) {
      setViewTable(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FEF7F2] text-slate-900">
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40">
          <h1 className="text-3xl font-black text-slate-950">
            Track your Complaint Status
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            Enter your complaint ID and captcha text to view the latest status
            of your complaint.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-[32px] bg-white p-8 "
          >
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <label className="font-semibold">Complaint ID</label>

                <div className="mt-2 flex items-center rounded-2xl border px-4 py-3">
                  <FiSearch className="text-violet-500" />

                  <input
                    placeholder="Enter Complaint ID"
                    className="ml-3 w-full outline-none"
                    value={complaintId}
                    onChange={(e) => setComplaintId(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold">Captcha</label>

                <div className="flex gap-3 mt-2">
                  <div className="flex-1 rounded-2xl border bg-violet-50 flex items-center justify-center text-2xl tracking-[6px] font-bold text-violet-700">
                    A7KP8
                  </div>

                  <button type="button" className="rounded-2xl border p-4">
                    <FiRefreshCcw />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center rounded-2xl border px-4 py-3">
                <FiShield className="text-violet-500" />

                <input
                  placeholder="Enter captcha text"
                  className="ml-3 w-full outline-none"
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button className="px-12 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-violet-600 to-pink-500 hover:scale-105 transition">
                Submit →
              </button>
            </div>
          </form>
        </div>

        {viewTable && (
          <div className="mt-10 rounded-[32px] bg-white shadow-xl p-8 border border-slate-200">
            <div className="flex justify-between items-center flex-wrap gap-5">
              <div>
                <h2 className="text-3xl font-bold">Your Complaints</h2>

                <p className="text-slate-500 mt-2">
                  Track every complaint using your Complaint ID.
                </p>
              </div>

              <div className="flex gap-3">
                <div className="flex items-center gap-2 rounded-full border px-5 py-3">
                  <FiSearch className="text-violet-500" />

                  <input
                    placeholder="Search Complaint ID"
                    className="outline-none"
                  />
                </div>

                <button className="rounded-full border border-violet-300 px-5 py-3 flex items-center gap-2 text-violet-600 hover:bg-violet-50">
                  <FiFilter />
                  Filter
                </button>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border">
              <table className="w-full">
                <thead className="bg-violet-50">
                  <tr>
                    <th className="p-5 text-left">Complaint ID</th>

                    <th>Category</th>

                    <th>Anonymous</th>

                    <th>Status</th>

                    <th>Priority</th>

                    <th>Date</th>

                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {complaints.map((item) => (
                    <tr
                      key={item.id}
                      className="border-t hover:bg-slate-50 transition"
                    >
                      <td className="p-5 font-semibold text-violet-700">
                        {item.id}
                      </td>
                      <td>{item.category}</td>
                      <td>
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            item.anonymous === "Yes"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {item.anonymous}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`px-4 py-1 rounded-full text-sm ${
                            item.status === "Pending"
                              ? "bg-orange-100 text-orange-600"
                              : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`px-4 py-1 rounded-full text-sm ${
                            item.priority === "High"
                              ? "bg-red-100 text-red-600"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.priority}
                        </span>
                      </td>
                      <td>{item.date}</td>
                      <td>
                        <button className="rounded-full border border-violet-300 px-4 py-2 flex items-center gap-2 hover:bg-violet-50">
                          <FiEye />
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <p className="text-slate-500">Showing 1–2 of 2 complaints</p>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-xl border">←</button>
                <button className="w-10 h-10 rounded-xl bg-violet-600 text-white">
                  1
                </button>
                <button className="w-10 h-10 rounded-xl border">→</button>
              </div>
            </div>
          </div>
        )}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-violet-50 p-6 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-violet-200 flex items-center justify-center">
              <FiShield className="text-violet-700" />
            </div>

            <div>
              <h3 className="font-bold">Your information is safe</h3>

              <p className="text-slate-500 mt-1">
                We never expose your complaint information to unauthorized
                users.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-200 flex items-center justify-center">
              <FiAlertCircle className="text-orange-700" />
            </div>

            <div>
              <h3 className="font-bold">Emergency Help</h3>

              <p className="text-slate-500 mt-1">
                Call 112 (Police) or 181 (Women Helpline).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackComplaint;
