import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { products } from '@/lib/products';

// ---------------------------------------------------------------
// STRIPE SECRET KEY
// ---------------------------------------------------------------
// This is read from the STRIPE_SECRET_KEY environment variable.
// 1) Copy `.env.local.example` to `.env.local`.
// 2) Paste your secret key (starts with `sk_test_` or `sk_live_`)
//    into STRIPE_SECRET_KEY.
// 3) Restart `npm run dev`.
//
// Get keys at: https://dashboard.stripe.com/apikeys
// NEVER hardcode your secret key in source — keep it in env vars only.
// ---------------------------------------------------------------
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
});

export async function POST(request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        {
          error:
            'Stripe is not configured. Add STRIPE_SECRET_KEY to .env.local. See .env.local.example.',
        },
        { status: 500 }
      );
    }

    const { items } = await request.json();

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty.' }, { status: 400 });
    }

    // Resolve prices server-side so client cannot tamper with them.
    const line_items = items.map((entry) => {
      const product = products.find((p) => p.id === entry.id);
      if (!product) throw new Error(`Unknown product: ${entry.id}`);
      const quantity = Math.max(1, Math.min(99, parseInt(entry.quantity, 10) || 1));
      return {
        quantity,
        price_data: {
          currency: 'usd',
          unit_amount: product.price,
          product_data: {
            name: product.name,
            description: product.tagline,
          },
        },
      };
    });

    const origin =
      process.env.NEXT_PUBLIC_SITE_URL ||
      request.headers.get('origin') ||
      'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU', 'DE', 'FR', 'NL', 'IE', 'NZ'],
      },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
      automatic_tax: { enabled: false },
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (err) {
    console.error('Checkout error:', err);
    return NextResponse.json(
      { error: err.message || 'Could not create checkout session.' },
      { status: 500 }
    );
  }
}
