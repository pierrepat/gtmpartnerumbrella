import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { BackToTop } from "@/components/back-to-top";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GTM Partner — Pay-Per-Lead for Personal Injury Law Firms",
    template: "%s | GTM Partner",
  },
  description:
    "We fund your legal ads. You pay per qualified lead. Exclusive, OTP-verified MVA leads delivered to your CRM in real-time. $5M+/month in managed ad spend.",
  metadataBase: new URL("https://gtmpartner.ai"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "GTM Partner",
    title: "GTM Partner — Pay-Per-Lead for Personal Injury Law Firms",
    description:
      "We fund your legal ads. You pay per qualified lead. Exclusive, OTP-verified MVA leads delivered to your CRM in real-time.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTM Partner — Pay-Per-Lead for Personal Injury Law Firms",
    description:
      "We fund your legal ads. You pay per qualified lead. Exclusive MVA leads delivered to your CRM.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GTM Partner",
  url: "https://gtmpartner.ai",
  logo: "https://gtmpartner.ai/favicon.svg",
  description:
    "Pay-per-lead for personal injury law firms. Outbound and RevOps systems for B2B SaaS companies.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  sameAs: [
    "https://linkedin.com/in/pierrepatrouillard",
    "https://www.youtube.com/@gtmpartner",
  ],
  founder: {
    "@type": "Person",
    name: "Pierre Patrouillard",
    jobTitle: "CEO",
  },
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
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollReveal />
        <BackToTop />
      </body>
    </html>
  );
}
