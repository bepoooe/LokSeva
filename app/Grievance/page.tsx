'use client';
import React, { useState } from 'react';
import Layout from '@/app/layout';
import supabase from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

// Define the municipalities with id and name
const municipalities = [
  { id: '1', name: 'Alipurduar' },
  { id: '2', name: 'Arambagh' },
  { id: '3', name: 'Asansol Municipal Corporation' },
  { id: '4', name: 'Ashokenagar-Kalyangarh' },
  { id: '5', name: 'Baduria' },
  { id: '6', name: 'Baidyabati' },
  { id: '7', name: 'Bally' },
  { id: '8', name: 'Balurghat' },
  { id: '9', name: 'Bankura' },
  { id: '10', name: 'Bansberia' },
  { id: '11', name: 'Baranagar' },
  { id: '12', name: 'Barasat' },
  { id: '13', name: 'Barrackpore' },
  { id: '14', name: 'Baruipur' },
  { id: '15', name: 'Basirhat' },
  { id: '16', name: 'Beldanga' },
  { id: '17', name: 'Berhampore' },
  { id: '18', name: 'Bhadreswar' },
  { id: '19', name: 'Bhatpara' },
  { id: '20', name: 'Bidhannagar' },
  { id: '21', name: 'Birnagar' },
  { id: '22', name: 'Bishnupur' },
  { id: '23', name: 'Bolpur' },
  { id: '24', name: 'Bongaon' },
  { id: '25', name: 'Budge Budge' },
  { id: '26', name: 'Buniadpur' },
  { id: '27', name: 'Burdwan' },
  { id: '28', name: 'Chakdah' },
  { id: '29', name: 'Champdany' },
  { id: '30', name: 'Chandannagar' },
  { id: '31', name: 'Chandrakona' },
  { id: '32', name: 'Contai' },
  { id: '33', name: 'Cooch Behar' },
  { id: '34', name: 'Coopers Camp' },
  { id: '35', name: 'Dainhat' },
  { id: '36', name: 'Dalkhola' },
  { id: '37', name: 'Dankuni' },
  { id: '38', name: 'Darjeeling' },
  { id: '39', name: 'Dhuliyan Municipality' },
  { id: '40', name: 'Dhupguri' },
  { id: '41', name: 'Diamond Harbour' },
  { id: '42', name: 'Dinhata' },
  { id: '43', name: 'Domkal' },
  { id: '44', name: 'Dubrajpur' },
  { id: '45', name: 'Dum Dum' },
  { id: '46', name: 'Durgapur' },
  { id: '47', name: 'Egra' },
  { id: '48', name: 'Englishbazar' },
  { id: '49', name: 'Falakata' },
  { id: '50', name: 'Gangarampur' },
  { id: '51', name: 'Garulia' },
  { id: '52', name: 'Gayeshpur' },
  { id: '53', name: 'Ghatal' },
  { id: '54', name: 'Gobardanga' },
  { id: '55', name: 'Guskara' },
  { id: '56', name: 'Habra' },
  { id: '57', name: 'Haldia' },
  { id: '58', name: 'Haldibari' },
  { id: '59', name: 'Halisahar' },
  { id: '60', name: 'Haringhata' },
  { id: '61', name: 'Hoogly Chinsurah' },
  { id: '62', name: 'Howrah Municipal Corporation' },
  { id: '63', name: 'Islampur' },
  { id: '64', name: 'Jalpaiguri' },
  { id: '65', name: 'Jangipur' },
  { id: '66', name: 'Jhalda' },
  { id: '67', name: 'Jhargram' },
  { id: '68', name: 'Jiaganj Azimganj' },
  { id: '69', name: 'Joynagar-Mazilpur' },
  { id: '70', name: 'Kalimpong' },
  { id: '71', name: 'Kaliyaganj' },
  { id: '72', name: 'Kalna' },
  { id: '73', name: 'Kalyani' },
  { id: '74', name: 'Kamarhati' },
  { id: '75', name: 'Kanchrapara' },
  { id: '76', name: 'Kandi' },
  { id: '77', name: 'Katwa' },
  { id: '78', name: 'Kharagpur' },
  { id: '79', name: 'Kharar' },
  { id: '80', name: 'Khardah Municipality' },
  { id: '81', name: 'Khirpai' },
  { id: '82', name: 'Kolkata' },
  { id: '83', name: 'Konnagar' },
  { id: '84', name: 'Krishnanagar Municipality' },
  { id: '85', name: 'Kurseong' },
  { id: '86', name: 'Madhyamgram' },
  { id: '87', name: 'Maheshtala' },
  { id: '88', name: 'Mal' },
  { id: '89', name: 'Mathabhanga' },
  { id: '90', name: 'Maynaguri Municipality' },
  { id: '91', name: 'Mekhliganj' },
  { id: '92', name: 'Memari' },
  { id: '93', name: 'Midnapore' },
  { id: '94', name: 'Mirik' },
  { id: '95', name: 'Murshidabad' },
  { id: '96', name: 'Nabadwip' },
  { id: '97', name: 'Naihati' },
  { id: '98', name: 'Nalhati' },
  { id: '99', name: 'New Barrackpore' },
  { id: '100', name: 'North Barrackpore Municipality' },
  { id: '101', name: 'North Dum Dum' },
  { id: '102', name: 'Old Malda' },
  { id: '103', name: 'Panihati' },
  { id: '104', name: 'Panskura' },
  { id: '105', name: 'Pujali' },
  { id: '106', name: 'Purulia' },
  { id: '107', name: 'Raghunathpur Municipality' },
  { id: '108', name: 'Raiganj' },
  { id: '109', name: 'Rajpur Sonarpur' },
  { id: '110', name: 'Ramjibanpur' },
  { id: '111', name: 'Rampurhat' },
  { id: '112', name: 'Ranaghat' },
  { id: '113', name: 'Rishra' },
  { id: '114', name: 'Sainthia' },
  { id: '115', name: 'Santipur' },
  { id: '116', name: 'Serampore' },
  { id: '117', name: 'Siliguri' },
  { id: '118', name: 'Sonamukhi' },
  { id: '119', name: 'South Dum Dum' },
  { id: '120', name: 'Suri' },
  { id: '121', name: 'Taherpur' },
  { id: '122', name: 'Taki' },
  { id: '123', name: 'Tamralipta' },
  { id: '124', name: 'Tarakeshwar' },
  { id: '125', name: 'Titagarh' },
  { id: '126', name: 'Tufanganj' },
  { id: '127', name: 'Uluberia' },
  { id: '128', name: 'Uttarpara Kotrung' },
];

const GrievanceForm = () => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [gpsLocation, setGpsLocation] = useState<string>('');
  const [formData, setFormData] = useState({
    fullName: '',
    aadhaarNumber: '',
    municipality: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false); // For file upload loading state
  const [error, setError] = useState('');

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=en`,
              {
                headers: {
                  'User-Agent': 'GrievanceApp/1.0 (your.email@example.com)',
                },
              }
            );

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (data.display_name) {
              setGpsLocation(data.display_name);
            } else {
              setGpsLocation(`Lat: ${latitude}, Lng: ${longitude}`);
            }
          } catch (error: any) {
            console.error('Geocoding error:', error);
            alert(`Failed to fetch address from Nominatim. Using coordinates instead: Lat: ${latitude}, Lng: ${longitude}`);
            setGpsLocation(`Lat: ${latitude}, Lng: ${longitude}`);
          }
        },
        () => {
          alert('Failed to get location. Please allow location access or enter manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validate Aadhaar number
    if (formData.aadhaarNumber.length !== 12 || !/^\d+$/.test(formData.aadhaarNumber)) {
      setError('Aadhaar number must be 12 digits long.');
      setIsSubmitting(false);
      return;
    }

    try {
      let imageUrl = null;

      // Upload file if selected
      if (selectedFile) {
        setIsUploading(true); // Show loading state for file upload
        const fileExt = selectedFile.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;

        // Upload file to Supabase Storage
        const { data: fileData, error: fileError } = await supabase.storage
          .from('complaint-images')
          .upload(fileName, selectedFile);

        if (fileError) throw fileError;

        // Get public URL of the uploaded file
        const { data: urlData } = supabase.storage
          .from('complaint-images')
          .getPublicUrl(fileName);

        imageUrl = urlData.publicUrl;
        setIsUploading(false); // Hide loading state for file upload
      }

      // Insert complaint data into the database
      const { data, error } = await supabase
        .from('complaints')
        .insert([
          {
            full_name: formData.fullName,
            aadhaar_number: formData.aadhaarNumber,
            location: gpsLocation,
            municipality: formData.municipality, // Store municipality ID
            description: formData.description,
            image_url: imageUrl,
            status: 'Pending',
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) throw error;

      alert('Complaint submitted successfully!');
      router.push('/');
    } catch (error: any) {
      console.error('Detailed Error:', error);
      setError(`Failed to submit complaint: ${error.message || 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
      setIsUploading(false);
    }
  };

  return (
    <Layout>
      <div
        className="max-w-3xl mx-auto p-6 rounded-xl shadow-lg mt-10 animate-fade-in-up"
        style={{ backgroundColor: '#FFECE2' }}
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-primary-text transform transition-all duration-300 hover:scale-105">
          Submit Your Complaint
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="animate-slide-in-left">
            <label className="block text-primary-text-light font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full border-2 border-primary-dark/20 p-3 rounded-xl focus:border-accent 
                        focus:ring-2 focus:ring-accent/30 transition-all duration-300 placeholder-primary-text-light/60"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Aadhaar Input */}
          <div className="animate-slide-in-right">
            <label className="block text-primary-text-light font-medium mb-2">Aadhaar Number</label>
            <input
              type="text"
              name="aadhaarNumber"
              value={formData.aadhaarNumber}
              onChange={handleInputChange}
              className="w-full border-2 border-primary-dark/20 p-3 rounded-xl focus:border-accent 
                        focus:ring-2 focus:ring-accent/30 transition-all duration-300 placeholder-primary-text-light/60"
              placeholder="Enter your Aadhaar number"
              maxLength={12}
              required
            />
          </div>

          {/* Location Input */}
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="block text-primary-text-light font-medium mb-2">Current Location</label>
                <input
                  type="text"
                  className="w-full border-2 border-primary-dark/20 p-3 rounded-xl bg-white/80 
                            focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all duration-300"
                  value={gpsLocation}
                  placeholder="Fetching location..."
                  readOnly
                />
              </div>
              <button
                type="button"
                className="self-end bg-primary-dark text-primary-text px-6 py-3 rounded-xl hover:bg-accent 
                          hover:text-white transform transition-all duration-300 hover:scale-105 shadow-sm"
                onClick={getLocation}
              >
                📍 Use My Location
              </button>
            </div>
          </div>

          {/* Municipality Select */}
          <div className="animate-slide-in-right">
            <label className="block text-primary-text-light font-medium mb-2">Select Municipality</label>
            <select
              name="municipality"
              value={formData.municipality}
              onChange={handleInputChange}
              className="w-full border-2 border-primary-dark/20 p-3 rounded-xl bg-white/80 appearance-none 
                        focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all duration-300"
              required
            >
              <option value="">-- Select Municipality --</option>
              {municipalities.map((mun) => (
                <option key={mun.id} value={mun.id}>
                  {mun.name}
                </option>
              ))}
            </select>
          </div>

          {/* File Upload */}
          <div className="animate-slide-in-left">
            <label className="block text-primary-text-light font-medium mb-2">Upload or Capture Image</label>
            <div className="relative border-2 border-primary-dark/20 rounded-xl group hover:border-accent transition-all duration-300">
              <input
                type="file"
                accept="image/*"
                capture="environment"
                className="w-full p-3 opacity-0 absolute"
                onChange={handleFileChange}
                required
              />
              <div className="p-3 text-primary-text-light/80 pointer-events-none">
                {selectedFile ? (
                  <span className="text-accent">📸 Selected: {selectedFile.name}</span>
                ) : (
                  '📱 Click to upload or capture image'
                )}
                {isUploading && <span className="ml-2">Uploading...</span>}
              </div>
            </div>
          </div>

          {/* Problem Description */}
          <div className="animate-slide-in-right">
            <label className="block text-primary-text-light font-medium mb-2">Describe the Problem</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full border-2 border-primary-dark/20 p-3 rounded-xl focus:border-accent 
                        focus:ring-2 focus:ring-accent/30 transition-all duration-300 placeholder-primary-text-light/60"
              rows={4}
              placeholder="Describe your issue here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary-dark text-primary-text py-4 rounded-xl font-bold hover:bg-accent 
                      hover:text-white transform transition-all duration-300 hover:scale-105 shadow-lg
                      hover:shadow-accent/20 animate-pulse-slow"
            disabled={isSubmitting || isUploading}
          >
            {isSubmitting ? '⏳ Submitting...' : '🚀 Submit Grievance'}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default GrievanceForm;