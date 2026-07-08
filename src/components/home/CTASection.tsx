"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/content";

export function CTASection() {
  const handleBooking = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="cta-heading"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-[#1DA1F2] to-[#0e86d0] px-8 py-16 lg:px-16 text-center"
        >
          {/* Background blobs */}
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5"
            >
              Ready to Get Started?
            </motion.span>

            <motion.h2
              id="cta-heading"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-5 leading-tight max-w-3xl mx-auto"
            >
              Ready to Transform Your Smile?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-white/80 text-lg max-w-xl mx-auto mb-10"
            >
              Whether you need a routine dental checkup or advanced treatment,
              we are here to help. Book your appointment today and experience
              professional dental care in a comfortable environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={handleBooking}
                className="inline-flex items-center gap-2 bg-white text-[#1DA1F2] font-semibold px-7 py-3.5 rounded-[14px] hover:bg-[#F8FAFC] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                aria-label="Book a dental appointment"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-7 py-3.5 rounded-[14px] transition-all duration-200"
                aria-label={`Call us at ${siteConfig.phoneDisplay}`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366]/90 hover:bg-[#25D366] text-white font-semibold px-7 py-3.5 rounded-[14px] transition-all duration-200"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                WhatsApp
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
