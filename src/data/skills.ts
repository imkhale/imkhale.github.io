import type { TechLogoName } from "../icons/tech-logos";

export interface SkillItem {
  name: string;
  logo?: TechLogoName;
}

// The honest-framing field. "Core" means job-proven over years and safe to be
// interviewed on cold; "Actively building" means real hands-on work that is
// still in progress. Stating this outright is cheaper than letting a reviewer
// assume uniform depth across the grid and then find out otherwise.
//
// Domain groups take no level — they're context, not proficiency.
export type SkillLevel = "Core" | "Actively building";

export interface SkillGroup {
  category: string;
  level?: SkillLevel;
  items: SkillItem[];
}

// `logo` is optional — only set it for tools with a real, accurate mark in
// src/icons/tech-logos.ts. Concepts/methodologies (DAX, Star Schema, CI/CD...)
// intentionally stay text-only rather than get a guessed-at icon.
//
// Order is Core → Actively building → context, so the grid reads as a claim
// about depth rather than a flat pile of keywords.
export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "BI & Visualization",
    level: "Core",
    items: [
      { name: "Power BI", logo: "powerbi" },
      { name: "DAX" },
      { name: "Power Query" },
      { name: "Looker Studio" },
    ],
  },
  {
    category: "SQL & Data Modeling",
    level: "Core",
    items: [
      { name: "SQL" },
      { name: "Dimensional Modeling" },
      { name: "Star Schema" },
      { name: "ERD Design" },
    ],
  },
  {
    category: "Programming",
    level: "Core",
    items: [
      { name: "Python", logo: "python" },
      { name: "Pandas", logo: "pandas" },
      { name: "SQL Scripting" },
    ],
  },
  {
    category: "Analytics Engineering",
    level: "Actively building",
    // GO-LIVE GATE (as of 2026-08-01) — same pattern as the dbt/BigQuery note
    // in site.config.mjs. Microsoft Fabric is here as target-state: Kha's
    // company just licensed it and his team is only starting to explore it,
    // no hands-on work yet. This assumes real hands-on Fabric experience by
    // go-live (targeted ~4 months out, so around Dec 2026) — don't deploy
    // (merge to `main`) before that's actually true.
    items: [
      { name: "dbt", logo: "dbt" },
      { name: "BigQuery", logo: "bigquery" },
      { name: "Microsoft Fabric" },
      { name: "Data Testing" },
      { name: "Version-Controlled Models" },
    ],
  },
  {
    category: "Data Pipeline & Engineering",
    level: "Actively building",
    items: [
      { name: "Airflow", logo: "airflow" },
      { name: "Git", logo: "git" },
      { name: "CI/CD" },
      { name: "ETL / ELT" },
    ],
  },
  {
    category: "Domain Expertise",
    items: [
      { name: "Insurance" },
      { name: "Industrial & Manufacturing" },
      { name: "Real Estate" },
      { name: "Cross-market SEA" },
    ],
  },
];
