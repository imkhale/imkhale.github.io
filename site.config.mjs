// Single source of truth for identity + deployment target.
// Imported by both astro.config.mjs (build-time) and Astro components (render-time),
// so every place that needs your name/links/domain reads from here.
//
// ── Moving from username.github.io to a custom domain later ──
// 1. Change SITE_URL below to your new domain (e.g. 'https://yourname.dev').
// 2. Set BASE back to '/' (it already is, for a user-page deploy).
// 3. Add a `public/CNAME` file containing just your domain name.
// 4. In your repo settings → Pages → set the custom domain.
// Nothing else in the project needs to change.

export const GITHUB_USERNAME = "imkhale";

// User-page deploy (username.github.io) always serves from the root.
// If you ever switch to a project-repo deploy (username.github.io/repo-name/),
// change BASE to '/repo-name/' instead.
export const SITE_URL = `https://${GITHUB_USERNAME}.github.io`;
export const BASE = "/";

export const SITE_TITLE = "Kha Le — Senior Data Analyst | Analytics Engineering & BI";
export const SITE_DESCRIPTION =
  "Portfolio of Kha Le: Data Analytics, Business Intelligence, and Analytics Engineering work across dbt, BigQuery, Power BI, and Python.";

export const NAME = "Kha Le";

// Keeps the real current title as the anchor, with the analytics-engineering
// direction stated as active work rather than a claimed credential. The
// "building" verb is doing deliberate work here — it reads as in-progress,
// which is the honest framing for the dbt/BigQuery side.
export const ROLE_HEADLINE =
  "Senior Data Analyst building the analytics engineering layer";

// Shown as a chip in the hero. Answers the two questions a hiring manager
// actually has — which discipline(s), and hands-on or managing — without
// listing five job titles, which reads as casting wide rather than choosing.
//
// The three categories are a deliberate 1:1 cover of OPEN_TO_ROLES below:
// data analytics → Senior Data Analyst, Data Analytics Manager
// analytics engineering → Analytics Engineer
// BI → BI Analyst, BI Engineer
// Data analytics leads because it's the current title (matches the headline
// above it); a management title doesn't appear by name here — "leading a
// team" carries that without contradicting the individual-contributor framing
// of the headline. The exact titles live in OPEN_TO_ROLES, in the footer,
// where there's room for them.
export const OPEN_TO =
  "Open to data analytics, analytics engineering, and BI roles — hands-on or leading a team";

// The full list, for the footer. This is the keyword-matching surface:
// recruiters and ATS filters search on literal titles, so spell them out
// here rather than cramming them into the hero.
export const OPEN_TO_ROLES =
  "Senior Data Analyst, Analytics Engineer, BI Analyst, BI Engineer, and Data Analytics Manager";

// Elevator pitch — shown in the hero, right under the tagline. Keep it to
// 1-2 sentences; this is the 5-second version of the resume SUMMARY, not a
// restatement of it.
//
// Sentence 1 is the proven track record, sentence 2 is the current
// direction. Keeping them as separate sentences is what stops the dbt work
// from reading as 5 years of experience it isn't. "On the side" marks it as
// self-directed, outside Kha's actual job — without that, it reads right
// after a sentence about paid work and sounds like part of it.
//
// ── GO-LIVE GATE (as of 2026-08-01) ──────────────────────────────────
// This sentence, the About closing paragraphs, the "Insurance Analytics
// Warehouse" Projects card, and ArchitectureDiagram all describe the dbt/
// BigQuery warehouse as if it exists. As of this date it doesn't — Kha has
// done zero hands-on dbt/BigQuery work, only theory/learning. He's
// deliberately writing this as TARGET-STATE copy: this repo is meant to go
// live only once the warehouse is actually built to match.
// Before merging this branch to `main` (which auto-deploys via
// .github/workflows/deploy.yml), confirm the warehouse project is real —
// otherwise the site publishes claims that aren't true yet.
export const SUMMARY =
  "I turn messy business questions into governed semantic models and decision-ready dashboards — 5+ years building Power BI and SQL systems that C-suite and regional leaders actually trust. On the side, I'm building the layer underneath: dbt on BigQuery.";

export const SOCIALS = {
  email: "letinkha@gmail.com",
  linkedin: "https://www.linkedin.com/in/khatinle/",
  github: `https://github.com/${GITHUB_USERNAME}`,
  // Place your CV file at public/cv.pdf — this link works as-is once it's there.
  cvUrl: `${BASE}cv.pdf`,
};
