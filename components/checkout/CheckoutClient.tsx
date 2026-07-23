"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Check,
  Mail,
  ShieldCheck,
  Zap,
  BadgeCheck,
  CreditCard,
  Smartphone,
  Building2,
  Wallet,
  CheckCircle2,
} from "lucide-react";
import type { CheckoutProduct } from "@/constants/catalog";

/* ─── Helpers ─── */

function formatRupiah(value: number): string {
  return `Rp ${value.toLocaleString("id-ID")}`;
}

/* ─── Payment methods ─── */

interface PaymentMethod {
  id: string;
  name: string;
  label: string;
  icon: React.ElementType;
  color: string;
  fee?: number;
}

const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "qris",
    name: "QRIS",
    label: "Scan QR dengan dompet digital manapun",
    icon: Smartphone,
    color: "text-sky-500",
    fee: 0,
  },
  {
    id: "va-bca",
    name: "Virtual Account BCA",
    label: "Transfer via ATM, m-Banking, atau i-Banking BCA",
    icon: Building2,
    color: "text-blue-600",
    fee: 4000,
  },
  {
    id: "va-mandiri",
    name: "Virtual Account Mandiri",
    label: "Transfer via ATM, Livin, atau Internet Banking Mandiri",
    icon: Building2,
    color: "text-yellow-600",
    fee: 4000,
  },
  {
    id: "va-bni",
    name: "Virtual Account BNI",
    label: "Transfer via ATM atau Mobile Banking BNI",
    icon: Building2,
    color: "text-orange-500",
    fee: 4000,
  },
  {
    id: "gopay",
    name: "GoPay",
    label: "Bayar langsung dari aplikasi Gojek",
    icon: Wallet,
    color: "text-green-500",
    fee: 0,
  },
  {
    id: "ovo",
    name: "OVO",
    label: "Bayar langsung dari aplikasi OVO",
    icon: Wallet,
    color: "text-violet-500",
    fee: 0,
  },
  {
    id: "dana",
    name: "DANA",
    label: "Bayar langsung dari aplikasi DANA",
    icon: Wallet,
    color: "text-blue-500",
    fee: 0,
  },
  {
    id: "cc",
    name: "Kartu Kredit / Debit",
    label: "Visa, Mastercard, JCB",
    icon: CreditCard,
    color: "text-primary",
    fee: 2000,
  },
];

/* ─── Trust items ─── */

const TRUST = [
  { icon: BadgeCheck, label: "100% Resmi" },
  { icon: ShieldCheck, label: "Transaksi Aman" },
  { icon: Zap, label: "Aktivasi Instan" },
];

/* ─── Props ─── */

interface CheckoutClientProps {
  product: CheckoutProduct;
}

/* ─── Checkout success overlay ─── */

function SuccessOverlay({ product, email, onClose }: { product: CheckoutProduct; email: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.85, y: 24 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.85, y: 24 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-card-hover"
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
          <CheckCircle2 className="h-9 w-9 text-success" />
        </div>
        <h2 className="font-display text-2xl font-bold text-gray-900">Pesanan Masuk!</h2>
        <p className="mt-2 text-sm text-gray-500">
          Pesanan <strong>{product.name}</strong> berhasil dibuat. Instruksi pembayaran dikirim ke:
        </p>
        <p className="mt-1 font-bold text-primary">{email}</p>
        <p className="mt-3 text-xs text-gray-400">
          Selesaikan pembayaran dalam 24 jam untuk mengaktifkan produk.
        </p>
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-2xl bg-primary py-3 text-sm font-bold text-white shadow-soft transition-colors hover:bg-primary-600"
        >
          Kembali ke Belanja
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main component ─── */

export function CheckoutClient({ product }: CheckoutClientProps) {
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState<string>("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const selectedMethod = PAYMENT_METHODS.find((m) => m.id === selectedPayment);
  const fee = selectedMethod?.fee ?? 0;
  const total = product.price + fee;

  function validateEmail(val: string) {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!val) return "Email wajib diisi untuk menerima receipt";
    if (!emailRe.test(val)) return "Format email tidak valid";
    return "";
  }

  async function handleBuy() {
    const err = validateEmail(email);
    if (err) { setEmailError(err); return; }
    if (!selectedPayment) { return; }

    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
  }

  return (
    <>
      <AnimatePresence>
        {success && (
          <SuccessOverlay
            product={product}
            email={email}
            onClose={() => router.push("/shop")}
          />
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-2xl pb-16">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Kembali
        </motion.button>

        <div className="grid gap-6 md:grid-cols-5">
          {/* ── Left / main column ── */}
          <div className="space-y-5 md:col-span-3">

            {/* Product summary card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl bg-white p-6 shadow-card"
            >
              {/* Badge */}
              {product.badge && (
                <span className="mb-3 inline-block rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-white">
                  {product.badge}
                </span>
              )}
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                {product.category}
              </p>
              <h1 className="font-display text-2xl font-bold text-gray-900 md:text-3xl">
                {product.name}
              </h1>
              {product.priceSuffix && (
                <p className="mt-0.5 text-sm text-gray-400">{product.priceSuffix}</p>
              )}
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{product.description}</p>

              {/* What you get */}
              <div className="mt-5 rounded-2xl bg-primary-50 p-4">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                  Yang Kamu Dapatkan
                </p>
                <ul className="space-y-2">
                  {product.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-success/10">
                        <Check className="h-3 w-3 text-success" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Payment method */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="rounded-3xl bg-white p-6 shadow-card"
            >
              <h2 className="mb-4 font-display text-lg font-bold text-gray-900">
                Metode Pembayaran
              </h2>
              <div className="space-y-2">
                {PAYMENT_METHODS.map((method) => {
                  const Icon = method.icon;
                  const active = selectedPayment === method.id;
                  return (
                    <motion.button
                      key={method.id}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedPayment(method.id)}
                      className={`flex w-full items-center gap-3 rounded-2xl border-2 p-3.5 text-left transition-all duration-150 ${
                        active
                          ? "border-primary bg-primary-50"
                          : "border-gray-100 bg-white hover:border-primary-200"
                      }`}
                    >
                      <div
                        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border ${
                          active ? "border-primary bg-white" : "border-gray-200 bg-gray-50"
                        }`}
                      >
                        <Icon className={`h-5 w-5 ${active ? "text-primary" : method.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm font-bold ${active ? "text-primary" : "text-gray-800"}`}>
                          {method.name}
                        </p>
                        <p className="text-xs text-gray-400 leading-tight">{method.label}</p>
                      </div>
                      {method.fee !== undefined && method.fee > 0 && (
                        <span className="text-xs font-semibold text-gray-400">
                          +{formatRupiah(method.fee)}
                        </span>
                      )}
                      {active && (
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="rounded-3xl bg-white p-6 shadow-card"
            >
              <h2 className="mb-1 font-display text-lg font-bold text-gray-900">
                Email untuk Receipt
              </h2>
              <p className="mb-4 text-xs text-gray-400">
                Bukti pembayaran dan instruksi aktivasi akan dikirim ke email ini.
              </p>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  id="receipt-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError(validateEmail(e.target.value));
                  }}
                  onBlur={() => setEmailError(validateEmail(email))}
                  placeholder="nama@email.com"
                  className={`w-full rounded-2xl border-2 py-3 pl-10 pr-4 text-sm outline-none transition-colors ${
                    emailError
                      ? "border-error bg-red-50 focus:border-error"
                      : "border-gray-200 bg-white focus:border-primary"
                  }`}
                />
              </div>
              {emailError && (
                <p className="mt-1.5 text-xs font-medium text-error">{emailError}</p>
              )}
            </motion.div>
          </div>

          {/* ── Right / summary column ── */}
          <div className="md:col-span-2">
            <div className="sticky top-24 space-y-4">
              {/* Order summary */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                className="rounded-3xl bg-white p-5 shadow-card"
              >
                <h2 className="mb-4 font-display text-base font-bold text-gray-900">
                  Ringkasan Pesanan
                </h2>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-gray-500">{product.name}</span>
                    <span className="font-semibold text-gray-900 text-right">
                      {formatRupiah(product.price)}
                    </span>
                  </div>
                  {fee > 0 && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Biaya transaksi</span>
                      <span className="font-semibold text-gray-900">{formatRupiah(fee)}</span>
                    </div>
                  )}
                  <div className="my-2 border-t border-gray-100" />
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="text-xl font-bold text-primary">{formatRupiah(total)}</span>
                  </div>
                </div>
              </motion.div>

              {/* Trust */}
              <div className="grid grid-cols-3 gap-2">
                {TRUST.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-1 rounded-2xl border border-primary-100 bg-white p-2.5 text-center"
                  >
                    <item.icon className="h-4 w-4 text-primary" />
                    <span className="text-[10px] font-bold text-gray-600 leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Buy CTA */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => void handleBuy()}
                disabled={loading || !selectedPayment || !email}
                className={`flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-base font-bold text-white shadow-soft transition-all ${
                  loading || !selectedPayment || !email
                    ? "bg-gray-300 cursor-not-allowed shadow-none"
                    : "bg-primary hover:bg-primary-600 cursor-pointer"
                }`}
              >
                {loading ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Memproses...
                  </>
                ) : (
                  <>Bayar {formatRupiah(total)}</>
                )}
              </motion.button>

              <p className="text-center text-[11px] text-gray-400">
                Dengan menekan tombol di atas, kamu menyetujui{" "}
                <span className="text-primary">Syarat &amp; Ketentuan</span> Tulang Rusukku.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
