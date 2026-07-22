"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/types";
import { cn, formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  index?: number;
  variant?: "default" | "compact";
}

export function ProductCard({
  product,
  index = 0,
  variant = "default",
}: ProductCardProps) {
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative flex flex-col overflow-hidden bg-card shadow-card transition-shadow duration-300 hover:shadow-card-hover",
        variant === "compact" ? "w-[200px] flex-shrink-0" : "w-full",
      )}
      style={{ borderRadius: "24px" }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-primary-50">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 200px, 300px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount badge */}
        {product.discount && (
          <div className="absolute left-3 top-3">
            <Badge variant="discount" className="px-3 py-1 text-sm shadow-soft">
              -{product.discount}%
            </Badge>
          </div>
        )}

        {/* Custom badge */}
        {product.badge && (
          <div className="absolute right-3 top-3">
            <Badge
              variant={
                product.badge === "Limited"
                  ? "limited"
                  : product.badge === "Hot Deal"
                    ? "hot"
                    : "featured"
              }
              className="px-3 py-1 text-xs shadow-soft"
            >
              {product.badge}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 line-clamp-1 text-base font-bold text-foreground">
          {product.title}
        </h3>

        {variant === "default" && (
          <p className="mb-3 line-clamp-2 text-sm text-gray-500">
            {product.description}
          </p>
        )}

        {/* Price */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>

          <Link href={`/shop/${product.id}`}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-2.5 text-sm font-bold text-white shadow-soft transition-colors hover:bg-primary-600"
            >
              <ShoppingBag className="h-4 w-4" />
              Beli Sekarang
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );

  if (product.featured && variant === "default") {
    return <div className="gradient-featured-border">{card}</div>;
  }

  return card;
}
