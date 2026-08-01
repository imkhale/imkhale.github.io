export interface Role {
  title: string;
  period: string;
  // Optional reporting line — only set when it adds real signal (e.g. a
  // regional manager for a Vietnam-based role), not for every role.
  reportsTo?: string;
}

export interface ExperienceItem {
  company: string;
  // One-line company context (industry, HQ, scale).
  companyContext?: string;
  // Overall span shown on the timeline rail — covers every role below.
  period: string;
  // Most recent first. A company you were promoted within lists 2+ roles
  // here instead of getting a separate timeline entry, so the promotion
  // reads as one continuous story rather than a repeated company block.
  roles: Role[];
  summary: string;
  highlights: string[];
  // Tools actually used on this job — not the global Skills list. Keep
  // this scoped to what's genuinely job-proven; side projects (e.g. dbt)
  // belong under Projects instead, so this list stays a credible signal.
  techTags?: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Prudential Vietnam",
    companyContext:
      "Vietnam arm of Prudential plc (UK), the largest foreign-owned life insurer in the country.",
    period: "Dec 2024 — Present",
    roles: [
      {
        title: "Data Analytics & Insights Senior Specialist",
        period: "Dec 2024 — Present",
      },
    ],
    summary:
      "Own the analytics and reporting layer for Agency Distribution, supporting the CEO, Chief Agency Officer, and Sales Heads across 7,000+ agents.",
    highlights: [
      "Maintain ~15 dashboards, including a 100+ table Agency semantic model, as the backbone of executive and operational reporting.",
      "Built an MA Recapture dashboard flagging ~30,000 maturing policies for agent outreach, lifting retention 60% year-over-year.",
      "Cut PBIX documentation and metric-validation turnaround from 5 days to 20 minutes with GitHub Copilot + Power BI MCP workflows.",
    ],
    techTags: [
      "Power BI",
      "DAX",
      "Power Query",
      "SQL",
      "Python",
      "Airflow",
      "Git",
      "GitHub Copilot",
    ],
  },
  {
    company: "KONE Vietnam",
    companyContext:
      "Subsidiary of KONE Corporation (Finland), a global elevator and escalator manufacturer operating in 60+ countries.",
    period: "Jul 2021 — Jun 2024",
    roles: [
      {
        title: "Country S&OP Team Lead — Operations Analytics & BI",
        period: "Sep 2023 — Jun 2024",
        reportsTo: "Reporting to the SEA S&OP Manager",
      },
      {
        title: "S&OP Specialist — Operations Analytics & BI",
        period: "Jul 2021 — Aug 2023",
      },
    ],
    summary:
      "Built KONE Vietnam's operations analytics function from the ground up, then was promoted to Team Lead and became the Operations Director's analytical partner on planning and forecasting.",
    highlights: [
      "Built the first Power BI utilization dashboard, driving a 28% utilization increase and later adopted as a regional best practice across 6 SEA countries.",
      "Owned 18-month rolling revenue forecasting for Vietnam, scaling the S&OP reporting model from Vietnam to SEA and 4 APAC regions.",
      "Designed a resource-planning tool in Excel/Power Query, saving USD 17,000 and cutting processing time 80%.",
      "Supported ~600B VND in 2023 revenue delivery through recurring forecast reviews and variance analysis.",
    ],
    techTags: ["Power BI", "Excel", "Power Query"],
  },
  {
    company: "Keppel Land Vietnam",
    companyContext:
      "Real estate arm of Keppel Corporation (Singapore), a major Asia-Pacific property developer.",
    period: "Feb 2019 — Jul 2021",
    roles: [
      {
        title: "Management Associate — Property & Project Management",
        period: "Feb 2019 — Jul 2021",
      },
    ],
    summary:
      "Selected as 1 of 4 candidates from 200+ applicants for Keppel Land Vietnam's Management Associate program, a future-leader pipeline with a rotation spanning property and project management for a major residential handover.",
    highlights: [
      "Built Excel tracking tools for an 816-unit handover, adopted by a 9-person operations team.",
      "Coordinated defect rectification across 300+ units as primary liaison between customers, contractors, and internal stakeholders.",
    ],
    techTags: ["Excel"],
  },
];

// Curated from the highlights above — the 3 most concrete, quantified
// results, surfaced as a standalone strip so impact doesn't stay buried
// in bullet prose. Keep these numbers in sync with the source highlight
// if either changes.
export interface FeaturedImpact {
  value: string;
  label: string;
  company: string;
}

export const FEATURED_IMPACT: FeaturedImpact[] = [
  {
    value: "60%",
    label: "YoY retention lift from the MA Recapture dashboard",
    company: "Prudential Vietnam",
  },
  {
    value: "28%",
    label: "Utilization increase, later adopted across 6 SEA countries",
    company: "KONE Vietnam",
  },
  {
    value: "$17K",
    label: "Saved with an Excel/Power Query resource-planning tool",
    company: "KONE Vietnam",
  },
];
