"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Tag, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-6 md:px-6 md:pt-10">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-primary-200 opacity-40 blur-3xl" />
        <div className="absolute -right-20 top-40 h-72 w-72 rounded-full bg-secondary-200 opacity-30 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-48 w-48 rounded-full bg-accent-200 opacity-30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl gradient-primary p-6 shadow-soft-lg md:rounded-[28px] md:p-12"
        >
          {/* Decorative circles */}
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
          <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-white/10" />

          <div className="relative z-10 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Official Digital Store
            </div>

            <h1 className="font-display text-4xl font-bold leading-tight text-white drop-shadow-sm md:text-6xl md:leading-tight">
              Tulang Rusukku Store
            </h1>

            <p className="mt-3 max-w-md text-lg text-white/90 md:text-xl">
              Toko resmi untuk semua produk digital favoritmu. Membership, diamond, bundle, dan lebih banyak lagi.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/shop">
                <Button
                  variant="white"
                  size="lg"
                  className="w-full gap-2 sm:w-auto"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Belanja Sekarang
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/promo">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full gap-2 border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
                >
                  <Tag className="h-5 w-5" />
                  Lihat Promo
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
