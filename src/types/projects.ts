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
    image: "/assets/images/cinemate.png",
    isFeaturedLarge: true,
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
    image: "/assets/images/cravora.png",
  },
  {
    id: "store-commerce",
    number: "04",
    title: "Store Commerce",
    category: "E-commerce Platform",
    description:
      "A modern e-commerce application built with Next.js and Redux Toolkit, featuring product discovery, search, cart management, wishlist and a smooth checkout experience.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "REST API",
      "Local Storage",
    ],
    features: [
      "Product discovery",
      "Categories",
      "Search",
      "Shopping cart",
      "Wishlist",
      "Authentication",
      "Checkout",
      "Order summary",
      "Responsive design",
    ],
    liveUrl: "https://store-commerce-sage.vercel.app/",
    image: "/assets/images/store.png",
  },
];
