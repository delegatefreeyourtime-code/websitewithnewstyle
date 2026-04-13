import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Estate Agents UK | Delegate",
  description: "UK estate agents: automate buyer follow-up, property updates, and post-sale admin. Custom AI workflows that keep your pipeline moving without the manual effort.",
  openGraph: {
    title: "AI Automation for Estate Agents UK | Delegate",
    description: "Automate buyer follow-up, property updates, and post-sale admin. Keep your pipeline moving.",
    type: "website",
  },
};

export default function ForEstateAgentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
