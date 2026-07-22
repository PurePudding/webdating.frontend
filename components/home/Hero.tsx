"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-10">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-primary-200 opacity-40 blur-3xl" />
        <div className="absolute -right-20 top-40 h-72 w-72 rounded-full bg-secondary-200 opacity-30 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-48 w-48 rounded-full bg-accent-200 opacity-30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl gradient-primary shadow-soft-lg"
        >
          <span className="font-display text-3xl font-bold text-white">TR</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-bold leading-tight text-foreground md:text-6xl"
        >
          Tulang Rusukku Store
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-3 max-w-md text-lg text-gray-500"
        >
          Official digital store. Coming soon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <Link href="/shop">
            <Button variant="primary" size="xl" className="gap-2">
              <ShoppingBag className="h-5 w-5" />
              Belanja Sekarang
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
