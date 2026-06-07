# Flexora Phased Roadmap

This roadmap keeps each phase reviewable and avoids building visual sections
before the shared foundations they depend on.

## Phase 0: Audit And Setup

- [x] Inventory layouts, templates, sections, snippets, blocks, assets,
  settings, and locales.
- [x] Identify the upstream base as Shopify Skeleton Theme.
- [x] Record the current language and RTL gaps.
- [x] Establish a clean Shopify Theme Check baseline.
- [x] Create the Flexora product, architecture, and roadmap documentation.
- [ ] Update theme metadata from Skeleton to Flexora.
- [ ] Add official theme_info when documentation URL and support contact are ready.
- [ ] Decide repository and remote naming for `flexora-theme` or
  `shopify-flexora-theme`.
- [ ] Remove or replace Skeleton demo branding and artwork.
- [ ] Define contribution, versioning, release, and changelog conventions.

## Phase 1: Design System

- [ ] Define Arabic-first and Latin-compatible typography tokens.
- [x] Define initial fluid heading, body, caption, and utility type scales.
- [ ] Expand semantic color schemes and document contrast requirements.
- [x] Define initial spacing, container, radius, border, and shadow tokens.
- [x] Define button, input, card, badge, price, and link patterns.
- [x] Add global motion settings and reduced-motion behavior.
- [x] Add initial Theme Editor settings with translated labels and sensible
  defaults.
- [x] Add CSS custom-property output for the initial global design tokens.
- [x] Build Design System UI primitives for buttons, forms, cards, badges,
  links, prices, and focus states.
- [x] Create reusable section-header, button, and badge snippets.
- [ ] Create additional snippets and theme blocks only where they reduce real
  duplication.
- [ ] Validate design-system settings in Arabic and English.

## Phase 2: Global Layout

- [x] Add locale-aware document direction to the main theme layout.
- [ ] Extend locale-aware direction to password and gift card documents.
- [x] Add Arabic storefront and schema locale files and retain English support.
- [ ] Replace physical directional CSS with logical properties.
- [ ] Build responsive container and section-spacing utilities.
- [x] Build an accessible, merchant-configurable announcement bar.
- [x] Build the Global Header and Announcement Bar foundation.
- [x] Build basic responsive desktop navigation and mobile menu behavior.
- [x] Add search, account, language, and cart actions.
- [ ] Build mega menu, predictive search, cart drawer, and advanced
  localization behavior.
- [x] Build the configurable Footer foundation.
- [x] Add global newsletter and social settings with reusable snippets.
- [ ] Add app-friendly global extension points where appropriate.
- [ ] Test navigation and global layouts in RTL, LTR, keyboard, and mobile
  contexts.

## Phase 3: Homepage Sections

- [x] Build Homepage Hero Banner and Hero Slider foundation.
- [x] Build a combined static hero and slideshow section.
- [x] Build Collection Cards and Category Grid section.
- [x] Build Featured Collection Product Grid and Slider foundation.
- [ ] Build image-with-text and rich-text sections.
- [x] Build featured collection and product-grid foundation.
- [ ] Build promo banners and image-with-text sections.
- [ ] Build featured product and collection-list sections.
- [ ] Build multicolumn, promotional banner, and logo-list sections.
- [ ] Build testimonial, video, and collapsible-content sections.
- [ ] Build newsletter, custom Liquid, and app sections.
- [ ] Add clear schemas, presets, translated labels, and app blocks where
  appropriate.
- [ ] Verify responsive media, empty states, editor reordering, RTL, and LTR.

## Phase 4: Product Page

- [ ] Define modular product information blocks.
- [ ] Build a responsive product media gallery.
- [ ] Build accessible variant and option selectors.
- [ ] Build quantity, availability, price, badge, and buy-button patterns.
- [ ] Support dynamic checkout and accelerated payment behavior.
- [ ] Add collapsible details, sharing, pickup, and complementary extension
  points where appropriate.
- [ ] Build product recommendations and recently viewed presentation if it can
  remain theme-only and privacy-conscious.
- [ ] Support product media types and app blocks.
- [ ] Test sold-out, single-variant, many-variant, sale, media-heavy, RTL, and
  no-description products.

## Phase 5: Collection Page

- [x] Build a reusable product-card snippet.
- [ ] Build collection banner and description options.
- [ ] Build responsive product grids with merchant-selectable density.
- [ ] Add Shopify storefront filtering and sorting.
- [ ] Build active filter, empty-state, pagination, and product-count patterns.
- [ ] Support image ratios, secondary media, badges, prices, and quick actions
  without harming performance or accessibility.
- [ ] Test large catalogs, no-image products, long Arabic titles, RTL, LTR,
  mobile filters, and empty collections.

## Phase 6: Cart System

- [ ] Build reusable cart-line rendering.
- [ ] Build the main cart page.
- [ ] Build an accessible cart drawer or notification pattern.
- [ ] Add quantity updates, removal, notes, discounts, totals, and checkout
  actions.
- [ ] Define loading, error, empty, and success feedback.
- [ ] Preserve compatibility with accelerated checkout and cart-related apps.
- [ ] Test keyboard focus, screen-reader status updates, RTL, mobile, sold-out
  changes, and server validation errors.

## Phase 7: Templates

- [ ] Compose production homepage and commerce JSON templates.
- [ ] Upgrade search results and empty states.
- [ ] Upgrade page, blog, and article templates.
- [ ] Upgrade list-collections, password, gift card, and 404 experiences.
- [ ] Add contact and other page templates only when backed by a clear use
  case.
- [ ] Confirm every template remains editable and stable in Theme Editor.
- [ ] Confirm all storefront copy uses locale keys where appropriate.

## Phase 8: Presets

- [ ] Define a neutral Flexora default preset.
- [ ] Define fashion and apparel preset content/settings.
- [ ] Define medical wear preset content/settings.
- [ ] Define beauty preset content/settings.
- [ ] Define electronics preset content/settings.
- [ ] Define food and specialty product preset content/settings.
- [ ] Define lifestyle and general commerce preset content/settings.
- [ ] Keep presets configuration-driven and avoid duplicated industry-specific
  section code.
- [ ] Verify every preset in Arabic RTL and English LTR.

## Phase 9: QA And Release

- [ ] Run Shopify Theme Check with zero unresolved offenses.
- [ ] Validate all section and settings schemas.
- [ ] Test Theme Editor add, remove, reorder, duplicate, and live-update flows.
- [ ] Test supported templates in Arabic RTL and English LTR.
- [ ] Test current desktop and mobile evergreen browsers.
- [ ] Perform keyboard, focus, semantic, contrast, and screen-reader checks.
- [ ] Audit responsive images, JavaScript cost, CSS cost, and Core Web Vitals.
- [ ] Test products, collections, search, cart, localization, accounts, and
  accelerated checkout edge cases.
- [ ] Verify app block and app embed compatibility.
- [ ] Remove demo assets, hardcoded starter copy, and development artifacts.
- [ ] Finalize Flexora metadata, version, documentation, support details, and
  release notes.
