import { AppShell } from "@/components/layout/AppShell";
import { PageTransition } from "@/components/layout/PageTransition";
import { Hero } from "@/components/home/Hero";

export default function HomePage() {
  return (
    <AppShell>
      <PageTransition>
        <Hero />
      </PageTransition>
    </AppShell>
  );
}
