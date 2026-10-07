"use client";

import React from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code, Layout, Sparkles } from "lucide-react";

// ==========================================
// TYPES & DATA STRUCTURES
// ==========================================

export interface SkillCategoryData {
  id: string;
  category: string;
  skills: string[];
}

export interface CapabilityData {
  number: string;
  title: string;
  description: string;
  technology: string[];
  icon: React.ElementType;
}

const SKILL_CATEGORIES: SkillCategoryData[] = [
  {
    id: "frontend",
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    id: "backend",
    category: "Backend & Data",
    skills: ["Node.js", "Express.js", "MongoDB", "REST API", "JWT", "Zod"],
  },
  {
    id: "webflow",
    category: "Webflow & Integrations",
    skills: [
      "Webflow",
      "Webflow CMS",
      "Figma to Webflow",
      "Custom Code",
      "Memberstack",
      "Zapier",
      "Make",
    ],
  },
  {
    id: "tools",
    category: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Figma"],
  },
];

const CAPABILITIES: CapabilityData[] = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "I build responsive and scalable web interfaces using React, Next.js and TypeScript with a strong focus on clean architecture and user experience.",
    technology: ["React", "Next.js", "TypeScript"],
    icon: Code,
  },
  {
    number: "02",
    title: "Webflow Development",
    description:
      "I build responsive Webflow websites, CMS-powered pages and custom interactions for businesses, agencies and SaaS products.",
    technology: ["Webflow", "CMS", "Custom Code"],
    icon: Layout,
  },
  {
    number: "03",
    title: "Interactive Experiences",
    description:
      "I create smooth, purposeful interactions and animations that make digital products feel modern without sacrificing performance.",
    technology: ["Framer Motion", "GSAP", "CSS"],
    icon: Sparkles,
  },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const pillContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

// ==========================================
// SUB-COMPONENTS
// ==========================================

const SkillTag: React.FC<{ name: string }> = ({ name }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      variants={pillVariants}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -2,
              scale: 1.03,
              borderColor: "rgba(245, 245, 245, 0.35)",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
            }
      }
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs sm:text-sm font-medium text-neutral-300 backdrop-blur-sm select-none cursor-default transition-colors"
    >
      {name}
    </motion.span>
  );
};

const SkillCategoryCard: React.FC<{ category: SkillCategoryData }> = ({
  category,
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative p-6 sm:p-8 rounded-2xl border border-neutral-800/80 bg-neutral-900/20 backdrop-blur-sm hover:border-neutral-700/60 transition-colors duration-300 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-lg font-semibold text-neutral-100 mb-5 tracking-tight flex items-center justify-between">
          <span>{category.category}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-neutral-300 transition-colors" />
        </h3>

        <motion.div
          variants={pillContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap gap-2 sm:gap-2.5"
        >
          {category.skills.map((skill) => (
            <SkillTag key={skill} name={skill} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const CapabilityCard: React.FC<{ item: CapabilityData }> = ({ item }) => {
  const Icon = item.icon;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={itemVariants}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              borderColor: "rgba(245, 245, 245, 0.25)",
              y: -3,
            }
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative p-6 sm:p-8 lg:p-10 rounded-2xl border border-neutral-800/80 bg-neutral-900/20 backdrop-blur-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 max-w-3xl">
        <div className="flex items-center justify-between sm:justify-start gap-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-neutral-500 uppercase">
            {item.number}
          </span>
          <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-neutral-100 group-hover:border-neutral-700 transition-colors">
            <Icon className="w-5 h-5" />
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-neutral-100 mb-3 tracking-tight group-hover:text-white transition-colors">
            {item.title}
          </h3>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-4">
            {item.description}
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
            <span>Tech:</span>
            <span className="text-neutral-300">
              {item.technology.join(" · ")}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <div className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-500 group-hover:text-neutral-100 group-hover:border-neutral-600 transition-colors">
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// MAIN SECTION COMPONENTS
// ==========================================

export const SkillsSection: React.FC = () => {
  return (
    <section className="mb-24 lg:mb-32">
      {/* Section Header */}
      <motion.div variants={itemVariants} className="max-w-2xl mb-12 sm:mb-16">
        <span className="inline-block font-mono text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
          05 — SKILLS & CAPABILITIES
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 tracking-tight leading-[1.15] mb-6">
          Tools I use to <br />
          build digital products.
        </h2>
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
          My toolkit combines modern frontend technologies, backend fundamentals
          and Webflow development to turn ideas into functional digital
          experiences.
        </p>
      </motion.div>

      {/* 2x2 Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {SKILL_CATEGORIES.map((cat) => (
          <SkillCategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
};

export const CapabilitiesSection: React.FC = () => {
  return (
    <section>
      {/* Section Header */}
      <motion.div variants={itemVariants} className="max-w-2xl mb-12 sm:mb-16">
        <span className="inline-block font-mono text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
          06 — WHAT I DO
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 tracking-tight leading-[1.15]">
          From idea to <br />
          working product.
        </h2>
      </motion.div>

      {/* Stacked Horizontal Capability Blocks */}
      <div className="flex flex-col gap-4 sm:gap-6">
        {CAPABILITIES.map((capability) => (
          <CapabilityCard key={capability.number} item={capability} />
        ))}
      </div>
    </section>
  );
};

// ==========================================
// CONTAINER COMPONENT
// ==========================================

export default function SkillsAndCapabilities() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] py-20 px-6 sm:px-12 lg:px-20 selection:bg-neutral-800 selection:text-neutral-100 font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SkillsSection />
          <CapabilitiesSection />
        </motion.div>
      </div>
    </div>
  );
}
