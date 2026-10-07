"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, Code2, Terminal, Sparkles } from "lucide-react";
import { Experience, EXPERIENCE_DATA } from "@/types/experience";

// Shared Framer Motion Variants
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Sub-Component: Minimal Code Window Visual
const DeveloperCodeWindow = () => {
  return (
    <motion.div
      variants={fadeUpVariants}
      className="w-full max-w-md rounded-2xl bg-neutral-950 border border-neutral-800/80 p-5 shadow-2xl relative overflow-hidden backdrop-blur-sm"
    >
      {/* Code Window Header Bar */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800/80">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-800 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-800 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-800 inline-block" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400">
          <Terminal className="w-3 h-3 text-emerald-400" />
          <span>zahid.config.ts</span>
        </div>
      </div>

      {/* Code snippet */}
      <div className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed select-none space-y-1.5">
        <p>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">developer</span> = &#123;
        </p>
        <p className="pl-4">
          <span className="text-neutral-400">name:</span>{" "}
          <span className="text-emerald-300">"Zahid Hasan"</span>,
        </p>
        <p className="pl-4">
          <span className="text-neutral-400">role:</span>{" "}
          <span className="text-emerald-300">"Frontend Developer"</span>,
        </p>
        <p className="pl-4">
          <span className="text-neutral-400">focus:</span> [
        </p>
        <p className="pl-8 text-amber-300">"React",</p>
        <p className="pl-8 text-amber-300">"Next.js",</p>
        <p className="pl-8 text-amber-300">"TypeScript"</p>
        <p className="pl-4">]</p>
        <p>&#125;;</p>
      </div>

      {/* Subtle Glowing Gradient Accent */}
      <div
        className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full pointer-events-none"
        aria-hidden="true"
      />
    </motion.div>
  );
};

// Sub-Component: Experience Item in Timeline
const ExperienceItem = ({ item }: { item: Experience }) => {
  return (
    <motion.div
      variants={fadeUpVariants}
      className="relative pl-8 sm:pl-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12"
    >
      {/* Animated Timeline Node */}
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-neutral-900 border-2 border-emerald-500 -translate-x-1/2 flex items-center justify-center">
        <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
      </div>

      {/* Role / Company / Dates Column */}
      <div className="lg:col-span-5 flex flex-col items-start">
        <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase mb-1">
          {item.period}
        </span>
        <h4 className="text-2xl font-bold text-white tracking-tight">
          {item.role}
        </h4>
        <p className="text-base text-neutral-400 font-medium mb-3">
          {item.company}
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Description & Responsibilities Column */}
      <div className="lg:col-span-7 flex flex-col justify-center">
        <p className="text-base text-neutral-300 leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Responsibilities Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-400">
          {item.responsibilities.map((resp, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export const AboutExperience = () => {
  return (
    <section
      id="about"
      className="relative bg-[#0A0A0A] text-white py-24 sm:py-32 overflow-hidden border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* ==================== SECTION 01 — ABOUT ME ==================== */}
        <div className="mb-28 sm:mb-36">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            {/* Left Column: Editorial About Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Label */}
              <motion.div
                variants={fadeUpVariants}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-6"
              >
                03 — ABOUT ME
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                variants={fadeUpVariants}
                className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-8"
              >
                Building interfaces <br />
                that feel as good <br />
                <span className="text-neutral-400">as they work.</span>
              </motion.h2>

              {/* Paragraph Content */}
              <motion.div
                variants={fadeUpVariants}
                className="space-y-4 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-[600px] mb-8"
              >
                <p>
                  I'm a Frontend Developer focused on building modern, responsive,
                  and interactive web experiences.
                </p>
                <p>
                  I work primarily with React, Next.js, TypeScript, and Tailwind CSS,
                  with professional experience building Webflow websites for international
                  clients.
                </p>
                <p>
                  I enjoy turning ideas and designs into clean, functional products with
                  attention to usability, performance, and detail.
                </p>
              </motion.div>

              {/* Secondary Statement */}
              <motion.div
                variants={fadeUpVariants}
                className="pt-6 border-t border-neutral-800/80 flex items-center gap-3 text-xs sm:text-sm text-neutral-300"
              >
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Currently focused on frontend development, product building, and creating meaningful digital experiences.
                </span>
              </motion.div>
            </div>

            {/* Right Column: Code Window Visual */}
            <div className="lg:col-span-5 flex justify-start lg:justify-end">
              <DeveloperCodeWindow />
            </div>
          </motion.div>
        </div>

        {/* ==================== SECTION 02 — EXPERIENCE ==================== */}
        <div>
          {/* Header */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-4">
              04 — EXPERIENCE
            </div>
            <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Experience that <br />
              <span className="text-neutral-400">shaped how I build.</span>
            </h3>
          </motion.div>

          {/* Vertical Timeline Wrapper */}
          <div className="relative border-l border-neutral-800/80 ml-1.5 sm:ml-2 my-8 space-y-16">
            {EXPERIENCE_DATA.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </div>

          {/* Final Career Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 pt-10 border-t border-neutral-800/80 max-w-3xl"
          >
            <p className="text-lg sm:text-xl font-normal text-neutral-300 italic leading-relaxed">
              "From learning frontend development to working on real client projects, my focus has always been on improving how I build, think, and solve problems."
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutExperience;
