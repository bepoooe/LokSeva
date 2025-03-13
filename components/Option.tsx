"use client"; // Mark this as a Client Component

import React from "react";
import { motion } from "framer-motion";

const Option = () => {
  return (
    <section className="w-full md:-mt-20 mt-4 md:px-10 px-2 md:absolute left-0 top-[760px]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[90rem] mx-auto px-[2rem] py-[2rem] flex flex-col sm:flex-row md:flex-row md:items-center items-start justify-between gap-4 option bg-white rounded-xl shadow-lg"
      >
        {/* Press Releases */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 flex flex-col items-start justify-center p-6 bg-gradient-to-r from-[#FFECE2] to-[#FFD9C9] rounded-lg hover:shadow-md transition-shadow w-full sm:w-auto"
        >
          <h1 className="text-[#0A1834] text-[1.5rem] font-bold leading-[135%] tracking-[-0.03025rem]">
            Press
          </h1>
          <h2 className="text-[#0A1834] text-[1.5rem] font-bold leading-[135%] tracking-[-0.03025rem]">
            Releases
          </h2>
          <a
            href="https://wb.gov.in/media-center-latest-news.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-3 bg-[#FF7352] text-white font-semibold rounded-lg transition-transform transform hover:scale-105 hover:opacity-90"
          >
            Learn More
          </a>
        </motion.div>

        {/* Online Services */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex flex-col items-start justify-center p-6 bg-gradient-to-r from-[#E8F4FF] to-[#D3E9FF] rounded-lg hover:shadow-md transition-shadow w-full sm:w-auto"
        >
          <h1 className="text-[#0A1834] text-[1.5rem] font-bold leading-[135%] tracking-[-0.03025rem]">
            Online
          </h1>
          <h2 className="text-[#0A1834] text-[1.5rem] font-bold leading-[135%] tracking-[-0.03025rem]">
            Services
          </h2>
          <a
            href="https://www.wburbanservices.gov.in/page/cms/e-service"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-3 bg-[#FF7352] text-white font-semibold rounded-lg transition-transform transform hover:scale-105 hover:opacity-90"
          >
            Get Started
          </a>
        </motion.div>

        {/* Duare Sarkar */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 flex flex-col items-start justify-center p-6 bg-gradient-to-r from-[#FFF2E5] to-[#FFE5CC] rounded-lg hover:shadow-md transition-shadow w-full sm:w-auto"
        >
          <h1 className="text-[#0A1834] text-[1.5rem] font-bold leading-[135%] tracking-[-0.03025rem]">
            Duare
          </h1>
          <h2 className="text-[#0A1834] text-[1.5rem] font-bold leading-[135%] tracking-[-0.03025rem]">
            Sarkar
          </h2>
          <a
            href="https://wb.gov.in/duare-sarkar.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-3 bg-[#FF7352] text-white font-semibold rounded-lg transition-transform transform hover:scale-105 hover:opacity-90"
          >
            Contact Now
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Option;