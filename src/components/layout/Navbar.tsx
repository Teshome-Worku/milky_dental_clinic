"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/content";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveSection(href);
    const el = document.querySelector(href);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav shadow-sm" : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Dr. Milky Dental Clinic - Home"
            >
              <div className="relative w-10 h-10 flex-shrink-0">
                <div className="absolute inset-0 bg-[#1DA1F2] rounded-xl opacity-15 group-hover:opacity-25 transition-opacity" />
                <div className="relative flex items-center justify-center w-full h-full">
                  <svg
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6C15 6 10 10 10 15C10 18 11 20.5 12.5 22.5C14 24.5 14.5 27 14.5 30C14.5 32 15.5 34 17 34C18.5 34 19 32 19.5 30C20 28 20 28 20 28C20 28 20 28 20.5 30C21 32 21.5 34 23 34C24.5 34 25.5 32 25.5 30C25.5 27 26 24.5 27.5 22.5C29 20.5 30 18 30 15C30 10 25 6 20 6Z"
                      fill="#1DA1F2"
                    />
                    <path
                      d="M20 6C15 6 10 10 10 15"
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
              <div className="hidden sm:block">
                <span
                  className={`block font-bold text-base leading-tight transition-colors duration-300 ${
                    isScrolled ? "text-[#0F172A]" : "text-[#0F172A]"
                  }`}
                >
                  Dr. Milky Derara
                </span>
                <span className="block text-xs text-[#1DA1F2] font-medium tracking-wide">
                  Specialty Dental Clinic
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeSection === link.href
                      ? "text-[#1DA1F2] bg-[#e8f4fd]"
                      : "text-[#475569] hover:text-[#0F172A] hover:bg-gray-50"
                  }`}
                  aria-current={activeSection === link.href ? "page" : undefined}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-1.5 text-sm font-medium text-[#475569] hover:text-[#1DA1F2] transition-colors"
                aria-label={`Call ${siteConfig.phoneDisplay}`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-primary text-sm px-5 py-2.5"
                aria-label="Book a dental appointment"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-xl text-[#0F172A] hover:bg-gray-100 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 pt-20 glass-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="container-custom py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3.5 rounded-xl text-base font-medium text-[#0F172A] hover:bg-[#e8f4fd] hover:text-[#1DA1F2] transition-all cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-[#475569] hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone className="w-5 h-5 text-[#1DA1F2]" aria-hidden="true" />
                  <span className="font-medium">{siteConfig.phoneDisplay}</span>
                </a>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="btn-primary w-full"
                  aria-label="Book a dental appointment"
                >
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
