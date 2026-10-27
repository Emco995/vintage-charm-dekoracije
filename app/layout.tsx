import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FDFBF5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vintage-charm-dekoracije.vercel.app"),
  title: "Vintage Charm | Dekoracije za sve Vaše posebne trenutke",
  description:
    "Unikatne dekoracije za vjenčanja, djevojačke večeri, rođendane i privatne proslave. Svaki detalj osmišljen s ljubavlju.",
  keywords: [
    "Vintage Charm",
    "dekoracije",
    "vjenčanja",
    "djevojačke večeri",
    "rođendani",
    "zaruke",
    "baloni",
    "cvjetni aranžmani",
    "dekoracije za proslave",
  ],
  authors: [{ name: "Vintage Charm" }],
  creator: "Vintage Charm",
  openGraph: {
    title: "Vintage Charm | Dekoracije za sve Vaše posebne trenutke",
    description:
      "Unikatne dekoracije za vjenčanja, djevojačke večeri, rođendane i privatne proslave. Pogledajte naš portfolio radova.",
    url: "https://vintage-charm-dekoracije.vercel.app",
    siteName: "Vintage Charm Dekoracije",
    images: [
      {
        url: "https://vintage-charm-dekoracije.vercel.app/og-image.jpg",
        secureUrl: "https://vintage-charm-dekoracije.vercel.app/og-image.jpg",
        width: 1200,
        height: 700,
        type: "image/jpeg",
        alt: "Vintage Charm Dekoracije Logo",
      },
    ],
    locale: "bs_BA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vintage Charm | Dekoracije za sve Vaše posebne trenutke",
    description:
      "Unikatne dekoracije za vjenčanja, djevojačke večeri, rođendane i posebne trenutke.",
    images: ["https://vintage-charm-dekoracije.vercel.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className={`${serifFont.variable} ${sansFont.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FDFBF5] text-[#2A2421] font-sans antialiased selection:bg-[#C86D51] selection:text-white">
        {children}
      </body>
    </html>
  );
}