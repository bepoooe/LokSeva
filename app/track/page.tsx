'use client';
import { useState } from 'react';
import supabase from '@/lib/supabaseClient';
import Image from "next/image";

export default function TrackComplaint() {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [complaints, setComplaints] = useState<any[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchComplaints = async () => {
    setLoading(true);
    setError('');
    setComplaints([]);

    if (aadhaarNumber.length !== 12 || !/^\d{12}$/.test(aadhaarNumber)) {
      setError('Invalid Aadhaar number. Please enter a 12-digit number.');
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('complaints')
        .select('*')
        .eq('aadhaar_number', aadhaarNumber)
        .order('created_at', { ascending: false });

      if (error || !data || data.length === 0) {
        throw new Error('No complaints found for this Aadhaar number.');
      }

      setComplaints(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF4ED] p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-[#D97B4F] mb-6 text-center">
          Track Your Complaint
        </h1>

        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter Aadhaar Number"
            value={aadhaarNumber}
            onChange={(e) => setAadhaarNumber(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D97B4F]"
          />

          <button
            onClick={fetchComplaints}
            className="w-full bg-[#D97B4F] text-white py-2 rounded-lg hover:bg-[#BF6538] transition-colors"
          >
            Track Complaint
          </button>
        </div>

        {loading && (
          <div className="mt-6 text-center">
            <p className="text-gray-600">Loading complaints...</p>
          </div>
        )}

        {error && (
          <div className="mt-6 text-center">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {complaints.length > 0 && (
          <div className="mt-8 space-y-6">
            {complaints.map((complaint) => (
              <div
                key={complaint.id}
                className="p-6 bg-white rounded-lg shadow-md border border-gray-100"
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-[#D97B4F]">
                    {complaint.title || 'Complaint Details'}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      complaint.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : complaint.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {complaint.status}
                  </span>
                </div>

                <p className="mt-3 text-gray-600">{complaint.description}</p>

                <div className="mt-4 text-sm text-gray-500">
                  <p>
                    <span className="font-medium">Filed on:</span>{' '}
                    {new Date(complaint.created_at).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="font-medium">Location:</span>{' '}
                    {complaint.location}
                  </p>
                </div>

                {complaint.image_url && (
                  <div className="mt-4">
                    <img
  src={complaint.image_url}
  alt="Complaint Image"
  className="w-full h-48 object-cover rounded-lg border border-gray-200"
/>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}