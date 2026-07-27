export interface Project {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
}

// PLACEHOLDER description — keep the repo link real, tighten the copy once
// the project's README is final.
export const PROJECTS: Project[] = [
  {
    title: "Insurance Analytics Warehouse",
    description:
      "A dimensional data warehouse for insurance policy and claims data, built with dbt on BigQuery — staging-to-mart layering, automated data tests, and documented source-to-report lineage.",
    stack: ["dbt", "BigQuery", "SQL", "Python"],
    githubUrl:
      "https://github.com/yourusername/insurance-analytics-warehouse",
  },
];
