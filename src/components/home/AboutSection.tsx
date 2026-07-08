"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

const clinicHighlights = [
  "Compassionate, patient-focused dental care",
  "Modern dental technology and equipment",
  "Clean, welcoming clinic environment",
  "Personalized treatment for every patient",
  "Trusted by families across Addis Ababa",
];

export function AboutSection() {
  const handleBooking = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="section-padding bg-white"
      aria-labelledby="about-heading"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] soft-shadow-lg">
              <Image
                src="/images/clinic/reception-flowers.jpg"
                alt="Dr. Milky Dental Clinic reception desk with elegant decor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Inset image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 w-[48%] aspect-square rounded-[20px] overflow-hidden soft-shadow-lg border-4 border-white"
            >
              <Image
                src="/images/clinic/reception-waiting.jpg"
                alt="Comfortable waiting area at the clinic"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </motion.div>

            {/* Gold accent line */}
            <div
              className="absolute top-6 -left-4 w-2 h-24 bg-[#D4AF37] rounded-full"
              aria-hidden="true"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="inline-block text-sm font-semibold text-[#1DA1F2] uppercase tracking-wider mb-3">
              About Our Clinic
            </span>
            <h2
              id="about-heading"
              className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-5 leading-tight"
            >
              Your Smile Is{" "}
              <span className="text-gradient">Our Priority</span>
            </h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              At Dr. Milky Derara Specialty Dental Clinic, we believe every
              smile deserves exceptional care. Our clinic combines professional
              expertise, modern dental technology, and compassionate treatment to
              create a comfortable experience for every patient.
            </p>
            <p className="text-[#475569] leading-relaxed mb-8">
              Whether you are visiting for a routine checkup or advanced dental
              treatment, we are committed to providing personalized care that
              prioritizes your comfort, oral health, and long-term confidence.
              Our mission is simple: deliver high-quality dental care while
              treating every patient with honesty, respect, and professionalism.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8" aria-label="Clinic highlights">
              {clinicHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-[#1DA1F2] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-[#475569] text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={handleBooking}
              className="btn-primary"
              aria-label="Book an appointment at Dr. Milky Dental Clinic"
            >
              Book Your Appointment
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
