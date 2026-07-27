export interface Certification {
  name: string;
  issuer: string;
  year?: string;
  url?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    year: "2023",
    url: "https://coursera.org/share/7689077f62f02bb95078fa2e364d872c",
  },
  {
    name: "Google Advanced Data Analytics Professional Certificate",
    issuer: "Google",
    year: "In progress",
  },
  {
    name: "Power BI Desktop for Business Intelligence",
    issuer: "Udemy",
    year: "2024",
    url: "https://ude.my/UC-83930ca2-63c7-4a92-af84-a8cadd29fb56",
  },
  {
    name: "Academy Accreditation — Databricks Fundamentals",
    issuer: "Databricks Academy",
    year: "2026",
    url: "https://credentials.databricks.com/a2dd3991-e467-4fb8-8669-d179ba1c8c5e",
  },
  {
    name: "Knowledge Badge — AI/BI for Data Analysts",
    issuer: "Databricks Academy",
    year: "2026",
    url: "https://credentials.databricks.com/d3c13f4b-65df-4213-bc73-8dd40f08fe0f",
  },
  {
    name: "Knowledge Badge — SQL Analytics on Databricks",
    issuer: "Databricks Academy",
    year: "2026",
    url: "https://credentials.databricks.com/601ef41d-ecd4-4bc8-a229-db7e7818ffb8",
  },
  {
    name: "Career Essentials in Data Analysis",
    issuer: "Microsoft and LinkedIn",
    year: "2026",
    url: "https://www.linkedin.com/learning/certificates/c8cb1ecc1163e86f29da0aaca10fa9527aa26e27ca3681056fe66d5566d25843",
  },
  {
    name: "Real-World AI for Everyone",
    issuer: "Anthropic & Advancing Women in Tech",
    year: "2026",
    url: "https://coursera.org/share/4b4470f77d13fb6b35de4a67748a2918",
  },
  {
    name: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University",
    year: "2024",
  },
];
