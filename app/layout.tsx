import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Boho & Event Dekoracije | Unikatne dekoracije za vaše proslave",
  description: "Dekoracije za vjenčanja, djevojačke večeri, rođendane i posebne trenutke u boho i elegantnom stilu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-boho-bg text-boho-dark antialiased">
        {children}
      </body>
    </html>
  );
}