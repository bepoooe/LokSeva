"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Services = () => {
  const cardData = [
    {
      url: '/kanya.png',
      title: 'Kanyashree',
      description:
        'Financial aid for West Bengal girls\' education, preventing early marriage, empowering women.',
    },
    {
      url: '/karmatirtha.png',
      title: 'Karmatirtha',
      description:
        'Employment hub in West Bengal providing infrastructure for self-employment and entrepreneurship.',
    },
    {
      url: '/sabooj.png',
      title: 'Sabooj Sathi',
      description:
        'West Bengal scheme providing bicycles to school students for better accessibility.',
    },
    {
      url: '/sufal.png',
      title: 'Sufal Bangla',
      description:
        'West Bengal government initiative ensuring fair-priced fresh vegetables and food items.',
    },
    {
      url: '/gatidhara.png',
      title: 'Gatidhara',
      description:
        'West Bengal transport scheme providing financial assistance for self-employment in commercial vehicles.',
    },
    {
      url: '/akan.png',
      title: 'Akansha',
      description: 'Affordable home loan scheme for all residents of West Bengal.',
    },
  ];

  return (
    <section className="w-full" id="services">
      <main className="max-w-[70rem] mx-auto px-4 md:py-32 py-12">
        <div>
          <p className="md:text-[1.25rem] text-[1rem] text-[#FF6947] font-[400] leading-normal text-center md:mb-6 mb-0">
            Schemes
          </p>
          <h2 className="textcolor md:text-[2.625rem] text-[2rem] font-[700] md:leading-[133.333%] leading-[1] tracking-[0.0525rem] text-center md:mt-auto mt-4">
            Government schemes empower citizens{' '}
            <br className="md:block hidden" />
            with welfare and development
          </h2>
        </div>

        {/* Cards of services */}
        <div className="container grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 mt-16 max-w-[77.46806rem]">
          {cardData.map((items, index) => (
            <motion.div
              key={index}
              className="inline-flex flex-col items-center md:gap-5 gap-2"
              whileHover={{ scale: 1.05 }} // Zoom effect on hover
              transition={{ type: 'spring', stiffness: 300 }} // Smooth transition
            >
              <div className="overflow-hidden rounded-lg">
                <motion.div
                  whileHover={{ scale: 1.1 }} // Zoom effect on image hover
                  transition={{ type: 'spring', stiffness: 300 }} // Smooth transition
                >
                  <Image
                    src={items.url}
                    alt="doctor"
                    width={107}
                    height={107}
                  />
                </motion.div>
              </div>

              <h2 className="text-[1.5rem] font-[600] md:leading-[111.833%] leading-normal tracking-[0.02906rem] text-[#333] text-center">
                {items.title}
              </h2>
              <p className="text-[#625D7E] font-[400] md:leading-[166.684%] leading-normal text-[1.06244rem] text-center md:px-0 px-8">
                {items.description}
              </p>
            </motion.div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Services;