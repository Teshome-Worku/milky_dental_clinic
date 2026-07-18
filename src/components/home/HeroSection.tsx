"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import { siteConfig } from "@/data/content";

const slides = [
  {
    src: "/images/clinic/reception-flowers.jpg",
    alt: "Elegant reception area at Dr. Milky Dental Clinic with fresh flowers",
    position: "center 40%",
  },
  {
    src: "/images/clinic/treatment-room-equipment.jpg",
    alt: "Modern dental treatment room with state-of-the-art equipment",
    position: "center 45%",
  },
  {
    src: "/images/doctor/dr-milky-treating.jpg",
    alt: "Dr. Milky Derara providing professional dental care to a patient",
    position: "center 30%",
  },
  {
    src: "/images/clinic/reception-waiting.jpg",
    alt: "Comfortable and clean waiting area at the clinic",
    position: "center 50%",
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

        {/* ── LIGHT overlay — just enough to soften, not wash out ── */}
        <div className="absolute inset-0 bg-white/[0.18]" />
        {/* Subtle cool tint for clinical feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f7ff]/30 via-transparent to-white/20" />
      </div>

      {/* ── Centered Content with localized text backdrop ── */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
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

          {/* ── Text backdrop panel — frosted glass only behind text ── */}
          <div className="bg-white/[0.55] backdrop-blur-sm rounded-3xl px-8 py-10 sm:px-12 sm:py-12 shadow-sm">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-[#0F172A] leading-[1.08] tracking-tight mb-5"
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
              className="text-[#334155] text-base sm:text-lg lg:text-xl max-w-lg mx-auto mb-10 leading-relaxed"
            >
              Modern, compassionate dental care for every member of your family.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
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
          </div>
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
            className={`rounded-full transition-all duration-500 ${
              current === i
                ? "w-8 h-2 bg-[#1DA1F2] shadow-sm"
                : "w-2 h-2 bg-[#0F172A]/25 hover:bg-[#1DA1F2]/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
