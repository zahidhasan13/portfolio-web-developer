"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants, useReducedMotion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

// ==========================================
// CONFIG & DATA STRUCTURES
// ==========================================

const CONTACT_EMAIL = "zahidhasan.dev@gmail.com";

interface NavLinkData {
  label: string;
  href: string;
}

interface SocialLinkData {
  label: string;
  href: string;
  icon: React.ElementType;
}

const NAV_LINKS: NavLinkData[] = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS: SocialLinkData[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/zahidhasanofficial",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/zahidhasandev", // Replace with your actual GitHub username
    icon: SiGithub,
  },
  {
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    icon: Mail,
  },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
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

const FooterNav: React.FC = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav aria-label="Footer navigation">
      <ul className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 lg:gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="group relative inline-block text-sm font-medium text-neutral-400 hover:text-neutral-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] rounded-sm"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-neutral-200 transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const SocialLinks: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-wrap gap-4 sm:gap-6">
      {SOCIAL_LINKS.map((item) => {
        const Icon = item.icon;
        return (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 hover:text-neutral-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] rounded-sm"
          >
            <Icon className="w-4 h-4 text-neutral-500 transition-colors group-hover:text-neutral-200" />
            <span>{item.label}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
          </motion.a>
        );
      })}
    </div>
  );
};

const BackToTop: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      type="button"
      onClick={scrollToTop}
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      aria-label="Back to top"
      className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-mono text-neutral-400 hover:text-neutral-100 hover:border-neutral-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
    >
      <span>Back to top</span>
      <ArrowUp className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-100 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </motion.button>
  );
};

// ==========================================
// MAIN FOOTER COMPONENT
// ==========================================

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-[#F5F5F5] border-t border-neutral-800/60 font-sans antialiased selection:bg-neutral-800 selection:text-neutral-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12 sm:space-y-16"
        >
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 sm:gap-12">
            {/* Left Column: Brand & Bio */}
            <motion.div variants={itemVariants} className="max-w-sm space-y-2">
              <Link
                href="/"
                className="inline-block text-2xl font-bold tracking-wider text-neutral-100 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] rounded-sm"
              >
                ZAHID.
              </Link>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Frontend Developer building modern digital experiences.
              </p>
            </motion.div>

            {/* Right Column: Navigation & Social */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-8 sm:gap-10 lg:items-end"
            >
              <FooterNav />
              <SocialLinks />
            </motion.div>
          </div>

          {/* Thin Divider Line */}
          <div className="h-[1px] w-full bg-neutral-800/80" />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-500">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <span>© {currentYear} Zahid Hasan</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6"
            >
              <span>Built with Next.js & Framer Motion</span>
              <BackToTop />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
