import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Trades Businesses UK | Delegate",
  description: "UK plumbers, electricians, and builders: stop losing jobs to missed calls. Our AI booking assistant picks up every call, books the job, and sends follow-ups automatically.",
  openGraph: {
    title: "AI Automation for Trades Businesses UK | Delegate",
    description: "UK plumbers, electricians, and builders: stop losing jobs to missed calls. Our AI picks up, books the job, and follows up — automatically.",
    type: "website",
  },
};

export default function ForTradesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
