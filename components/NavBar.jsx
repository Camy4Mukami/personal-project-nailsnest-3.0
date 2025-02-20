"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { Search } from "lucide-react";

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  const serviceLinks = [
    "Manicures",
    "Pedicures",
    "Nail Art",
    "Acrylic & Gel Nail extensions",
    "Nail treatment",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm px-5 lg:px-8 py-4 flex items-center justify-between z-50 shadow-sm">
      <a href="#top" className="flex items-center gap-2">
        <Image
          src={assets.logo}
          alt="Logo Image"
          className="w-16 cursor-pointer"
        />
        <span className="font-agu font-medium text-2xl text-red-900">
          Nails Nest
        </span>
      </a>

      <ul className="hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3">
        <li>
          <a
            href="#top"
            className="font-merriweather hover:text-red-900 transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#About Us"
            className="font-merriweather hover:text-red-900 transition-colors duration-300"
          >
            About us
          </a>
        </li>
        <li className="relative">
          <button
            className="font-merriweather hover:text-red-900 transition-colors duration-300 flex items-center gap-1"
            onMouseEnter={() => setShowServicesMenu(true)}
            onMouseLeave={() => setShowServicesMenu(false)}
          >
            Services
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {showServicesMenu && (
            <div
              className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px]"
              onMouseEnter={() => setShowServicesMenu(true)}
              onMouseLeave={() => setShowServicesMenu(false)}
            >
              {serviceLinks.map((service, index) => (
                <a
                  key={index}
                  href={`#${service}`}
                  className="block px-4 py-2 hover:bg-red-50 hover:text-red-900 transition-colors duration-300"
                >
                  {service}
                </a>
              ))}
            </div>
          )}
        </li>
        <li>
          <a
            href="#nail-tech"
            className="font-merriweather hover:text-red-900 transition-colors duration-300"
          >
            Become a NailTech
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="font-merriweather hover:text-red-900 transition-colors duration-300"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#faq"
            className="font-merriweather hover:text-red-900 transition-colors duration-300"
          >
            FAQ
          </a>
        </li>

        <li className="relative">
          <button
            className="group p-2 bg-red-50 rounded-full hover:bg-red-100 transition-colors duration-300"
            onClick={() => setShowSearch(!showSearch)}
          >
            <Search
              color="black"
              size={20}
              strokeWidth={1.5}
              className="hover:text-red-900 transition-colors duration-300"
            />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Search
            </span>
          </button>
          {showSearch && (
            <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg p-3 flex gap-2">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-full px-4 py-1 focus:outline-none focus:border-red-900"
              />
              <button className="bg-red-900 text-white px-4 py-1 rounded-full hover:bg-red-800 transition-colors duration-300">
                Search
              </button>
            </div>
          )}
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <a
          href="#book-now"
          className="hidden lg:flex items-center gap-3 px-6 py-2 bg-red-900 text-white rounded-full font-merriweather hover:bg-red-800 transition-colors duration-300"
        >
          Book Now
        </a>
        <a
          href="#sign-up"
          className="hidden lg:flex items-center gap-3 px-6 py-2 border border-red-900 rounded-full font-merriweather hover:bg-red-900 hover:text-white transition-colors duration-300"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default NavBar;