import type { Category } from "@/types";

export const CATEGORIES: Category[] = [
  "All",
  "Membership",
  "Bundles",
  "Diamond",
  "Event",
  "Limited",
  "Gift",
  "Popular",
];

export const CATEGORY_ICONS: Record<Category, string> = {
  All: "Sparkles",
  Membership: "Crown",
  Bundles: "Package",
  Diamond: "Gem",
  Event: "CalendarDays",
  Limited: "Flame",
  Gift: "Gift",
  Popular: "TrendingUp",
};

export const NAV_ITEMS = [
  { label: "Beranda", href: "/", icon: "Home" },
  { label: "Belanja", href: "/shop", icon: "ShoppingBag" },
  { label: "Membership", href: "/membership", icon: "Crown" },
  { label: "Promo", href: "/promo", icon: "Tag" },
];

export const BENEFITS = [
  {
    id: "official",
    title: "Official Store",
    description: "Produk digital resmi langsung dari Tulang Rusukku.",
    icon: "BadgeCheck",
  },
  {
    id: "secure",
    title: "Pembayaran Aman",
    description: "Transaksi terenkripsi dengan berbagai metode pembayaran.",
    icon: "ShieldCheck",
  },
  {
    id: "instant",
    title: "Pengiriman Instan",
    description: "Produk langsung masuk ke akunmu setelah pembayaran.",
    icon: "Zap",
  },
  {
    id: "exclusive",
    title: "Penawaran Eksklusif",
    description: "Akses bundle dan item terbatas hanya di sini.",
    icon: "Star",
  },
];
