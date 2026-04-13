import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Dental Practices UK | Delegate",
  description: "UK dental practices: reduce no-shows, automate patient follow-up, and free your reception team from repetitive admin. Custom AI workflows built for private practices.",
  openGraph: {
    title: "AI Automation for Dental Practices UK | Delegate",
    description: "Reduce no-shows, automate patient follow-up, and free your reception team from repetitive admin.",
    type: "website",
  },
};

export default function ForDentalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
