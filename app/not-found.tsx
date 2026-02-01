import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 bg-white min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold text-muted-foreground">404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-10">
            <Link
              href="/"
              className="rounded-md bg-foreground px-6 py-3 text-base font-medium text-white hover:bg-foreground/90 transition-colors"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
