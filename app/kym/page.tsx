"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';
import Layout from '@/app/layout';
// Import your JSON data
import data from './data.json';

// Extract the municipality data from the JSON
const municipalityData = data.Sheet1;

const KnowYourMunicipality: React.FC = () => {
  const [pincode, setPincode] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState('');

  const handleSearch = () => {
    // Normalize the pincode input
    const normalizedPincode = pincode.trim();

    // Find all municipalities that match the pincode
    const foundMunicipalities = municipalityData.filter((entry) => {
      // Convert Pincode to string to handle both string and number cases
      const pincodeString = entry.Pincode.toString();

      // Handle pincode ranges (e.g., "736121 - 736123")
      if (pincodeString.includes('-')) {
        const [start, end] = pincodeString.split('-').map((p: string) => parseInt(p.trim(), 10));
        const inputPincode = parseInt(normalizedPincode, 10);
        return inputPincode >= start && inputPincode <= end;
      } else {
        return pincodeString === normalizedPincode;
      }
    });

    if (foundMunicipalities.length > 0) {
      setResults(foundMunicipalities);
      setError('');
    } else {
      setResults([]);
      setError('No municipality found for the given pincode.');
    }
  };

  return (
    <Layout>
    <div className="min-h-screen p-6" style={{ backgroundColor: '#FFECE2' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#2D2D2D' }}>
            Know Your Municipality
          </h1>
          <p className="text-lg" style={{ color: '#4A4A4A' }}>
            Enter your pincode to find your municipality details
          </p>
        </header>

        {/* Search Form */}
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Enter your pincode..."
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="flex-1 p-3 border-2 border-primary-dark rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
              style={{ backgroundColor: 'white' }}
            />
            <button
              onClick={handleSearch}
              className="px-6 py-3 bg-primary-dark text-white rounded-lg hover:bg-accent transition-colors"
            >
              Search
            </button>
          </div>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </div>

        {/* Results Section */}
        {results.length > 0 && (
          <div className="space-y-6">
            {results.map((result, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#2D2D2D' }}>
                  Municipality Details {results.length > 1 ? `(${index + 1})` : ''}
                </h2>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left py-2" style={{ color: '#4A4A4A' }}>Field</th>
                      <th className="text-left py-2" style={{ color: '#4A4A4A' }}>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 font-medium" style={{ color: '#2D2D2D' }}>Pincode</td>
                      <td className="py-2" style={{ color: '#2D2D2D' }}>{result.Pincode}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium" style={{ color: '#2D2D2D' }}>Municipality</td>
                      <td className="py-2" style={{ color: '#2D2D2D' }}>{result.ULB}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium" style={{ color: '#2D2D2D' }}>Mayor/Chairperson</td>
                      <td className="py-2" style={{ color: '#2D2D2D' }}>{result['Mayor/Chairman/Chairperson']}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium" style={{ color: '#2D2D2D' }}>Mayor/Chairperson Contact</td>
                      <td className="py-2" style={{ color: '#2D2D2D' }}>{result['Mayor/Chairman/Chairperson Mob']}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium" style={{ color: '#2D2D2D' }}>EO</td>
                      <td className="py-2" style={{ color: '#2D2D2D' }}>{result.EO}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium" style={{ color: '#2D2D2D' }}>EO Contact</td>
                      <td className="py-2" style={{ color: '#2D2D2D' }}>{result['EO Mob']}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium" style={{ color: '#2D2D2D' }}>FO</td>
                      <td className="py-2" style={{ color: '#2D2D2D' }}>{result.FO}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium" style={{ color: '#2D2D2D' }}>FO Contact</td>
                      <td className="py-2" style={{ color: '#2D2D2D' }}>{result['FO Mob']}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium" style={{ color: '#2D2D2D' }}>Last Updated</td>
                      <td className="py-2" style={{ color: '#2D2D2D' }}>{result['Last Updated']}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </Layout>
  );
};

export default KnowYourMunicipality;