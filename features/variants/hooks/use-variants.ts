import { useQuery } from "@tanstack/react-query";

export function useVariants() {
  return useQuery({
    queryKey: ["variants"],
    queryFn: async () => {
      const res = await fetch("/api/variants");

      if (!res.ok) {
        throw new Error("Failed to fetch variants");
      }

      return res.json();
    },
  });
}