# PawEssentials — Shopify Theme

A clean, modern, trust-first Shopify theme for a pet accessories dropshipping
store. Built as an Online Store 2.0 theme with JSON templates and section
groups, so every section can be reordered or edited from the Shopify theme
editor.

## What's in the box

```
assets/             theme.css, base.css, theme.js
config/             settings_schema.json, settings_data.json
layout/             theme.liquid
locales/            en.default.json
sections/           Header, footer, hero, featured collection, trust badges,
                    collection list, image-with-text, testimonials, newsletter,
                    rich text, contact form, FAQ, About, Shipping, plus the
                    main-* sections for product/collection/cart/page/search/404
                    and customer area.
snippets/           product-card, icons (menu, search, cart, account, truck,
                    rotate, chat, shield, paw, leaf, social), meta-tags
templates/          index.json, product.json, collection.json, list-collections,
                    page.json, page.contact.json, page.about.json,
                    page.faq.json, page.shipping.json, cart.json, search.json,
                    blog.json, article.json, 404.json, password.liquid,
                    gift_card.liquid, customers/*
```

The homepage (`templates/index.json`) ships with:

1. **Hero** — headline, subhead, primary + secondary CTA, optional background
2. **Trust badges** — free shipping, easy returns, real support, secure checkout
3. **Featured collection** — 4-product bestsellers grid
4. **Collection list** — "Shop by pet" tiles (Dogs / Cats / Small pets / Travel)
5. **Image with text** — brand promise block linking to the About page
6. **Testimonials** — three short customer reviews

Every block is editable from the theme editor (`/admin/themes`).

---

## 1. Upload to Shopify

You have two options.

### Option A — Upload as a ZIP (no CLI needed)

1. From this repo, create a ZIP that contains the **contents** of the project
   (not the project folder itself). The ZIP must have `assets/`, `config/`,
   `layout/`, `locales/`, `sections/`, `snippets/`, and `templates/` at its
   top level.

   ```bash
   zip -r pawessentials.zip assets config layout locales sections snippets templates -x "*.DS_Store"
   ```

2. In your Shopify admin, go to **Online Store → Themes → Add theme → Upload
   ZIP file** and select `pawessentials.zip`.

3. Once it's listed under "Theme library", click **Customize** to open the
   editor, then **Actions → Publish** when you're ready to go live.

### Option B — Shopify CLI (recommended for ongoing development)

Install the Shopify CLI: <https://shopify.dev/docs/themes/tools/cli/install>

```bash
# from the repo root, log in to your store
shopify theme dev --store your-store.myshopify.com
```

This pushes the theme to a development copy on your store and live-reloads as
you edit files locally. To upload as a real theme:

```bash
shopify theme push --unpublished
```

---

## 2. Configure the store (admin checklist)

The theme references several pieces of merchant-managed content. Set these up
in your Shopify admin once the theme is uploaded:

### Navigation menus (Online Store → Navigation)

Create these handles — the theme reads them by handle:

| Handle           | Used by         | Suggested links                              |
| ---------------- | --------------- | -------------------------------------------- |
| `main-menu`      | Header          | Shop all, Dogs, Cats, Small pets, About, FAQ |
| `footer-shop`    | Footer "Shop"   | Best sellers, New arrivals, Sale, All        |
| `footer-help`    | Footer "Help"   | Contact, FAQ, Shipping & returns             |
| `footer-company` | Footer "Company"| About, Blog                                  |

### Pages (Online Store → Pages)

Create these pages and assign each one its matching template via the
"Theme template" dropdown on the right side of the page editor:

| Page title          | Handle      | Template          |
| ------------------- | ----------- | ----------------- |
| About               | `about`     | `page.about`      |
| Contact             | `contact`   | `page.contact`    |
| FAQ                 | `faq`       | `page.faq`        |
| Shipping & returns  | `shipping`  | `page.shipping`   |

The About, FAQ, and Shipping templates ship with default copy, so you can
publish them empty and the theme will fall back to that content. Edit a page's
body in the admin to override the defaults.

### Collections

Create at least these to populate the homepage:

- `bestsellers` — referenced by the hero CTA and Featured collection section
- `dogs`, `cats`, `small-pets`, `travel` — referenced by "Shop by pet"

If a collection doesn't exist yet, the homepage will fall back to placeholder
product cards so the layout still looks complete.

### Theme editor (`Customize`)

- **Logo, colors, fonts, container width, corner radius:** Theme settings
- **Announcement bar message:** Header group → Announcement bar
- **Hero image, headings, CTAs:** Homepage → Hero
- **Trust badges, testimonials, FAQ items:** drag-and-drop blocks inside each
  section

### Checkout & policies

Shopify automatically renders **Privacy**, **Terms**, and **Refund** policies
from `Settings → Policies`. The footer links to them — fill them in there.

---

## 3. Theme features

- **Online Store 2.0** — JSON templates, section groups (header / footer),
  app block ready
- **Accessible** — skip-link, focus styles, semantic landmarks, alt text,
  keyboard-navigable nav and FAQ
- **Performant** — lazy-loaded responsive images via `image_url` + `image_tag`,
  `fetchpriority="high"` on hero, deferred JS, no jQuery, no build step
- **Configurable** — color palette, fonts, container width, corner radius all
  exposed in the theme editor
- **Trust-first design** — dedicated trust-badges section, testimonials,
  policy links, secure-checkout messaging

## 4. Local file layout (cheat sheet)

| File                                | Edit when you want to…                          |
| ----------------------------------- | ----------------------------------------------- |
| `config/settings_schema.json`       | Add or rename a global theme setting            |
| `assets/theme.css`                  | Tweak component styling                         |
| `assets/base.css`                   | Tweak resets, buttons, typography               |
| `sections/hero.liquid`              | Change the hero markup or its editor controls   |
| `sections/trust-badges.liquid`      | Add/remove trust-badge icons                    |
| `templates/index.json`              | Reorder homepage sections / change defaults     |
| `snippets/product-card.liquid`      | Change product card markup                      |
| `locales/en.default.json`           | Edit storefront strings                         |

---

## 5. Going live

1. Upload the theme (Option A or B above).
2. Configure menus, pages, and collections per the checklist.
3. Add your products from your dropshipping supplier (DSers, Spocket, AutoDS,
   etc.) — the theme will pick them up automatically once they're tagged into
   the relevant collections.
4. Set up Shopify Payments, taxes, and shipping zones in **Settings**.
5. Fill in your Privacy / Terms / Refund / Shipping policies in
   **Settings → Policies**.
6. Preview the theme thoroughly, then **Publish**.
