import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Law Firms UK | Delegate",
  description: "UK solicitors: automate client updates, document intake, and billing admin. We build custom AI workflows for law firms — no technical knowledge required.",
  openGraph: {
    title: "AI Automation for Law Firms UK | Delegate",
    description: "We build custom AI systems that handle client updates, document intake, and billing admin for UK law firms.",
    type: "website",
  },
};

export default function ForSolicitorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
