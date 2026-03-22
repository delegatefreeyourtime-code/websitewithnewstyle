import Link from "next/link";

export default function TermsPage() {
  return (
    <section className="py-24 bg-[#0B0C10] relative min-h-screen">
      <div className="absolute inset-0 grid-overlay" />
      <div className="mx-auto max-w-3xl px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#8B8C95] mb-4">Legal</p>
          <h1 className="text-4xl font-bold text-[#F3F4F6] uppercase tracking-tight mb-4">Terms of Service</h1>
          <p className="text-[#8B8C95]">Last updated: {new Date().getFullYear()}</p>
        </div>

        <div className="space-y-8 text-[#8B8C95] leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#F3F4F6] uppercase mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing our website or engaging our services, you agree to these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F3F4F6] uppercase mb-3">2. Services</h2>
            <p>
              Delegate AI Agency provides AI automation consultancy and implementation services to businesses in the United Kingdom. The specific scope of services, pricing, and timelines are agreed in writing before any work commences.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F3F4F6] uppercase mb-3">3. Intellectual Property</h2>
            <p>
              Upon full payment, clients retain ownership of the automation systems and workflows we build for them on their infrastructure. We retain ownership of our proprietary methodologies, templates, and general tooling.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F3F4F6] uppercase mb-3">4. Payment Terms</h2>
            <p>
              Payment terms are specified in individual service agreements. We reserve the right to pause work on overdue accounts. All prices are quoted in GBP and exclude VAT unless stated otherwise.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F3F4F6] uppercase mb-3">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by UK law, Delegate AI Agency shall not be liable for indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the fees paid for the specific service in question.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F3F4F6] uppercase mb-3">6. Governing Law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F3F4F6] uppercase mb-3">7. Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a href="mailto:freeyourtime@delegate-me.com" className="text-[#FF5A1F] hover:text-[#FF7040]">
                freeyourtime@delegate-me.com
              </a>.
            </p>
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
