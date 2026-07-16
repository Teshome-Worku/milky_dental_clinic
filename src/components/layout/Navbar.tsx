"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/content";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

// Refined clinic logo SVG matching the gold tooth + M brand mark
function ClinicLogo({ scrolled }: { scrolled: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group"
      aria-label="Dr. Milky Dental Clinic – Home"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {/* Logo mark */}
      <div className="relative flex-shrink-0 w-11 h-11">
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-11 h-11"
          aria-hidden="true"
        >
          {/* Outer circle background */}
          <circle cx="22" cy="22" r="21" fill={scrolled ? "#EFF8FF" : "rgba(255,255,255,0.15)"} />
          {/* Gold tooth silhouette */}
          <path
            d="M22 8C16.8 8 11 12.5 11 18.5C11 22 12.2 24.8 14 27.2C15.8 29.6 16.4 32.4 16.4 35.5C16.4 37.5 17.5 39 19 39C20.5 39 21.1 37 21.6 35C22 33.2 22 33.2 22 33.2C22 33.2 22 33.2 22.4 35C22.9 37 23.5 39 25 39C26.5 39 27.6 37.5 27.6 35.5C27.6 32.4 28.2 29.6 30 27.2C31.8 24.8 33 22 33 18.5C33 12.5 27.2 8 22 8Z"
            fill="#D4AF37"
            opacity="0.9"
          />
          {/* M letter overlay */}
          <path
            d="M16 26V16L22 23L28 16V26"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Text */}
      <div className="hidden sm:block leading-tight">
        <span
          className={`block font-extrabold text-[15px] tracking-tight transition-colors duration-300 ${
            scrolled ? "text-[#0F172A]" : "text-white"
          }`}
        >
          Dr. Milky Derara
        </span>
        <span
          className={`block text-[11px] font-semibold tracking-widest uppercase transition-colors duration-300 ${
            scrolled ? "text-[#1DA1F2]" : "text-[#D4AF37]"
          }`}
        >
          Specialty Dental Clinic
        </span>
      </div>
    </Link>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveSection(href);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navTextClass = isScrolled ? "text-[#475569]" : "text-white/90";
  const navActiveClass = isScrolled
    ? "text-[#1DA1F2] bg-[#e8f4fd]"
    : "text-white bg-white/20";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-[72px]">
            <ClinicLogo scrolled={isScrolled} />

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activeSection === link.href ? navActiveClass : `${navTextClass} hover:text-[#1DA1F2] hover:bg-white/10`
                  }`}
                  aria-current={activeSection === link.href ? "page" : undefined}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  isScrolled ? "text-[#475569] hover:text-[#1DA1F2]" : "text-white/80 hover:text-white"
                }`}
                aria-label={`Call ${siteConfig.phoneDisplay}`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span className="hidden xl:block">{siteConfig.phoneDisplay}</span>
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className={`flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                  isScrolled
                    ? "bg-[#1DA1F2] text-white hover:bg-[#0e86d0] shadow-md hover:shadow-[#1DA1F2]/30"
                    : "bg-white text-[#1DA1F2] hover:bg-white/90 shadow-lg"
                }`}
                aria-label="Book an appointment"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                Appointment
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2.5 rounded-xl transition-colors ${
                isScrolled ? "text-[#0F172A] hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 pt-[72px] bg-white/95 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="container-custom py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3.5 rounded-xl text-base font-semibold text-[#0F172A] hover:bg-[#e8f4fd] hover:text-[#1DA1F2] transition-all cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-5 pt-5 border-t border-gray-100 flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone className="w-5 h-5 text-[#1DA1F2]" aria-hidden="true" />
                  <span className="font-medium">{siteConfig.phoneDisplay}</span>
                </a>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="btn-primary w-full justify-center"
                  aria-label="Book an appointment"
                >
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
