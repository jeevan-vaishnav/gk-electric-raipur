import { useQuery } from "@tanstack/react-query";

export function useFunctions() {
    return useQuery({
        queryKey: ['functions'],
        queryFn: async () => {
            const res = await fetch("/api/functions");
            console.log(res);
            if (!res.ok) {
                throw new Error("Failed to fetch funtions")
            }
            return res.json()
        }
    })
}
