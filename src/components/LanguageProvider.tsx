"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Navbar />
      {children}
      <div id="footer">
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
