"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials, siteConfig } from "@/data/content";

const AUTOPLAY_MS = 4500;

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" aria-hidden="true" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<number | null>(null);

  // Determine how many cards are visible based on viewport
  const getVisible = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const [visible, setVisible] = useState(1);
  useEffect(() => {
    const update = () => setVisible(getVisible());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const max = testimonials.length - visible;
  const clampedIndex = Math.min(index, max);

  const next = useCallback(() => setIndex((i) => (i >= max ? 0 : i + 1)), [max]);
  const prev = useCallback(() => setIndex((i) => (i <= 0 ? max : i - 1)), [max]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [next, paused]);

  // Touch/drag
  const handlePointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX;
    setPaused(true);
  };
  const handlePointerUp = (e: React.PointerEvent) => {
    if (dragStart.current === null) return;
    const delta = e.clientX - dragStart.current;
    if (delta < -40) next();
    else if (delta > 40) prev();
    dragStart.current = null;
    setTimeout(() => setPaused(false), 1000);
  };

  const cardWidth = `calc(${100 / visible}% - ${(visible - 1) * 20 / visible}px)`;
  const translateX = `calc(-${clampedIndex * (100 / visible)}% - ${clampedIndex * 20 / visible}px)`;

  return (
    <section
      id="testimonials"
      className="section-padding bg-[#F8FAFC]"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-[#1DA1F2] uppercase tracking-wider mb-3">
            Patient Stories
          </span>
          <h2 id="testimonials-heading" className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3">
            What Our Patients Say
          </h2>
          {/* Rating summary */}
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-sm mt-2">
            <p className="text-2xl font-extrabold text-[#1DA1F2]">{siteConfig.rating}.0</p>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" aria-hidden="true" />
                ))}
              </div>
              <p className="text-xs text-[#94a3b8] mt-0.5">{siteConfig.reviewCount}+ Google Reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Carousel track */}
        <div
          className="relative px-[56px] sm:px-[72px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          aria-roledescription="carousel"
          aria-label="Patient testimonials"
        >
          <div className="overflow-hidden py-4 -my-4">
            <div
              ref={trackRef}
              className="flex gap-5 transition-transform duration-500 ease-in-out select-none"
              style={{ transform: `translateX(${translateX})` }}
            >
              {testimonials.map((t) => (
                <article
                  key={t.id}
                  className="bg-white rounded-[20px] p-6 shadow-sm flex-shrink-0 flex flex-col"
                  style={{ width: cardWidth }}
                  aria-label={`Review by ${t.name}`}
                >
                  <Quote className="w-7 h-7 text-[#1DA1F2] opacity-20 mb-3" aria-hidden="true" />
                  <StarRow count={t.rating} />
                  <blockquote className="mt-3 flex-1">
                    <p className="text-[#475569] text-sm leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3 pt-4 border-t border-[#F1F5F9]">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1DA1F2] to-[#0e86d0] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0F172A]">{t.name}</p>
                      <p className="text-xs text-[#94a3b8]">Verified Patient</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={prev}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-colors duration-300 z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-colors duration-300 z-10"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Dot pagination */}
        <div className="flex justify-center items-center gap-2 mt-8" role="tablist" aria-label="Review navigation">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              role="tab"
              aria-selected={clampedIndex === i}
              aria-label={`Go to review group ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                clampedIndex === i ? "w-6 h-2 bg-[#1DA1F2]" : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/search/Dr.+Milky+Derara+Specialty+Dental+Clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex text-sm"
            aria-label="Read all reviews on Google"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
