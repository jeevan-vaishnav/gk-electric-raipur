// import { useQuery } from "@tanstack/react-query";

// export function useFunctions() {
//     return useQuery({
//         queryKey: ['functions'],
//         queryFn: async () => {
//             const res = await fetch("/api/functions");
//             console.log(res);
//             if (!res.ok) {
//                 throw new Error("Failed to fetch funtions")
//             }
//             return res.json()
//         }
//     })
// }

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { toast } from "sonner";
// import { createFunctionMutation } from "../api/mutations";
// import { functionKeys } from "../api/queries";

// export function useCreateFunction() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     ...createFunctionMutation,

//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: functionKeys.all,
//       });

//       toast.success("Function created successfully");
//     },

//     onError: (error: Error) => {
//       toast.error(error.message);
//     },
//   });
// }