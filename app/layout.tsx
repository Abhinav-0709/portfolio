import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
// @ts-ignore: allow side-effect CSS import without type declarations
import "./globals.css";
// @ts-ignore: allow side-effect CSS import without type declarations
import "./project.css";

const sansGeometric = Outfit({
  subsets: ["latin"],
  variable: "--font-sans-geometric",
  weight: ["300", "400", "500", "600", "700"],
});

const sansDisplay = Syne({
  subsets: ["latin"],
  variable: "--font-sans-display",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Abhinav Gupta | Professional Portfolio",
  description: "Full-Stack Developer & Creative Technologist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansGeometric.variable} ${sansDisplay.variable} dark`}>
      <body className="antialiased font-sans bg-[#050505] text-[#FFFFFF] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}