# Flexora Theme Plan

## Product Vision

Flexora is a premium, flexible Shopify theme intended for stores in fashion,
medical wear, beauty, electronics, food, lifestyle, and general commerce. It
will build on the current Shopify Skeleton Theme foundation while replacing
the starter experience with a coherent, production-ready product.

The theme should feel polished without forcing one visual identity. Merchants
must be able to adapt layout, typography, colors, spacing, cards, buttons, and
content through Shopify's Theme Editor rather than code changes.

## Language And Direction Strategy

- Arabic is the primary storefront language and the first design target.
- English is fully supported through storefront and schema locale files.
- Every layout and component must work in both RTL and LTR document directions.
- The document direction will follow the active locale.
- CSS logical properties will be preferred over physical left/right properties.
- Storefront interface text will use translation keys instead of hardcoded copy.
- Merchant-facing schema labels, options, and presets will be translated in
  both Arabic and English.
- Direction-specific CSS will be limited to cases that cannot be handled by
  logical properties or natural browser direction behavior.

## Multi-Store-Type Strategy

Flexora will provide reusable components and configurable visual systems rather
than industry-specific hardcoding. Sections should support multiple content
densities, media ratios, alignments, color schemes, and layouts so the same
theme can serve visually different catalogs.

Presets can later provide store-type starting points for:

- Fashion and apparel
- Medical wear and uniforms
- Beauty and personal care
- Electronics
- Food and specialty products
- Lifestyle and home
- General commerce

## Planned Foundation

Before adding many visual sections, Flexora will establish:

- Locale-aware `lang` and `dir` attributes
- Arabic and English storefront translations
- Arabic and English schema translations
- Typography scales suitable for Arabic and Latin scripts
- Color schemes and semantic color tokens
- Responsive containers and spacing scales
- Radius, border, shadow, and card tokens
- Primary, secondary, and text button styles
- Form controls, focus states, and accessible interaction states
- Motion settings with reduced-motion support
- Reusable image, icon, card, price, button, and layout patterns

## Planned Global Sections

- Announcement bar
- Configurable responsive header
- Navigation and mobile menu
- Predictive or standard search interface
- Localization selector
- Account and cart actions
- Configurable footer
- Cart drawer or cart notification
- Cookie or policy-compatible content areas where appropriate

## Planned Homepage Sections

- Hero banner and slideshow
- Image with text
- Rich text
- Featured collection
- Featured product
- Collection list
- Product grid
- Multicolumn features
- Promotional banners
- Logo list
- Testimonials
- Video
- Collapsible content and FAQ
- Newsletter signup
- Countdown or promotional timer, implemented without backend behavior
- Custom Liquid
- App section with Shopify app block support

Section settings will remain focused and reusable. Presets will demonstrate
useful configurations without locking sections to one industry.

## Planned Commerce Experiences

- Product media gallery
- Product information blocks
- Variant selection
- Quantity controls
- Buy buttons and dynamic checkout
- Pickup availability and complementary app integration points
- Product recommendations
- Collection banner, sorting, filtering, and product grid
- Product cards with consistent badges, prices, and media behavior
- Main cart, cart drawer, cart notes, and checkout actions
- Search, blog, article, page, password, gift card, and 404 templates

## Quality Goals

- Production-quality Liquid, HTML, CSS, JavaScript, and JSON
- Shopify Theme Editor stability and clear merchant controls
- Arabic-first responsive design with complete RTL/LTR behavior
- WCAG-oriented semantics, keyboard support, focus visibility, and contrast
- Mobile-first layouts and touch-friendly controls
- Strong Core Web Vitals and minimal render-blocking work
- Responsive images and restrained asset loading
- No heavy third-party libraries unless a clear requirement justifies them
- Modular snippets, blocks, and sections with narrow responsibilities
- Shopify app blocks where extension points are useful
- No app-like backend features implemented inside the theme
- Shopify Theme Check passing throughout development
- Focused changes that avoid unrelated refactoring

## Delivery Approach

Work proceeds in phases: audit, design system, global layout, homepage,
commerce pages, templates, presets, and release QA. Each phase should be
reviewable and validated before the next phase expands the theme surface.
