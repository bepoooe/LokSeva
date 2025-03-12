"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Popover } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/login"); // Navigates to Grievance.tsx
  };

  const headerLinks = [
    { label: "Home", href: "/" }, // Added Home link
    { label: "Schemes", href: "#services" },
    { label: "Helplines", href: "/Help" },
    { label: "Know Your Municipality", href: "/kym" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mx-auto bg-white relative z-50"
    >
      <Popover className="container mx-auto flex items-center px-4 py-4 md:max-w-[80rem]">
        {/* Logo Section */}
        <Image
          src="/logo.png"
          width={90}
          height={110}
          alt="logo"
          className="md:w-[90px] md:h-[110px] w-[90px] h-[110px]"
        />
        <div className="ml-4">
          <h1 className="text-4xl font-bold">LokSeva</h1>
          <h2 className="text-lg text-gray-600">Government of West Bengal</h2>
        </div>

        {/* Navigation Links */}
        <div className="grow hidden sm:flex items-center justify-start ml-24 gap-2 md:gap-16">
          {headerLinks.map((link, index) => (
            <Link
            key={index}
            href={link.href}
            className="relative text-[1rem] font-[500] leading-normal hover:text-gray-700 transition-all duration-300 group transform hover:scale-105"
          >
            {link.label}
            {/* Pill-like structure */}
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#FF7352] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button
            className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute inset-x-0 top-0 origin-top-right transform p-2 transition ${
            menuOpen ? "md:hidden" : "hidden"
          }`}
        >
          <div className="rounded-lg text-[#646464] bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Image src="/logo.png" width={83} height={47} alt="logo" />
                <div className="mr-2">
                  <Popover.Button
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {headerLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Mobile Grievance Redressal Button */}
              <div className="mt-6 flex flex-col items-center text-center gap-2">
                <Button
                  className="bg-[#FF7352] md:px-6 md:py-6 px-4 py-4 font-[500] text-[0.93519rem] leading-normal rounded-[10px] w-full"
                  onClick={handleRedirect}
                >
                  Grievance Redressal
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Grievance Redressal Button */}
        <div className="hidden sm:block">
          <Button
            className="bg-[#FF7352] md:px-6 md:py-6 px-4 py-4 font-[500] text-[0.93519rem] leading-normal rounded-[10px] relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white/20 before:opacity-0 before:transition-opacity before:duration-700 before:animate-shine hover:before:opacity-100"
            onClick={handleRedirect}
          >
            Grievance Redressal
          </Button>
        </div>
      </Popover>
    </motion.div>
  );
};

export default Header;