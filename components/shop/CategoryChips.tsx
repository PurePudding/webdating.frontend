"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Crown,
  Package,
  Gem,
  CalendarDays,
  Flame,
  Gift,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { Category } from "@/types";
import { CATEGORIES } from "@/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<Category, LucideIcon> = {
  All: Sparkles,
  Membership: Crown,
  Bundles: Package,
  Diamond: Gem,
  Event: CalendarDays,
  Limited: Flame,
  Gift: Gift,
  Popular: TrendingUp,
};

interface CategoryChipsProps {
  active: Category;
  onChange: (category: Category) => void;
}

export function CategoryChips({ active, onChange }: CategoryChipsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
      {CATEGORIES.map((category) => {
        const Icon = iconMap[category];
        const isActive = active === category;
        return (
          <motion.button
            key={category}
            whileTap={{ scale: 0.92 }}
            onClick={() => onChange(category)}
            className={cn(
              "flex flex-shrink-0 items-center gap-1.5 rounded-2xl px-4 py-2.5 text-sm font-bold transition-all duration-200",
              isActive
                ? "bg-primary text-white shadow-soft"
                : "bg-white text-gray-500 border border-primary-100 hover:border-primary-200 hover:text-primary",
            )}
          >
            <Icon className="h-4 w-4" />
            {category}
          </motion.button>
        );
      })}
    </div>
  );
}
