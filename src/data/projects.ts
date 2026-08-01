export type ProjectStatus = "In progress" | "Shipped";

export interface Project {
  title: string;
  status: ProjectStatus;
  // One line on what this is and why it exists. Shown on every card.
  description: string;
  // What the project concretely demonstrates — 2-4 items, each a capability
  // a reviewer can check. Only rendered on the featured (first) project, so
  // later entries stay scannable.
  highlights?: string[];
  stack: string[];
  // Optional: only set once the repo is actually public. Leave it unset and
  // the card renders a "Case study coming soon" note instead of a dead link.
  githubUrl?: string;
  liveUrl?: string;
  // Optional pipeline/architecture stages — rendered as a small flow
  // diagram on the project card. Only set this when the stages reflect
  // the project's real layering (e.g. dbt staging-to-mart), not as decor.
  pipeline?: string[];
  // Renders the full ArchitectureDiagram component. Reserved for projects
  // whose real shape is the staging → intermediate → mart flow that diagram
  // draws — don't set it on a project the diagram doesn't describe.
  diagram?: boolean;
}

// Order matters: PROJECTS[0] renders as the featured, full-width card (with
// its diagram and highlights); everything after it renders as a compact card
// in the grid below. So the strongest AE artifact goes first.
//
// GO-LIVE GATE (as of 2026-08-01) — see the matching note on SUMMARY in
// site.config.mjs. This entry, its highlights, and its diagram describe the
// warehouse as if built. It isn't yet — zero hands-on dbt/BigQuery work has
// happened, only learning. This is target-state copy: don't deploy (merge to
// `main`) until the project actually matches what's written here.
export const PROJECTS: Project[] = [
  {
    title: "Insurance Analytics Warehouse",
    status: "In progress",
    description:
      "A dimensional data warehouse for insurance policy and claims data, built with dbt on BigQuery.",
    highlights: [
      "Staging-to-mart layering, so business logic lives in one reviewable place",
      "Automated data tests on sources and models",
      "Documented source-to-report lineage",
    ],
    stack: ["dbt", "BigQuery", "SQL", "Python"],
    // TODO(kha): set githubUrl once github.com/imkhale/insurance-analytics-warehouse
    // is public. Until then the card shows "Case study coming soon" rather
    // than linking somewhere broken.
    pipeline: ["Staging", "Intermediate", "Mart"],
    diagram: true,
  },

  // ── Adding project #2 ──────────────────────────────────────────────────
  // Uncomment and fill in. Nothing else needs to change: the grid below the
  // featured card is already a 1-to-N layout, and the "More on GitHub" tile
  // drops out on its own once there are 3+ entries.
  //
  // {
  //   title: "",
  //   status: "In progress",
  //   description: "",
  //   stack: [],
  //   githubUrl: "",
  // },
];
