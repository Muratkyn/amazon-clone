import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StoreProvider } from "@/redux/StoreProvider";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amazon.it: elettronica | books,music",
  description: "This is an Amazon clone project created with Next.js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
              {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
