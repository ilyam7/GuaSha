'use client';

import Link from 'next/link';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useCart } from '@/components/CartProvider';

// ---------------------------------------------------------------
// STRIPE PUBLISHABLE KEY
// ---------------------------------------------------------------
// Read from env. Set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY in `.env.local`.
// See `.env.local.example` for instructions.
// ---------------------------------------------------------------
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
);

function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem, hydrated } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleCheckout() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((i) => ({ id: i.id, quantity: i.quantity })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Checkout failed');

      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load. Check your publishable key.');
      const { error: redirectError } = await stripe.redirectToCheckout({
        sessionId: data.id,
      });
      if (redirectError) throw redirectError;
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  if (!hydrated) {
    return <section className="mx-auto max-w-4xl px-6 py-20" />;
  }

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-xs tracking-widest uppercase text-accent-dark mb-3">Your cart</p>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight">Your cart is empty.</h1>
        <p className="mt-4 text-ink/60">Begin your ritual.</p>
        <div className="mt-8">
          <Link href="/product/gua-sha-tool" className="btn-primary">Shop the tool</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-xs tracking-widest uppercase text-accent-dark mb-3">Your cart</p>
      <h1 className="text-4xl md:text-5xl font-light tracking-tight">Cart</h1>

      <div className="mt-12 divide-y divide-black/10">
        {items.map((item) => (
          <div key={item.id} className="py-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <Link href={`/product/${item.slug}`} className="text-lg font-medium hover:text-accent-dark">
                {item.name}
              </Link>
              <p className="text-sm text-ink/60 mt-1">{formatPrice(item.price)} each</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="inline-flex items-center border border-black/15">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-3 py-2 text-ink/60 hover:text-ink"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-2 text-ink/60 hover:text-ink"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <span className="w-20 text-right tabular-nums">
                {formatPrice(item.price * item.quantity)}
              </span>

              <button
                onClick={() => removeItem(item.id)}
                className="text-xs text-ink/50 hover:text-ink underline underline-offset-4"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-black/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-ink/50">Subtotal</div>
          <div className="text-2xl mt-1 tabular-nums">{formatPrice(subtotal)}</div>
          <p className="text-xs text-ink/50 mt-1">Taxes and shipping calculated at checkout.</p>
        </div>
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="btn-primary disabled:opacity-60"
        >
          {loading ? 'Redirecting…' : 'Checkout'}
        </button>
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3">
          {error}
        </p>
      )}
    </section>
  );
}
