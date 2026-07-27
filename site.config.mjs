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

export const SITE_TITLE = "Kha Le — Analytics Engineer & BI Specialist";
export const SITE_DESCRIPTION =
  "Portfolio of Kha Le: Data Analytics, Business Intelligence, and Analytics Engineering work across dbt, BigQuery, Power BI, and Python.";

export const NAME = "Kha Le";
export const ROLE_HEADLINE = "Analytics Engineer | BI & Data Specialist";
export const ROLE_TAGS = [
  "Data Analytics",
  "Business Intelligence",
  "Analytics Engineering",
];

// Elevator pitch — shown in the hero, right under the tagline. Keep it to
// 1-2 sentences; this is the 5-second version of the resume SUMMARY, not a
// restatement of it.
export const SUMMARY =
  "I turn messy business questions into governed semantic models and decision-ready dashboards — 5+ years building Power BI and SQL systems that C-suite and regional leaders actually trust.";

// Career-wide numbers — deliberately NOT a single company's achievement
// metric, so this reads as "about the person" rather than "about one job".
export const IMPACT_STATS = [
  { value: "5+", label: "Years in Data Analytics" },
  { value: "3", label: "Industries Covered" },
  { value: "8", label: "Certifications Earned" },
];

export const SOCIALS = {
  email: "letinkha@gmail.com",
  linkedin: "https://www.linkedin.com/in/khatinle/",
  github: `https://github.com/${GITHUB_USERNAME}`,
  // Place your CV file at public/cv.pdf — this link works as-is once it's there.
  cvUrl: `${BASE}cv.pdf`,
};
