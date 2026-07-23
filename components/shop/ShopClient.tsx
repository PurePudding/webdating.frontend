"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Coins, Ticket, Package } from "lucide-react";
import Link from "next/link";

/* ─── Data produk — sama persis dengan backend wallet-catalog.ts ─── */

export interface TopUpProduct {
  id: string;
  name: string;
  price: number;
  badge?: string;
  category: "coin" | "counselor_voucher" | "psy_voucher" | "package";
  description: string;
  grants: {
    coin?: number;
    counselor_voucher?: number;
    psy_voucher?: number;
  };
}

export const ALL_TOPUP_PRODUCTS: TopUpProduct[] = [
  { id: "coin-50",      name: "50 Koin",          price: 15000,  category: "coin",              description: "Top up 50 koin ke akun Tulang Rusukku.",                       grants: { coin: 50 } },
  { id: "coin-200",     name: "200 Koin",          price: 50000,  badge: "Populer", category: "coin",              description: "Top up 200 koin — pilihan paling populer.",                  grants: { coin: 200 } },
  { id: "coin-1000",    name: "1.000 Koin",        price: 225000, category: "coin",              description: "Top up 1.000 koin untuk kebutuhan besar.",                     grants: { coin: 1000 } },
  { id: "counselor-1",  name: "1 Voucher Konselor",price: 27000,  category: "counselor_voucher", description: "1 sesi konseling bersama konselor profesional.",                grants: { counselor_voucher: 1 } },
  { id: "counselor-4",  name: "4 Voucher Konselor",price: 104000, badge: "Populer", category: "counselor_voucher", description: "4 sesi konseling — hemat dibanding beli satuan.",              grants: { counselor_voucher: 4 } },
  { id: "counselor-8",  name: "8 Voucher Konselor",price: 200000, category: "counselor_voucher", description: "8 sesi konseling untuk kebutuhan intensif.",                   grants: { counselor_voucher: 8 } },
  { id: "psy-1",        name: "1 Voucher Psikolog", price: 225000, category: "psy_voucher",      description: "1 sesi konsultasi langsung bersama psikolog berlisensi.",      grants: { psy_voucher: 1 } },
];

/* ─── Helpers ─── */

function formatRupiah(value: number): string {
  return `Rp ${value.toLocaleString("id-ID")}`;
}

/* ─── Compact grid card ─── */

function TopUpCard({
  product,
  icon,
  index,
}: {
  product: TopUpProduct;
  icon: React.ReactNode;
  index: number;
}) {
  const router = useRouter();

  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      whileHover={{ y: -3, boxShadow: "0 12px 32px -4px rgba(255,95,162,0.22)" }}
      whileTap={{ scale: 0.97 }}
      onClick={() => router.push(`/checkout/${product.id}`)}
      className="relative flex flex-col items-center rounded-2xl border border-primary-100 bg-white px-3 py-4 text-center shadow-card transition-shadow duration-200 hover:border-primary-300 cursor-pointer"
    >
      {/* Badge */}
      {product.badge && (
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[10px] font-bold text-white shadow-soft">
          {product.badge}
        </span>
      )}

      {/* Icon */}
      <div className="mb-2 flex h-10 w-10 items-center justify-center">
        {icon}
      </div>

      {/* Name */}
      <p className="mb-1 min-h-[2.5rem] text-xs font-semibold leading-tight text-gray-800">
        {product.name}
      </p>

      {/* Price */}
      <p className="text-xs font-bold text-primary">{formatRupiah(product.price)}</p>
    </motion.button>
  );
}

/* ─── Section header ─── */

function SectionHeader({
  title,
  subtitle,
  index,
}: {
  title: string;
  subtitle: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="mb-3"
    >
      <h2 className="font-display text-xl font-bold text-gray-900 md:text-2xl">{title}</h2>
      <p className="mt-0.5 text-sm text-gray-500">{subtitle}</p>
    </motion.div>
  );
}

/* ─── Main component ─── */

const COIN_PRODUCTS = ALL_TOPUP_PRODUCTS.filter((p) => p.category === "coin");
const VOUCHER_PRODUCTS = ALL_TOPUP_PRODUCTS.filter(
  (p) => p.category === "counselor_voucher" || p.category === "psy_voucher"
);

export function ShopClient() {
  return (
    <div className="space-y-8">
      {/* Page title */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="font-display text-3xl font-bold text-gray-900 md:text-4xl">
          Top Up
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Isi koin dan voucher untuk fitur premium di aplikasi Tulang Rusukku.
        </p>
      </motion.div>

      {/* Membership banner */}
      <Link href="/membership">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          whileHover={{ y: -2 }}
          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-amber-300/60 px-4 py-3.5 shadow-sm transition-shadow hover:shadow-card"
          style={{ background: "linear-gradient(135deg, #1C1B22 0%, #2E2A22 100%)" }}
        >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-400">
            <span className="text-lg">👑</span>
          </div>
          <div className="flex-1">
            <p className="text-xs text-white/60">Cari paket Membership?</p>
            <p className="font-bold text-amber-400">Lihat Semua Paket →</p>
          </div>
        </motion.div>
      </Link>

      {/* ── Koin ── */}
      <section>
        <SectionHeader
          title="Koin"
          subtitle="Top up koin untuk fitur premium dalam aplikasi"
          index={0}
        />
        <div className="grid grid-cols-3 gap-3">
          {COIN_PRODUCTS.map((p, i) => (
            <TopUpCard
              key={p.id}
              product={p}
              index={i}
              icon={<Coins className="h-7 w-7 text-amber-500" />}
            />
          ))}
        </div>
      </section>

      {/* ── Voucher (Konselor + Psikolog) ── */}
      <section>
        <SectionHeader
          title="Voucher"
          subtitle="Voucher sesi konseling dengan konselor dan psikolog profesional"
          index={1}
        />
        <div className="grid grid-cols-3 gap-3 md:grid-cols-4">
          {VOUCHER_PRODUCTS.map((p, i) => {
            const isCounselor = p.category === "counselor_voucher";
            return (
              <TopUpCard
                key={p.id}
                product={p}
                index={i}
                icon={
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full ${
                      isCounselor
                        ? "bg-gradient-to-br from-amber-400 to-orange-500"
                        : "bg-gradient-to-br from-violet-400 to-violet-600"
                    }`}
                  >
                    <Ticket className="h-4 w-4 text-white" />
                  </div>
                }
              />
            );
          })}
        </div>
        {/* Legend */}
        <div className="mt-2 flex gap-4">
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
            Konselor
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-violet-600" />
            Psikolog
          </span>
        </div>
      </section>

      {/* ── Paket Vendor (Coming Soon) ── */}
      <section>
        <SectionHeader
          title="Paket Vendor"
          subtitle="Bundel eksklusif dari vendor pilihan kami"
          index={2}
        />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-4 rounded-2xl border border-amber-600/40 p-5 shadow-card"
          style={{ background: "linear-gradient(135deg, #15130F 0%, #1e1a14 100%)" }}
        >
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-400/20 border border-amber-400/40">
            <Package className="h-7 w-7 text-amber-400" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-bold tracking-widest text-amber-400 uppercase mb-1">
              Coming Soon
            </p>
            <p className="font-bold text-white">Paket ini sedang dirangkai khusus untuk Anda</p>
            <p className="mt-1 text-xs text-white/50">Nantikan kehadirannya!</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
