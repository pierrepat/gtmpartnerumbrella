import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 flex items-center justify-center min-h-[60vh]">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-8xl font-bold font-mono stat-value mb-4">404</p>
        <h1 className="text-2xl font-bold text-text-primary mb-4">
          Page not found
        </h1>
        <p className="text-text-secondary mb-8">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to homepage &rarr;
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
