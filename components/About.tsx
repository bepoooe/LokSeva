import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full mt-16 md:mt-32">

      <main className="max-w-[90rem] mx-auto md:py-[150px] py-8 md:px-14 px-4 flex flex-col md:flex-row sm:flex-col md:gap-[110px] gap-8">
        <div><Image
            src="/about.png"
            alt="tara"
            width={600}
            height={600}
            className="w-full md:h-[519px] "
          />
        </div>
        <div className="md:w-1/2 w-full">
          <p className="text-[#FF6947] text-[1.25rem] font-[400] leading-normal md:mb-4 mb-0">
          Bengal Surges Ahead
          </p>
          <h1 className="textcolor md:text-[2.625rem] text-[2.2rem] font-[900] leading-[133.333%] tracking-[0.0525rem] font-[Baloo Da 2]">
  এগিয়ে বাংলা
</h1>


          <p className="md:text-[1.1rem] text-[1rem] font-[400] leading-[185%] pcolor mt-[1.31rem]">
            • To promote development initiatives especially for the poor in urban areas of West Bengal
          </p>
          <p className="md:text-[1.1rem] text-[1rem] font-[400] leading-[185%] pcolor mt-[1.31rem]">
            • To support urban local bodies in establishing infrastructure facilities related to water supply, roads, drainage, sanitation, solid waste management, sewerage, street light in their respective jurisdiction.
          </p>
          <p className="md:text-[1.1rem] text-[1rem] font-[400] leading-[185%] pcolor mt-[1.31rem]">
            • To support urban local bodies in providing basic citizen centric services in urban areas of the State
          </p>
          <p className="md:text-[1.1rem] text-[1rem] font-[400] leading-[185%] pcolor mt-[1.31rem]">
            • To ensuremunicipal reforms and systematic planning system towards improved urban governance
          </p>
          <Link href="/kym" passHref>
          <Button
            className="borderbutton2 bg-[#FF7352] md:px-12 md:py-8 py-7 font-[700] text-[0.93519rem] leading-[150%] rounded-[10px] md:mt-[3rem] mt-8 w-full md:w-auto"
          >
            Know Your Municipality
          </Button>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default About;
