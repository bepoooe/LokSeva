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
      <div className="min-h-screen flex items-center justify-center bg-[#FFECE2]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#D97B4F] mb-2">Admin Login Portal</h1>
            <p className="text-gray-600">Please login to access the dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Municipality</label>
              <select
                value={municipality}
                onChange={(e) => setMunicipality(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D97B4F]"
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

            <div>
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D97B4F]"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D97B4F]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-[#D97B4F] text-white py-2 rounded-lg hover:bg-[#BF6538] transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
