import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { PageTransition } from "@/components/layout/PageTransition";
import { ProductDetailClient } from "@/components/shop/ProductDetailClient";
import { PRODUCTS } from "@/constants/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) notFound();

  return (
    <AppShell>
      <PageTransition>
        <div className="px-4 pt-6 md:px-6 md:pt-10">
          <div className="mx-auto max-w-5xl">
            <ProductDetailClient product={product} />
          </div>
        </div>
      </PageTransition>
    </AppShell>
  );
}
