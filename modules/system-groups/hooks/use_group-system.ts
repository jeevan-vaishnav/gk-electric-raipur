import { useQuery } from "@tanstack/react-query";

export function useSystemGroup() {
    return useQuery({
        queryKey: ['system-groups'],
        queryFn: async () => {
            const res = await fetch("/api/system-groups");
            console.log(res);
            if (!res.ok) {
                throw new Error("Failed to fetch system-groups")
            }
            return res.json()
        }
    })
}
