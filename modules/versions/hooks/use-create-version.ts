import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { VersionInput } from "@/lib/zod/version.schema";

export function useCreateVersion() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (
            data: VersionInput
        ) => {
            const res = await fetch(
                "/api/version",
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
                    "Failed to create version"
                );
            }

            return res.json();
        },

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["versions"],
            });
        },
    });
}