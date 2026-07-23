"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Check,
  Crown,
  Shield,
  Zap,
  BadgeCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Gem,
  Bot,
  MessageCircle,
  Clock,
  CreditCard,
} from "lucide-react";

/* ─── Data — sama persis dengan backend membership-plans.const.ts ─── */

interface MembershipPlan {
  id: "free" | "silver" | "gold" | "vip" | "vvip";
  name: string;
  price: number;
  priceSuffix: string;
  badge?: string;
  description: string;
  features: string[];
}

const PLANS: MembershipPlan[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    priceSuffix: "/ Bulan",
    description: "Akses dasar untuk memulai perjalanan cintamu.",
    features: [
      "0 kuota AI Matching",
      "1 Room Chat aktif",
      "14 Hari waktu tunggu hapus riwayat chat",
    ],
  },
  {
    id: "silver",
    name: "Silver",
    price: 20000,
    priceSuffix: "/ Bulan",
    description: "Menyertakan akses yang lebih baik dibanding paket Free.",
    features: [
      "1 kuota AI Matching untuk optimisasi mencari pasangan",
      "2 Room Chat aktif bersamaan",
      "14 Hari waktu tunggu hapus riwayat chat",
      "1x Kesempatan update data KTP",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    price: 50000,
    priceSuffix: "/ Bulan",
    description: "Menyertakan fitur yang lebih optimal dibanding Silver.",
    features: [
      "3 kuota AI Matching untuk optimisasi mencari pasangan",
      "5 Room Chat aktif bersamaan",
      "14 Hari waktu tunggu hapus riwayat chat",
      "1x Kesempatan update data KTP",
    ],
  },
  {
    id: "vip",
    name: "VIP",
    price: 100000,
    priceSuffix: "/ Bulan",
    badge: "DISARANKAN",
    description: "Pengalaman premium dengan keleluasaan ekstra dibanding Gold.",
    features: [
      "5 kuota AI Matching untuk optimisasi mencari pasangan",
      "10 Room Chat aktif bersamaan",
      "14 Hari waktu tunggu hapus riwayat chat",
      "1x Kesempatan update data KTP",
    ],
  },
  {
    id: "vvip",
    name: "VVIP",
    price: 1000000,
    priceSuffix: "/ 6 Bulan",
    description: "Akses tanpa batas dan prioritas keamanan tertinggi di aplikasi.",
    features: [
      "50 kuota AI Matching untuk optimisasi mencari pasangan",
      "Room Chat Unlimited (Tanpa batas maksimum)",
      "0 Hari waktu tunggu hapus riwayat chat (Instan)",
      "3x Kesempatan update data KTP",
    ],
  },
];

/* ─── Helpers ─── */

function formatRupiah(value: number): string {
  if (value === 0) return "Gratis";
  return `Rp ${value.toLocaleString("id-ID")}`;
}

function planGradient(id: MembershipPlan["id"]) {
  const map: Record<MembershipPlan["id"], string> = {
    free: "from-gray-400 to-gray-500",
    silver: "from-slate-400 to-slate-500",
    gold: "from-amber-400 to-amber-600",
    vip: "from-primary to-primary-600",
    vvip: "from-secondary to-secondary-600",
  };
  return map[id];
}

function planIcon(id: MembershipPlan["id"]) {
  const props = { className: "h-5 w-5 text-white" };
  if (id === "free") return <Sparkles {...props} />;
  if (id === "silver") return <Shield {...props} />;
  if (id === "gold") return <Star {...props} />;
  if (id === "vip") return <Crown {...props} />;
  return <Gem {...props} />;
}

/* ─── Feature icon mapping ─── */

function featureIcon(feature: string) {
  if (feature.includes("AI Matching")) return <Bot className="h-3.5 w-3.5" />;
  if (feature.includes("Room Chat")) return <MessageCircle className="h-3.5 w-3.5" />;
  if (feature.includes("waktu tunggu")) return <Clock className="h-3.5 w-3.5" />;
  if (feature.includes("KTP")) return <CreditCard className="h-3.5 w-3.5" />;
  return <Check className="h-3.5 w-3.5" />;
}

/* ─── Trust badges ─── */

const TRUST = [
  { icon: BadgeCheck, label: "100% Resmi" },
  { icon: ShieldCheck, label: "Pembayaran Aman" },
  { icon: Zap, label: "Aktivasi Instan" },
];

/* ─── Plan card ─── */

function PlanCard({ plan, index }: { plan: MembershipPlan; index: number }) {
  const router = useRouter();
  const isVip = plan.id === "vip";
  const isVvip = plan.id === "vvip";
  const highlighted = isVip || isVvip;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ y: -4 }}
      className={`relative flex flex-col rounded-3xl border-2 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover ${isVip
          ? "border-primary"
          : isVvip
            ? "border-secondary"
            : "border-primary-100"
        }`}
    >
      {/* "DISARANKAN" badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-primary px-4 py-1 text-xs font-bold text-white shadow-soft">
            {plan.badge}
          </span>
        </div>
      )}

      {/* Icon + name row */}
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${planGradient(plan.id)}`}
        >
          {planIcon(plan.id)}
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
          <p className="text-xs text-gray-500 leading-tight">{plan.description}</p>
        </div>
      </div>

      {/* Price */}
      <div className="mb-5 flex items-baseline gap-1">
        <span
          className={`text-3xl font-bold ${highlighted ? "text-primary" : "text-gray-900"
            }`}
        >
          {formatRupiah(plan.price)}
        </span>
        <span className="text-sm text-gray-400">{plan.priceSuffix}</span>
      </div>

      {/* Feature list */}
      <ul className="mb-6 space-y-2.5 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
            <div
              className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${highlighted ? "bg-primary/10 text-primary" : "bg-success/10 text-success"
                }`}
            >
              {featureIcon(feature)}
            </div>
            <span className="leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => {
          if (plan.id !== "free") router.push(`/checkout/membership-${plan.id}`);
        }}
        className={`w-full rounded-2xl py-3 text-sm font-bold transition-colors ${plan.id === "free"
            ? "border border-gray-200 bg-gray-100 text-gray-500 cursor-default"
            : highlighted
              ? "bg-primary text-white shadow-soft hover:bg-primary-600 cursor-pointer"
              : "border border-primary-200 bg-primary-50 text-primary hover:bg-primary-100 cursor-pointer"
          }`}
        disabled={plan.id === "free"}
      >
        {plan.id === "free" ? "Paket Gratis" : `Langganan ${plan.name}`}
      </motion.button>
    </motion.div>
  );
}

/* ─── Main ─── */

export function MembershipClient() {
  return (
    <div className="space-y-8 pb-8">
      {/* Hero banner */}
      <div
        className="relative overflow-hidden rounded-3xl p-6 text-center shadow-soft-lg md:p-10"
        style={{ background: "linear-gradient(135deg, #7A5AF8 0%, #FF5FA2 100%)" }}
      >
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
        <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-white/10" />
        <div className="relative z-10">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
            <Crown className="h-7 w-7 text-white" />
          </div>
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
            Membership Plan
          </h1>
          <p className="mt-2 text-white/80 text-sm md:text-base">
            Pilih paket yang paling sesuai dengan kebutuhanmu. Upgrade kapan saja.
          </p>
        </div>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-3">
        {TRUST.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-1 rounded-2xl border border-primary-100 bg-white p-3 text-center shadow-sm"
          >
            <item.icon className="h-5 w-5 text-primary" />
            <span className="text-xs font-bold text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Intro text */}
      <p className="text-sm text-gray-500 leading-relaxed">
        Semua paket di bawah langsung diaktifkan ke aplikasi Tulang Rusukku.
      </p>

      {/* Plan cards — 2 col on md, single col on mobile */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PLANS.map((plan, i) => (
          <PlanCard key={plan.id} plan={plan} index={i} />
        ))}
      </div>
    </div>
  );
}
