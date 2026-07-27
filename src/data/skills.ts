import type { TechLogoName } from "../icons/tech-logos";

export interface SkillItem {
  name: string;
  logo?: TechLogoName;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

// `logo` is optional — only set it for tools with a real, accurate mark in
// src/icons/tech-logos.ts. Concepts/methodologies (DAX, Star Schema, CI/CD...)
// intentionally stay text-only rather than get a guessed-at icon.
export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "BI & Visualization",
    items: [
      { name: "Power BI", logo: "powerbi" },
      { name: "DAX" },
      { name: "Power Query" },
      { name: "Looker Studio" },
    ],
  },
  {
    category: "SQL & Data Modeling",
    items: [
      { name: "SQL" },
      { name: "Dimensional Modeling" },
      { name: "Star Schema" },
      { name: "ERD Design" },
    ],
  },
  {
    category: "Analytics Engineering",
    items: [
      { name: "dbt", logo: "dbt" },
      { name: "BigQuery", logo: "bigquery" },
      { name: "Data Testing" },
      { name: "Version-Controlled Models" },
    ],
  },
  {
    category: "Programming",
    items: [
      { name: "Python", logo: "python" },
      { name: "Pandas", logo: "pandas" },
      { name: "SQL Scripting" },
    ],
  },
  {
    category: "Data Pipeline & Engineering",
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
