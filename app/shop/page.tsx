import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { PageTransition } from "@/components/layout/PageTransition";
import { ShopClient } from "@/components/shop/ShopClient";

export const metadata: Metadata = {
  title: "Belanja — Tulang Rusukku Store",
  description: "Jelajahi semua produk digital resmi Tulang Rusukku.",
};

export default function ShopPage() {
  return (
    <AppShell>
      <PageTransition>
        <div className="px-4 py-6 md:px-6 md:py-10">
          <div className="mx-auto max-w-6xl">
            <ShopClient />
          </div>
        </div>
      </PageTransition>
    </AppShell>
  );
}
