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
        <div className="px-4 pt-6 md:px-6 md:pt-10">
          <div className="mx-auto max-w-6xl">
            <h1 className="mb-1 font-display text-3xl font-bold text-foreground md:text-4xl">
              Belanja
            </h1>
            <p className="mb-6 text-gray-500">
              {`Temukan membership, diamond, bundle, dan produk digital lainnya`}
            </p>
            <ShopClient />
          </div>
        </div>
      </PageTransition>
    </AppShell>
  );
}
