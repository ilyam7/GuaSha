export default function ProductImage({ bg = '#E8DCC8', label = '', className = '', size = 'aspect-square' }) {
  return (
    <div
      className={`${size} w-full flex items-center justify-center text-ink/40 text-xs tracking-widest uppercase ${className}`}
      style={{ background: bg }}
      aria-label={`Product image placeholder${label ? ` — ${label}` : ''}`}
    >
      <svg width="40%" height="40%" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-40">
        <path d="M15 55 Q50 10 90 50 Q70 70 50 75 Q25 80 15 55 Z" fill="rgba(255,255,255,0.25)" />
        <path d="M30 60 Q50 35 75 55" />
      </svg>
    </div>
  );
}
