import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { PageTransition } from "@/components/layout/PageTransition";
import { MembershipClient } from "@/components/shop/MembershipClient";

export const metadata: Metadata = {
  title: "Membership — Tulang Rusukku Store",
  description: "Pilih paket membership terbaik untukmu.",
};

export default function MembershipPage() {
  return (
    <AppShell>
      <PageTransition>
        <div className="px-4 pt-6 md:px-6 md:pt-10">
          <div className="mx-auto max-w-5xl">
            <MembershipClient />
          </div>
        </div>
      </PageTransition>
    </AppShell>
  );
}
