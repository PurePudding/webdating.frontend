"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Beranda", href: "/", icon: "Home" },
  { label: "Belanja", href: "/shop", icon: "ShoppingBag" },
  { label: "Membership", href: "/membership", icon: "Crown" },
  { label: "Promo", href: "/promo", icon: "Tag" },
];

import { Home, Crown, Tag } from "lucide-react";

const iconMap: Record<string, typeof Home> = {
  Home,
  ShoppingBag,
  Crown,
  Tag,
};

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="glass border-t border-primary-100 px-2 pb-[env(safe-area-inset-bottom)] pt-2">
        <div className="mx-auto flex max-w-md items-center justify-around">
          {items.map((item) => {
            const Icon = iconMap[item.icon];
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex flex-1 flex-col items-center gap-1 py-2 no-tap-highlight"
              >
                {active && (
                  <motion.div
                    layoutId="bottom-nav-active"
                    className="absolute inset-x-2 top-0 h-full rounded-2xl bg-primary-50"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon
                  className={cn(
                    "relative z-10 h-6 w-6 transition-colors",
                    active ? "text-primary" : "text-gray-400",
                  )}
                  strokeWidth={active ? 2.5 : 2}
                />
                <span
                  className={cn(
                    "relative z-10 text-xs font-bold transition-colors",
                    active ? "text-primary" : "text-gray-400",
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
