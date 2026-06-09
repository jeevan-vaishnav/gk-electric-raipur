import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { SupplierInput } from "@/lib/zod/supplier.schema";

export function useCreateSupplier() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data: SupplierInput) => {
            const res = await fetch("/api/suppliers",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (!res.ok) {
                throw new Error(
                    "Failed to create supplier"
                );
            }

            return res.json();
        },

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["suppliers"],
            });
        },
    });
}