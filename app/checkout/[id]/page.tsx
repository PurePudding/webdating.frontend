import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { PageTransition } from "@/components/layout/PageTransition";
import { CheckoutClient } from "@/components/checkout/CheckoutClient";
import { findCheckoutProduct } from "@/constants/catalog";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = findCheckoutProduct(id);
  if (!product) return { title: "Produk tidak ditemukan" };
  return {
    title: `Checkout — ${product.name} | Tulang Rusukku`,
    description: product.description,
  };
}

export default async function CheckoutPage({ params }: PageProps) {
  const { id } = await params;
  const product = findCheckoutProduct(id);

  if (!product) notFound();

  return (
    <AppShell>
      <PageTransition>
        <div className="px-4 pt-6 md:px-6 md:pt-10">
          <CheckoutClient product={product} />
        </div>
      </PageTransition>
    </AppShell>
  );
}
