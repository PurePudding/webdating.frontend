export type Category =
  | "All"
  | "Membership"
  | "Bundles"
  | "Diamond"
  | "Event"
  | "Limited"
  | "Gift"
  | "Popular";

export interface Product {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: Category;
  image: string;
  gallery: string[];
  price: number;
  oldPrice?: number;
  discount?: number;
  featured: boolean;
  features: string[];
  includes: string[];
  badge?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}
