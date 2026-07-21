"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import { siteConfig } from "@/data/content";

const slides = [
  {
    src: "/images/doctor/milky_celebrity.jpg",
    alt: "Dr. Milky Derara — specialty dentist in Addis Ababa",
    position: "72% center",
    contentAlign: "left" as const,
  },
  {
    src: "/images/clinic/reception-waiting.jpg",
    alt: "Modern waiting lounge at Dr. Milky Dental Clinic",
    position: "center center",
    contentAlign: "center" as const,
  },
  {
    src: "/images/doctor/dr-milky-treating.jpg",
    alt: "Dr. Milky Derara providing professional dental care",
    position: "center 30%",
    contentAlign: "center" as const,
  },
  {
    src: "/images/doctor/milky_with_gown.jpg",
    alt: "Dr. Milky Derara in professional clinical attire",
    position: "center 12%",
    contentAlign: "left" as const,
  },
];

const INTERVAL = 5500;

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next, paused]);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth",
      });
    }
  };

  const isLeftAligned = slides[current].contentAlign === "left";

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] max-h-[920px] overflow-hidden"
      aria-label="Welcome to Dr. Milky Derara Specialty Dental Clinic"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background Slideshow ── */}
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute -top-24 -left-20 hidden h-72 w-72 rounded-full bg-[#1DA1F2]/12 blur-3xl lg:block"
          animate={{ y: [0, 16, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-16 right-0 hidden h-56 w-56 rounded-full bg-[#D4AF37]/12 blur-3xl lg:block"
          animate={{ y: [0, -18, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-8 left-6 hidden rounded-full border border-white/40 bg-white/55 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1DA1F2] shadow-sm backdrop-blur-md sm:block"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Gentle care, modern smiles
        </motion.div>

        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              priority={current === 0}
              className="object-cover"
              style={{ objectPosition: slides[current].position }}
              sizes="100vw"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>

        {/* ── Overlay for text readability ── */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/25 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/6 via-transparent to-white/8" />
      </div>

      {/* ── Hero Content ── */}
      <div
        className={`relative z-10 flex flex-col justify-center h-full px-5 sm:px-8 lg:px-12 xl:px-16 ${
          isLeftAligned
            ? "items-center text-center lg:items-start lg:text-left"
            : "items-center text-center"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className={`max-w-2xl ${isLeftAligned ? "lg:max-w-xl xl:max-w-2xl lg:mr-auto" : "mx-auto"}`}
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/75 backdrop-blur-md border border-[#1DA1F2]/15 text-[#1DA1F2] text-[11px] font-bold tracking-[0.15em] uppercase px-5 py-2 rounded-full mb-8 shadow-sm"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#1DA1F2] animate-pulse"
              aria-hidden="true"
            />
            Specialty Dental Clinic · Addis Ababa
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-[#0F172A] leading-[1.08] tracking-tight mb-5 drop-shadow-sm"
          >
            Your Smile.
            <br />
            <span className="text-[#1DA1F2]">Our Priority.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className={`text-[#1E293B] font-medium text-base sm:text-lg lg:text-xl max-w-lg mb-10 leading-relaxed drop-shadow-sm ${
              isLeftAligned ? "mx-auto lg:mx-0" : "mx-auto"
            }`}
          >
            Modern, compassionate dental care for every member of your family.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className={`flex flex-col sm:flex-row gap-5 ${
              isLeftAligned
                ? "items-center justify-center lg:items-start lg:justify-start"
                : "items-center justify-center"
            }`}
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2.5 bg-[#1DA1F2] hover:bg-[#0e86d0] text-white font-bold px-9 py-4 rounded-2xl text-base transition-all duration-250 hover:shadow-xl hover:shadow-[#1DA1F2]/25 hover:-translate-y-0.5 w-full sm:w-auto justify-center cursor-pointer"
              aria-label="Book a dental appointment"
            >
              <Calendar className="w-5 h-5" aria-hidden="true" />
              Book Appointment
            </button>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2.5 bg-white/90 hover:bg-white border-2 border-[#1DA1F2]/20 hover:border-[#1DA1F2]/40 text-[#0F172A] font-bold px-9 py-4 rounded-2xl text-base transition-all duration-250 hover:shadow-lg w-full sm:w-auto justify-center"
              aria-label={`Call us at ${siteConfig.phoneDisplay}`}
            >
              <Phone className="w-5 h-5 text-[#1DA1F2]" aria-hidden="true" />
              Call Now
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Slide Dots ── */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5"
        role="tablist"
        aria-label="Hero slideshow navigation"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            role="tab"
            aria-selected={current === i}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 ${current === i
              ? "w-8 h-2 bg-[#1DA1F2] shadow-sm"
              : "w-2 h-2 bg-[#0F172A]/25 hover:bg-[#1DA1F2]/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
