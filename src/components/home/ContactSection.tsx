"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, MessageCircle, Navigation, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/content";
import { OpeningHours } from "@/components/shared/OpeningHours";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white" aria-labelledby="contact-heading">
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
            Find Us
          </span>
          <h2 id="contact-heading" className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4">
            Visit Our Clinic
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            Conveniently located in the heart of Addis Ababa. We welcome walk-ins and appointments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Exterior image */}
            <div className="relative rounded-[20px] overflow-hidden aspect-[16/9] shadow-sm">
              <Image
                src="/images/clinic/building-exterior.jpg"
                alt="Dr. Milky Derara Specialty Dental Clinic at Medco Building, Wolo Sefer, Addis Ababa"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Address overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
                <p className="text-white font-bold text-sm">Wolo Sefer, Medco Building</p>
                <p className="text-white/75 text-xs">1st Floor, Addis Ababa, Ethiopia</p>
              </div>
            </div>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-[#F8FAFC] rounded-2xl p-4 flex gap-3 items-start border border-[#E2E8F0]">
                <div className="w-9 h-9 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#1DA1F2]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] text-xs mb-0.5">Address</p>
                  <address className="not-italic text-[#475569] text-xs leading-relaxed">
                    Wolo Sefer, Medco Building<br />1st Floor, Addis Ababa
                  </address>
                </div>
              </div>
              <div className="bg-[#F8FAFC] rounded-2xl p-4 flex gap-3 items-center border border-[#E2E8F0]">
                <div className="w-9 h-9 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#1DA1F2]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] text-xs mb-0.5">Phone</p>
                  <a href={`tel:${siteConfig.phone}`} className="text-[#475569] text-xs hover:text-[#1DA1F2] transition-colors">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours card */}
            <OpeningHours />

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-primary justify-center text-sm py-3"
                aria-label="Call the clinic"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm py-3 rounded-[14px] hover:bg-[#1ebd5b] transition-all"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={siteConfig.googleDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary justify-center text-sm py-3 col-span-2"
                aria-label="Get directions"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                Get Directions
                <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Right: Map + interior */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5"
          >
            {/* Map */}
            <div className="rounded-[20px] overflow-hidden shadow-sm aspect-[4/3] border border-[#E2E8F0]">
              <iframe
                title="Dr. Milky Derara Specialty Dental Clinic location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4786474697966!2d38.76440287476853!3d9.021456091039937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85c1a4c2b4b7%3A0x0!2zOcKwMDEnMTcuMiJOIDM4wrA0NSc0OS4yIkU!5e0!3m2!1sen!2set!4v1720421200000!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Reception interior */}
            <div className="relative rounded-[20px] overflow-hidden aspect-[16/9] shadow-sm">
              <Image
                src="/images/clinic/reception-logo.jpg"
                alt="Dr. Milky Dental Clinic welcoming reception with gold signage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-sm">Dr. Milky Dental Clinic</p>
                <p className="text-white/70 text-xs">Wolo Sefer · Addis Ababa</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
