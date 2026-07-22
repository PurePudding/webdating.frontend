"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types";
import { PRODUCTS } from "@/constants/products";
import { ProductCard } from "@/components/shop/ProductCard";

interface ShopSection {
  title: string;
  subtitle: string;
  products: Product[];
}

const sections: ShopSection[] = [
  {
    title: "Koin",
    subtitle: "Top up koin untuk pembelian item in-game",
    products: PRODUCTS.filter((p) => p.category === "Diamond"),
  },
  {
    title: "Voucher Vendor",
    subtitle: "Voucher spesial untuk berbagai kebutuhan",
    products: PRODUCTS.filter((p) =>
      ["Bundles", "Event", "Limited"].includes(p.category),
    ),
  },
  {
    title: "Voucher Konselor",
    subtitle: "Paket konseling dan dukungan eksklusif",
    products: PRODUCTS.filter((p) =>
      ["Membership", "Gift", "Popular"].includes(p.category),
    ),
  },
];

export function ShopClient() {
  return (
    <div className="space-y-10">
      {sections.map((section, sIdx) => (
        <section key={section.title}>
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: sIdx * 0.1 }}
            className="mb-4 flex items-end justify-between"
          >
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                {section.title}
              </h2>
              <p className="mt-0.5 text-sm text-gray-500">{section.subtitle}</p>
            </div>
            <Link href="/shop" className="hidden md:block">
              <span className="flex items-center gap-1 text-sm font-bold text-primary hover:text-primary-600">
                Lihat semua
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>

          {/* Horizontal scroll row */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible lg:grid-cols-4">
            {section.products.map((product, idx) => (
              <div
                key={product.id}
                className="min-w-[200px] flex-shrink-0 md:min-w-0"
              >
                <ProductCard
                  product={product}
                  index={idx}
                  variant="compact"
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
