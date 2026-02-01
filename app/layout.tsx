import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Delegate AI Agency | AI Automation for UK SMEs",
  description: "AI automation for UK SMEs—built, deployed, and managed by us. Automate your operations and reclaim your time with our done-for-you AI solutions.",
  keywords: ["AI automation", "UK SMEs", "business automation", "AI agency", "workflow automation"],
  authors: [{ name: "Delegate AI Agency" }],
  metadataBase: new URL("https://delegateai.agency"),
  openGraph: {
    title: "Delegate AI Agency | AI Automation for UK SMEs",
    description: "AI automation for UK SMEs—built, deployed, and managed by us.",
    type: "website",
    locale: "en_GB",
    url: "https://delegateai.agency",
    siteName: "Delegate AI Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delegate AI Agency | AI Automation for UK SMEs",
    description: "AI automation for UK SMEs—built, deployed, and managed by us.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Delegate AI Agency",
  url: "https://delegateai.agency",
  logo: "https://delegateai.agency/logo.png",
  description: "AI automation for UK SMEs—built, deployed, and managed by us. Automate your operations and reclaim your time with our done-for-you AI solutions.",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "freeyourtime@delegate-me.com",
    contactType: "sales",
    availableLanguage: "English",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
