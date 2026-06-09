import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { SystemGroupInput } from "@/lib/zod/system-group.schema";

export function useCreateSystemGroup(onSuccess?: () => void) {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: SystemGroupInput) => {
            const res = await fetch("/api/system-groups", {
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
                queryKey: ["system-groups"],
            });
            toast.success("System Groups created successfully");
            onSuccess?.();

        },
        onError: (error) => {
            toast.error(error.message || "Failed to create system groups");
        },
    });
}