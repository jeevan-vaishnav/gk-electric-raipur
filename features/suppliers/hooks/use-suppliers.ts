import { useQuery } from "@tanstack/react-query";

export function useSuppliers() {
    return useQuery({
        queryKey: ["suppliers"],
        queryFn: async () => {
            const res = await fetch("/api/suppliers");

            if (!res.ok) {
                throw new Error(
                    "Failed to fetch suppliers"
                );
            }

            return res.json();
        },
    });
}