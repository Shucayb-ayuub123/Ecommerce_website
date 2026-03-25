  import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

import { Poppin } from "./font";
import { Inters } from "./font";
import { Robotos } from "./font";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={` ${Inters.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
