import { useQuery } from "@tanstack/react-query";

export function usePartTypes() {
    return useQuery({
        queryKey: ['part-types'],
        queryFn: async () => {
            const res = await fetch("/api/part-types");
            console.log(res);
            if (!res.ok) {
                throw new Error("Failed to fetch part types")
            }
            return res.json()
        }
    })
}
