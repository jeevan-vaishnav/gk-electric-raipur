import { toast } from "sonner";
import type { PartTypeInput } from "@/lib/zod/part-type.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreatePartType(onSuccess?: () => void) {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: PartTypeInput) => {
            const res = await fetch("/api/part-types", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error("Failed");
            }

            return res.json();
        },

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["part-types"],
            });
            toast.success("Part Type created successfully");
            onSuccess?.();

        },
        onError: (error) => {
            toast.error(error.message || "Failed to create Part Type");
        },
    });
}