import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Pricing | Transparent Monthly Plans | Delegate",
  description: "Transparent pricing for AI automation services. From £400/month for single solutions to enterprise packages. No hidden fees, clear tiers for UK SMEs.",
  openGraph: {
    title: "AI Automation Pricing | Transparent Monthly Plans | Delegate",
    description: "Transparent pricing for AI automation services. From £400/month for single solutions to enterprise packages.",
    type: "website",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's included in the setup fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The setup fee covers everything needed to get your automation running: discovery sessions to understand your workflow, solution design, building the automation, integration with your existing tools, testing, and training your team.",
      },
    },
    {
      "@type": "Question",
      name: "What does 'monthly maintenance' include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Monthly maintenance covers hosting, monitoring, updates, and fixes. If something breaks or needs adjusting, we handle it. We also keep your AI models up to date and optimise performance based on usage patterns.",
      },
    },
    {
      "@type": "Question",
      name: "Can I upgrade or change solutions later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We designed our tiers to grow with your business. Adding new solutions or upgrading your tier is straightforward. We'll discuss the scope and provide a clear quote for any changes.",
      },
    },
    {
      "@type": "Question",
      name: "Do I own the automations you build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build on your infrastructure where possible, and you retain full ownership of the systems, prompts, and workflows we create.",
      },
    },
  ],
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
