import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Operations Audit | Delegate",
  description: "Get a personalised Loom video audit showing 3 specific automations you can implement. Free for UK SMEs. Delivered within 48 hours.",
  openGraph: {
    title: "Free AI Operations Audit | Delegate",
    description: "We review your workflow and record a personalised video with 3 specific automations you can implement. Delivered within 48 hours.",
    type: "website",
  },
};

export default function FreeAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
