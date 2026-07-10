import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { business } from "@/data/business";
import { services } from "@/data/services";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heading = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://kc-motors.ie";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "KC Motors | Garage, Tyres & Car Servicing in Carrick-on-Shannon",
  description:
    "KC Motors is a local, family-run garage in Carrick-on-Shannon offering tyres, car servicing, pre-NCT checks, brakes, batteries and diagnostics. Call 071 961 6809.",
  keywords: [
    "KC Motors",
    "garage Carrick-on-Shannon",
    "tyres Carrick-on-Shannon",
    "car servicing Carrick-on-Shannon",
    "pre-NCT checks Carrick-on-Shannon",
    "vehicle repairs Leitrim",
    "First Stop KC Motors",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: siteUrl,
    siteName: "KC Motors",
    title: "KC Motors | Garage, Tyres & Car Servicing in Carrick-on-Shannon",
    description:
      "Local, family-run garage in Carrick-on-Shannon. Tyres, servicing, pre-NCT checks, brakes, batteries and diagnostics.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KC Motors | Garage, Tyres & Car Servicing in Carrick-on-Shannon",
    description: "Local, family-run garage in Carrick-on-Shannon. Tyres, servicing, pre-NCT checks and repairs.",
  },
  icons: {
    icon: "/images/kc-motors-logo.jpg",
    apple: "/images/kc-motors-logo.jpg",
  },
};

export const viewport = {
  themeColor: "#1E2230",
};

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "KC Motors",
    description:
      "Family-run garage in Carrick-on-Shannon offering tyres, car servicing, pre-NCT checks, brakes, batteries and diagnostics.",
    image: `${siteUrl}/images/kc-motors-logo.jpg`,
    url: siteUrl,
    telephone: business.phoneHref.replace("tel:", ""),
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      addressLocality: business.address.line2,
      addressRegion: "Leitrim",
      postalCode: business.address.eircode,
      addressCountry: "IE",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "13:00",
      },
    ],
    priceRange: "€€",
    areaServed: {
      "@type": "City",
      name: "Carrick-on-Shannon",
    },
    sameAs: [business.social.instagram, business.social.facebook].filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Garage Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IE" className={`${heading.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-lime focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
