import { AppShell } from "@/components/layout/AppShell";
import { PageTransition } from "@/components/layout/PageTransition";
import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { PopularSection } from "@/components/home/PopularSection";

export default function HomePage() {
  return (
    <AppShell>
      <PageTransition>
        <Hero />
        <Benefits />
        <FeaturedProducts />
        <PopularSection />
      </PageTransition>
    </AppShell>
  );
}
