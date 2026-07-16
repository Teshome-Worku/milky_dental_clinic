"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Stethoscope, Sparkles, Shield, Zap, Sun, Eye, Star, Heart, MessageCircle, ArrowRight,
} from "lucide-react";
import { services } from "@/data/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope, Sparkles, Shield, Zap, Sun, Brackets: Shield, Eye, Star, Heart, MessageCircle,
};

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const card = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

export function ServicesSection() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding bg-[#F8FAFC]" aria-labelledby="services-heading">
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
          <h2 id="services-heading" className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4">
            Our Dental Services
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            Comprehensive dental care tailored to your needs — from routine checkups to advanced cosmetic treatments.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {services.slice(0, 10).map((service) => {
            const Icon = iconMap[service.icon] || Stethoscope;
            return (
              <motion.article
                key={service.id}
                variants={card}
                className="group bg-white rounded-[18px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                aria-label={service.title}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} at Dr. Milky Dental Clinic`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" aria-hidden="true" />
                  <div className="absolute top-2.5 left-2.5 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-sm">
                    <Icon className="w-4 h-4 text-[#1DA1F2]" aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-[#0F172A] text-sm mb-1.5 leading-tight">{service.title}</h3>
                  <p className="text-[#475569] text-xs leading-relaxed flex-1 mb-3">{service.description}</p>
                  <button
                    onClick={scrollToContact}
                    className="flex items-center gap-1 text-[#1DA1F2] text-xs font-semibold hover:gap-2 transition-all duration-200 mt-auto"
                    aria-label={`Book ${service.title}`}
                  >
                    Book Now <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button onClick={scrollToContact} className="btn-primary" aria-label="Book your appointment">
            Book Your Appointment
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
