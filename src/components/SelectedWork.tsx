"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { Project, PROJECTS_DATA } from "@/types/projects";

// ==========================================
// MOTION VARIANTS
// ==========================================

const sectionHeaderVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ==========================================
// BROWSER FRAME
// ==========================================

const BrowserFrame = ({
  children,
  url,
}: {
  children: React.ReactNode;
  url?: string;
}) => {
  return (
    <div className="w-full overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-900 border border-neutral-800/80 shadow-2xl">
      {/* Browser Top Bar */}
      <div className="px-4 py-3 bg-neutral-950/90 border-b border-neutral-800/80 flex items-center justify-between gap-4">
        {/* Browser Dots */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>

        {/* URL */}
        {url && (
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400 max-w-[280px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />

            <span className="truncate">{url.replace(/^https?:\/\//, "")}</span>
          </div>
        )}

        {/* Spacer */}
        <div className="w-12" />
      </div>

      {/* Browser Content */}
      <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] w-full bg-neutral-950">
        {children}
      </div>
    </div>
  );
};

// ==========================================
// PROJECT CARD
// ==========================================

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      variants={cardContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-100px",
      }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
        project.isFeaturedLarge ? "mb-24 lg:mb-32" : "mb-20 lg:mb-28"
      }`}
    >
      {/* ==========================================
          PROJECT IMAGE
      ========================================== */}

      <div
        className={`w-full ${
          project.isFeaturedLarge
            ? "lg:col-span-12"
            : isReversed
              ? "lg:col-span-7 lg:order-2"
              : "lg:col-span-7 lg:order-1"
        }`}
      >
        <div className="relative group">
          <BrowserFrame url={project.liveUrl}>
            <div className="relative w-full h-full overflow-hidden">
              {/* Project Image */}
              <Image
                src={project.image}
                alt={`${project.title} project screenshot`}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Overlay */}
              {project.liveUrl && (
                <div className="absolute inset-0 bg-neutral-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live site`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <span>View Live Site</span>

                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </BrowserFrame>
        </div>
      </div>

      {/* ==========================================
          PROJECT INFORMATION
      ========================================== */}

      <div
        className={`w-full flex flex-col items-start ${
          project.isFeaturedLarge
            ? "lg:col-span-12 lg:max-w-3xl"
            : isReversed
              ? "lg:col-span-5 lg:order-1"
              : "lg:col-span-5 lg:order-2"
        }`}
      >
        {/* Project Meta */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
          <span className="text-white font-semibold">{project.number}</span>

          <span className="text-neutral-700">/</span>

          <span>{project.category}</span>
        </div>

        {/* Project Title */}
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-base text-neutral-400 leading-relaxed mb-6 max-w-xl">
          {project.description}
        </p>

        {/* Features */}
        {project.features?.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {project.features.map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-neutral-300"
              >
                <Sparkles className="w-3 h-3 text-emerald-400" />

                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Technologies */}
        {project.tech?.length > 0 && (
          <div className="w-full pt-4 border-t border-neutral-800/60 mb-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-neutral-900/50 text-[11px] font-mono text-neutral-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Project Link */}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} project`}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-white hover:text-emerald-400 transition-colors group"
          >
            <span>VIEW PROJECT</span>

            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500">
            In Active Development
          </span>
        )}
      </div>
    </motion.article>
  );
};

// ==========================================
// SELECTED WORK SECTION
// ==========================================

export const SelectedWork = () => {
  return (
    <section
      id="work"
      className="relative bg-[#0A0A0A] text-white py-24 sm:py-32 overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* ==========================================
            SECTION HEADER
        ========================================== */}

        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="mb-16 sm:mb-24 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-4">
            02 — SELECTED WORK
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Selected Work
          </h2>

          <p className="text-lg text-neutral-400">
            A selection of projects I&apos;ve designed and developed.
          </p>
        </motion.div>

        {/* ==========================================
            PROJECTS
        ========================================== */}

        <div className="flex flex-col">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* ==========================================
            BOTTOM CTA
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="pt-12 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          {/* CTA Text */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-1">
              Want to see more?
            </h4>

            <p className="text-sm text-neutral-400">
              Explore open-source repositories and experimental builds on
              GitHub.
            </p>
          </div>

          {/* GitHub Button */}
          <a
            href="https://github.com/zahidhasan13"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all projects on GitHub"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 border border-neutral-800 text-sm font-semibold tracking-wider text-neutral-200 hover:text-white hover:border-neutral-600 hover:bg-neutral-800 transition-all group"
          >
            <span>VIEW ALL PROJECTS</span>

            <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWork;
