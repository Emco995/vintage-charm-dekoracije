import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

// Zamijeni sa svojom finalnom domenom kada je kupiš (npr. https://vintagecharm.ba)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vintagecharm.ba";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vintage Charm Dekoracije | Unikatne Dekoracije za Vjenčanja i Proslave",
  description:
    "Pretvaramo vaše posebne trenutke u vanvremensku bajku. Profesionalne dekoracije za vjenčanja, djevojačke večeri, rođendane i manifestacije.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "bs_BA",
    url: siteUrl,
    siteName: "Vintage Charm Dekoracije",
    title: "Vintage Charm Dekoracije | Unikatne Dekoracije za Vaše Događaje",
    description:
      "Ručno birani boho i moderni detalji, cvjetni aranžmani i scenografija za vjenčanja i posebne trenutke.",
    images: [
      {
        url: "/sana.jpg",
        width: 1200,
        height: 800,
        alt: "Vintage Charm Boho Dekoracije",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vintage Charm Dekoracije",
    description: "Unikatne dekoracije za vjenčanja i proslave.",
    images: ["/sana.jpg"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org LocalBusiness (Event Planning & Decor) struktuirani podaci
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Vintage Charm Dekoracije",
    image: `${siteUrl}/sana.jpg`,
    logo: `${siteUrl}/logo.png`,
    url: siteUrl,
    telephone: "+387600000000", // Ubaci tačan broj telefona
    priceRange: "$$",
    description:
      "Agencija za profesionalno dekorisanje vjenčanja, djevojačkih večeri, rođendana i posebnih manifestacija.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gradčac", // Ili tačan grad gdje posluje
      addressCountry: "BA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "44.8783",
      longitude: "18.4286",
    },
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
        closes: "20:00",
      },
    ],
  };

  return (
    <html lang="bs" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${jakarta.variable} font-sans bg-[#FDFBF5] text-[#2A2421] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}