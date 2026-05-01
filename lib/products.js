export const products = [
  {
    id: 'gua-sha-tool',
    slug: 'gua-sha-tool',
    name: 'Stainless Steel Gua Sha',
    tagline: 'The lifetime sculpting tool.',
    price: 3299, // cents
    priceLabel: '$32.99',
    description:
      'A precision-cut, surgical-grade stainless steel gua sha tool — engineered to contour, depuff, and lift. Stays cool against the skin for an instant de-puffing effect, and it will never chip, stain, or wear out.',
    bullets: [
      'Surgical-grade 304 stainless steel',
      'Stays cool — enhances lymphatic drainage',
      'Hand-finished mirror polish',
      'Backed by a lifetime guarantee',
    ],
    images: [
      { bg: '#E8DCC8', label: 'Front' },
      { bg: '#D9CCB4', label: 'Side' },
      { bg: '#F0E6D2', label: 'In hand' },
    ],
  },
  {
    id: 'gua-sha-bundle',
    slug: 'gua-sha-bundle',
    name: 'Gua Sha + Facial Oil Bundle',
    tagline: 'Everything you need to glide.',
    price: 4499,
    priceLabel: '$44.99',
    description:
      'Our stainless steel gua sha paired with a 30 ml bottle of weightless, non-comedogenic facial oil — formulated to let the tool glide and to leave skin luminous, never greasy.',
    bullets: [
      'Includes the Stainless Steel Gua Sha',
      '30 ml cold-pressed facial oil',
      'Squalane + jojoba + rosehip blend',
      'Dermatologist-tested, vegan, cruelty-free',
    ],
    images: [
      { bg: '#D9CCB4', label: 'Bundle' },
      { bg: '#E8DCC8', label: 'Oil' },
      { bg: '#F0E6D2', label: 'Tool' },
    ],
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}
