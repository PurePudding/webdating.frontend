"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "@/types";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary-50">
          <span className="text-4xl">🔍</span>
        </div>
        <h3 className="mb-1 text-lg font-bold text-foreground">
          Produk tidak ditemukan
        </h3>
        <p className="text-sm text-gray-500">
          Coba ubah kata kunci atau kategori pencarianmu
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
      <AnimatePresence mode="popLayout">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: idx * 0.04 }}
          >
            <ProductCard product={product} index={idx} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
