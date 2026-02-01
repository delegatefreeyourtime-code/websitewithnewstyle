import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Delegate | Get Your Free AI Consultation",
  description: "Get in touch with Delegate AI Agency. Book a free discovery call and receive a clear proposal within 48 hours. We respond within 24 hours.",
  openGraph: {
    title: "Contact Delegate | Get Your Free AI Consultation",
    description: "Book a free discovery call. Get a clear proposal within 48 hours. We respond within 24 hours.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
