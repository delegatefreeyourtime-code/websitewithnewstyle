import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalLiquidBackground from "@/components/GlobalLiquidBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Delegate AI Services Ltd | AI Automation for UK SMEs",
  description: "AI automation for UK SMEs. Built, deployed, and managed by us. Automate your operations and reclaim your time with our done-for-you AI solutions.",
  keywords: ["AI automation", "UK SMEs", "business automation", "AI agency", "workflow automation"],
  authors: [{ name: "Delegate AI Services Ltd" }],
  metadataBase: new URL("https://delegateai.agency"),
  openGraph: {
    title: "Delegate AI Services Ltd | AI Automation for UK SMEs",
    description: "AI automation for UK SMEs. Built, deployed, and managed by us.",
    type: "website",
    locale: "en_GB",
    url: "https://delegateai.agency",
    siteName: "Delegate AI Services Ltd",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delegate AI Services Ltd | AI Automation for UK SMEs",
    description: "AI automation for UK SMEs. Built, deployed, and managed by us.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Delegate AI Services Ltd",
  url: "https://delegateai.agency",
  logo: "https://delegateai.agency/logo.png",
  description: "AI automation for UK SMEs. Built, deployed, and managed by us. Automate your operations and reclaim your time with our done-for-you AI solutions.",
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
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <GlobalLiquidBackground />
        <Header />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
