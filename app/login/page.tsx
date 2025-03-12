"use client";
import { useState } from "react";
import { signInUser, signUpUser } from "@/lib/auth";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Layout from '@/app/layout';

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const router = useRouter(); // Initialize router

  const handleAuth = async () => {
    try {
      if (isLogin) {
        await signInUser(email, password);
        setMessage("Logged in successfully!");
        router.push("/Grievance"); // Redirect to home/page.tsx
      } else {
        await signUpUser(email, password);
        setMessage("Account created! Please check your email.");
      }
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  const handleTrackComplaint = () => {
    router.push("/track"); // Redirect to the tracking page
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-[#FFECE2]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#D97B4F] mb-2">
              {isLogin ? "User Login Portal" : "Create Account"}
            </h2>
            <p className="text-gray-600">
              {isLogin ? "Login to continue" : "Sign up to get started"}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D97B4F]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D97B4F]"
              />
            </div>

            <button
              onClick={handleAuth}
              className="w-full bg-[#D97B4F] text-white py-2 rounded-lg hover:bg-[#BF6538] transition-colors"
            >
              {isLogin ? "Login" : "Signup"}
            </button>

            <button
              onClick={handleTrackComplaint}
              className="w-full bg-[#4F6DD9] text-white py-2 rounded-lg hover:bg-[#3852BF] transition-colors"
            >
              Track Complaint
            </button>

            <p
              onClick={() => setIsLogin(!isLogin)}
              className="text-center text-[#D97B4F] hover:text-[#BF6538] cursor-pointer transition-colors"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
            </p>

            {message && (
              <div className="text-center text-red-500 text-sm mt-4">
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}