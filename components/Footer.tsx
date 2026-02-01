import Link from 'next/link';
import Image from 'next/image';

const navigation = {
  solutions: [
    { name: 'AI Proposal Generator', href: '/solutions#proposal-generator' },
    { name: 'Knowledge Chatbot', href: '/solutions#knowledge-chatbot' },
    { name: 'Lead Scoring', href: '/solutions#lead-scoring' },
    { name: 'Status Reports', href: '/solutions#status-reports' },
    { name: 'Expense Categorization', href: '/solutions#expense-categorization' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="Delegate"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <p className="text-sm text-muted-foreground max-w-xs">
              AI automation for UK SMEs. Built, deployed, and managed by us so you can focus on what matters.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Solutions</h3>
              <ul className="mt-4 space-y-3">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground">Company</h3>
              <ul className="mt-4 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Delegate AI Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
