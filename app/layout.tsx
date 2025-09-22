import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import { ReactNode } from "react";
import MainWrapper from "@/components/ui/main-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Floxa",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  );
}
