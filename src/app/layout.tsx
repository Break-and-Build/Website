import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const etna = localFont({
  src: "../../public/fonts/etna.otf",
  variable: "--font-etna",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Break and Build",
  description: "A community of builders focused on creating small products that solve real-world problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${etna.variable} antialiased bg-black text-white selection:bg-orange-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
