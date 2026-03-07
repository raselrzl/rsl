import type { Metadata } from "next";
import { Inter, Julius_Sans_One, Syncopate } from "next/font/google"; // import both
import "./globals.css";

// Julius Sans One (for button)
export const julius = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-julius",
  display: "swap",
});

// Syncopate (for global text)
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
  return (
    <html lang="en">
      {/* Include both font variables */}
      <body className={`${syncopate.variable} ${julius.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}


