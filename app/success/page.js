import Link from 'next/link';
import Stripe from 'stripe';
import ClearCartOnMount from './ClearCartOnMount';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
});

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Order confirmed — Lume Gua Sha',
};

async function getSession(sessionId) {
  if (!sessionId || !process.env.STRIPE_SECRET_KEY) return null;
  try {
    return await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items'],
    });
  } catch (err) {
    console.error('Could not retrieve Stripe session:', err);
    return null;
  }
}

export default async function SuccessPage({ searchParams }) {
  const session = await getSession(searchParams?.session_id);

  const email = session?.customer_details?.email;
  const total = session?.amount_total
    ? `$${(session.amount_total / 100).toFixed(2)}`
    : null;
  const lineItems = session?.line_items?.data || [];

  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <ClearCartOnMount />

      <div className="mx-auto w-14 h-14 rounded-full border border-accent flex items-center justify-center mb-6">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B8956A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>

      <p className="text-xs tracking-widest uppercase text-accent-dark mb-3">Thank you</p>
      <h1 className="text-4xl md:text-5xl font-light tracking-tight">Your order is confirmed.</h1>
      <p className="mt-4 text-ink/70">
        {email
          ? <>A receipt is on its way to <span className="text-ink">{email}</span>.</>
          : <>A receipt has been emailed to you.</>}
      </p>

      {lineItems.length > 0 && (
        <div className="mt-12 text-left border border-black/10 divide-y divide-black/10">
          {lineItems.map((item) => (
            <div key={item.id} className="px-5 py-4 flex items-center justify-between text-sm">
              <span>
                {item.description}
                <span className="text-ink/50"> × {item.quantity}</span>
              </span>
              <span className="tabular-nums">
                ${((item.amount_total || 0) / 100).toFixed(2)}
              </span>
            </div>
          ))}
          {total && (
            <div className="px-5 py-4 flex items-center justify-between text-sm font-medium">
              <span>Total</span>
              <span className="tabular-nums">{total}</span>
            </div>
          )}
        </div>
      )}

      <div className="mt-12">
        <Link href="/" className="btn-outline">Back to home</Link>
      </div>
    </section>
  );
}
