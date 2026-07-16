"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";
import { faqs } from "@/data/content";
import { siteConfig } from "@/data/content";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const id = `faq-q-${index}`;
  const answerId = `faq-a-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-[#E2E8F0] rounded-2xl overflow-hidden bg-white"
    >
      <button
        id={id}
        onClick={onToggle}
        className={`w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 ${
          isOpen ? "bg-[#EFF8FF]" : "hover:bg-[#F8FAFC]"
        }`}
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span className={`font-semibold text-sm md:text-base ${isOpen ? "text-[#1DA1F2]" : "text-[#0F172A]"}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? "bg-[#1DA1F2] text-white" : "bg-[#F1F5F9] text-[#94a3b8]"
          }`}
        >
          <ChevronDown className="w-4 h-4" aria-hidden="true" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-2 border-t border-[#E2E8F0] bg-white">
              <p className="text-[#475569] text-sm leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section id="faq" className="section-padding bg-[#F8FAFC]" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-semibold text-[#1DA1F2] uppercase tracking-wider mb-3">FAQ</span>
            <h2 id="faq-heading" className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4 leading-tight">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-[#475569] leading-relaxed mb-8 text-sm">
              Have questions about our services or booking an appointment? We&apos;ve answered the most common ones below.
            </p>
            {/* Help card */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#E2E8F0]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#EFF8FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-5 h-5 text-[#1DA1F2]" aria-hidden="true" />
                </div>
                <p className="font-semibold text-[#0F172A] text-sm">Still have questions?</p>
              </div>
              <p className="text-[#475569] text-sm mb-4">We&apos;re here to help. Call us or book a consultation and we&apos;ll be happy to assist.</p>
              <div className="flex flex-col gap-2">
                <button onClick={scrollToContact} className="btn-primary text-sm py-2.5 w-full justify-center">
                  Book a Consultation
                </button>
                <a href={`tel:${siteConfig.phone}`} className="btn-secondary text-sm py-2.5 w-full justify-center">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>

          {/* FAQ List — single open */}
          <div className="lg:col-span-2 space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
