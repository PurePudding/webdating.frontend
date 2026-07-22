"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  ShieldCheck,
  Zap,
  Star,
  type LucideIcon,
} from "lucide-react";
import { BENEFITS } from "@/constants";

const iconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  ShieldCheck,
  Zap,
  Star,
};

export function Benefits() {
  return (
    <section className="px-4 py-10 md:px-6 md:py-14">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center font-display text-2xl font-bold text-foreground md:text-3xl"
        >
          Kenapa Belanja di Sini?
        </motion.h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {BENEFITS.map((benefit, idx) => {
            const Icon = iconMap[benefit.icon] ?? BadgeCheck;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group rounded-3xl border border-primary-100 bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-6"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 transition-colors group-hover:bg-primary-100">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-1 text-base font-bold text-foreground md:text-lg">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-500">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
