'use client';

import { useState } from 'react';
import { useCart } from './CartProvider';

export default function AddToCartButton({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  }

  return (
    <button
      onClick={handleClick}
      className="w-full sm:w-auto px-8 py-4 bg-ink text-white text-sm tracking-widest uppercase hover:bg-accent-dark transition-colors disabled:opacity-60"
      disabled={added}
    >
      {added ? 'Added to cart' : 'Add to cart'}
    </button>
  );
}
