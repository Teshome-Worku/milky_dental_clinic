"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/content";

const slides = [
  {
    src: "/images/clinic/reception-flowers.jpg",
    alt: "Elegant reception area at Dr. Milky Dental Clinic",
  },
  {
    src: "/images/clinic/treatment-room-equipment.jpg",
    alt: "Modern treatment room with advanced dental equipment",
  },
  {
    src: "/images/doctor/dr-milky-with-patient.jpg",
    alt: "Dr. Milky Derara providing professional dental care",
  },
  {
    src: "/images/clinic/reception-desk.jpg",
    alt: "Dr. Milky Dental Clinic reception with illuminated signage",
  },
  {
    src: "/images/clinic/treatment-room-blue.jpg",
    alt: "State-of-the-art dental treatment room",
  },
];

const SLIDE_INTERVAL = 6000;

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [next, paused]);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden"
      aria-label="Hero section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0" aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              priority={current === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Layered overlay: dark gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/70" />
        {/* Subtle blue tint at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a2540]/60 to-transparent" />
      </div>

      {/* Hero Content — centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse inline-block" aria-hidden="true" />
            Specialty Dental Clinic · Addis Ababa
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-5"
          >
            Healthy Smiles
            <br />
            <span className="text-[#D4AF37]">Start Here.</span>
          </motion.h1>

          {/* Supporting line */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-white/75 text-base sm:text-lg lg:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Professional, modern and compassionate dental care
            for the whole family.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2.5 bg-[#1DA1F2] hover:bg-[#0e86d0] text-white font-bold px-8 py-4 rounded-2xl text-base transition-all duration-200 hover:shadow-2xl hover:shadow-[#1DA1F2]/30 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              aria-label="Book a dental appointment"
            >
              <Calendar className="w-5 h-5" aria-hidden="true" />
              Book Appointment
            </button>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-2xl text-base transition-all duration-200 w-full sm:w-auto justify-center"
              aria-label={`Call us at ${siteConfig.phoneDisplay}`}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {siteConfig.phoneDisplay}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" aria-hidden="true" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" aria-hidden="true" />
      </button>

      {/* Pagination Dots */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            role="tab"
            aria-selected={current === i}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-400 ${
              current === i ? "w-7 bg-[#D4AF37]" : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-6 z-20 hidden lg:flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <span className="text-white/40 text-[10px] tracking-widest uppercase rotate-90 origin-center mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
