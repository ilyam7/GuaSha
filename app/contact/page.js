'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your inbox provider (Resend, Formspree, your own /api/contact route, etc.).
    setSubmitted(true);
  }

  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <p className="text-xs tracking-widest uppercase text-accent-dark mb-3">Get in touch</p>
      <h1 className="text-4xl md:text-5xl font-light tracking-tight">We read every note.</h1>
      <p className="mt-4 text-ink/70">
        Questions about your order, the ritual, or wholesale? Send us a message and we'll reply within one business day.
      </p>

      {submitted ? (
        <div className="mt-12 border border-accent/40 bg-paper p-8 text-center">
          <h2 className="text-xl font-medium">Message received.</h2>
          <p className="mt-2 text-ink/70">Thank you — we'll be in touch shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label className="block text-xs tracking-widest uppercase text-ink/60 mb-2">Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={update('name')}
              className="w-full px-4 py-3 border border-black/15 bg-white text-sm focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-xs tracking-widest uppercase text-ink/60 mb-2">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={update('email')}
              className="w-full px-4 py-3 border border-black/15 bg-white text-sm focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-xs tracking-widest uppercase text-ink/60 mb-2">Message</label>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={update('message')}
              className="w-full px-4 py-3 border border-black/15 bg-white text-sm focus:outline-none focus:border-accent resize-none"
            />
          </div>
          <button type="submit" className="btn-primary">Send message</button>
        </form>
      )}
    </section>
  );
}
