# Flexora Architecture

## Audit Snapshot

This repository is based on Shopify's Skeleton Theme, not Dawn or Horizon.

Evidence:

- `config/settings_schema.json` identifies `theme_name` as `Skeleton`,
  version `0.1.0`, and author `Shopify`.
- `README.md` is titled "Shopify Skeleton Theme" and describes the same
  minimal architecture found in the repository.
- `sections/hello-world.liquid` contains the Skeleton starter introduction.
- The Git remote is `https://github.com/Shopify/skeleton-theme.git`.
- Recent commits match the Shopify Skeleton Theme upstream history.
- The architecture uses theme blocks, section groups, JSON templates, and a
  very small `critical.css`, consistent with the Skeleton starter.

The codebase is therefore a lean starter rather than a customized commercial
theme. This is useful because there is little legacy complexity, but most
production systems still need to be designed.

## Folder Structure

| Path | Current responsibility |
| --- | --- |
| `assets/` | Global CSS, SVG icons, and starter artwork |
| `blocks/` | Reusable Shopify theme blocks |
| `config/` | Theme settings schema and saved Theme Editor data |
| `layout/` | Main storefront and password HTML wrappers |
| `locales/` | Storefront and Theme Editor translations |
| `sections/` | Page, global, and reusable merchant sections |
| `snippets/` | Reusable Liquid rendering and metadata helpers |
| `templates/` | JSON template composition and gift card Liquid template |

## Important Files

### Layout

- `layout/theme.liquid`: Main HTML document, font preload, critical CSS,
  metadata, header section group, page content, and footer section group.
- `layout/password.liquid`: Minimal password-page document wrapper.
- `templates/gift_card.liquid`: Standalone gift card HTML document.

The main storefront layout now sets locale-aware `lang` and `dir` attributes.
The password and gift card documents still need the same direction foundation
in a later global-layout pass.

### Configuration

- `config/settings_schema.json`: Retains the Skeleton starter settings and adds
  the initial Flexora design-system controls for colors, page width, section
  spacing, radii, shadows, and animation level. Theme metadata still says
  Skeleton.
- `config/settings_data.json`: Contains an empty current configuration.
- `.theme-check.yml`: Extends `theme-check:recommended`.

### Templates

| Template | Current main section |
| --- | --- |
| `templates/index.json` | `flexora-hero`, `flexora-collection-cards`, `flexora-featured-collection` |
| `templates/product.json` | `product` |
| `templates/collection.json` | `collection` |
| `templates/list-collections.json` | `collections` |
| `templates/cart.json` | `cart` |
| `templates/search.json` | `search` |
| `templates/blog.json` | `blog` |
| `templates/article.json` | `article` |
| `templates/page.json` | `page` |
| `templates/password.json` | `password` |
| `templates/404.json` | `404` |
| `templates/gift_card.liquid` | Standalone gift card markup |

The JSON templates are intentionally minimal and generally contain one main
section each.

## Current Sections

- `sections/404.liquid`: Basic translated not-found page.
- `sections/article.liquid`: Article content, metadata, comments, and comment
  form.
- `sections/blog.liquid`: Basic article listing.
- `sections/cart.liquid`: Basic cart form, quantities, removal, update, and
  checkout.
- `sections/collection.liquid`: Basic paginated product grid.
- `sections/collections.liquid`: Configurable list of collections.
- `sections/custom-section.liquid`: Full-width background image with nested
  theme blocks.
- `sections/footer.liquid`: Menu, copyright, and optional payment icons.
- `sections/flexora-footer.liquid`: Responsive RTL/LTR footer with brand,
  menus, newsletter, social links, localization, payments, and copyright.
- `sections/footer-group.json`: Strict JSON footer group containing the
  Flexora footer.
- `sections/header.liquid`: Store name, menu, customer account component, and
  cart link.
- `sections/flexora-announcement-bar.liquid`: Merchant-configurable,
  dismissible announcement bar with responsive visibility controls.
- `sections/flexora-header.liquid`: Responsive RTL/LTR header with logo, menu,
  language, search, account, cart, and sticky-layout controls.
- `sections/header-group.json`: Strict JSON header group containing the Flexora
  announcement bar followed by the Flexora header.
- `sections/flexora-hero.liquid`: Responsive static banner or block-driven
  slider with per-slide media, content, overlay, and button controls.
- `sections/flexora-collection-cards.liquid`: Collection-driven or custom
  category cards with grid, carousel, and featured-grid layouts, responsive
  images, editor placeholders, and Arabic-first presets.
- `sections/flexora-featured-collection.liquid`: Collection-backed product
  grid or lightweight carousel using the reusable Flexora product card.
- `sections/hello-world.liquid`: Skeleton starter homepage and demo content.
- `sections/page.liquid`: Basic page title and content.
- `sections/password.liquid`: Password form.
- `sections/product.liquid`: Basic media list, product information, variant
  select, quantity, add-to-cart form, and dynamic checkout.
- `sections/search.liquid`: Search form and paginated result listing.

Only `custom-section.liquid` currently hosts nested theme blocks. There is no
explicit `@app` block support in the audited sections.

## Current Blocks

- `blocks/group.liquid`: Nestable horizontal or vertical flex container.
- `blocks/text.liquid`: Text block with basic style and alignment settings.

Both use LiquidDoc and `block.shopify_attributes`. They are useful starter
patterns but do not yet form a complete Flexora component system.

## Current Snippets

- `snippets/css-variables.liquid`: Emits font faces and the small current set
  of global CSS custom properties.
- `snippets/flexora-design-tokens.liquid`: Emits the initial merchant-controlled
  Flexora color, layout, radius, shadow, and transition tokens.
- `snippets/flexora-section-header.liquid`: Reusable, direction-aware section
  eyebrow, heading, and supporting-text composition.
- `snippets/flexora-button.liquid`: Reusable link or button with validated
  Flexora style and size variants.
- `snippets/flexora-badge.liquid`: Reusable badge with validated semantic
  visual variants.
- `snippets/flexora-social-links.liquid`: Reusable list sourced from global
  social URL settings.
- `snippets/flexora-newsletter-form.liquid`: Reusable Shopify customer
  newsletter form with translated feedback.
- `snippets/flexora-product-card.liquid`: Shared product presentation for
  homepage, collection, search, and future recommendation surfaces, including
  pricing, badges, optional secondary media, and basic non-AJAX quick add.
- `snippets/image.liquid`: Responsive image helper with optional link wrapper.
- `snippets/meta-tags.liquid`: Standard metadata, Open Graph, Twitter, and
  structured-data output.

## Current Assets

- `assets/critical.css`: Reset, global body styles, form basics, and the
  constrained/full-width section grid.
- `assets/flexora-base.css`: Prefixed Flexora foundations for containers,
  typography, buttons, cards, badges, forms, prices, responsive layouts,
  direction helpers, focus states, visually hidden content, and reduced motion.
- `assets/flexora-hero.css`: Isolated responsive hero layout, controls,
  overlays, mobile stacking, and optional parallax presentation.
- `assets/flexora-hero.js`: Dependency-free slider navigation, autoplay,
  keyboard, RTL, reduced-motion, and Theme Editor lifecycle handling.
- `assets/flexora-collection-cards.css`: Responsive collection-card layouts,
  image ratios, visual variants, scroll snapping, and RTL-aware controls.
- `assets/flexora-collection-cards.js`: Small dependency-free enhancement for
  card-track arrows, RTL scrolling, reduced motion, and Theme Editor lifecycle.
- `assets/flexora-product-card.css`: Shared responsive product-card media,
  content, price, badge, secondary-image, and action presentation.
- `assets/flexora-featured-collection.css`: Product grid, scroll-snap carousel,
  responsive columns, empty states, and RTL-aware controls.
- `assets/flexora-featured-collection.js`: Carousel-only arrow enhancement
  with RTL, reduced-motion, and Theme Editor lifecycle support.
- `assets/icon-account.svg`: Account icon.
- `assets/icon-cart.svg`: Cart icon.
- `assets/shoppy-x-ray.svg`: Shopify Skeleton starter artwork used by the demo
  homepage.

There is no dedicated global JavaScript asset. Future sections should compose
the shared `fx-` classes and Flexora snippets before introducing section-local
variants.

Global settings now include merchant-managed social profile URLs and
Arabic-first newsletter content. Future footer, header, and content sections
should reuse the social and newsletter snippets instead of duplicating forms
or social-link rendering.

## Current Locales

- `locales/ar.default.json`: Default Arabic storefront translations.
- `locales/ar.default.schema.json`: Default Arabic Theme Editor translations.
- `locales/en.json`: English storefront translations.
- `locales/en.schema.json`: English Theme Editor translations.

Arabic is the default locale strategy and English remains supported. The
Arabic and English files preserve matching storefront and schema key shapes.

## RTL Readiness

The main storefront layout now handles RTL and LTR globally from the active
locale. Arabic, Persian, Hebrew, and Urdu use RTL; other languages use LTR.

Positive foundations:

- The active locale is exposed through the HTML `lang` attribute.
- The main document emits a matching `dir` attribute.
- The body includes prefixed direction and language helper classes.
- Flexora base utilities use logical properties.
- Some global CSS already uses logical block properties.
- Flexbox and grid provide direction-aware behavior in some layouts.

Current gaps:

- Password and gift card documents do not yet emit locale-aware direction.
- Physical `left` positioning appears in the header cart badge and custom
  section background treatment.
- Alignment schema options are expressed as left/right rather than semantic
  start/end behavior.
- Arabic typography, mixed-direction content, mirrored controls, and RTL
  interaction flows have not been tested.

## Risks And Technical Notes

- Theme identity remains Skeleton in settings, documentation, assets, and demo
  content.
- The homepage now replaces the Skeleton demo with the Flexora hero foundation.
- The homepage now follows the hero with an Arabic-first collection-card
  showcase that remains editable through section blocks.
- Product presentation now has a reusable card foundation and an Arabic-first
  featured collection section. Quick add is intentionally a normal Shopify
  product form for single-variant products; AJAX cart and the cart drawer
  remain future cart-system work.
- The global settings surface is too small for a premium multi-purpose theme.
- The current Flexora tokens and UI primitives are intentionally foundational;
  they still need real section-level visual testing and color-scheme expansion.
- Header, footer, product, collection, cart, and search are functional
  scaffolds, not production-ready systems.
- Several customer-facing strings remain hardcoded, including starter content
  and the product add-to-cart value.
- App block extension points have not been established.
- The first header foundation intentionally excludes mega menus, predictive
  search, a cart drawer, and advanced localization behavior.
- Responsive behavior is sparse; for example, the collection grid has a large
  fixed minimum card width.
- Accessibility behavior needs a dedicated audit for labels, controls,
  keyboard flows, status announcements, and focus management.
- Strict JSON tooling may reject existing trailing commas even though Shopify
  Theme Check currently reports no offenses.
- Theme Editor generated files and section-group files should be changed
  carefully to preserve merchant compatibility.
- The repository currently tracks Shopify's upstream Skeleton remote; project
  ownership, naming, and release workflow should be updated deliberately in a
  later setup task.

## Validation Baseline

On June 7, 2026, `shopify theme check` inspected 54 files and reported zero
offenses. This clean baseline does not mean the theme meets Flexora's product,
translation, RTL, accessibility, or design requirements; it means the current
starter passes the configured static checks.
