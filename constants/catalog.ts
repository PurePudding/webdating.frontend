/**
 * Centralized product catalog — mirrors backend wallet-catalog.ts and
 * membership-plans.const.ts so the checkout page can look up any product
 * by its ID (e.g. "coin-200", "membership-vip").
 */

export type ProductType = "topup" | "membership";

export interface CheckoutProduct {
  id: string;
  type: ProductType;
  name: string;
  price: number;
  priceSuffix?: string;
  description: string;
  /** What the user gets after purchase */
  includes: string[];
  badge?: string;
  category?: string;
}

export const TOPUP_CATALOG: CheckoutProduct[] = [
  {
    id: "coin-50",
    type: "topup",
    name: "50 Koin",
    price: 15000,
    description: "Top up 50 koin ke akun Tulang Rusukku.",
    includes: ["50 Koin — langsung masuk ke akun"],
    category: "Koin",
  },
  {
    id: "coin-200",
    type: "topup",
    name: "200 Koin",
    price: 50000,
    badge: "Populer",
    description: "Top up 200 koin — pilihan paling populer.",
    includes: ["200 Koin — langsung masuk ke akun"],
    category: "Koin",
  },
  {
    id: "coin-1000",
    type: "topup",
    name: "1.000 Koin",
    price: 225000,
    description: "Top up 1.000 koin untuk kebutuhan besar.",
    includes: ["1.000 Koin — langsung masuk ke akun"],
    category: "Koin",
  },
  {
    id: "counselor-1",
    type: "topup",
    name: "1 Voucher Konselor",
    price: 27000,
    description: "1 sesi konseling bersama konselor profesional.",
    includes: ["1 Voucher Konselor aktif"],
    category: "Voucher Konselor",
  },
  {
    id: "counselor-4",
    type: "topup",
    name: "4 Voucher Konselor",
    price: 104000,
    badge: "Populer",
    description: "4 sesi konseling — hemat dibanding beli satuan.",
    includes: ["4 Voucher Konselor aktif"],
    category: "Voucher Konselor",
  },
  {
    id: "counselor-8",
    type: "topup",
    name: "8 Voucher Konselor",
    price: 200000,
    description: "8 sesi konseling untuk kebutuhan intensif.",
    includes: ["8 Voucher Konselor aktif"],
    category: "Voucher Konselor",
  },
  {
    id: "psy-1",
    type: "topup",
    name: "1 Voucher Psikolog",
    price: 225000,
    description: "1 sesi konsultasi langsung bersama psikolog berlisensi.",
    includes: ["1 Voucher Psikolog aktif"],
    category: "Voucher Psikolog",
  },
];

export const MEMBERSHIP_CATALOG: CheckoutProduct[] = [
  {
    id: "membership-silver",
    type: "membership",
    name: "Membership Silver",
    price: 20000,
    priceSuffix: "/ Bulan",
    description: "Akses lebih baik dibanding paket Free untuk perjalanan cintamu.",
    includes: [
      "1 kuota AI Matching",
      "2 Room Chat aktif bersamaan",
      "14 Hari waktu tunggu hapus riwayat chat",
      "1x Kesempatan update data KTP",
    ],
    category: "Membership",
  },
  {
    id: "membership-gold",
    type: "membership",
    name: "Membership Gold",
    price: 50000,
    priceSuffix: "/ Bulan",
    description: "Fitur lebih optimal dari Silver untuk pengalaman yang lebih baik.",
    includes: [
      "3 kuota AI Matching",
      "5 Room Chat aktif bersamaan",
      "14 Hari waktu tunggu hapus riwayat chat",
      "1x Kesempatan update data KTP",
    ],
    category: "Membership",
  },
  {
    id: "membership-vip",
    type: "membership",
    name: "Membership VIP",
    price: 100000,
    priceSuffix: "/ Bulan",
    badge: "DISARANKAN",
    description: "Pengalaman premium dengan keleluasaan ekstra dibanding Gold.",
    includes: [
      "5 kuota AI Matching",
      "10 Room Chat aktif bersamaan",
      "14 Hari waktu tunggu hapus riwayat chat",
      "1x Kesempatan update data KTP",
    ],
    category: "Membership",
  },
  {
    id: "membership-vvip",
    type: "membership",
    name: "Membership VVIP",
    price: 1000000,
    priceSuffix: "/ 6 Bulan",
    description: "Akses tanpa batas dan prioritas keamanan tertinggi di aplikasi.",
    includes: [
      "50 kuota AI Matching",
      "Room Chat Unlimited (Tanpa batas)",
      "0 Hari waktu tunggu hapus riwayat (Instan)",
      "3x Kesempatan update data KTP",
    ],
    category: "Membership",
  },
];

export const ALL_CHECKOUT_PRODUCTS: CheckoutProduct[] = [
  ...TOPUP_CATALOG,
  ...MEMBERSHIP_CATALOG,
];

export function findCheckoutProduct(id: string): CheckoutProduct | undefined {
  return ALL_CHECKOUT_PRODUCTS.find((p) => p.id === id);
}
