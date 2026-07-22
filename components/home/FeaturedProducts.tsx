"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/constants/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";

export function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="px-4 py-6 md:px-6 md:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Produk Pilihan
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Bundle dan membership terbaik untukmu
            </p>
          </div>
          <Link href="/shop" className="hidden md:block">
            <Button variant="ghost" size="sm" className="gap-2">
              Lihat Semua
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {featured.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

        <Link href="/shop" className="mt-6 block md:hidden">
          <Button variant="outline" size="lg" className="w-full gap-2">
            Lihat Semua Produk
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
