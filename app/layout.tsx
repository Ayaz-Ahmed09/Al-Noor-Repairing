import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import SmoothScrollProvider from "./components/SmoothScrollProvider";

const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
export const metadata: Metadata = {
  title: "Al-Noor Ac-Repair",
  description: "Al-Noor Ac-Repair",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} antialiased`}>
      <body className="font-syne bg-black text-white">
        <SmoothScrollProvider>
          <Navbar />

          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
