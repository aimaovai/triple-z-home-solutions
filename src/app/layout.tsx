import type { Metadata } from "next";
import localFont from "next/font/local";
import {Cedarville_Cursive } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
//figure out font family later
const cursive = Cedarville_Cursive({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Triple Z Home Solutions",
  description: "Generated by Aima Ovai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cursive}antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
