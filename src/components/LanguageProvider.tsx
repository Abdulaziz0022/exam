"use client";

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { useState } from "react"

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [selectedLanguage] = useState<"UZ" | "RU" | "EN">("EN");

  return (
    <>
      <Navbar />
      {children}
      <div id='footer'>
			<Footer selectedLanguage={selectedLanguage} />
			</div>
    </>
  );
}
