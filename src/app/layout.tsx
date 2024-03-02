import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StickyNavbar from "@/components/StickyNavbar";
import StaticNavbar from "@/components/StaticNavbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white flex flex-col">
          <StaticNavbar />
          <StickyNavbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
