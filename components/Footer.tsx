import Link from 'next/link';
import Image from 'next/image';

const company = [
  { name: 'About', href: '/about' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="bg-[#16181D] border-t border-[#1E2028] relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-8">

          {/* Brand */}
          <div className="space-y-4 xl:col-span-1">
            <Image
              src="/logo.png"
              alt="Delegate"
              width={120}
              height={32}
              className="h-8 w-auto mix-blend-screen"
            />
            <p className="text-sm text-[#8B8C95] max-w-xs leading-relaxed">
              AI automation for UK SMEs. Built, deployed, and managed by us so you can focus on what matters.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-semibold text-[#8B8C95] tracking-[0.12em] uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#8B8C95] hover:text-[#F3F4F6] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[11px] font-semibold text-[#8B8C95] tracking-[0.12em] uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#8B8C95] hover:text-[#F3F4F6] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold text-[#8B8C95] tracking-[0.12em] uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:freeyourtime@delegate-me.com"
                  className="text-sm text-[#8B8C95] hover:text-[#FF5A1F] transition-colors break-all"
                >
                  freeyourtime@delegate-me.com
                </a>
              </li>
              <li>
                <span className="text-sm text-[#8B8C95]">United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#1E2028] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#8B8C95]">
            &copy; est 2025 Delegate AI Services Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-[#8B8C95] hover:text-[#F3F4F6] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-[#8B8C95] hover:text-[#F3F4F6] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
