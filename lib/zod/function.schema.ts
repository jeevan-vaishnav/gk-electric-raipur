import { z } from "zod";

export const FunctionSchema = z.object({
    // functionNo: z.number().int().positive(),
    functionNo: z
        .string()
        .regex(/^\d{3}$/, "Function No must be 3 digits"),
    groupName: z.string().min(1),
    groupCode: z.string().min(1),
    name: z.string().min(1),
    description: z.string().optional().default(""),
    active: z.boolean().default(true),
})
export type FunctionInput = z.infer<typeof FunctionSchema>
