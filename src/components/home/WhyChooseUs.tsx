"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Cpu,
  Sparkles,
  Heart,
  Smile,
  Star,
} from "lucide-react";
import { whyChooseUs } from "@/data/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BadgeCheck,
  Cpu,
  Sparkles,
  Heart,
  Smile,
  Star,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="section-padding bg-white"
      aria-labelledby="why-heading"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold text-[#1DA1F2] uppercase tracking-wider mb-3">
            Why Us
          </span>
          <h2
            id="why-heading"
            className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4"
          >
            Why Patients Choose{" "}
            <span className="text-gradient">Dr. Milky</span>
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            We combine professional expertise with genuine compassion to deliver
            an exceptional dental experience that patients trust and recommend.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] || BadgeCheck;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group bg-[#F8FAFC] hover:bg-white rounded-[20px] p-7 soft-shadow card-hover transition-all duration-300"
                role="article"
              >
                <div className="w-12 h-12 bg-[#e8f4fd] rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#1DA1F2] transition-colors duration-300">
                  <Icon
                    className="w-6 h-6 text-[#1DA1F2] group-hover:text-white transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-bold text-[#0F172A] text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
