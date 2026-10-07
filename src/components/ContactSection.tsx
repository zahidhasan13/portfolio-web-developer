"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

// ==========================================
// CONFIG & DATA STRUCTURES
// ==========================================

const CONTACT_EMAIL = "zahidhasan.dev@gmail.com"; // Replace with your primary email

export interface SocialLinkData {
  label: string;
  href: string;
  icon: React.ElementType;
}

const SOCIAL_LINKS: SocialLinkData[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/zahidhasanofficial",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/zahidhasandev", // Update with your actual GitHub username
    icon: SiGithub,
  },
  {
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    icon: Mail,
  },
];

const AVAILABLE_FOR = [
  "Frontend Development",
  "Webflow Projects",
  "Freelance Work",
  "Collaborations",
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
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const socialContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const socialItemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// ==========================================
// SUB-COMPONENTS
// ==========================================

const SubtleBackground: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
    >
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />

      {/* Radial Gradient Ambient Glow */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.15, 1],
                opacity: [0.15, 0.25, 0.15],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-neutral-600/20 via-neutral-400/10 to-transparent blur-[120px]"
      />

      {/* Abstract Background Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full border border-neutral-800/40 opacity-40 pointer-events-none" />
    </div>
  );
};

const SocialLink: React.FC<{ item: SocialLinkData }> = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.div variants={socialItemVariants}>
      <Link
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-sm text-sm font-medium text-neutral-300 hover:text-white hover:border-neutral-600 hover:bg-neutral-800/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
      >
        <Icon className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
        <span>{item.label}</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </Link>
    </motion.div>
  );
};

const AvailableTag: React.FC<{ label: string }> = ({ label }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-md bg-neutral-900/80 border border-neutral-800 text-xs font-mono text-neutral-400">
      {label}
    </span>
  );
};

// ==========================================
// MAIN CONTACT SECTION COMPONENT
// ==========================================

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen bg-[#0A0A0A] text-[#F5F5F5] py-24 px-6 sm:px-12 lg:px-20 font-sans antialiased selection:bg-neutral-800 selection:text-neutral-100 flex flex-col justify-between overflow-hidden">
      <SubtleBackground />

      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center"
        >
          {/* Section Label */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block font-mono text-xs font-semibold tracking-widest text-neutral-400 uppercase">
              08 — LET'S CONNECT
            </span>
          </motion.div>

          {/* Main Statement Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-neutral-100 tracking-tight leading-[1.1] mb-6 max-w-4xl"
          >
            Have a project in mind? <br />
            <span className="text-neutral-400">Let's build it together.</span>
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-neutral-400 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed mb-10"
          >
            Whether you're looking for a frontend developer, need a modern
            website, or want to turn an idea into a working product, I'd love to
            hear about it.
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div variants={itemVariants} className="mb-10">
            <motion.a
              href={`mailto:${CONTACT_EMAIL}`}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.02,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 0.98,
                    }
              }
              className="group inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-neutral-100 text-neutral-950 font-semibold text-lg sm:text-xl shadow-xl hover:bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-950 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Availability Status */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-12"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-neutral-400">
              Currently open to frontend development, freelance and
              collaboration opportunities.
            </span>
          </motion.div>

          {/* Secondary Social Links */}
          <motion.div
            variants={socialContainerVariants}
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-16"
          >
            {SOCIAL_LINKS.map((item) => (
              <SocialLink key={item.label} item={item} />
            ))}
          </motion.div>

          {/* Available For Capabilities Footer */}
          <motion.div
            variants={itemVariants}
            className="pt-10 border-t border-neutral-800/80 w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Available for
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {AVAILABLE_FOR.map((item) => (
                <AvailableTag key={item} label={item} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Portfolio Bottom Copyright Footer */}
      <footer className="relative z-10 max-w-5xl mx-auto w-full pt-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
        <p>© {new Date().getFullYear()} Zahid Hasan. All rights reserved.</p>
        <p>Designed & Built with Next.js, Tailwind CSS & Framer Motion.</p>
      </footer>
    </section>
  );
}
