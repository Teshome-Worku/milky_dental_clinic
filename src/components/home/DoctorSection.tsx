"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote, ArrowRight } from "lucide-react";

export function DoctorSection() {
  const handleBooking = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="doctor"
      className="section-padding bg-[#F8FAFC]"
      aria-labelledby="doctor-heading"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block text-sm font-semibold text-[#1DA1F2] uppercase tracking-wider mb-3">
              Meet the Doctor
            </span>
            <h2
              id="doctor-heading"
              className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-5 leading-tight"
            >
              Dr. Milky{" "}
              <span className="text-gradient">Derara Kefeni</span>
            </h2>

            {/* Quote */}
            <div className="relative bg-white rounded-2xl p-6 soft-shadow mb-6">
              <Quote
                className="w-8 h-8 text-[#1DA1F2] opacity-30 absolute top-4 left-4"
                aria-hidden="true"
              />
              <p className="text-[#475569] leading-relaxed pl-4 italic">
                &ldquo;Dr. Milky Derara is committed to helping patients achieve
                healthier and more confident smiles through professional dental
                care. Known for providing careful treatment, maintaining a clean
                clinical environment, and delivering compassionate patient
                care.&rdquo;
              </p>
            </div>

            <p className="text-[#475569] leading-relaxed mb-4">
              Dr. Milky focuses on creating a comfortable experience for every
              visitor. Every treatment begins with listening carefully to the
              patient&apos;s concerns before recommending the most appropriate
              solution.
            </p>

            <p className="text-[#475569] leading-relaxed mb-8">
              Professionalism, quality, and patient satisfaction remain at the
              center of every visit. Whether it&apos;s your first appointment or
              an ongoing treatment, you can expect the same level of care and
              dedication every time.
            </p>

            {/* Rating badge */}
            <div className="flex items-center gap-4 mb-8 flex-wrap">
              <div className="bg-white rounded-2xl px-5 py-3.5 soft-shadow text-center">
                <div
                  className="flex justify-center gap-0.5 mb-1"
                  aria-label="5 star rating"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-xs font-bold text-[#0F172A]">5.0 / 5.0</p>
                <p className="text-[10px] text-[#94a3b8]">Patient Rating</p>
              </div>
              <div className="bg-white rounded-2xl px-5 py-3.5 soft-shadow text-center">
                <p className="text-2xl font-bold text-[#1DA1F2]">74+</p>
                <p className="text-[10px] text-[#94a3b8]">Google Reviews</p>
              </div>
              <div className="bg-white rounded-2xl px-5 py-3.5 soft-shadow text-center">
                <p className="text-2xl font-bold text-[#1DA1F2]">10+</p>
                <p className="text-[10px] text-[#94a3b8]">Services Offered</p>
              </div>
            </div>

            <button
              onClick={handleBooking}
              className="btn-primary"
              aria-label="Book a consultation with Dr. Milky Derara"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </motion.div>

          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-[28px] overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:max-w-none soft-shadow-lg">
              <Image
                src="/images/doctor/dr-milky-portrait.jpg"
                alt="Dr. Milky Derara Kefeni, specialist dentist, in professional attire"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            {/* Name plate floating card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-5 py-3 soft-shadow-lg text-center min-w-[220px]"
              aria-label="Doctor name and title"
            >
              <p className="text-sm font-bold text-[#0F172A]">
                Dr. Milky Derara Kefeni
              </p>
              <p className="text-xs text-[#1DA1F2] font-medium">
                Specialty Dentist
              </p>
              <div
                className="flex justify-center gap-0.5 mt-1"
                aria-hidden="true"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </motion.div>

            {/* Decorative accent */}
            <div
              className="absolute top-8 -right-4 w-2 h-20 bg-[#1DA1F2] rounded-full"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-20 -left-4 w-2 h-12 bg-[#D4AF37] rounded-full"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
