"use client";

import { motion } from "framer-motion";
import { TrendingUp, Flame } from "lucide-react";
import Link from "next/link";
import { PRODUCTS } from "@/constants/products";
import { ProductCard } from "@/components/shop/ProductCard";

export function PopularSection() {
  const popular = PRODUCTS.filter((p) => p.category === "Popular").concat(
    PRODUCTS.filter((p) => p.discount && p.discount >= 40),
  ).slice(0, 6);

  return (
    <section className="px-4 py-6 md:px-6 md:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/20">
            <Flame className="h-5 w-5 text-accent-600" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Sedang Populer
            </h2>
            <p className="text-sm text-gray-500">Paling banyak dibeli minggu ini</p>
          </div>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
          {popular.map((product, idx) => (
            <div
              key={product.id}
              className="min-w-[260px] flex-shrink-0 md:min-w-0"
            >
              <ProductCard product={product} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
