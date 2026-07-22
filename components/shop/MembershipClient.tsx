"use client";

import { motion } from "framer-motion";
import { Check, Crown, Sparkles, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

const tiers = [
  {
    id: "basic",
    name: "Basic",
    price: 29000,
    period: "/bulan",
    color: "from-secondary-400 to-secondary-600",
    features: [
      "Akses fitur premium dasar",
      "100 Diamond bonus bulanan",
      "Priority customer support",
      "Tanpa iklan",
    ],
    popular: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: 49000,
    period: "/bulan",
    color: "from-primary to-primary-600",
    features: [
      "Semua fitur Basic",
      "500 Diamond bonus bulanan",
      "1 Exclusive skin bulanan",
      "Akses event eksklusif",
      "Prioritas tertinggi",
    ],
    popular: true,
  },
  {
    id: "legend",
    name: "Legend",
    price: 99000,
    period: "/bulan",
    color: "from-accent-400 to-accent-600",
    features: [
      "Semua fitur Premium",
      "2000 Diamond bonus bulanan",
      "2 Exclusive skins bulanan",
      "Early access konten baru",
      "Badge Legend eksklusif",
      "VIP support 24/7",
    ],
    popular: false,
  },
];

export function MembershipClient() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl gradient-secondary p-6 text-center shadow-soft-lg md:p-10">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
        <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-white/10" />
        <div className="relative z-10">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
            <Crown className="h-7 w-7 text-white" />
          </div>
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
            Membership
          </h1>
          <p className="mt-2 text-white/80">
            Buka pengalaman penuh Tulang Rusukku dengan membership
          </p>
        </div>
      </div>

      {/* Tier cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {tiers.map((tier, idx) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={`relative flex flex-col rounded-3xl border-2 bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
              tier.popular ? "border-primary" : "border-primary-100"
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-primary px-4 py-1 text-xs font-bold text-white shadow-soft">
                  Paling Populer
                </span>
              </div>
            )}

            <div
              className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${tier.color}`}
            >
              {tier.id === "basic" && <Sparkles className="h-6 w-6 text-white" />}
              {tier.id === "premium" && <Crown className="h-6 w-6 text-white" />}
              {tier.id === "legend" && <Star className="h-6 w-6 text-white" />}
            </div>

            <h3 className="mb-1 text-xl font-bold text-foreground">{tier.name}</h3>
            <div className="mb-5 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-primary">
                {formatPrice(tier.price)}
              </span>
              <span className="text-sm text-gray-400">{tier.period}</span>
            </div>

            <ul className="mb-6 space-y-2.5">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-success/10">
                    <Check className="h-3 w-3 text-success" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <motion.div whileTap={{ scale: 0.97 }} className="mt-auto">
              <Button
                variant={tier.popular ? "primary" : "outline"}
                size="lg"
                className="w-full"
              >
                Pilih {tier.name}
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
