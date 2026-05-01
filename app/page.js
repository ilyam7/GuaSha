import Link from 'next/link';
import { products } from '@/lib/products';
import EmailCapture from '@/components/EmailCapture';
import ProductImage from '@/components/ProductImage';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/5">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center py-20 md:py-28">
          <div>
            <p className="text-xs tracking-widest uppercase text-accent-dark mb-5">
              The Lume Ritual
            </p>
            <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight">
              Sculpt.<br />Depuff.<br />Glow.
            </h1>
            <p className="mt-6 text-lg text-ink/70 max-w-md leading-relaxed">
              The stainless steel gua sha tool that replaces your jade roller — and lasts a lifetime.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/product/gua-sha-tool" className="btn-primary">Shop the tool</Link>
              <Link href="/product/gua-sha-bundle" className="btn-outline">Shop the bundle</Link>
            </div>
          </div>
          <div className="relative">
            <ProductImage bg="#E8DCC8" size="aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* Product highlights */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-widest uppercase text-accent-dark mb-3">Shop</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">Two tools, one ritual.</h2>
          </div>
          <Link href="/product/gua-sha-tool" className="hidden md:inline text-sm underline underline-offset-4 hover:text-accent-dark">
            View all
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {products.map((p) => (
            <Link key={p.id} href={`/product/${p.slug}`} className="group block">
              <div className="overflow-hidden">
                <ProductImage bg={p.images[0].bg} size="aspect-[4/5]" />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <h3 className="text-base font-medium">{p.name}</h3>
                  <p className="text-sm text-ink/60">{p.tagline}</p>
                </div>
                <span className="text-sm">{p.priceLabel}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-paper border-y border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs tracking-widest uppercase text-accent-dark mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight max-w-xl">
            A three-minute ritual, morning or night.
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-10">
            {[
              {
                n: '01',
                t: 'Prep',
                d: 'Cleanse, then apply a few drops of facial oil so the tool glides — never drags.',
              },
              {
                n: '02',
                t: 'Sculpt',
                d: 'Glide upward and outward in slow strokes — jaw, cheek, brow. Five passes per zone.',
              },
              {
                n: '03',
                t: 'Glow',
                d: 'Wipe clean. Watch puffiness ease and your skin reflect light. Repeat daily.',
              },
            ].map((step) => (
              <div key={step.n}>
                <div className="text-accent-dark text-sm tracking-widest">{step.n}</div>
                <h3 className="mt-2 text-xl font-medium">{step.t}</h3>
                <p className="mt-2 text-ink/70 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email capture */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <EmailCapture />
      </section>
    </>
  );
}
