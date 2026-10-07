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
  {
    id: "nelsistech-frontend-developer",
    role: "Frontend Developer",
    company: "Nelsis Tech",
    period: "2025",
    description:
      "Worked on real-world web projects, building responsive and user-friendly interfaces using modern frontend technologies and collaborating with the team to deliver quality digital experiences.",
    responsibilities: [
      "Built responsive web interfaces using HTML and CSS",
      "Developed modern UI components with Tailwind CSS",
      "Built interactive applications using React",
      "Developed frontend applications with Next.js",
      "Converted designs into responsive and reusable components",
      "Integrated APIs and handled frontend data",
      "Optimized websites for performance and responsiveness",
      "Collaborated with team members to deliver project requirements",
    ],
    skills: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Responsive Design",
      "API Integration",
    ],
  },
];
