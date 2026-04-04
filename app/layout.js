import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Abdul Alim | Portfolio",
  description: "MERN Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.className}>
      <body className="bg-black text-white antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}