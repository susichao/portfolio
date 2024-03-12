import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const oswald = Oswald({ subsets: ["latin"] });

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
    <html lang="en" className="block bg-gradient-to-r from-slate-900 to-slate-700 text-slate-300">
  
      
      <body className={oswald.className}>
        <Header />
        {children}
        <div className="flex"></div>
        </body>
    </html>
  );
}
