import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { SfxProvider } from "@/context/SfxContext";
import { Settings } from "@/components/kh/Settings";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Banunu's Portfolio",
  description: "Banunu's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${geistMono.variable} font-orbitron antialiased`}
      >
        <SfxProvider>
          {children}
          <Settings />
        </SfxProvider>
      </body>
    </html>
  );
}
