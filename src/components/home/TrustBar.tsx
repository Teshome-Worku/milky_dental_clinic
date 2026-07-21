"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Cpu, Sparkles, Users, ThumbsUp } from "lucide-react";

const trustItems = [
  { icon: BadgeCheck, label: "Professional Care" },
  { icon: Cpu, label: "Modern Equipment" },
  { icon: Sparkles, label: "Comfortable Environment" },
  { icon: Users, label: "Friendly Team" },
  { icon: ThumbsUp, label: "High Patient Satisfaction" },
];

export function TrustBar() {
  return (
    <section
      className="relative overflow-hidden bg-[#1DA1F2] py-5"
      aria-label="Trust indicators"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden="true"
      >
        <motion.div
          className="absolute -left-24 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-white/30 blur-3xl"
          animate={{ x: [0, 140, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-[#D4AF37]/35 blur-2xl"
          animate={{ x: [0, -120, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 lg:gap-10"
        >
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-2.5 text-white"
              >
                <Icon className="w-5 h-5 flex-shrink-0 opacity-90" aria-hidden="true" />
                <span className="text-sm font-semibold whitespace-nowrap">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
