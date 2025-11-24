import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Roboto, Macondo } from "next/font/google";
import AosProvider from "@/Provider/AosProvider/AosProvider";
import Navbar from "@/Shared/Navbar";
import Footer from "@/Shared/Footer";
import Sportlight from "@/lib/SportLight";

// Fonts
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const macondo = Macondo({
  variable: "--font-macondo",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Towfiq - Front-End Developer",
  description: "N/A",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${macondo.variable} antialiased`}>
        <AosProvider>
          <Sportlight />
          <Navbar />
          <Toaster />
          {children}
          <Footer />
        </AosProvider>
        <Toaster />
      </body>
    </html>
  );
}
