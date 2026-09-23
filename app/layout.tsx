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
  title: "Vintage Charm Dekoracije | Boho & Event Dekoracije",
  description: "Unikatne dekoracije za vjenčanja, djevojačke večeri, rođendane i posebne proslave.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-[#FDFBF5] text-[#2A2421] antialiased">
        {children}
      </body>
    </html>
  );
}