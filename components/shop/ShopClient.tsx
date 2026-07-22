"use client";

import { useMemo, useState } from "react";
import type { Category } from "@/types";
import { PRODUCTS } from "@/constants/products";
import { SearchBar } from "@/components/shop/SearchBar";
import { CategoryChips } from "@/components/shop/CategoryChips";
import { ProductGrid } from "@/components/shop/ProductGrid";

export function ShopClient() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const filtered = useMemo(() => {
    let result = PRODUCTS;

    if (category !== "All") {
      if (category === "Popular") {
        result = result.filter(
          (p) => p.category === "Popular" || p.featured,
        );
      } else {
        result = result.filter((p) => p.category === category);
      }
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q),
      );
    }

    return result;
  }, [search, category]);

  return (
    <div className="space-y-5">
      <SearchBar value={search} onChange={setSearch} />
      <CategoryChips active={category} onChange={setCategory} />
      <ProductGrid products={filtered} />
    </div>
  );
}
