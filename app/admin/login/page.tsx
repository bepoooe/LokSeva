'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import municipalities from './muni.json';
import Layout from '@/app/layout';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedMunicipality = municipalities.find(
      (mun) => mun.id === municipality
    );

    if (
      selectedMunicipality &&
      username === selectedMunicipality.username &&
      password === selectedMunicipality.password
    ) {
      localStorage.setItem('authToken', 'dummy-token');
      localStorage.setItem('municipality', selectedMunicipality.id);
      router.push('/admin/dashboard');
    } else {
      setError('Invalid credentials or municipality not selected');
    }
  };


  return (
    <Layout>
      <div
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #FFECE2 0%, #E8D4C9 100%)',
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <div className="absolute w-80 h-80 bg-[#D97B4F] rounded-full -top-40 -left-40"></div>
          <div className="absolute w-64 h-64 bg-[#BF6538] rounded-full -bottom-32 -right-32"></div>
        </div>

        {/* Enhanced Login Card */}
        <div className="bg-white p-10 rounded-2xl shadow-2xl w-96 relative z-10
          transform transition-all hover:shadow-xl">
          {/* Logo Header */}
          <div className="mb-8 flex flex-col items-center">
            <img 
              src="/logo.png" 
              alt="Government Logo" 
              className="w-20 h-20 mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-800">
              <span className="text-[#D97B4F]">Municipality</span> Admin
            </h1>
            <p className="text-sm text-gray-500 mt-1">West Bengal Government Initiative</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Municipality Select */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Municipality</label>
              <select
                value={municipality}
                onChange={(e) => setMunicipality(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                  focus:border-[#D97B4F] focus:ring-2 focus:ring-[#D97B4F]/20 
                  transition-all duration-200"
                required
              >
                <option value="" disabled>Select Municipality</option>
                {municipalities.map((mun) => (
                  <option key={mun.id} value={mun.id}>
                    {mun.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Username Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
                  focus:border-[#D97B4F] focus:ring-2 focus:ring-[#D97B4F]/20
                  transition-all duration-200"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
                  focus:border-[#D97B4F] focus:ring-2 focus:ring-[#D97B4F]/20
                  transition-all duration-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 
                text-sm flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#D97B4F] text-white py-3.5 rounded-xl 
                hover:bg-[#BF6538] transition-all duration-300 
                transform hover:scale-[1.02] font-semibold
                flex items-center justify-center"
            >
              Log In
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}