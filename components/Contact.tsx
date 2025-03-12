import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="bg-[#FFECE2] w-full" id="contact-section">
      <main className="mx-auto max-w-[90rem] px-4 flex flex-col md:flex-row items-center justify-center py-20 gap-10">
        <div className="flex flex-col items-start justify-center md:w-1/2 w-full md:px-12 px-4 ">
          <h1 className="md:text-[3rem] text-[2rem] textcolor leading-normal tracking-[0.06rem] font-[900]">
            Contact Us
          </h1>
          <p className="md:text-[1.45rem] text-[1rem] text-[#625D7E] font-[550] leading-[185%] mt-[2rem]">
          Department of Urban Development & Municipal Affairs
          </p>
          <p className="md:text-[1.15rem] text-[1rem] text-[#625D7E] font-[400] leading-[185%] mt-[2rem]">
            Ilgus Bhavan
            HC BLOCK, Sector III, Salt Lake City, Kolkata, West Bengal 700106
          </p>
          <p className="md:text-[1.15rem] text-[1rem] text-[#625D7E] font-[400] leading-[185%] mt-[2rem]">
            (+033) 2337 8723<br />(+033) 2337 6226
          </p>
          <Button className="bg-[#FF7352] md:px-10 md:py-6 px-6 py-4 font-[600] text-[0.93519rem] leading-normal rounded-full mt-[3rem]">
            E-Mail Us
          </Button>
        </div>
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <div className="bg-[#FFFDF9] rounded-[1.5rem] px-4 py-12 w-full max-w-[500px]">
            <h1 className="text-[2rem] font-[700] text-[#000] leading-[125%] text-center md:px-10 px-2">
              Citizen Feedback Form
            </h1>
            <form method="POST" action="#">
              <div className="mt-[2rem] px-4">
                <label className="text-[#2F2F30] text-[1.25rem] font-[500] leading-[120%]">Full Name</label><br/>
                <input className="px-6 py-4 rounded-[16px] border border-[#ECEBE7] w-full mt-2" type="text" name="fullname" placeholder="Your Full Name" />
              </div>
              <div className="mt-[2rem] px-4">
                <label className="text-[#2F2F30] text-[1.25rem] font-[500] leading-[120%]">Address</label><br/>
                <input className="px-6 py-4 rounded-[16px] border border-[#ECEBE7] w-full mt-2" type="text" name="address" placeholder="Your Address" />
              </div>
              <div className="mt-[2rem] px-4">
                <label className="text-[#2F2F30] text-[1.25rem] font-[500] leading-[120%]">Phone Number</label><br/>
                <input className="px-6 py-4 rounded-[16px] border border-[#ECEBE7] w-full mt-2" type="tel" name="phone" placeholder="1-234-567-891" />
              </div>
              <div className="mt-[2rem] px-4">
                <label className="text-[#2F2F30] text-[1.25rem] font-[500] leading-[120%]">Message</label><br/>
                <textarea className="px-6 py-4 rounded-[16px] border border-[#ECEBE7] w-full mt-2 h-[150px]" name="message" placeholder="Your Message"></textarea>
              </div>
              <div className="mt-[2rem] px-4">
                <Button className="md:px-6 py-8 px-4 font-[500] md:text-[1.375rem] text-[0.978rem] leading-normal rounded-full w-full mt-[2rem]">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
