
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Usman Hamzat, OYERO | CMR Group",
    template: "%s | CMR Group",
  },
  description:
    "The professional portfolio of Usman Hamzat Oyero, showcasing CMR Group's emerging ventures, technology projects, research, and strategic initiatives.",
  applicationName: "CMR Group Portfolio",
  openGraph: {
    title: "Usman Hamzat, OYERO | CMR Group",
    description:
      "Explore the emerging CMR portfolio, CMR Labs engineering projects, research, and business initiatives.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
