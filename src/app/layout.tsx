import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";
import Cards from "@/components/cards";
import Experience from "@/components/experince";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Mijoz2 from "@/components/mijoz2";
import Portfolio from '@/pages/portfolio';
import Mijoz3 from '@/components/mijoz3';
import Landing from '@/components/landing';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My App",
  description: "App description here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0E041D] text-white">
        <Portfolio/>
        <Navbar />
        <Experience />
        <Cards />
        <Projects />
        <Mijoz2 />
        <Mijoz3/>
        <Landing />
        <Services />
        {children}
        <Footer />
      </body>
    </html>
  );
}
