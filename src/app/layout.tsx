
import type { Metadata } from "next";
import "./globals.css";
import { codeFont } from "../config/fonts";
import NavBar from "../components/NavBar";
import useSmoothScroll from "../hooks/useSmoothScroll";

export const metadata: Metadata = {
  title: 'Johan Higuera | FullStack Developer',
  description: 'Portafolio profesional de Johan Higuera, desarrollador FullStack especializado en React, Next.js, Node.js y más.',
  keywords: ['FullStack Developer', 'React', 'Next.js', 'Portafolio', 'Johan Higuera'],
  openGraph: {
    title: 'Johan Higuera | FullStack Developer',
    description: 'Portafolio profesional de Johan Higuera',
    url: 'https://tuportafolio.com',
    images: '/og-image.jpg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${codeFont.variable} ${codeFont.variable} antialiased bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-200`}
      >
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
