import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Our AI Automation Process Works | Delegate",
  description: "From discovery to deployment in 2-4 weeks. Learn how we build, deploy, and manage AI automation solutions for UK SMEs. Discovery, Design, Deploy, Optimize, Manage.",
  openGraph: {
    title: "How Our AI Automation Process Works | Delegate",
    description: "From discovery to deployment in 2-4 weeks. Learn how we build and manage AI automation for UK SMEs.",
    type: "website",
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
