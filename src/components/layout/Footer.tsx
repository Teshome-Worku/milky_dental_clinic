"use client";

import {
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  Send,
  Heart,
} from "lucide-react";
import { siteConfig } from "@/data/content";

const footerLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Services" },
  { href: "#gallery", label: "Clinic Gallery" },
  { href: "#testimonials", label: "Patient Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "General Checkup",
  "Dental Cleaning",
  "Teeth Whitening",
  "Braces & Orthodontics",
  "Clear Aligners",
  "Cosmetic Dentistry",
  "Tooth Extraction",
  "Tooth Filling",
  "Preventive Care",
  "Dental Consultation",
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0F172A] text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 flex-shrink-0 bg-[#1DA1F2]/20 rounded-xl flex items-center justify-center">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  aria-hidden="true"
                >
                  <path
                    d="M20 6C15 6 10 10 10 15C10 18 11 20.5 12.5 22.5C14 24.5 14.5 27 14.5 30C14.5 32 15.5 34 17 34C18.5 34 19 32 19.5 30C20 28 20 28 20 28C20 28 20 28 20.5 30C21 32 21.5 34 23 34C24.5 34 25.5 32 25.5 30C25.5 27 26 24.5 27.5 22.5C29 20.5 30 18 30 15C30 10 25 6 20 6Z"
                    fill="#1DA1F2"
                  />
                </svg>
              </div>
              <div>
                <span className="block font-bold text-sm text-white">
                  Dr. Milky Derara
                </span>
                <span className="block text-xs text-[#1DA1F2] font-medium">
                  Specialty Dental Clinic
                </span>
              </div>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
              Thank you for choosing Dr. Milky Derara Specialty Dental Clinic.
              We are committed to helping every patient achieve a healthier,
              brighter, and more confident smile.
            </p>
            {/* Social */}
            <div className="flex gap-3" aria-label="Social media links">
              <a
                href={siteConfig.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#1DA1F2] transition-all duration-200"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#1DA1F2] transition-all duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-all duration-200"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.socialMedia.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#0088cc] transition-all duration-200"
                aria-label="Contact us on Telegram"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-[#94a3b8] hover:text-[#1DA1F2] text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-5">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick("#services")}
                    className="text-[#94a3b8] hover:text-[#1DA1F2] text-sm transition-colors duration-200 cursor-pointer text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-5">Visit Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin
                  className="w-4 h-4 text-[#1DA1F2] flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <address className="not-italic text-[#94a3b8] text-sm leading-relaxed">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.country}
                </address>
              </li>
              <li className="flex gap-3 items-center">
                <Phone
                  className="w-4 h-4 text-[#1DA1F2] flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-[#94a3b8] hover:text-white text-sm transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock
                  className="w-4 h-4 text-[#1DA1F2] flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div className="text-[#94a3b8] text-sm">
                  <p className="font-medium text-white mb-1">
                    Mon – Sat
                  </p>
                  <p>Morning: 2:30 – 6:30</p>
                  <p>Afternoon: 7:30 – 12:30</p>
                </div>
              </li>
            </ul>

            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-6 btn-primary w-full text-sm py-3 justify-center"
              aria-label="Call to book a dental appointment"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[#64748b] text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Dr. Milky Derara Specialty Dental
              Clinic. All Rights Reserved.
            </p>
            <p className="text-[#64748b] text-xs flex items-center gap-1">
              Made with{" "}
              <Heart
                className="w-3 h-3 text-red-400 fill-red-400"
                aria-hidden="true"
              />{" "}
              for better smiles
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
