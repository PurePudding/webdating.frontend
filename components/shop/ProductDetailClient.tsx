"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShoppingBag, ChevronLeft, ShieldCheck, Zap, BadgeCheck } from "lucide-react";
import type { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="pb-8">
      {/* Back button */}
      <div className="mb-4 flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="gap-1"
          onClick={() => window.history.back()}
        >
          <ChevronLeft className="h-4 w-4" />
          Kembali
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {/* Gallery */}
        <div>
          <motion.div
            key={activeImage}
            initial={{ opacity: 0.5, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-square overflow-hidden rounded-3xl bg-primary-50 shadow-card"
          >
            <Image
              src={product.gallery[activeImage]}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            {product.discount && (
              <div className="absolute left-4 top-4">
                <Badge variant="discount" className="px-4 py-2 text-base shadow-soft">
                  -{product.discount}%
                </Badge>
              </div>
            )}
          </motion.div>

          {/* Thumbnails */}
          {product.gallery.length > 1 && (
            <div className="mt-4 flex gap-3">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative h-20 w-20 overflow-hidden rounded-2xl border-2 transition-all ${
                    activeImage === idx
                      ? "border-primary shadow-soft"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.title} ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col">
          {product.badge && (
            <Badge
              variant={
                product.badge === "Limited"
                  ? "limited"
                  : product.badge === "Hot Deal"
                    ? "hot"
                    : "featured"
              }
              className="mb-3 w-fit px-3 py-1"
            >
              {product.badge}
            </Badge>
          )}

          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            {product.title}
          </h1>
          <p className="mt-2 text-gray-500">{product.description}</p>

          {/* Price */}
          <div className="mt-6 rounded-3xl bg-primary-50 p-5">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-primary md:text-4xl">
                {formatPrice(product.price)}
              </span>
              {product.oldPrice && (
                <span className="text-lg text-gray-400 line-through">
                  {formatPrice(product.oldPrice)}
                </span>
              )}
            </div>
            {product.discount && (
              <p className="mt-1 text-sm font-bold text-success">
                Hemmat {formatPrice(product.oldPrice! - product.price)} ({product.discount}%)
              </p>
            )}
          </div>

          {/* CTA */}
          <motion.div whileTap={{ scale: 0.97 }} className="mt-4">
            <Button variant="primary" size="xl" className="w-full gap-2">
              <ShoppingBag className="h-5 w-5" />
              Beli Sekarang
            </Button>
          </motion.div>

          {/* Trust badges */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { icon: BadgeCheck, label: "100% Resmi" },
              { icon: ShieldCheck, label: "Pembayaran Aman" },
              { icon: Zap, label: "Instan" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-1 rounded-2xl border border-primary-100 bg-white p-3 text-center"
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="mt-6">
            <h3 className="mb-3 text-lg font-bold text-foreground">Fitur</h3>
            <ul className="space-y-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-gray-600">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-success/10">
                    <Check className="h-3 w-3 text-success" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Includes */}
          <div className="mt-6">
            <h3 className="mb-3 text-lg font-bold text-foreground">Yang Kamu Dapatkan</h3>
            <div className="flex flex-wrap gap-2">
              {product.includes.map((item) => (
                <span
                  key={item}
                  className="rounded-2xl border border-secondary-200 bg-secondary-50 px-4 py-2 text-sm font-bold text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Long description */}
          <div className="mt-6">
            <h3 className="mb-2 text-lg font-bold text-foreground">Deskripsi</h3>
            <p className="leading-relaxed text-gray-600">{product.longDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
