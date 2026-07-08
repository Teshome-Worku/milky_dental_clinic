"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/data/content";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding bg-[#F8FAFC]"
      aria-labelledby="contact-heading"
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
            Find Us
          </span>
          <h2
            id="contact-heading"
            className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4"
          >
            Visit Our Clinic
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            We are conveniently located in the heart of Addis Ababa. Visit us
            for exceptional dental care in a welcoming environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Clinic Exterior Image */}
            <div className="relative rounded-[20px] overflow-hidden aspect-[16/9] mb-8 soft-shadow">
              <Image
                src="/images/clinic/building-exterior.jpg"
                alt="Dr. Milky Derara Specialty Dental Clinic exterior at Medco Building, Wolo Sefer, Addis Ababa"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5 soft-shadow flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#e8f4fd] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#1DA1F2]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] mb-1">Address</p>
                  <address className="not-italic text-[#475569] text-sm leading-relaxed">
                    {siteConfig.address.line1}<br />
                    {siteConfig.address.line2}<br />
                    {siteConfig.address.city}, {siteConfig.address.country}
                  </address>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 soft-shadow flex gap-4 items-center">
                <div className="w-10 h-10 bg-[#e8f4fd] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#1DA1F2]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] mb-0.5">Phone</p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-[#475569] text-sm hover:text-[#1DA1F2] transition-colors"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 soft-shadow flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#e8f4fd] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#1DA1F2]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] mb-1">Working Hours</p>
                  <p className="text-sm text-[#475569]">
                    <span className="font-medium text-[#0F172A]">Monday – Saturday</span>
                  </p>
                  <p className="text-sm text-[#475569]">Morning: 2:30 – 6:30</p>
                  <p className="text-sm text-[#475569]">Afternoon: 7:30 – 12:30</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-primary justify-center text-sm py-3"
                aria-label="Call the clinic now"
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
                aria-label="Get directions to the clinic"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                Get Directions
                <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Right: Map + additional image */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Google Maps Embed */}
            <div className="rounded-[20px] overflow-hidden soft-shadow aspect-[4/3]">
              <iframe
                title="Dr. Milky Derara Specialty Dental Clinic location on Google Maps"
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

            {/* Reception image */}
            <div className="relative rounded-[20px] overflow-hidden aspect-[16/9] soft-shadow">
              <Image
                src="/images/clinic/reception-desk.jpg"
                alt="Dr. Milky Dental Clinic modern reception with illuminated logo signage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-bold text-sm">Dr. Milky Dental Clinic</p>
                <p className="text-xs opacity-80">Wolo Sefer, Addis Ababa</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
