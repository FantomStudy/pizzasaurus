import { api } from "./instance";

export interface CatalogIngredient {
  type: string;
  price: number;
  img: string;
}

export interface CatalogSize {
  type: string;
  price: number;
  volume: number;
}

export interface CatalogOption {
  type: string;
  price: number;
}

export interface CatalogProduct {
  _id: string;
  category: string;
  name: string;
  ingredients: CatalogIngredient[];
  description: string;
  sizes: CatalogSize[];
  options: CatalogOption[];
  calories: number;
  protein: string;
  totalFat: string;
  carbohydrates: string;
  sodium: string;
  allergens: string[];
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isNovelty: boolean;
  isHit: boolean;
  img: string;
}

export interface GetCatalogResponse {
  success: boolean;
  catalog: CatalogProduct[];
}

export const getCatalog = () => api<GetCatalogResponse>("/pizzas/catalog");
