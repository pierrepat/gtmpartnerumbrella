import type { Metadata } from "next";
import Script from "next/script";
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
    default: "GTM Partner — AI Growth Partner for Law Firms",
    template: "%s | GTM Partner",
  },
  description:
    "We use AI to turn more of your leads into signed cases: reactivation, intake, and new demand, with full visibility from click to signed retainer.",
  metadataBase: new URL("https://gtmpartner.ai"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "GTM Partner",
    title: "GTM Partner — AI Growth Partner for Law Firms",
    description:
      "We use AI to turn more of your leads into signed cases: reactivation, intake, and new demand, with full visibility from click to signed retainer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTM Partner — AI Growth Partner for Law Firms",
    description:
      "We use AI to turn more of your leads into signed cases, with full visibility from click to signed retainer.",
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
    "AI growth partner for law firms. Lead reactivation, intake, and new demand. Outbound and RevOps systems for B2B companies.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  brand: {
    "@type": "Brand",
    name: "MVACompensation",
    url: "https://mvacompensation.com",
    description:
      "Bilingual consumer resource for US car accident victims. State and injury guides, settlement estimator, and free attorney matching. Owned and operated by GTM Partner.",
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
        {/* Google tag (gtag.js) — Google Ads AW-18250922700 */}
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
        {/* LeadConnector chat widget */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a71d820a4347d15e373f74f"
          data-source="WEB_USER"
          strategy="lazyOnload"
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollReveal />
        <BackToTop />
      </body>
    </html>
  );
}
