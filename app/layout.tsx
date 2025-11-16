import type { Metadata } from "next";
import { Inter, Delius, Zalando_Sans_Expanded, Montserrat, Quicksand } from "next/font/google";
// @ts-ignore: allow side-effect CSS import without type declarations
import "./globals.css";
// @ts-ignore: allow side-effect CSS import without type declarations
import "./project.css";
import SmoothScroller from "./components/smooth-scroller";
import Navbar from "./components/Navbar"; 
import CustomCursor from "./components/CustomCursor";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhinav Gupta | Professional Portfolio", 
  description: "Full-Stack Developerr & Creative Technologist Portfolio", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SmoothScroller />
      <CustomCursor />
      <Navbar />

      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}