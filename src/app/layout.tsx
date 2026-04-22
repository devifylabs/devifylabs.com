import type { Metadata, Viewport } from "next";
import "./globals.css";
import LicenseGate from "@/components/LicenseGate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devify.agency";
const siteName = "Devify Labs";
const siteDescription =
  "Devify Labs is a full-service digital studio — UI/UX design, high-performance web development, and brand strategy built for startups, SaaS companies, and ambitious businesses ready to scale.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Digital Studio for Startups & SaaS`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "digital studio",
    "UI UX design",
    "web development",
    "SaaS design",
    "startup branding",
    "brand strategy",
    "Next.js development",
    "product design",
    "digital agency India",
    "web design agency",
    "full stack development",
    "conversion optimization",
    "landing page design",
    "growth marketing",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} — Digital Studio for Startups & SaaS`,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteName} — Digital Studio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Digital Studio for Startups & SaaS`,
    description: siteDescription,
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@devifylabs",
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
  alternates: { canonical: siteUrl },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#fe5537",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description: siteDescription,
  foundingDate: "2022",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "120",
    bestRating: "5",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@devifylabs.com",
    availableLanguage: "English",
  },
  sameAs: [
    "https://twitter.com/devifylabs",
    "https://linkedin.com/company/devifylabs",
    "https://instagram.com/devifylabs",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <LicenseGate>{children}</LicenseGate>
      </body>
    </html>
  );
}
