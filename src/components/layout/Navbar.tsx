"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/content";
import { scrollToSection } from "@/lib/navigation";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

// Refined clinic logo SVG matching the gold tooth + M brand mark
function ClinicLogo({
  scrolled,
  onNavigateHome,
}: {
  scrolled: boolean;
  onNavigateHome: () => void;
}) {
  return (
    <Link
      href="#home"
      onClick={(event) => {
        event.preventDefault();
        onNavigateHome();
      }}
      className="flex items-center gap-3 group"
      aria-label="Dr. Milky Dental Clinic – Home"
    >
      {/* Logo mark */}
      <div className="relative flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11">
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 sm:w-11 sm:h-11"
          aria-hidden="true"
        >
          {/* Outer circle background */}
          <circle cx="22" cy="22" r="21" fill={scrolled ? "#EFF8FF" : "#EFF8FF"} />
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

      {/* Text — always visible, compact on mobile */}
      <div className="leading-tight">
        <span
          className="block font-extrabold text-[13px] sm:text-[15px] tracking-tight text-[#0F172A] transition-colors duration-300"
        >
          Dr. Milky Derara
        </span>
        <span
          className="block text-[9px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#1DA1F2] transition-colors duration-300"
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
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (mobileOpen) mobileMenuRef.current?.focus();
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current) setActiveSection(`#${current.target.id}`);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.01, 0.4] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveSection(href);
  };

  const handleLogoClick = () => {
    setMobileOpen(false);
    setActiveSection("#home");
    scrollToSection("#home");
  };

  const navTextClass = isScrolled ? "text-[#475569]" : "text-[#0F172A]/80";
  const navActiveClass = isScrolled
    ? "text-[#1DA1F2] bg-[#e8f4fd]"
    : "text-[#1DA1F2] bg-[#1DA1F2]/10";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm"
          : "bg-transparent"
          }`}
        role="banner"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-[72px]">
            <ClinicLogo scrolled={isScrolled} onNavigateHome={handleLogoClick} />

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${activeSection === link.href ? navActiveClass : `${navTextClass} hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/5`
                    }`}
                  aria-current={activeSection === link.href ? "page" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-1.5 text-sm font-medium transition-colors text-[#475569] hover:text-[#1DA1F2]"
                aria-label={`Call ${siteConfig.phoneDisplay}`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span className="hidden xl:block">{siteConfig.phoneDisplay}</span>
              </a>
              <a
                href="#contact"
                onClick={() => handleNavClick("#contact")}
                className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer bg-[#1DA1F2] text-white hover:bg-[#0e86d0] shadow-md hover:shadow-[#1DA1F2]/30"
                aria-label="Book an appointment"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                Appointment
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-xl transition-colors text-[#0F172A] hover:bg-gray-100"
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
            className="fixed inset-0 z-40 pt-[72px] bg-white/95 backdrop-blur-xl "
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            ref={mobileMenuRef}
            tabIndex={-1}
          >
            <div className="container-custom py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3.5 rounded-xl text-base font-semibold text-[#0F172A] hover:bg-[#e8f4fd] hover:text-[#1DA1F2] transition-all cursor-pointer"
                >
                  {link.label}
                </motion.a>
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
                <a
                  href="#contact"
                  onClick={() => handleNavClick("#contact")}
                  className="btn-primary w-full justify-center"
                  aria-label="Book an appointment"
                >
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
