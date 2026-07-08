"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Stethoscope,
  Sparkles,
  Shield,
  Zap,
  Sun,
  Eye,
  Star,
  Heart,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope,
  Sparkles,
  Shield,
  Zap,
  Sun,
  Brackets: Shield,
  Eye,
  Star,
  Heart,
  MessageCircle,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesSection() {
  const handleBooking = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="section-padding bg-[#F8FAFC]"
      aria-labelledby="services-heading"
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
            What We Offer
          </span>
          <h2
            id="services-heading"
            className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4"
          >
            Our Dental Services
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            Comprehensive dental care tailored to your needs. From routine
            checkups to advanced cosmetic treatments — all in one comfortable
            clinic.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6"
        >
          {services.slice(0, 8).map((service) => {
            const Icon = iconMap[service.icon] || Stethoscope;
            return (
              <motion.article
                key={service.id}
                variants={cardVariants}
                className="group bg-white rounded-[20px] overflow-hidden soft-shadow card-hover flex flex-col"
                aria-label={service.title}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} - dental service at Dr. Milky Dental Clinic`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true" />
                  {/* Icon badge */}
                  <div className="absolute top-3 left-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#1DA1F2]" aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-[#0F172A] text-base mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[#475569] text-sm leading-relaxed flex-1 mb-4">
                    {service.description}
                  </p>
                  <button
                    onClick={handleBooking}
                    className="group/btn flex items-center gap-1.5 text-[#1DA1F2] text-sm font-semibold hover:gap-2.5 transition-all duration-200"
                    aria-label={`Book ${service.title} appointment`}
                  >
                    Book Now
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={handleBooking}
            className="btn-primary"
            aria-label="Book your dental appointment"
          >
            Book Your Appointment
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
