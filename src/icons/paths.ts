// Minimal hand-drawn line icons (24x24 viewBox, stroke-based) so the site has
// zero icon-font/library dependency. Add new entries here, not inline in markup.
export const ICONS = {
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/>',
  github:
    '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
  // A profile-badge glyph instead of a literal "in" wordmark — an SVG <text>
  // node gets picked up by copy/paste and text-extraction tools even when
  // the icon is aria-hidden, which showed up as a stray "in" next to the
  // visible "LinkedIn" label.
  linkedin:
    '<rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="9.5" r="2.5"/><path d="M6.5 18c.5-3 3-5 5.5-5s5 2 5.5 5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  "external-link": '<path d="M7 17 17 7M9 7h8v8"/>',
  "arrow-right": '<path d="M5 12h14M13 6l6 6-6 6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  check: '<path d="M5 12l4 4 10-10"/>',
  download: '<path d="M12 3v12m0 0 5-5m-5 5-5-5M4 21h16"/>',
  "graduation-cap":
    '<path d="M12 3 2 8l10 5 10-5-10-5Z"/><path d="M6 10.5V16c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5.5"/><path d="M22 8v6"/>',
} as const;

export type IconName = keyof typeof ICONS;
