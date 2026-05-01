'use client';

import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    // Wire this up to your email provider (Klaviyo, Mailchimp, ConvertKit, etc.).
    setSubmitted(true);
  }

  return (
    <div className="bg-paper border border-black/5 p-8 sm:p-12 text-center">
      <h3 className="text-2xl sm:text-3xl font-light tracking-tight">
        Get 10% off your first order
      </h3>
      <p className="mt-2 text-ink/60 text-sm">
        Slow rituals, occasional emails. Unsubscribe anytime.
      </p>

      {submitted ? (
        <p className="mt-6 text-accent-dark text-sm">
          Thanks — your code is on its way.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 border border-black/15 bg-white text-sm focus:outline-none focus:border-accent"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-ink text-white text-xs tracking-widest uppercase hover:bg-accent-dark transition-colors"
          >
            Get my code
          </button>
        </form>
      )}
    </div>
  );
}
