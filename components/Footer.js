import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <div className="font-medium tracking-widest text-xs uppercase mb-3">
            Lume<span className="text-accent">·</span>Gua Sha
          </div>
          <p className="text-ink/60 leading-relaxed">
            Tools for a calmer ritual.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-ink/50 mb-3">Shop</div>
          <ul className="space-y-2 text-ink/70">
            <li><Link href="/product/gua-sha-tool" className="hover:text-ink">Gua Sha Tool</Link></li>
            <li><Link href="/product/gua-sha-bundle" className="hover:text-ink">Tool + Oil Bundle</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-ink/50 mb-3">Brand</div>
          <ul className="space-y-2 text-ink/70">
            <li><Link href="/about" className="hover:text-ink">About</Link></li>
            <li><Link href="/faq" className="hover:text-ink">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-ink">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-ink/50 mb-3">Care</div>
          <ul className="space-y-2 text-ink/70">
            <li>Free US shipping over $35</li>
            <li>30-day returns</li>
            <li>Lifetime guarantee</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-ink/50 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span>© {new Date().getFullYear()} Lume Gua Sha. All rights reserved.</span>
          <span>Made with care.</span>
        </div>
      </div>
    </footer>
  );
}
