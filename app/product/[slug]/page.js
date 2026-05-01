import { notFound } from 'next/navigation';
import { products, getProduct } from '@/lib/products';
import AddToCartButton from '@/components/AddToCartButton';
import ProductImage from '@/components/ProductImage';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — Lume Gua Sha`,
    description: product.description,
  };
}

export default function ProductPage({ params }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-20 grid md:grid-cols-2 gap-12">
      {/* Images */}
      <div className="space-y-3">
        <ProductImage bg={product.images[0].bg} size="aspect-square" label={product.images[0].label} />
        <div className="grid grid-cols-2 gap-3">
          {product.images.slice(1).map((img, i) => (
            <ProductImage key={i} bg={img.bg} size="aspect-square" label={img.label} />
          ))}
        </div>
      </div>

      {/* Details */}
      <div>
        <p className="text-xs tracking-widest uppercase text-accent-dark mb-3">{product.tagline}</p>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight">{product.name}</h1>
        <p className="mt-4 text-2xl text-ink">{product.priceLabel}</p>

        <p className="mt-6 text-ink/70 leading-relaxed">{product.description}</p>

        <ul className="mt-6 space-y-2 text-sm text-ink/80">
          {product.bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="text-accent-dark">—</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <AddToCartButton product={product} />
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 text-xs text-ink/60 border-t border-black/5 pt-6">
          <div>
            <div className="uppercase tracking-widest text-ink/50 mb-1">Shipping</div>
            Free over $35
          </div>
          <div>
            <div className="uppercase tracking-widest text-ink/50 mb-1">Returns</div>
            30 days
          </div>
          <div>
            <div className="uppercase tracking-widest text-ink/50 mb-1">Warranty</div>
            Lifetime
          </div>
        </div>
      </div>
    </section>
  );
}
