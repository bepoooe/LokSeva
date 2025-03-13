"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';
import Layout from '@/app/layout';

const theme = {
  primary: '#FFECE2',
  primaryDark: '#E8D4C9',
  accent: '#D3BCB0',
  text: '#2D2D2D',
  textLight: '#4A4A4A'
};

// General Emergency Helplines
const emergencyHelplines = [
  { name: 'Emergency Response (ERSS)', number: '112', website: 'WBPOLICE.GOV.IN' },
  { name: 'Police', number: '100', website: 'WBPOLICE.GOV.IN' },
  { name: 'Fire Brigade', number: '101', website: 'WBPOLICE.GOV.IN' },
  { name: 'Ambulance', number: '102', website: 'WBPOLICE.GOV.IN' },
  { name: 'Women Helpline', number: '1091', website: 'WBPOLICE.GOV.IN' },
  { name: 'Child Helpline', number: '1098', website: 'WBPOLICE.GOV.IN' },
  { name: 'Cyber Crime Helpline', number: '1930', website: 'WBPOLICE.GOV.IN' }
];

// KMC Specific Helplines
const kmcHelplines = [
  { type: 'General Enquiries', number: '+91 33 2286-1000 (28 Lines)' },
  { type: 'Control Room', number: '+91 33 2286-1212 / 1313 / 1414' },
  { type: 'Call Centre', number: 'Ph: 2226-9909; Toll-Free: 1800-345-3375' },
  { type: 'WhatsApp', number: '8335988888' },
  { type: 'CHATBOT', number: '8335999111' }
];

// Municipalities Data
const municipalitiesData = [
  { municipality: 'Alipurduar Municipality', municipalityContact: 'Not Available', policeStation: 'Alipurduar PS', policeContact: '03564-255100' },
  { municipality: 'Arambagh Municipality', municipalityContact: 'Not Available', policeStation: 'Arambagh PS', policeContact: 'Not Available' },
  { municipality: 'Ashokenagar Kalyangarh Municipality', municipalityContact: 'Not Available', policeStation: 'Ashokenagar PS', policeContact: 'Not Available' },
  { municipality: 'Asansol Municipal Corporation', municipalityContact: '0341-2302219', policeStation: 'Asansol South PS', policeContact: 'Not Available' },
  { municipality: 'Bally Municipality', municipalityContact: 'Not Available', policeStation: 'Bally PS', policeContact: 'Not Available' },
  { municipality: 'Balurghat Municipality', municipalityContact: 'Not Available', policeStation: 'Balurghat PS', policeContact: 'Not Available' },
  { municipality: 'Bankura Municipality', municipalityContact: 'Not Available', policeStation: 'Bankura PS', policeContact: 'Not Available' },
  { municipality: 'Bansberia Municipality', municipalityContact: 'Not Available', policeStation: 'Bansberia PS', policeContact: 'Not Available' },
  { municipality: 'Baranagar Municipality', municipalityContact: 'Not Available', policeStation: 'Baranagar PS', policeContact: 'Not Available' },
  { municipality: 'Barasat Municipality', municipalityContact: 'Not Available', policeStation: 'Barasat PS', policeContact: 'Not Available' },
  { municipality: 'Barrackpore Municipality', municipalityContact: 'Not Available', policeStation: 'Barrackpore PS', policeContact: 'Not Available' },
  { municipality: 'Baruipur Municipality', municipalityContact: 'Not Available', policeStation: 'Baruipur PS', policeContact: 'Not Available' },
  { municipality: 'Basirhat Municipality', municipalityContact: 'Not Available', policeStation: 'Basirhat PS', policeContact: 'Not Available' },
  { municipality: 'Beldanga Municipality', municipalityContact: 'Not Available', policeStation: 'Beldanga PS', policeContact: 'Not Available' },
  { municipality: 'Berhampore Municipality', municipalityContact: 'Not Available', policeStation: 'Berhampore PS', policeContact: 'Not Available' },
  { municipality: 'Bhadreswar Municipality', municipalityContact: 'Not Available', policeStation: 'Bhadreswar PS', policeContact: 'Not Available' },
  { municipality: 'Bhatpara Municipality', municipalityContact: 'Not Available', policeStation: 'Bhatpara PS', policeContact: 'Not Available' },
  { municipality: 'Bidhannagar Municipal Corporation', municipalityContact: 'Not Available', policeStation: 'Bidhannagar PS', policeContact: 'Not Available' },
  { municipality: 'Birnagar Municipality', municipalityContact: 'Not Available', policeStation: 'Birnagar PS', policeContact: 'Not Available' },
  { municipality: 'Bishnupur Municipality', municipalityContact: 'Not Available', policeStation: 'Bishnupur PS', policeContact: 'Not Available' },
  { municipality: 'Bolpur Municipality', municipalityContact: 'Not Available', policeStation: 'Bolpur PS', policeContact: 'Not Available' },
  { municipality: 'Bongaon Municipality', municipalityContact: 'Not Available', policeStation: 'Bongaon PS', policeContact: 'Not Available' },
  { municipality: 'Budge Budge Municipality', municipalityContact: 'Not Available', policeStation: 'Budge Budge PS', policeContact: 'Not Available' },
  { municipality: 'Buniadpur Municipality', municipalityContact: 'Not Available', policeStation: 'Buniadpur PS', policeContact: 'Not Available' },
  { municipality: 'Burdwan Municipality', municipalityContact: 'Not Available', policeStation: 'Burdwan PS', policeContact: 'Not Available' },
  { municipality: 'Chakdah Municipality', municipalityContact: 'Not Available', policeStation: 'Chakdah PS', policeContact: 'Not Available' },
  { municipality: 'Champdany Municipality', municipalityContact: 'Not Available', policeStation: 'Champdany PS', policeContact: 'Not Available' },
  { municipality: 'Chandannagar Municipal Corporation', municipalityContact: 'Not Available', policeStation: 'Chandannagar PS', policeContact: 'Not Available' },
  { municipality: 'Chandrakona Municipality', municipalityContact: 'Not Available', policeStation: 'Chandrakona PS', policeContact: 'Not Available' },
  { municipality: 'Contai Municipality', municipalityContact: 'Not Available', policeStation: 'Contai PS', policeContact: 'Not Available' },
  { municipality: 'Cooch Behar Municipality', municipalityContact: 'Not Available', policeStation: 'Cooch Behar PS', policeContact: 'Not Available' },
  { municipality: 'Coopers Camp Municipality', municipalityContact: 'Not Available', policeStation: 'Coopers Camp PS', policeContact: 'Not Available' },
  { municipality: 'Dainhat Municipality', municipalityContact: 'Not Available', policeStation: 'Dainhat PS', policeContact: 'Not Available' },
  { municipality: 'Dalkhola Municipality', municipalityContact: 'Not Available', policeStation: 'Dalkhola PS', policeContact: 'Not Available' },
  { municipality: 'Dankuni Municipality', municipalityContact: 'Not Available', policeStation: 'Dankuni PS', policeContact: 'Not Available' },
  { municipality: 'Darjeeling Municipality', municipalityContact: 'Not Available', policeStation: 'Darjeeling PS', policeContact: 'Not Available' },
  { municipality: 'Dhuliyan Municipality', municipalityContact: 'Not Available', policeStation: 'Dhuliyan PS', policeContact: 'Not Available' },
  { municipality: 'Dhupguri Municipality', municipalityContact: 'Not Available', policeStation: 'Dhupguri PS', policeContact: 'Not Available' },
  { municipality: 'Diamond Harbour Municipality', municipalityContact: 'Not Available', policeStation: 'Diamond Harbour PS', policeContact: 'Not Available' },
  { municipality: 'Dinhata Municipality', municipalityContact: 'Not Available', policeStation: 'Dinhata PS', policeContact: 'Not Available' },
  { municipality: 'Domkal Municipality', municipalityContact: 'Not Available', policeStation: 'Domkal PS', policeContact: 'Not Available' },
  { municipality: 'Dubrajpur Municipality', municipalityContact: 'Not Available', policeStation: 'Dubrajpur PS', policeContact: 'Not Available' },
  { municipality: 'Dum Dum Municipality', municipalityContact: 'Not Available', policeStation: 'Dum Dum PS', policeContact: 'Not Available' },
  { municipality: 'Durgapur Municipal Corporation', municipalityContact: 'Not Available', policeStation: 'Durgapur PS', policeContact: 'Not Available' },
  { municipality: 'Egra Municipality', municipalityContact: 'Not Available', policeStation: 'Egra PS', policeContact: 'Not Available' },
  { municipality: 'English Bazar Municipality', municipalityContact: 'Not Available', policeStation: 'English Bazar PS', policeContact: 'Not Available' },
  { municipality: 'Falakata Municipality', municipalityContact: 'Not Available', policeStation: 'Falakata PS', policeContact: '03563-260242' },
  { municipality: 'Gangarampur Municipality', municipalityContact: 'Not Available', policeStation: 'Gangarampur PS', policeContact: 'Not Available' },
  { municipality: 'Garulia Municipality', municipalityContact: 'Not Available', policeStation: 'Garulia PS', policeContact: 'Not Available' },
  { municipality: 'Gayeshpur Municipality', municipalityContact: 'Not Available', policeStation: 'Gayeshpur PS', policeContact: 'Not Available' },
  { municipality: 'Ghatal Municipality', municipalityContact: 'Not Available', policeStation: 'Ghatal PS', policeContact: 'Not Available' },
  { municipality: 'Gobardanga Municipality', municipalityContact: 'Not Available', policeStation: 'Gobardanga PS', policeContact: 'Not Available' },
  { municipality: 'Guskara Municipality', municipalityContact: 'Not Available', policeStation: 'Guskara PS', policeContact: 'Not Available' },
  { municipality: 'Habra Municipality', municipalityContact: 'Not Available', policeStation: 'Habra PS', policeContact: 'Not Available' },
  { municipality: 'Haldia Municipality', municipalityContact: 'Not Available', policeStation: 'Haldia PS', policeContact: 'Not Available' },
  { municipality: 'Haldibari Municipality', municipalityContact: 'Not Available', policeStation: 'Haldibari PS', policeContact: 'Not Available' },
  { municipality: 'Halisahar Municipality', municipalityContact: 'Not Available', policeStation: 'Halisahar PS', policeContact: 'Not Available' },
  { municipality: 'Haringhata Municipality', municipalityContact: 'Not Available', policeStation: 'Haringhata PS', policeContact: 'Not Available' },
  { municipality: 'Hooghly-Chinsurah Municipality', municipalityContact: 'Not Available', policeStation: 'Hooghly PS', policeContact: 'Not Available' },
  { municipality: 'Howrah Municipal Corporation', municipalityContact: '033-26384608', policeStation: 'Howrah PS', policeContact: '033-26416232' },
  { municipality: 'Islampur Municipality', municipalityContact: 'Not Available', policeStation: 'Islampur PS', policeContact: 'Not Available' },
  { municipality: 'Jalpaiguri Municipality', municipalityContact: '03561-222457', policeStation: 'Jalpaiguri PS', policeContact: '03561-222027' },
  { municipality: 'Jangipur Municipality', municipalityContact: 'Not Available', policeStation: 'Jangipur PS', policeContact: 'Not Available' },
  { municipality: 'Jhalda Municipality', municipalityContact: 'Not Available', policeStation: 'Jhalda PS', policeContact: 'Not Available' },
  { municipality: 'Jhargram Municipality', municipalityContact: 'Not Available', policeStation: 'Jhargram PS', policeContact: 'Not Available' },
  { municipality: 'Jiaganj Azimganj Municipality', municipalityContact: 'Not Available', policeStation: 'Jiaganj PS', policeContact: 'Not Available' },
  { municipality: 'Joynagar-Mazilpur Municipality', municipalityContact: 'Not Available', policeStation: 'Joynagar PS', policeContact: 'Not Available' },
  { municipality: 'Kalimpong Municipality', municipalityContact: '03552-255230', policeStation: 'Kalimpong PS', policeContact: '03552-255234' },
  { municipality: 'Kaliyaganj Municipality', municipalityContact: 'Not Available', policeStation: 'Kaliyaganj PS', policeContact: 'Not Available' },
  { municipality: 'Kalna Municipality', municipalityContact: 'Not Available', policeStation: 'Kalna PS', policeContact: 'Not Available' },
  { municipality: 'Kalyani Municipality', municipalityContact: '033-25828690', policeStation: 'Kalyani PS', policeContact: 'Not Available' },
  { municipality: 'Kamarhati Municipality', municipalityContact: 'Not Available', policeStation: 'Kamarhati PS', policeContact: 'Not Available' },
  { municipality: 'Kanchrapara Municipality', municipalityContact: '033-25852251', policeStation: 'Kanchrapara PS', policeContact: 'Not Available' },
  { municipality: 'Kandi Municipality', municipalityContact: 'Not Available', policeStation: 'Kandi PS', policeContact: 'Not Available' },
  { municipality: 'Katwa Municipality', municipalityContact: 'Not Available', policeStation: 'Katwa PS', policeContact: 'Not Available' },
  { municipality: 'Kharagpur Municipality', municipalityContact: '03222-255719', policeStation: 'Kharagpur PS', policeContact: '03222-255716' },
  { municipality: 'Kharar Municipality', municipalityContact: 'Not Available', policeStation: 'Kharar PS', policeContact: 'Not Available' },
  { municipality: 'Khardah Municipality', municipalityContact: '033-25235591', policeStation: 'Khardah PS', policeContact: 'Not Available' },
  { municipality: 'Khirpai Municipality', municipalityContact: 'Not Available', policeStation: 'Khirpai PS', policeContact: 'Not Available' },
  { municipality: 'Kolkata Municipal Corporation', municipalityContact: '033-22861212', policeStation: 'Kolkata Police HQ', policeContact: '033-22143230' },
  { municipality: 'Konnagar Municipality', municipalityContact: 'Not Available', policeStation: 'Konnagar PS', policeContact: 'Not Available' },
  { municipality: 'Krishnanagar Municipality', municipalityContact: '03472-252011', policeStation: 'Krishnanagar PS', policeContact: '03472-252012' },
  { municipality: 'Kurseong Municipality', municipalityContact: '0354-2344601', policeStation: 'Kurseong PS', policeContact: 'Not Available' },
  { municipality: 'Madhyamgram Municipality', municipalityContact: '033-25265086', policeStation: 'Madhyamgram PS', policeContact: 'Not Available' },
  { municipality: 'Maheshtala Municipality', municipalityContact: '033-24903700', policeStation: 'Maheshtala PS', policeContact: 'Not Available' },
  { municipality: 'Mal Municipality', municipalityContact: 'Not Available', policeStation: 'Mal PS', policeContact: 'Not Available' },
  { municipality: 'Mathabhanga Municipality', municipalityContact: 'Not Available', policeStation: 'Mathabhanga PS', policeContact: 'Not Available' },
  { municipality: 'Maynaguri Municipality', municipalityContact: 'Not Available', policeStation: 'Maynaguri PS', policeContact: 'Not Available' },
  { municipality: 'Mekhliganj Municipality', municipalityContact: 'Not Available', policeStation: 'Mekhliganj PS', policeContact: 'Not Available' },
  { municipality: 'Memari Municipality', municipalityContact: 'Not Available', policeStation: 'Memari PS', policeContact: 'Not Available' },
  { municipality: 'Midnapore Municipality', municipalityContact: '03222-275546', policeStation: 'Midnapore PS', policeContact: 'Not Available' },
  { municipality: 'Mirik Municipality', municipalityContact: '0354-2243382', policeStation: 'Mirik PS', policeContact: 'Not Available' },
  { municipality: 'Murshidabad Municipality', municipalityContact: 'Not Available', policeStation: 'Murshidabad PS', policeContact: 'Not Available' },
  { municipality: 'Nabadwip Municipality', municipalityContact: '03472-240014', policeStation: 'Nabadwip PS', policeContact: 'Not Available' },
  { municipality: 'Naihati Municipality', municipalityContact: '033-25812001', policeStation: 'Naihati PS', policeContact: 'Not Available' },
  { municipality: 'Nalhati Municipality', municipalityContact: 'Not Available', policeStation: 'Nalhati PS', policeContact: 'Not Available' },
  { municipality: 'New Barrackpore Municipality', municipalityContact: '033-25373111', policeStation: 'New Barrackpore PS', policeContact: 'Not Available' },
  { municipality: 'North Barrackpore Municipality', municipalityContact: 'Not Available', policeStation: 'North Barrackpore PS', policeContact: 'Not Available' },
  { municipality: 'North Dum Dum Municipality', municipalityContact: '033-25149776', policeStation: 'North Dum Dum PS', policeContact: 'Not Available' },
  { municipality: 'Old Malda Municipality', municipalityContact: 'Not Available', policeStation: 'Old Malda PS', policeContact: 'Not Available' },
  { municipality: 'Panihati Municipality', municipalityContact: '033-25833843', policeStation: 'Panihati PS', policeContact: 'Not Available' },
  { municipality: 'Panskura Municipality', municipalityContact: 'Not Available', policeStation: 'Panskura PS', policeContact: 'Not Available' },
  { municipality: 'Pujali Municipality', municipalityContact: 'Not Available', policeStation: 'Pujali PS', policeContact: 'Not Available' },
  { municipality: 'Purulia Municipality', municipalityContact: '03252-222009', policeStation: 'Purulia PS', policeContact: 'Not Available' },
  { municipality: 'Raghunathpur Municipality', municipalityContact: 'Not Available', policeStation: 'Raghunathpur PS', policeContact: 'Not Available' },
  { municipality: 'Raiganj Municipality', municipalityContact: 'Not Available', policeStation: 'Raiganj PS', policeContact: 'Not Available' },
  { municipality: 'Rajpur Sonarpur Municipality', municipalityContact: '033-24342707', policeStation: 'Sonarpur PS', policeContact: '033-24342999' },
  { municipality: 'Ramjibanpur Municipality', municipalityContact: 'Not Available', policeStation: 'Ramjibanpur PS', policeContact: 'Not Available' },
  { municipality: 'Rampurhat Municipality', municipalityContact: 'Not Available', policeStation: 'Rampurhat PS', policeContact: 'Not Available' },
  { municipality: 'Ranaghat Municipality', municipalityContact: '03473-210222', policeStation: 'Ranaghat PS', policeContact: 'Not Available' },
  { municipality: 'Rishra Municipality', municipalityContact: '033-26721242', policeStation: 'Rishra PS', policeContact: 'Not Available' },
  { municipality: 'Sainthia Municipality', municipalityContact: 'Not Available', policeStation: 'Sainthia PS', policeContact: 'Not Available' },
  { municipality: 'Santipur Municipality', municipalityContact: '03472-278002', policeStation: 'Santipur PS', policeContact: 'Not Available' },
  { municipality: 'Serampore Municipality', municipalityContact: '033-26622141', policeStation: 'Serampore PS', policeContact: 'Not Available' },
  { municipality: 'Siliguri Municipal Corporation', municipalityContact: '0353-2430243', policeStation: 'Siliguri PS', policeContact: 'Not Available' },
  { municipality: 'Sonamukhi Municipality', municipalityContact: 'Not Available', policeStation: 'Sonamukhi PS', policeContact: 'Not Available' },
  { municipality: 'South Dum Dum Municipality', municipalityContact: '033-25515150', policeStation: 'South Dum Dum PS', policeContact: 'Not Available' },
  { municipality: 'Suri Municipality', municipalityContact: '03462-255014', policeStation: 'Suri PS', policeContact: 'Not Available' },
  { municipality: 'Taherpur Municipality', municipalityContact: 'Not Available', policeStation: 'Taherpur PS', policeContact: 'Not Available' },
  { municipality: 'Taki Municipality', municipalityContact: 'Not Available', policeStation: 'Taki PS', policeContact: 'Not Available' },
  { municipality: 'Tamralipta Municipality', municipalityContact: '03228-266264', policeStation: 'Tamralipta PS', policeContact: 'Not Available' },
  { municipality: 'Tarakeshwar Municipality', municipalityContact: 'Not Available', policeStation: 'Tarakeshwar PS', policeContact: 'Not Available' },
  { municipality: 'Titagarh Municipality', municipalityContact: '033-25681025', policeStation: 'Titagarh PS', policeContact: 'Not Available' },
  { municipality: 'Tufanganj Municipality', municipalityContact: 'Not Available', policeStation: 'Tufanganj PS', policeContact: 'Not Available' },
  { municipality: 'Uluberia Municipality', municipalityContact: '033-26610223', policeStation: 'Uluberia PS', policeContact: 'Not Available' },
  { municipality: 'Uttarpara Kotrung Municipality', municipalityContact: '033-26631935', policeStation: 'Uttarpara PS', policeContact: 'Not Available' }


];

const HelplinePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const formatContact = (contact: string) => {
    if (contact === 'Not Available') return <span className="text-red-600">Not Available</span>;
    const numbers = contact.split('/').map(num => num.trim());
    return numbers.map((num, index) => (
      <a 
        key={index}
        href={`tel:${num.replace(/[^0-9+]/g, '')}`}
        className="hover:text-accent transition-colors"
      >
        {num}{index !== numbers.length - 1 ? ' / ' : ''}
      </a>
    ));
  };

  const filteredMunicipalities = searchQuery ? municipalitiesData.filter(entry =>
    entry.municipality.toLowerCase().includes(searchQuery.toLowerCase()) ||
    entry.policeStation.toLowerCase().includes(searchQuery.toLowerCase())
  ) : municipalitiesData;

  return (
    <Layout>
      <div className="min-h-screen" style={{ backgroundColor: theme.primary }}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <header className="bg-primary-dark rounded-xl p-8 mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2" style={{ color: theme.text }}>
              West Bengal Emergency & Municipal Contacts
            </h1>
            <p className="text-lg" style={{ color: theme.textLight }}>
              Comprehensive directory of emergency services and municipal corporations
            </p>
          </header>

          {/* Search Bar */}
          <div className="mb-8 relative">
            <input
              type="text"
              placeholder="Search municipalities or police stations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-primary-dark focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all placeholder-primary-text-light/60"
              style={{ backgroundColor: 'white' }}
            />
          </div>

          {/* Emergency Helplines Section */}
          {!searchQuery && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.text }}>
                General Emergency Helplines
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {emergencyHelplines.map((helpline, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                    style={{ border: `2px solid ${theme.primaryDark}` }}
                  >
                    <h3 className="text-xl font-semibold mb-2" style={{ color: theme.text }}>
                      {helpline.name}
                    </h3>
                    <p className="text-sm mb-2" style={{ color: theme.textLight }}>
                      {formatContact(helpline.number)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* KMC Helplines Section */}
          {!searchQuery && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.text }}>
                Kolkata Municipal Corporation (KMC) Helplines
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {kmcHelplines.map((helpline, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                    style={{ border: `2px solid ${theme.primaryDark}` }}
                  >
                    <h3 className="text-xl font-semibold mb-2" style={{ color: theme.text }}>
                      {helpline.type}
                    </h3>
                    <p className="text-sm" style={{ color: theme.textLight }}>
                      {formatContact(helpline.number)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Municipalities Section */}
          <section>
  <h2 className="text-2xl font-bold mb-6" style={{ color: theme.text }}>
    Municipal Contacts
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredMunicipalities.map((entry, index) => (
      <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow" style={{ border: `2px solid ${theme.primaryDark}` }}>
        <h3 className="text-xl font-semibold mb-4" style={{ color: theme.text }}>{entry.municipality}</h3>
        <div className="mb-4">
          <p className="text-sm font-semibold" style={{ color: theme.textLight }}>Municipality Contact:</p>
          <p className="text-sm" style={{ color: theme.textLight }}>{formatContact(entry.municipalityContact)}</p>
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: theme.textLight }}>Police Station:</p>
          <p className="text-sm" style={{ color: theme.textLight }}>{entry.policeStation}</p>
          <p className="text-sm" style={{ color: theme.textLight }}>{formatContact(entry.policeContact)}</p>
        </div>
      </div>
    ))}
  </div>
</section>
        </div>
      </div>
    </Layout>
  );
};

export default HelplinePage;