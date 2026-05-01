import ProductImage from '@/components/ProductImage';

export const metadata = {
  title: 'About — Lume Gua Sha',
  description: 'Why we built one tool, made to last a lifetime.',
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-xs tracking-widest uppercase text-accent-dark mb-3">Our story</p>
      <h1 className="text-4xl md:text-5xl font-light tracking-tight">
        One tool. Made to last a lifetime.
      </h1>

      <div className="mt-10 mb-12">
        <ProductImage bg="#E8DCC8" size="aspect-[16/9]" />
      </div>

      <div className="prose prose-lg max-w-none text-ink/80 leading-relaxed space-y-6">
        <p>
          Lume started with a simple frustration: a drawer full of beauty tools that
          chipped, stained, or quietly stopped working. Jade rollers cracked. Plastic
          tools warped. Nothing felt like it was built to be passed down.
        </p>
        <p>
          So we made a different kind of gua sha. Cut from a single block of
          surgical-grade stainless steel and finished by hand, our tool stays cool
          against the skin, glides effortlessly, and will outlast every product on
          your shelf. No microplastics. No replacements. No waste.
        </p>
        <p>
          We sell two things — the tool, and the oil to glide it with. That's the
          whole catalog, and that's the point. A small, considered ritual you can
          actually keep up with.
        </p>
        <p className="text-accent-dark">
          — The Lume team
        </p>
      </div>
    </section>
  );
}
