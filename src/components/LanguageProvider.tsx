"use client";

import Footer from "@/components/footer";
import Navbar from '@/components/Navbar'

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
