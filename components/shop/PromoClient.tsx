"use client";

import { motion } from "framer-motion";
import { Flame, Tag } from "lucide-react";
import { PRODUCTS } from "@/constants/products";
import { ProductCard } from "@/components/shop/ProductCard";

export function PromoClient() {
  const promos = PRODUCTS.filter((p) => p.discount && p.discount >= 25);

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl gradient-primary p-6 shadow-soft-lg md:p-10">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
        <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-white/10" />
        <div className="relative z-10 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
            <Flame className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
              Promo Terbaik
            </h1>
            <p className="text-white/80">Diskon hingga 50% untuk produk pilihan</p>
          </div>
        </div>
      </div>

      {/* Promo grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {promos.map((product, idx) => (
          <ProductCard key={product.id} product={product} index={idx} />
        ))}
      </div>
    </div>
  );
}
