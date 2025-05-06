import "./globals.css";
import type { Metadata } from "next";
import LanguageProvider from "@/components/LanguageProvider";

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
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
