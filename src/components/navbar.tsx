"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<"UZ" | "RU" | "EN">("UZ");
  const [isOpen, setIsOpen] = useState(false);

  const languages: ("UZ" | "EN")[] = ["UZ","EN"];

  const menuItems = [
    { label: "Bosh sahifa", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Xizmatlar", href: "/services" },
    { label: "Aloqa", href: "/#footer" },
  ];

  return (
    <nav className="bg-[#0E041D] w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="w-[%] mx-auto flex items-center justify-between py-4 px-6 lg:px-20">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={180}
            height={30}
            className="brightness-200 cursor-pointer"
            priority
          />
        </Link>

        <ul className="hidden lg:flex gap-x-8">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="text-white font-medium text-[16px] px-4 py-2 rounded-lg transition-all cursor-pointer hover:bg-[#261D33] border border-[#0E041D] hover:border-white"
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white px-4 py-2 rounded-lg  hover:bg-[#261D33] transition border border-[#0E041D] hover:border-white"
            >
              {selectedLanguage}
            </button>
            {isOpen && (
              <ul className="absolute mt-2 bg-[#0E041D] hover:bg-[#261D33] text-white rounded-lg shadow-lg hover:border hover:border-white z-10">
                {languages
                  .filter((lang) => lang !== selectedLanguage)
                  .map((lang) => (
                    <li
                      key={lang}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 cursor-pointer  transition-all"
                    >
                      {lang}
                    </li>
                  ))}
              </ul>
            )}
          </div>

          <button className="hidden lg:block text-white bg-[#261D33] px-5 py-2 font-semibold rounded-lg  transition-all duration-300 border-white border">
            Loyiha bormi?
          </button>

          <button
            className="lg:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[50%] h-screen bg-[#0E041D] shadow-lg transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden z-50`}
      >
        <button
          className="absolute top-6 right-6 text-white text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          <HiX />
        </button>

        <ul className="flex flex-col items-center justify-center h-full gap-6 text-white text-lg">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="py-2 px-6 rounded-lg transition-all duration-300 cursor-pointer hover:bg-[#261D33] border border-[#0E041D] hover:border-white"
              onClick={() => setMenuOpen(false)}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}

          <button className="text-white bg-[#261D33] px-6 py-3 font-semibold rounded-lg transition-all duration-300 border border-white">
            Loyiha bormi?
          </button>

          <div className="mt-4">
            <span className="text-sm text-gray-400 mb-1 block text-center">Tilni tanlang:</span>
            <div className="flex justify-center gap-4">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-4 py-1 rounded-md border ${
                    selectedLanguage === lang
                      ? "hover:bg-[#261D33] transition border border-[#0E041D] hover:border-white"
                      : "hover:bg-[#261D33] transition border border-[#0E041D] hover:border-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </ul>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
