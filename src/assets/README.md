# Image assets

Files here are imported by components and run through Astro's `<Image>`
pipeline (automatic `webp`/`avif`, correct `width`/`height`, lazy-loading).
Anything in `public/` is served raw and skips all of that — put real
photography and screenshots here, not there.

## TODO: portrait.jpg — supply a real headshot

Drop a file named `portrait.jpg` (or `.png` / `.webp`) in this folder and
the hero automatically switches to its two-column layout with the photo on
the right. Until the file exists the hero stays single-column, so nothing
placeholder-looking ever ships.

**What to supply**

| | |
|---|---|
| Filename | `src/assets/portrait.jpg` |
| Minimum size | 1200 × 1500 px (4:5 portrait) |
| Format | JPEG or PNG — Astro converts to webp/avif at build |

**Art direction**

- **Crop:** chest-up. Eyes on the upper third. Leave a little headroom, not a lot.
- **Angle:** shoulders turned slightly off-axis, face to camera. Dead-on symmetry reads like a passport photo.
- **Background:** plain wall, or an interior thrown far enough out of focus that nothing in it is identifiable. No bookshelves, no office logos, no conference-badge lanyards.
- **Light:** one soft source from the side, slightly above eye level. Window light works. Avoid direct overhead light and on-camera flash.
- **Wardrobe:** what you'd wear to a Prudential exec readout, minus the tie. Solid colours; no tight patterns (they alias badly at small sizes).
- **Expression:** relaxed, mouth closed or a slight smile. Not a laugh, not a stare.

The component desaturates the image slightly and rounds the corners so it
sits under the accent blue rather than competing with it — you don't need
to apply any treatment yourself. Ship it unfiltered.
