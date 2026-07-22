"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Chrome as Home, ShoppingBag, Crown, Tag, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Beranda", href: "/", icon: Home },
  { label: "Belanja", href: "/shop", icon: ShoppingBag },
  { label: "Membership", href: "/membership", icon: Crown },
  { label: "Promo", href: "/promo", icon: Tag },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 hidden md:block">
      <div className="glass border-b border-primary-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl gradient-primary">
              <span className="font-display text-xl font-bold text-white">TR</span>
            </div>
            <span className="font-display text-xl font-bold text-gradient">
              Tulang Rusukku
            </span>
          </Link>

          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={active ? "primary" : "ghost"}
                    size="sm"
                    className="gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>

          <Link href="/shop">
            <Button variant="outline" size="sm" className="gap-2">
              <Search className="h-4 w-4" />
              Cari Produk
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
