import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FunctionInput } from "@/lib/zod/function.schema";

export function useCreateFunctions(onSuccess?: () => void) {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: FunctionInput) => {
            const res = await fetch("/api/functions", {
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
                queryKey: ["functions"],
            });
            toast.success("Funtion created successfully");
            onSuccess?.();

        },
        onError: (error) => {
            toast.error(error.message || "Failed to create Funtion");
        },
    });
}