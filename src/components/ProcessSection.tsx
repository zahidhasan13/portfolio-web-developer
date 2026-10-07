"use client";

import React from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";
import { Search, Layout, Code2, Sparkles, LucideIcon } from "lucide-react";

// ==========================================
// TYPES & DATA STRUCTURES
// ==========================================

export interface ProcessStepData {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const PROCESS_STEPS: ProcessStepData[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "I start by understanding the project goals, target users, requirements and the problems the product needs to solve.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan & Structure",
    description:
      "I break the requirements into clear sections, user flows and reusable components before development begins.",
    icon: Layout,
  },
  {
    number: "03",
    title: "Develop",
    description:
      "I turn the design into a responsive, accessible and functional interface using modern frontend technologies.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Test & Improve",
    description:
      "I test across screen sizes, fix issues, improve interactions and optimize the final experience before delivery.",
    icon: Sparkles,
  },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================

const sectionHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const timelineVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
  },
};

const verticalLineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
  },
};

// ==========================================
// SUB-COMPONENTS
// ==========================================

const ProcessStepCard: React.FC<{
  step: ProcessStepData;
  index: number;
  total: number;
}> = ({ step, index, total }) => {
  const Icon = step.icon;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={stepVariants}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -4,
            }
      }
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative flex flex-col justify-between p-6 rounded-2xl border border-neutral-800/80 bg-neutral-900/20 backdrop-blur-sm hover:border-neutral-700/80 hover:bg-neutral-900/40 transition-colors duration-300"
    >
      <div>
        {/* Step Header */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-xs font-semibold tracking-widest text-neutral-500 uppercase group-hover:text-neutral-300 transition-colors">
            {step.number}
          </span>
          <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-neutral-100 group-hover:border-neutral-700 group-hover:scale-105 transition-all duration-300">
            <Icon className="w-4 h-4" aria-hidden="true" />
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-semibold text-neutral-100 mb-3 tracking-tight group-hover:text-white transition-colors">
          {step.title}
        </h3>
        <p className="text-neutral-400 text-sm leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Mobile Step Indicator Footer */}
      <div className="mt-6 pt-4 border-t border-neutral-800/60 lg:hidden flex items-center justify-between text-xs font-mono text-neutral-500">
        <span>
          Step {index + 1} of {total}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-neutral-300 transition-colors" />
      </div>
    </motion.div>
  );
};

const StatementBlock: React.FC = () => {
  return (
    <motion.div
      variants={stepVariants}
      className="mt-16 sm:mt-20 p-6 sm:p-8 rounded-xl border-l-2 border-neutral-600 bg-neutral-900/30 backdrop-blur-sm"
    >
      <p className="text-base sm:text-lg lg:text-xl font-medium text-neutral-200 leading-relaxed">
        “Good development is not just about writing code.{" "}
        <br className="hidden sm:inline" />
        <span className="text-neutral-400">
          It’s about understanding the problem and building the right solution.
        </span>
        ”
      </p>
    </motion.div>
  );
};

// ==========================================
// MAIN PROCESS SECTION
// ==========================================

export default function ProcessSection() {
  return (
    <section className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] py-20 px-6 sm:px-12 lg:px-20 font-sans antialiased selection:bg-neutral-800 selection:text-neutral-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mb-16 sm:mb-20"
        >
          <span className="inline-block font-mono text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            07 — MY PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 tracking-tight leading-[1.15] mb-6">
            From idea to <br />a polished product.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            A simple and practical process I follow to turn ideas, designs and
            requirements into reliable digital experiences.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Desktop/Tablet Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] z-0 h-[1px] pointer-events-none">
            <motion.div
              variants={lineVariants}
              className="w-full h-full bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 origin-left"
            />
          </div>

          {/* Mobile Vertical Connecting Line */}
          <div className="block lg:hidden absolute top-6 bottom-6 left-[27px] sm:left-[35px] z-0 w-[1px] pointer-events-none">
            <motion.div
              variants={verticalLineVariants}
              className="w-full h-full bg-neutral-800 origin-top"
            />
          </div>

          {/* Grid Layout for Process Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <ProcessStepCard
                key={step.number}
                step={step}
                index={idx}
                total={PROCESS_STEPS.length}
              />
            ))}
          </div>

          {/* Bottom Statement */}
          <StatementBlock />
        </motion.div>
      </div>
    </section>
  );
}
