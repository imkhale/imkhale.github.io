// Rasterizes the social share card to public/og-image.png.
//
// BaseLayout points og:image at /og-image.png, so this file has to exist or
// every LinkedIn/Slack share of the site renders with a broken thumbnail.
// sharp ships with Astro's default image service, so this needs no new deps.
//
//   npm run og
//
// Re-run it whenever the headline in site.config.mjs changes — the copy is
// duplicated here on purpose, because the card wraps at hand-set line breaks
// that no automatic layout would get right.
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const HEADLINE = ["Senior Data Analyst", "building the analytics", "engineering layer"];
const STACK = "Power BI · SQL · dbt · BigQuery · Python";
const DOMAIN = "imkhale.github.io";

const FONT =
  "Inter, -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="18%" cy="0%" r="70%">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="#2563eb" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="#0a0a0b"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="0" y="0" width="10" height="630" fill="#2563eb"/>

  <text x="86" y="132" font-family="${FONT}" font-size="24" font-weight="700"
        letter-spacing="7" fill="#5b8def">KHA LE</text>

  ${HEADLINE.map(
    (line, i) =>
      `<text x="86" y="${248 + i * 78}" font-family="${FONT}" font-size="64" font-weight="800"
        letter-spacing="-2" fill="#fafafa">${line}</text>`,
  ).join("\n  ")}

  <line x1="86" y1="500" x2="1114" y2="500" stroke="#27272a" stroke-width="1"/>

  <text x="86" y="552" font-family="${FONT}" font-size="26" font-weight="500"
        fill="#a1a1aa">${STACK}</text>
  <text x="1114" y="552" text-anchor="end" font-family="${FONT}" font-size="26"
        font-weight="500" fill="#a1a1aa">${DOMAIN}</text>
</svg>`;

const out = new URL("../public/og-image.png", import.meta.url);
const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
writeFileSync(out, png);
console.log("wrote", out.pathname, png.length, "bytes");
