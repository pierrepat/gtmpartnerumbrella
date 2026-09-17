import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { BackToTop } from "@/components/back-to-top";
import { ChatWidget } from "@/components/chat-widget";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = "GTM Partner LLC | Growth infrastructure for plaintiff law firms";
// Under 155 characters.
const DESCRIPTION =
  "GTM Partner LLC owns PlaintiffPilot and MVA Compensation. Two brands, one job: more signed cases per marketing dollar for plaintiff law firms.";

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: "%s | GTM Partner LLC",
  },
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "GTM Partner LLC",
    url: SITE_URL,
    // og.png is rendered from scripts/og.html (see README).
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "GTM Partner LLC. Growth infrastructure for plaintiff law firms." }],
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GTM Partner LLC",
  legalName: "GTM Partner LLC",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  email: CONTACT_EMAIL,
  description:
    "GTM Partner LLC builds growth infrastructure for plaintiff law firms. It owns PlaintiffPilot, the AI intake engine for PI law firms, and MVA Compensation, a bilingual accident help site.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "DE",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Pierre Patrouillard",
    jobTitle: "Founder",
    sameAs: "https://linkedin.com/in/pierrepatrouillard",
  },
  brand: [
    {
      "@type": "Brand",
      name: "PlaintiffPilot",
      url: "https://plaintiffpilot.com",
      description: "The AI intake engine for PI law firms.",
    },
    {
      "@type": "Brand",
      name: "MVA Compensation",
      url: "https://mvacompensation.com",
      description: "Bilingual accident help for injured people. Free lawyer matching.",
    },
  ],
  sameAs: [
    "https://plaintiffpilot.com",
    "https://mvacompensation.com",
    "https://linkedin.com/in/pierrepatrouillard",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-surface text-text-primary">
        {/* Google tag (gtag.js), Google Ads AW-18250922700 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18250922700"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18250922700');`}
        </Script>
        <ChatWidget />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollReveal />
        <BackToTop />
      </body>
    </html>
  );
}
