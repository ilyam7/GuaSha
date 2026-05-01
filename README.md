# Lume Gua Sha — Storefront

A production-ready, minimal storefront for a stainless steel gua sha brand.
Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Stripe Checkout**.

Pages: Home · Product · About · FAQ · Contact · Cart · Order confirmation.

---

## 1. Run it locally

You need **Node.js 18.17+** (or 20+).

```bash
# from the project root
npm install
cp .env.local.example .env.local
# (edit .env.local — see step 2 below)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To produce a production build:

```bash
npm run build
npm run start
```

---

## 2. Where to paste your Stripe keys

All Stripe keys live in **`.env.local`** at the project root.
Copy `.env.local.example` to `.env.local` and replace the placeholders.

```env
# Publishable key — starts with pk_test_ (testing) or pk_live_ (production)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_PASTE_YOUR_PUBLISHABLE_KEY_HERE

# Secret key — starts with sk_test_ (testing) or sk_live_ (production)
STRIPE_SECRET_KEY=sk_test_PASTE_YOUR_SECRET_KEY_HERE

# Used to build success/cancel redirect URLs
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Get your keys from the [Stripe API keys dashboard](https://dashboard.stripe.com/apikeys).

**Going live:** swap the `pk_test_…` / `sk_test_…` keys for `pk_live_…` /
`sk_live_…` and set `NEXT_PUBLIC_SITE_URL` to your real domain
(e.g. `https://lumeguasha.com`).

The keys are also referenced in code with comments pointing back here:

- `app/cart/page.js` — uses `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (browser).
- `app/api/checkout/route.js` — uses `STRIPE_SECRET_KEY` (server only).

**Test mode card numbers** (use with `pk_test_`/`sk_test_` keys):

- `4242 4242 4242 4242` — any future expiry, any CVC, any ZIP.

---

## 3. Deploy free on Vercel (recommended)

Vercel is built by the Next.js team and the free Hobby tier is more than enough.

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. On the "Configure Project" screen, add three **Environment Variables**:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_SITE_URL` (set to your Vercel URL — e.g.
     `https://your-project.vercel.app` — and update once you add a custom domain)
4. Click **Deploy**.

When you swap to live Stripe keys, edit the same variables in
**Project → Settings → Environment Variables** and redeploy.

### Deploying on Netlify (alternative)

1. Push to GitHub.
2. Import to Netlify; build command `npm run build`, publish directory handled
   automatically by the Next.js runtime.
3. Add the same three environment variables under **Site settings →
   Environment variables**.

---

## Project structure

```
app/
  page.js                 # Homepage (hero, products, "How it works", email capture)
  layout.js               # Root layout — Header, Footer, CartProvider
  globals.css             # Tailwind base + utility classes
  about/page.js
  faq/page.js
  contact/page.js
  cart/page.js            # Cart + "Checkout" button → Stripe
  success/page.js         # Order confirmation (reads Stripe session)
  product/[slug]/page.js  # Product detail
  api/checkout/route.js   # Creates Stripe Checkout session
components/
  Header.js               # Sticky header with cart count badge
  Footer.js
  CartProvider.js         # Cart state + localStorage persistence
  AddToCartButton.js
  EmailCapture.js
  ProductImage.js         # Placeholder swatches (drop in real images later)
lib/
  products.js             # Product catalog (single source of truth)
```

## Adding real product images

Replace `components/ProductImage.js` with `next/image` calls, or drop images
into `public/` and reference them as `/images/...` in `lib/products.js`.

## Wiring up email capture & contact form

The homepage email capture and `/contact` form currently submit only to local
state. Hook them up to:

- **Email capture:** Klaviyo, ConvertKit, Mailchimp, or Resend.
- **Contact form:** Formspree, Resend, or your own `/api/contact` route.

Both files are clearly marked with a comment explaining where to wire them up.
