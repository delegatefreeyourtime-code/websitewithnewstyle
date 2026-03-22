import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 bg-[#0B0C10] min-h-[60vh] flex items-center relative">
      <div className="absolute inset-0 grid-overlay" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold text-[#FF5A1F] tracking-[0.15em] uppercase">404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#F3F4F6] sm:text-5xl uppercase">
            Page not found
          </h1>
          <p className="mt-6 text-lg text-[#8B8C95]">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-3 bg-[#FF5A1F] text-white font-semibold tracking-wide hover:bg-[#FF7040] transition-colors shadow-[0_0_20px_rgba(255,90,31,0.3)]"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
