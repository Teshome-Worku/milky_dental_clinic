"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials, siteConfig } from "@/data/content";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} stars out of 5`}>
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" aria-hidden="true" />
      ))}
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold text-[#1DA1F2] uppercase tracking-wider mb-3">
            Patient Reviews
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4"
          >
            What Our Patients Say
          </h2>

          {/* Overall Rating */}
          <div className="inline-flex items-center gap-4 bg-[#F8FAFC] rounded-2xl px-6 py-4 soft-shadow mt-2">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#1DA1F2]">{siteConfig.rating}.0</p>
              <p className="text-xs text-[#94a3b8]">Overall</p>
            </div>
            <div className="w-px h-10 bg-[#E5E7EB]" aria-hidden="true" />
            <div>
              <div className="flex gap-0.5 mb-1" aria-label="5 star overall rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-[#475569]">
                <span className="font-semibold text-[#0F172A]">{siteConfig.reviewCount}+</span> Google Reviews
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.id}
              variants={cardVariants}
              className="group bg-[#F8FAFC] hover:bg-white rounded-[20px] p-6 soft-shadow card-hover transition-all duration-300 flex flex-col"
              aria-label={`Review by ${testimonial.name}`}
            >
              {/* Quote icon */}
              <Quote
                className="w-7 h-7 text-[#1DA1F2] opacity-20 mb-3 flex-shrink-0"
                aria-hidden="true"
              />

              {/* Stars */}
              <StarRating count={testimonial.rating} />

              {/* Quote text */}
              <blockquote className="mt-3 flex-1">
                <p className="text-[#475569] text-sm leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-[#E5E7EB]">
                <div className="w-9 h-9 rounded-full bg-[#1DA1F2] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold" aria-hidden="true">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#94a3b8]">Verified Patient</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[#475569] text-sm mb-4">
            Read all reviews on Google
          </p>
          <a
            href="https://www.google.com/maps/search/Dr.+Milky+Derara+Specialty+Dental+Clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
            aria-label="Read all patient reviews on Google"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            View All Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
