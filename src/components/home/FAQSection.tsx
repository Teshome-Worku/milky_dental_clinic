"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/data/content";

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;
  const answerId = `faq-answer-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-[#E5E7EB] rounded-2xl overflow-hidden"
    >
      <button
        id={id}
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left transition-all duration-200 ${
          open ? "bg-[#e8f4fd]" : "bg-white hover:bg-[#F8FAFC]"
        }`}
        aria-expanded={open}
        aria-controls={answerId}
      >
        <span className={`font-semibold text-base ${open ? "text-[#1DA1F2]" : "text-[#0F172A]"}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
            open ? "bg-[#1DA1F2] text-white" : "bg-[#F8FAFC] text-[#94a3b8]"
          }`}
        >
          <ChevronDown className="w-4 h-4" aria-hidden="true" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 lg:px-6 pb-5 pt-1 bg-white border-t border-[#E5E7EB]">
              <p className="text-[#475569] text-sm leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const handleBooking = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="section-padding bg-[#F8FAFC]"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <span className="inline-block text-sm font-semibold text-[#1DA1F2] uppercase tracking-wider mb-3">
              FAQ
            </span>
            <h2
              id="faq-heading"
              className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-5 leading-tight"
            >
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-[#475569] leading-relaxed mb-8">
              Have questions about our services or how to book an appointment?
              We&apos;ve answered the most common questions below.
            </p>
            <div className="bg-white rounded-2xl p-5 soft-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#e8f4fd] rounded-xl flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-5 h-5 text-[#1DA1F2]" aria-hidden="true" />
                </div>
                <p className="font-semibold text-[#0F172A] text-sm">
                  Still have questions?
                </p>
              </div>
              <p className="text-[#475569] text-sm mb-4">
                We&apos;re here to help. Call us or book a consultation.
              </p>
              <button
                onClick={handleBooking}
                className="btn-primary text-sm py-2.5 w-full"
                aria-label="Contact us for more information"
              >
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Right FAQ list */}
          <div className="lg:col-span-2 space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
