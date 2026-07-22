import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { PageTransition } from "@/components/layout/PageTransition";
import { PromoClient } from "@/components/shop/PromoClient";

export const metadata: Metadata = {
  title: "Promo — Tulang Rusukku Store",
  description: "Penawaran dan diskon terbaik dari Tulang Rusukku.",
};

export default function PromoPage() {
  return (
    <AppShell>
      <PageTransition>
        <div className="px-4 pt-6 md:px-6 md:pt-10">
          <div className="mx-auto max-w-6xl">
            <PromoClient />
          </div>
        </div>
      </PageTransition>
    </AppShell>
  );
}
