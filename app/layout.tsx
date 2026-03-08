import type { Metadata } from "next";
import { Inter, Julius_Sans_One, Syncopate } from "next/font/google";
import "./globals.css";
// @ts-ignore
import Cookies from "js-cookie";
import PinProtected from "./PinProtected";

export const julius = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-julius",
  display: "swap",
});

export const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300","400","500","600","700", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RSL",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const DEFAULT_PIN = "123456";
  const savedPin = Cookies.get("rasel_pin");

  // If you want to **protect all pages**, wrap children in PinProtected
  // Only render children if the correct PIN exists
  return (
    <html lang="en">
      <body className={`${syncopate.variable} ${julius.variable} ${inter.variable} antialiased`}>
        <PinProtected pin={DEFAULT_PIN}>
          {children}
        </PinProtected>
      </body>
    </html>
  );
}