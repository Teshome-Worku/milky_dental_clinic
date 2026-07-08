"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Star, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/content";

const trustBadges = [
  "Professional Dental Care",
  "Modern Equipment",
  "Clean & Comfortable Clinic",
  "Patient-Centered Treatment",
];

export function HeroSection() {
  const handleBooking = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleServices = () => {
    const el = document.querySelector("#services");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20"
      aria-label="Hero section"
    >
      {/* Background decorations */}
      <div
        className="hero-blob w-[500px] h-[500px] bg-[#1DA1F2] top-[-100px] right-[-100px]"
        aria-hidden="true"
      />
      <div
        className="hero-blob w-[300px] h-[300px] bg-[#D4AF37] bottom-[10%] left-[-50px]"
        style={{ opacity: 0.07 }}
        aria-hidden="true"
      />
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #1DA1F2 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="container-custom w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#e8f4fd] text-[#1DA1F2] px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" aria-hidden="true" />
              Trusted Dental Clinic in Addis Ababa
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-[#0F172A] leading-[1.1] mb-6"
            >
              Modern Dentistry.{" "}
              <span className="text-gradient">Gentle Care.</span>{" "}
              Confident Smiles.
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#475569] text-lg leading-relaxed mb-8 max-w-xl"
            >
              Welcome to Dr. Milky Derara Specialty Dental Clinic. We provide
              comprehensive dental care using modern techniques and compassionate
              treatment in a clean, comfortable, patient-focused environment.
            </motion.p>

            {/* Trust Badges */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-9"
              aria-label="Key features"
            >
              {trustBadges.map((badge) => (
                <li key={badge} className="flex items-center gap-2">
                  <CheckCircle2
                    className="w-4 h-4 text-[#1DA1F2] flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[#475569] font-medium">
                    {badge}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button
                onClick={handleBooking}
                className="btn-primary"
                aria-label="Book a dental appointment"
              >
                Book an Appointment
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                onClick={handleServices}
                className="btn-secondary"
                aria-label="Explore our dental services"
              >
                Explore Our Services
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </motion.div>

            {/* Rating bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <div
                className="flex items-center gap-1"
                aria-label={`${siteConfig.rating} star rating`}
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="text-sm text-[#475569]">
                <span className="font-bold text-[#0F172A]">{siteConfig.rating}.0</span>{" "}
                rating ·{" "}
                <span className="font-bold text-[#0F172A]">
                  {siteConfig.reviewCount}+
                </span>{" "}
                Google Reviews
              </div>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-1.5 text-sm text-[#475569] hover:text-[#1DA1F2] transition-colors font-medium"
                aria-label={`Call us at ${siteConfig.phoneDisplay}`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {siteConfig.phoneDisplay}
              </a>
            </motion.div>
          </div>

          {/* Right: Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
            aria-label="Clinic images"
          >
            {/* Main doctor image */}
            <div className="relative rounded-[28px] overflow-hidden soft-shadow-lg aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <Image
                src="/images/doctor/dr-milky-professional.jpg"
                alt="Dr. Milky Derara, specialist dentist, standing at the clinic reception"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Soft overlay for readability at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true" />
            </div>

            {/* Floating card: Rating */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 lg:-left-10 top-10 bg-white rounded-2xl p-4 soft-shadow-lg"
              aria-label="5-star rating badge"
            >
              <div className="flex items-center gap-2 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-xs font-bold text-[#0F172A]">5.0 Rating</p>
              <p className="text-[10px] text-[#94a3b8]">74+ Reviews</p>
            </motion.div>

            {/* Floating card: Appointment */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-4 lg:-right-8 bottom-16 bg-white rounded-2xl p-4 soft-shadow-lg max-w-[180px]"
              aria-label="Appointment booking prompt"
            >
              <div className="w-8 h-8 bg-[#e8f4fd] rounded-xl flex items-center justify-center mb-2">
                <Phone className="w-4 h-4 text-[#1DA1F2]" aria-hidden="true" />
              </div>
              <p className="text-xs font-bold text-[#0F172A] mb-0.5">
                Book Today
              </p>
              <p className="text-[10px] text-[#94a3b8]">Easy appointment</p>
            </motion.div>

            {/* Clinic name badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2.5 soft-shadow text-center"
            >
              <p className="text-[11px] font-bold text-[#0F172A] whitespace-nowrap">
                Dr. Milky Derara Kefeni
              </p>
              <p className="text-[10px] text-[#1DA1F2] font-medium">
                Specialty Dentist
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <span className="text-xs text-[#94a3b8]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-6 bg-gradient-to-b from-[#1DA1F2] to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
