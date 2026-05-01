'use client';

import Link from 'next/link';
import { useCart } from './CartProvider';

export default function Header() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-medium tracking-widest text-sm uppercase">
          Lume<span className="text-accent">·</span>Gua Sha
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-ink/80">
          <Link href="/product/gua-sha-tool" className="hover:text-ink">Shop</Link>
          <Link href="/about" className="hover:text-ink">About</Link>
          <Link href="/faq" className="hover:text-ink">FAQ</Link>
          <Link href="/contact" className="hover:text-ink">Contact</Link>
        </nav>

        <Link href="/cart" aria-label="Cart" className="relative inline-flex items-center gap-2 text-sm">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          <span className="hidden sm:inline">Cart</span>
          {count > 0 && (
            <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-accent text-white text-[10px] font-medium flex items-center justify-center">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
