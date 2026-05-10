# Lucien Smith Studio Static Redesign Preview

This folder is a static HTML/CSS prototype for the stripped-down redesign direction. It is intended as an implementation reference for the existing headless Shopify site, not as production code.

## Core Direction

- Plain HTML feeling, minimal interface, Helvetica/Arial system type.
- White background, black text, no decorative UI.
- Text nav at top: `ABOUT`, `SHOP`, `ARTWORKS`, `FILMS`, `PROJECTS`, `CART`.
- Artwork/shop objects carry the page visually.
- Artwork grid currently uses 4 columns on desktop.
- Current preview keeps same-size paintings visually consistent; future integration can vary scale per real artwork dimensions.

## Important Files

- `shared.css`: primary visual system. Start here.
- `artworks.html`: artwork grid and filter reference.
- `artworks-filter.js`: simple hash-based filter behavior for `#all`, `#available`, and year filters.
- `artwork.html`: artwork/detail page reference.
- `shop.html`: shop/product grid reference.
- `films.html`: film feed layout with embeds.
- `projects.html`: projects grid layout.
- `index.html`: home/grid reference.

## Artwork Filtering

The static prototype uses attributes on artwork items:

```html
<a class="item" data-year="2025" data-available="true" href="artwork.html#ls-942">
```

The real integration should map this behavior to actual artwork data:

- `ALL`: all artworks
- `AVAILABLE`: artworks available/inquirable
- `2025`, `2024`, etc.: filter by artwork year

Current date links target `artworks.html#YEAR`.

## Artwork Sizing

For this preview, artwork items intentionally do not use variable size classes because the current selected works are mostly same-size paintings.

The CSS includes optional future classes:

- `size-xs`
- `size-s`
- `size-m`
- `size-l`
- `size-xl`
- `size-wide`
- `size-tall`

Use those later only when real work dimensions/scale require visual variation.

## Films

`films.html` is a compact feed layout.

Current entries:

- `THE SNOWY DAY`, 2015, Vimeo embed included.
- `A CLEAN SWEEP W/ GLENN O'BRIEN`, 2013, metadata block included; needs real video source if available.

## Projects

`projects.html` uses the same thumbnail scale as the film page, but in a grid instead of a feed/list.

Current entries:

- `FOOD`
- `SERVING THE PEOPLE`
- `STUDIO`

## Known Temporary Pieces

- Artwork data is static sample data and should be replaced by the real data source.
- Some artwork detail records in `artwork.html` are illustrative and should be wired to the real artwork database/CMS.
- `available.html` exists only as a compatibility page; primary filter behavior should use `artworks.html#available`.
- Footer legal/newsletter pages are placeholders for route structure.

## Suggested Integration Order

1. Port `shared.css` styles into the app's stylesheet/design layer.
2. Update the existing global nav/header to match this preview.
3. Rebuild artwork grid using real artwork records and the 4-column layout.
4. Wire `ALL`, `AVAILABLE`, and year filters to real data.
5. Port artwork detail layout from `artwork.html`.
6. Port shop layout while preserving Shopify cart/checkout behavior.
7. Port film feed and replace missing film source(s).
8. Port projects grid and replace rectangle placeholders with real project thumbnails.
