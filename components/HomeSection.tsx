'use client'
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Option from "./Option";
import Link from "next/link";
import { motion} from 'framer-motion';


const HomeSection = () => {

  return (
    <section className="w-full md:relative mb-16" id="home-section">
      <main className="max-w-[90rem] mx-auto py-0 md:py-0">
      <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .5 }}
      
       className="flex flex-col md:flex-row items-start justify-between bg-[#FFECE2] mb-16">
        {/* hero section wala text */}
        <div className="md:px-12 px-4 py-20 md:w-1/2 w-full">
        <h1 
  className="md:text-[3.25rem] text-[1.8rem] md:leading-[128.846%] leading-[140%] font-[700] text-[#181443] tracking-[0.03988rem] md:text-start text-center">
  <span className="text-[#FF6947] font-[800]">লোকসেবা:</span> 
  <span className="text-[#4A2E8F] font-[600] font-[Noto Sans Bengali]"> আপনার পৌরসভার তথ্য ও সহায়তা এক ক্লিকে!</span>{" "}
  <span className="text-[#FF6947] hover:animate-bounce cursor-pointer">Serving</span> Every Citizen
</h1>



          <p className="md:text-[1.125rem] text-[1rem] text-[#625D7E] text-center md:text-start md:font-[500] font-[400] md:leading-[205.556%] leading-normal md:mt-[1.88rem] mt-2">
          This is a unified platform connecting municipalities in West Bengal, offering helplines, complaint tracking, and scheme information for citizens.
          </p>

          {/* two Buttons whish is need  */}
          <div className="flex flex-col md:flex-row gap-[25px] md:items-center md:mt-[3rem] mt-6 w-full">
          
          <Button className="borderbutton2 bg-[#FF7352] md:px-12 md:py-8 py-7 font-bold text-[1.1rem] leading-[150%] rounded-[10px]">
  <Link href="#contact-section" passHref>
    যোগাযোগ করুন
  </Link>
</Button>

          
            <Button
              variant="ghost"
              className="md:px-12 md:py-8 py-7 font-[700] text-[1rem] leading-[150%] rounded-[10px] bg-[#FFECE2] border textcolor gap-2 borderbutton"
            >
              <Image src="/callmehunter.png" alt="phone" width={20} height={20} />{" "}
              91730 91730
            </Button>
          </div>
          {/* location and timer div */}
        </div>
        {/* hero image make it responsive for all size of screens. */}
        <div className="md:w-1/2  w-full flex justify-center items-center ">
          <Image

            src="/hero.png"
            alt="hero"
            width={769}
            height={865}
            
          />
        </div>
      </motion.div>
      <Option />
      </main>
    </section>
  );
};

export default HomeSection;