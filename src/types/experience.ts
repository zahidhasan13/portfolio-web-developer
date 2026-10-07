export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "softvence-webflow",
    role: "Webflow Developer",
    company: "Softvence Agency",
    period: "2025 — 2026",
    description:
      "Worked on real-world Webflow projects for international clients, focusing on responsive development, CMS implementation, custom interactions and website optimization.",
    responsibilities: [
      "Built and maintained Webflow websites",
      "Worked with international clients",
      "Implemented CMS-based websites",
      "Created responsive layouts",
      "Added custom interactions and animations",
      "Worked with integrations and custom code",
      "Collaborated with team members",
      "Took responsibility as a team lead",
    ],
    skills: [
      "Webflow",
      "Custom JavaScript",
      "CMS Architecture",
      "Responsive Design",
      "Client Communication",
    ],
  },
];
