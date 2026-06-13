import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { VariantInput } from "@/lib/zod/variant.schema";

export function useCreateVariant() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: VariantInput) => {
      const res = await fetch("/api/variants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to create variant");
      }

      return res.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["variants"],
      });
    },
  });
}