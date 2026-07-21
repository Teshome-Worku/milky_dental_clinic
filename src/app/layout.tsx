import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drmilkydental.com";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1DA1F2",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr. Milky Derara Specialty Dental Clinic | Addis Ababa",
    template: "%s | Dr. Milky Dental Clinic",
  },
  description:
    "Dr. Milky Derara Specialty Dental Clinic provides professional, modern, and compassionate dental care in Addis Ababa, Ethiopia. Services include general checkups, cleaning, braces, cosmetic dentistry, and more.",
  keywords: [
    "dental clinic Addis Ababa",
    "dentist Ethiopia",
    "Dr Milky Derara",
    "dental care Addis Ababa",
    "teeth whitening Ethiopia",
    "braces Addis Ababa",
    "orthodontics Ethiopia",
    "cosmetic dentistry Addis Ababa",
    "Wolo Sefer dentist",
  ],
  authors: [{ name: "Dr. Milky Derara Specialty Dental Clinic" }],
  creator: "Dr. Milky Derara Specialty Dental Clinic",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Dr. Milky Derara Specialty Dental Clinic",
    description:
      "Modern, professional, and compassionate dental care in Addis Ababa. Book your appointment today.",
    siteName: "Dr. Milky Derara Specialty Dental Clinic",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Dr. Milky Derara Specialty Dental Clinic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Milky Derara Specialty Dental Clinic",
    description:
      "Modern, professional, and compassionate dental care in Addis Ababa.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dr. Milky Derara Specialty Dental Clinic",
  image: `${siteUrl}/images/doctor/dr-milky-professional.jpg`,
  url: siteUrl,
  telephone: "+251938329999",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Wolo Sefer, Medco Building, 1st Floor",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "74",
  },
  description:
    "Dr. Milky Derara Specialty Dental Clinic provides modern, professional dental care including general checkups, cleaning, braces, cosmetic dentistry, and more in Addis Ababa, Ethiopia.",
  medicalSpecialty: "Dentistry",
  hasMap: "https://maps.google.com/?q=Wolo+Sefer+Medco+Building+Addis+Ababa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
