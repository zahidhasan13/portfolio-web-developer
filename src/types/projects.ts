export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  isFeaturedLarge?: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "cinemate",
    number: "01",
    title: "CineMate",
    category: "Movie Discovery Platform",
    description:
      "A modern movie discovery experience built with Next.js, TypeScript and Redux Toolkit, powered by the TMDB API.",
    tech: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "TMDB API",
      "Tailwind CSS",
    ],
    features: [
      "Mood-based movie discovery",
      "Movie Night feature",
      "Search",
      "Movie discovery",
      "Responsive UI",
    ],
    liveUrl: "https://cinemate-tawny.vercel.app/",
    image: "/projects/cinemate.jpg", // Replace with your public image path or external URL
    isFeaturedLarge: true,
  },
  {
    id: "finora",
    number: "02",
    title: "Finora",
    category: "Personal Finance Dashboard",
    description:
      "A modern fintech dashboard for managing accounts, transactions and personal finances with a clean and intuitive interface.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Zod",
    ],
    features: [
      "Authentication",
      "Account management",
      "Transactions",
      "Financial summary",
      "Dashboard",
      "REST API",
    ],
    image: "/projects/finora.jpg", // Replace with your public image path
  },
  {
    id: "cravora",
    number: "03",
    title: "Cravora",
    category: "Food Ordering Platform",
    description:
      "A responsive food ordering application focused on food discovery, cart management and a simple checkout experience.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Context API",
      "REST API",
      "Local Storage",
    ],
    features: [
      "Food discovery",
      "Categories",
      "Search",
      "Cart",
      "Authentication",
      "Checkout",
      "Responsive design",
    ],
    liveUrl: "https://cravora-food.vercel.app/",
    image: "/projects/cravora.jpg", // Replace with your public image path
  },
];
