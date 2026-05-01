export const metadata = {
  title: 'FAQ — Lume Gua Sha',
  description: 'Shipping, returns, and how to use your gua sha.',
};

const faqs = [
  {
    q: 'What is gua sha?',
    a: 'Gua sha (literally "scrape sha") is a centuries-old East Asian practice that uses a smooth-edged tool to gently glide along the skin. Used on the face, it encourages lymphatic drainage, eases muscle tension along the jaw and brow, and leaves skin looking sculpted and luminous. Modern gua sha is gentle — no bruising, no aggressive pressure.',
  },
  {
    q: 'How do I use it?',
    a: 'Cleanse your face, then apply a few drops of facial oil so the tool glides without dragging. Hold the tool flat against the skin at a 15° angle and sweep upward and outward in slow, deliberate strokes — five passes per zone (jawline, cheek, brow, neck). Three minutes is plenty. Wipe the tool clean with a soft cloth when finished.',
  },
  {
    q: 'How long does shipping take?',
    a: 'Orders ship from our US warehouse within 1–2 business days. Domestic delivery is typically 3–5 business days. Shipping is free on orders over $35. International shipping is available at checkout, with delivery in 7–14 business days.',
  },
  {
    q: 'What is your return policy?',
    a: 'We offer 30-day returns on unused items in their original packaging — no questions asked. Just email us at hello@lumeguasha.com and we will send you a prepaid return label. Refunds are issued to your original payment method within 5 business days of receipt.',
  },
  {
    q: 'How do I clean and care for the tool?',
    a: 'Wipe clean with a soft cloth after each use. Once a week, wash with mild soap and warm water and pat dry. Because the tool is solid stainless steel, it will not chip, stain, or absorb oils — and it is backed by our lifetime guarantee.',
  },
  {
    q: 'Is this safe for sensitive skin?',
    a: 'Yes. Stainless steel is hypoallergenic and naturally non-porous, which means no bacteria buildup. Always use with oil and a light hand. If you are pregnant, recovering from facial surgery, or have a skin condition, check with your dermatologist first.',
  },
];

export default function FAQPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-xs tracking-widest uppercase text-accent-dark mb-3">Help</p>
      <h1 className="text-4xl md:text-5xl font-light tracking-tight">Frequently asked.</h1>

      <div className="mt-12 divide-y divide-black/10">
        {faqs.map((f) => (
          <details key={f.q} className="group py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="text-lg font-medium pr-4">{f.q}</span>
              <span className="text-accent-dark text-2xl leading-none transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
