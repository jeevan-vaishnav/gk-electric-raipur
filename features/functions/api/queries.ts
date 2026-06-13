
// import type { Product, ProductFilters } from './types';
import { queryOptions } from "@tanstack/react-query";
import { getFunctions } from "./service";
import { FunctionFilters, FunctionsResponse } from "./types";


export const functionKeys = {
  all: ["functions"] as const,
  list: (filters: FunctionFilters) =>
    [...functionKeys.all, "list", filters] as const,
};
export const functionsQueryOptions = (filters: FunctionFilters) =>
  queryOptions<FunctionsResponse[]>({
    queryKey: functionKeys.list(filters),
    queryFn: () => getFunctions(filters),
  });

// export type { Product };


// export const productKeys = {
//   all: ['products'] as const,
//   list: (filters: ProductFilters) => [...productKeys.all, 'list', filters] as const,
//   detail: (id: number) => [...productKeys.all, 'detail', id] as const
// };

// export const productsQueryOptions = (filters: ProductFilters) =>
//   queryOptions({
//     queryKey: productKeys.list(filters),
//     queryFn: () => getProducts(filters)
//   });

// export const productByIdOptions = (id: number) =>
//   queryOptions({
//     queryKey: productKeys.detail(id),
//     queryFn: () => getProductById(id)
//   });