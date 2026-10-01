import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#FDFBF5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Vintage Charm Dekoracije | Boho & Event Dekoracije",
  description:
    "Ekskluzivne dekoracije za vjenčanja, djevojačke večeri, rođendane i posebne proslave. Stvaramo bajkovitu atmosferu prilagođenu vašim željama.",
  keywords: [
    "Vintage Charm Dekoracije",
    "dekoracije vjenčanja",
    "boho dekoracije",
    "djevojačka večer dekoracija",
    "rođendanske dekoracije",
    "cvjetni oltar",
    "event dekoracije Bosna i Hercegovina",
  ],
  authors: [{ name: "Vintage Charm Dekoracije" }],
  creator: "Vintage Charm",
  metadataBase: new URL("https://vintage-charm-dekoracije.vercel.app"),
  openGraph: {
    title: "Vintage Charm Dekoracije | Boho & Svečane Dekoracije",
    description:
      "Unikatne i personalizovane dekoracije za vjenčanja, zaruke, djevojačke večeri i rođendane. Pogledajte naš portfolio.",
    url: "/",
    siteName: "Vintage Charm Dekoracije",
    locale: "bs_BA",
    type: "website",
    images: [
      {
        url: "/galerija/boho-mol/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Vintage Charm Dekoracije Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vintage Charm Dekoracije",
    description:
      "Ekskluzivne dekoracije za vjenčanja, djevojačke večeri i rođendane.",
    images: ["/galerija/boho-mol/cover.jpg"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Vintage Charm Dekoracije",
    image: "https://vintage-charm-dekoracije.vercel.app/logo.png",
    telephone: "+38762317694",
    url: "https://vintage-charm-dekoracije.vercel.app",
    priceRange: "$$",
    description:
      "Unikatne dekoracije za vjenčanja, djevojačke večeri, rođendane i intimne proslave u boho stilu.",
    sameAs: ["https://www.instagram.com/vintage__charm_/"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "21:00",
      },
    ],
  };

  return (
    <html lang="bs" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <title>Vintage Charm Dekoracije | Boho & Event Dekoracije</title>
        <meta name="title" content="Vintage Charm Dekoracije | Boho & Event Dekoracije" />
        <meta property="og:title" content="Vintage Charm Dekoracije | Boho & Event Dekoracije" />
        <link rel="icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FDFBF5] text-[#2A2421] antialiased">
        {children}
      </body>
    </html>
  );
}