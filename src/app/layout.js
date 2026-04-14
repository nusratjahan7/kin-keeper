import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "KeenKeeper is a relationship management app designed to help you track and nurture meaningful connections. With features like interactive dashboards, quick check-ins, and friendship analytics, it empowers users to build and maintain lasting relationships efficiently.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" theme-data="forest"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
