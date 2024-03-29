import NavBar from "@/components/navBar/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import MainLayout from "./mainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-fontPoppins">

      <body className={inter.className}>
      <MainLayout>
        <>
          <div className="sticky top-0 w-full z-20 bg-white">
            <Header />
            <div className="static w-full z-20 bg-white hidden lg:block">
              <NavBar />
            </div>
          </div>
          {children}
        </>
      </MainLayout>
      </body>
    </html>
  );
}
