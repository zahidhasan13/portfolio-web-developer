"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";
import { ArrowUpRight, ArrowRight, Code2, Sparkles, Terminal, CheckCircle2 } from "lucide-react";

// Tech stack data
const TECH_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Webflow",
  "Framer Motion",
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax / Scroll effect for hero background & visual elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  const yParallax = useTransform(smoothProgress, [0, 1], [0, 80]);
  const opacityFade = useTransform(smoothProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] lg:min-h-screen bg-[#0A0A0A] text-white overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between"
    >
      {/* Background Subtle Grid pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f15_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 my-auto">
        
        {/* LEFT COLUMN: Main Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 1. Small Intro Label */}
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs tracking-wider uppercase font-medium text-neutral-300 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            HELLO, I'M ZAHID HASAN
          </motion.div>

          {/* 2. Main Heading */}
          <motion.h1
            variants={fadeUpVariants}
            className="text-[42px] sm:text-[60px] lg:text-[88px] xl:text-[96px] font-bold tracking-tight leading-[1.05] text-neutral-100 mb-6"
          >
            <span className="text-white block">Frontend Developer</span>
            <span className="text-neutral-400 font-normal block">building digital</span>
            <span className="text-neutral-200 block">experiences.</span>
          </motion.h1>

          {/* 3. Supporting Paragraph */}
          <motion.p
            variants={fadeUpVariants}
            className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-[550px] mb-8"
          >
            I build fast, responsive, and interactive web applications using React,
            Next.js, TypeScript, and modern web technologies. Focused on design accuracy, speed, and seamless user experiences.
          </motion.p>

          {/* 4. CTA Buttons */}
          <motion.div variants={fadeUpVariants} className="flex flex-wrap items-center gap-4 mb-12">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>View My Work</span>
              <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-200 text-sm font-medium hover:text-white hover:border-neutral-700 hover:bg-neutral-800 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* 5. Technology Showcase */}
          <motion.div variants={fadeUpVariants} className="w-full pt-4 border-t border-neutral-800/60">
            <p className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-3">
              Core Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <motion.span
                  key={tech}
                  variants={badgeVariants}
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  className="px-3 py-1.5 rounded-md bg-neutral-900/60 border border-neutral-800 text-xs font-medium text-neutral-300 hover:border-neutral-700 hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive Abstract Developer Visual */}
        <motion.div
          style={{ y: yParallax, opacity: opacityFade }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
        >
          {/* Outer Card Wrapper / Mock Browser UI */}
          <div className="w-full max-w-[480px] rounded-2xl bg-neutral-950 border border-neutral-800/80 p-5 sm:p-6 shadow-2xl shadow-black/80 relative backdrop-blur-sm group">
            
            {/* Header bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800/70">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400">
                <Terminal className="w-3 h-3 text-emerald-400" />
                <span>DeveloperExperience.tsx</span>
              </div>
            </div>

            {/* Code / UI Snippet Body */}
            <div className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed space-y-2 select-none">
              <p className="text-neutral-500">// Modern Frontend Stack</p>
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
                <span className="text-neutral-400">specialties:</span> [
              </p>
              <p className="pl-8 text-amber-300">
                "Clean Code", "Next.js Architecture", "Interactive UI"
              </p>
              <p className="pl-4">],</p>
              <p className="pl-4">
                <span className="text-neutral-400">status:</span>{" "}
                <span className="text-emerald-400">"Available for projects"</span>
              </p>
              <p>&#125;;</p>
            </div>

            {/* Floating UI Card 1: Performance Metric */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-3 sm:-right-6 bg-neutral-900 border border-neutral-700/80 rounded-xl p-3 shadow-xl flex items-center gap-3 backdrop-blur-md"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-neutral-400 uppercase font-medium">Lighthouse Score</p>
                <p className="text-xs font-bold text-white">100 / 100 Performance</p>
              </div>
            </motion.div>

            {/* Floating UI Card 2: Interactive Micro Component */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-3 sm:-left-6 bg-neutral-900/90 border border-neutral-700/80 rounded-xl p-3.5 shadow-xl flex items-center gap-3 backdrop-blur-md"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span className="text-xs font-semibold text-white">Framer Motion</span>
                </div>
                <p className="text-[11px] text-neutral-400">Smooth 60fps animations</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 6. Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="w-full flex justify-center pt-8 pb-4 relative z-10"
      >
        <Link
          href="#work"
          className="group flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors"
          aria-label="Scroll to Work section"
        >
          <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-neutral-700 flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-neutral-400 group-hover:bg-white transition-colors"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;