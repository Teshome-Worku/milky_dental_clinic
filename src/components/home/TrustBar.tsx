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
      className="bg-[#1DA1F2] py-5"
      aria-label="Trust indicators"
    >
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
