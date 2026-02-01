import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Delegate | UK AI Automation Agency",
  description: "Meet the team behind Delegate AI Agency. We make enterprise-grade AI automation accessible for UK SMEs. Founded by Lewis Chaplin to bridge the AI implementation gap.",
  openGraph: {
    title: "About Delegate | UK AI Automation Agency",
    description: "Meet the team behind Delegate. Enterprise-grade AI automation made accessible for UK SMEs.",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
