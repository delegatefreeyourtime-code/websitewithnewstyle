import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Solutions for UK SMEs | Delegate",
  description: "Explore our done-for-you AI automation solutions: proposal generators, knowledge chatbots, lead scoring, status reports, and expense categorization for UK businesses.",
  openGraph: {
    title: "AI Automation Solutions for UK SMEs | Delegate",
    description: "Explore our done-for-you AI automation solutions designed specifically for UK SMEs.",
    type: "website",
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
