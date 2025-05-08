import LanguageProvider from '@/components/LanguageProvider';
import { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Noventer',
  description: 'App description here',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <LanguageProvider>
        <BodyWrapper>{children}</BodyWrapper>
      </LanguageProvider>
    </html>
  );
}

function BodyWrapper({ children }: { children: React.ReactNode }) {
  return (
    <body
      className={`bg-[#0E041D] text-white antialiased ${geistSans.variable} ${geistMono.variable} ${inter.variable}`}
    >
      <NextTopLoader />
      {children}
      <div id="footer">
      </div>
    </body>
  );
}
