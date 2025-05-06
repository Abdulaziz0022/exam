"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "../assets/logo.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("UZ");

  const languages = ["UZ", "RU", "EN"];

  const menuItems: Record<string, string[]> = {
    UZ: ["Bosh sahifa", "Portfolio", "Xizmatlar", "Aloqa"],
    RU: ["Главная", "Портфолио", "Услуги", "Контакты"],
    EN: ["Home", "Portfolio", "Services", "Contact"],
  };

  const buttonText: Record<string, string> = {
    UZ: "Loyiha bormi?",
    RU: "Есть проект?",
    EN: "Have a project?",
  };

  return (
    <nav className="bg-[#0E041D] w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-20">
        <Image
          src={logo}
          alt="Logo"
          width={180}
          height={30}
          className="brightness-200"
          priority
        />

        <ul className="hidden lg:flex gap-x-8">
          {menuItems[selectedLanguage].map((item, index) => (
            <li
              key={index}
              className="text-white font-medium text-[16px] px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer hover:bg-[#261D33]"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setMenuOpen(false);
              }}
              className="text-white px-6 py-2 rounded-lg hover:border-white hover:bg-[#261D33] transition-all duration-300"
            >
              {selectedLanguage}
            </button>

            {isOpen && (
              <ul className="absolute left-0 mt-2 w-full bg-[#1E1529] text-white rounded-lg shadow-lg border z-10">
                {languages
                  .filter((lang) => lang !== selectedLanguage)
                  .map((lang) => (
                    <li
                      key={lang}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setIsOpen(false);
                      }}
                      className="px-6 py-2 cursor-pointer hover:bg-[#2B1E40] transition-all"
                    >
                      {lang}
                    </li>
                  ))}
              </ul>
            )}
          </div>

          <button className="hidden lg:block text-white bg-[#5A00DB] px-5 py-2 font-semibold rounded-lg hover:bg-white hover:text-[#5A00DB] transition-all duration-300">
            {buttonText[selectedLanguage]}
          </button>

          <button
            className="lg:hidden text-white text-3xl"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setIsOpen(false);
            }}
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
          {menuItems[selectedLanguage].map((item, index) => (
            <li
              key={index}
              className="py-2 px-6 rounded-lg transition-all duration-300 cursor-pointer hover:bg-[#261D33]"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </li>
          ))}

          <button className="text-white bg-[#5A00DB] border-white px-6 py-3 font-semibold rounded-lg hover:bg-white hover:text-[#5A00DB] transition-all duration-300">
            {buttonText[selectedLanguage]}
          </button>
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
