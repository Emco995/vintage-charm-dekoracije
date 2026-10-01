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
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Vintage Charm Dekoracije | Boho & Svečane Dekoracije",
    description:
      "Unikatne i personalizovane dekoracije za vjenčanja, zaruke, djevojačke večeri i rođendane. Pogledajte naš portfolio.",
    url: "https://vintage-charm-dekoracije.vercel.app",
    siteName: "Vintage Charm Dekoracije",
    locale: "bs_BA",
    type: "website",
    images: [
      {
        url: "https://vintage-charm-dekoracije.vercel.app/logo.png",
        width: 800,
        height: 800,
        alt: "Vintage Charm Dekoracije Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Vintage Charm Dekoracije",
    description:
      "Ekskluzivne dekoracije za vjenčanja, djevojačke večeri i rođendane.",
    images: ["https://vintage-charm-dekoracije.vercel.app/logo.png"],
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
        <meta property="og:image" content="https://vintage-charm-dekoracije.vercel.app/logo.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
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