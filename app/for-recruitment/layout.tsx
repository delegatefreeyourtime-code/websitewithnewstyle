import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Recruitment Agencies UK | Delegate",
  description: "UK recruitment agencies: automate CV screening, candidate follow-up, and client reporting. Custom AI workflows that save your consultants 10+ hours per week.",
  openGraph: {
    title: "AI Automation for Recruitment Agencies UK | Delegate",
    description: "Automate CV screening, candidate follow-up, and client reporting. Less admin. More placements.",
    type: "website",
  },
};

export default function ForRecruitmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
