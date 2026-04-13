import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Accountancy Firms UK | Delegate",
  description: "UK accountancy firms: automate client chasing, document intake, and reporting. Custom AI workflows that free your team from repetitive admin.",
  openGraph: {
    title: "AI Automation for Accountancy Firms UK | Delegate",
    description: "Automate client chasing, document intake, and reporting. Free your accountants for the work that matters.",
    type: "website",
  },
};

export default function ForAccountantsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
