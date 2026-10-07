"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

// Navigation items config
const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for glassmorphism / background blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#0A0A0A]/85 backdrop-blur-md border-neutral-800/80 py-4 shadow-sm"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#home"
          className="text-xl font-bold tracking-wider text-white hover:opacity-80 transition-opacity"
          aria-label="Zahid Hasan Portfolio Home"
        >
          ZAHID<span className="text-neutral-500">.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200 group py-1"
            >
              {link.name}
              {/* Subtle hover underline */}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold px-4 py-2.5 rounded-full border border-neutral-700 bg-neutral-900/50 text-neutral-200 hover:text-white hover:border-neutral-400 hover:bg-neutral-800 transition-all duration-300 group"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-md"
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-x-0 top-[65px] bg-[#0A0A0A] border-b border-neutral-800 flex flex-col justify-between px-6 pt-10 pb-20 overflow-hidden"
          >
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 + idx * 0.05,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-light text-neutral-300 hover:text-white transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Footer / CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              className="pt-8 border-t border-neutral-800/80 flex flex-col gap-6"
            >
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-6 rounded-full border border-neutral-700 bg-neutral-900 text-center text-sm font-semibold tracking-wider text-white hover:bg-neutral-800 flex items-center justify-center gap-2 transition-all"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="text-xs text-neutral-500 text-center">
                Zahid Hasan — Frontend Developer
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
