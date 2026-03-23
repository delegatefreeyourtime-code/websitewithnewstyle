import Link from "next/link";

export default function PrivacyPage() {
  return (
    <section className="py-24 bg-[#0B0C10] relative min-h-screen">
      <div className="absolute inset-0 grid-overlay" />
      <div className="mx-auto max-w-3xl px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#8B8C95] mb-4">Legal</p>
          <h1 className="text-4xl font-bold text-[#F3F4F6] uppercase tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-[#8B8C95]">Last updated: {new Date().getFullYear()}</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-[#8B8C95] leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#F3F4F6] uppercase mb-3">1. Who We Are</h2>
            <p>
              Delegate AI Services Ltd (&ldquo;Delegate&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) provides AI automation services to UK SMEs.
              Our contact email is <a href="mailto:freeyourtime@delegate-me.com" className="text-[#FF5A1F] hover:text-[#FF7040]">freeyourtime@delegate-me.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F3F4F6] uppercase mb-3">2. Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul className="list-none space-y-2 mt-3">
              {["Name and email address when you contact us", "Company name and details you share in messages", "Usage information when you visit our website"].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#FF5A1F] flex-shrink-0 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F3F4F6] uppercase mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to respond to your enquiries, provide our services, and improve our website. We do not sell your personal data to third parties.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F3F4F6] uppercase mb-3">4. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to provide our services and comply with our legal obligations. Contact form submissions are retained for 12 months.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F3F4F6] uppercase mb-3">5. Your Rights</h2>
            <p>Under UK GDPR, you have the right to access, correct, or delete your personal data. To exercise these rights, contact us at <a href="mailto:freeyourtime@delegate-me.com" className="text-[#FF5A1F] hover:text-[#FF7040]">freeyourtime@delegate-me.com</a>.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F3F4F6] uppercase mb-3">6. Cookies</h2>
            <p>Our website uses essential cookies only. We do not use tracking or advertising cookies without your consent.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F3F4F6] uppercase mb-3">7. Contact</h2>
            <p>For any privacy-related queries, contact us at <a href="mailto:freeyourtime@delegate-me.com" className="text-[#FF5A1F] hover:text-[#FF7040]">freeyourtime@delegate-me.com</a>.</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1E2028]">
          <Link href="/" className="text-[#8B8C95] hover:text-[#F3F4F6] transition-colors text-sm">
            ← Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
