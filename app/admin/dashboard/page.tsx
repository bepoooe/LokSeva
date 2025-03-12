"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Layout from "@/app/layout"; // Ensure correct import path
import supabase from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

const Image = dynamic(() => import("next/image"), { ssr: false }); // ✅ Fix hydration issue

type ComplaintStatus = "Pending" | "In Progress" | "Resolved";

interface Complaint {
  id: string;
  title?: string;
  description: string;
  status: ComplaintStatus;
  created_at: string;
  full_name: string;
  municipality: string;
  location: string;
  image_url: string | null;
  aadhaar_number: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const municipality = localStorage.getItem("municipality");

    if (!authToken || !municipality) {
      router.push("/admin/login");
    } else {
      fetchComplaints(municipality);
    }
  }, [router]); // ✅ Ensures reactivity

  const fetchComplaints = async (municipality: string) => {
    try {
      const { data, error } = await supabase
        .from("complaints")
        .select("*")
        .eq("municipality", municipality)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setComplaints(data || []);
    } catch (err: any) {
      console.error("Error fetching complaints:", err);
      setError(err.message || "Failed to load complaints");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: ComplaintStatus) => {
    try {
      setIsUpdatingStatus(true);

      const { error } = await supabase
        .from("complaints")
        .update({ status: newStatus })
        .eq("id", id);

      if (error) throw error;

      setComplaints((prevComplaints) =>
        prevComplaints.map((complaint) =>
          complaint.id === id ? { ...complaint, status: newStatus } : complaint
        )
      );
    } catch (err: any) {
      console.error("Error updating status:", err);
      setError(err.message || "Failed to update status");
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("municipality");
    router.push("/admin/login");
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-[#FFF4ED]">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center bg-[#FFF4ED] text-red-500">{error}</div>;
  }

  return (
    <Layout>
      <div className="min-h-screen bg-[#FFF4ED]">
        {/* Navbar */}
        <nav className="bg-[#D97B4F] p-6 flex justify-between items-center shadow-md">
          <h1 className="text-white text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-white text-[#D97B4F] px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Logout
          </button>
        </nav>

        {/* Main Content */}
        <div className="p-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#BF6538] mb-8">Recent Complaints</h2>

            {/* Complaint Grid */}
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {complaints.length === 0 ? (
                <div className="col-span-full text-center py-8 text-gray-500">
                  No complaints found. New submissions will appear here.
                </div>
              ) : (
                complaints.map((complaint) => (
                  <div
                    key={complaint.id}
                    className="p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    {/* Complaint Header */}
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-[#D97B4F]">
                        {complaint.full_name}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          complaint.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : complaint.status === "In Progress"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {complaint.status}
                      </span>
                    </div>

                    {/* Complaint Details */}
                    <p className="mt-4 text-gray-600">{complaint.description}</p>
                    <p className="mt-2 text-sm text-gray-500">
                      <span className="font-medium">Filed on:</span>{" "}
                      {new Date(complaint.created_at).toLocaleDateString()}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      <span className="font-medium">Location:</span>{" "}
                      {complaint.location}
                    </p>

                    {/* Complaint Image */}
                    {complaint.image_url && (
                      <div className="mt-4">
                        <Image
                          src={complaint.image_url}
                          alt="Complaint Image"
                          className="w-full h-48 object-cover rounded-lg border border-gray-200"
                          width={400}
                          height={200}
                        />
                      </div>
                    )}

                    {/* Status Update Dropdown */}
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Update Status:
                      </label>
                      <select
                        value={complaint.status}
                        onChange={(e) =>
                          handleStatusChange(complaint.id, e.target.value as ComplaintStatus)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D97B4F] text-sm"
                        disabled={isUpdatingStatus}
                      >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                      </select>
                      {isUpdatingStatus && (
                        <p className="mt-2 text-sm text-gray-500">Updating...</p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
