// ============================================================
// Product Service — Data Access Layer
// ============================================================
// This is the ONLY file you modify when connecting to your backend.
// Queries (queries.ts) and components import from here — they never change.
//
// Pick your pattern and replace the function bodies below:
//
// 1. Server Actions + ORM (Prisma / Drizzle / Supabase)
//    → Add 'use server' at the top of this file
//    → Call your ORM directly in each function
//
// 2. Route Handlers + ORM
//    → import { apiClient } from '@/lib/api-client'
//    → return apiClient<ProductsResponse>('/products?...')
//    → Replace mock calls in route handlers (src/app/api/products/) with ORM
//
// 3. BFF — Route Handlers proxy to external backend (Laravel, Go, etc.)
//    → import { apiClient } from '@/lib/api-client'
//    → return apiClient<ProductsResponse>('/products?...')
//    → Route handlers proxy requests to your external backend service
//
// 4. Direct external API (frontend-only, no Next.js backend)
//    → const res = await fetch('https://your-api.com/products?...')
//    → return res.json()
//
// Current: Mock (in-memory fake data for demo/prototyping)
// ============================================================

import test from "node:test";
import { FunctionFilters, FunctionsResponse } from "./types";
import { FunctionService } from "@/lib/services/function.service";
// import { FunctionService } from "@/lib/services/function.service";

// import { fakeProducts } from '@/constants/mock-api';
// import type {
//   ProductFilters,
//   ProductsResponse,
//   ProductByIdResponse,
//   ProductMutationPayload
// } from './types';

// export async function getProducts(filters: ProductFilters): Promise<ProductsResponse> {
//   return fakeProducts.getProducts(filters);
// }

// export async function getProductById(id: number): Promise<ProductByIdResponse> {
//   return fakeProducts.getProductById(id) as Promise<ProductByIdResponse>;
// }

// export async function createProduct(data: ProductMutationPayload) {
//   return fakeProducts.createProduct(data);
// }

// export async function updateProduct(id: number, data: ProductMutationPayload) {
//   return fakeProducts.updateProduct(id, data);
// }

// export async function deleteProduct(id: number) {
//   return fakeProducts.deleteProduct(id);
// }

// const service = new FunctionService();


export async function getFunctions(filters: FunctionFilters): Promise<FunctionsResponse[]> {
  console.log("Calling API");
  // console.log(typeof window);
  const params = new URLSearchParams();
  if (filters.page) params.set("page", String(filters.page));
  if (filters.limit) params.set("limit", String(filters.limit));
  if (filters.search) params.set("name", filters.search);
  if (filters.functionNo) params.set("functionNo", filters.functionNo);
  if (filters.groupCode) params.set("groupCode", filters.groupCode);
  if (filters.sort) params.set("sort", filters.sort);

  // // Since you're already inside Next.js server code, don't call your own API route.  
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/functions?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch functions");
  }
  const data = await res.json();
  return data;
}

export async function createFunction(data: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/functions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  return res.json();
}