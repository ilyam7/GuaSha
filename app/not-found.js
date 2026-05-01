import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-32 text-center">
      <p className="text-xs tracking-widest uppercase text-accent-dark mb-3">404</p>
      <h1 className="text-4xl md:text-5xl font-light tracking-tight">Page not found.</h1>
      <p className="mt-4 text-ink/60">The link may be broken or the page moved.</p>
      <div className="mt-8">
        <Link href="/" className="btn-primary">Back to home</Link>
      </div>
    </section>
  );
}
