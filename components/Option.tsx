import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Option = () => {
  return (
    <section className="w-full md:-mt-20 mt-4 md:px-10 px-2 md:absolute left-0 top-[760px]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[90rem] mx-auto px-[2rem] py-[2rem] flex flex-col sm:flex-row md:flex-row md:items-center items-start justify-between gap-12 option"
      >
        {/* Working Hours */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-center"
        >
          <h1 className="text-[#0A1834] text-[1.45313rem] font-semibold leading-[135%] tracking-[-0.03025rem]">
            Press
          </h1>
          <h2 className="text-[#0A1834] text-[1.45313rem] font-semibold leading-[135%] tracking-[-0.03025rem]">
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
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-center"
        >
          <h1 className="text-[#0A1834] text-[1.45313rem] font-semibold leading-[135%] tracking-[-0.03025rem]">
            Online
          </h1>
          <h2 className="text-[#0A1834] text-[1.45313rem] font-semibold leading-[135%] tracking-[-0.03025rem]">
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
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-center"
        >
          <h1 className="text-[#0A1834] text-[1.45313rem] font-semibold leading-[135%] tracking-[-0.03025rem]">
            Duare
          </h1>
          <h2 className="text-[#0A1834] text-[1.45313rem] font-semibold leading-[135%] tracking-[-0.03025rem]">
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
