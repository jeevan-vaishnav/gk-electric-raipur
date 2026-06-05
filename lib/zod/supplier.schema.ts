import { z } from "zod";

export const SupplierSchema = z.object({
  code: z
    .string()
    .regex(
      /^[A-Z][1-9]$/,
      "Code must be A1-A9, B1-B9, etc."
    ),

  name: z.string().min(1),

  active: z.boolean().default(true),
});

export type SupplierInput = z.infer<typeof SupplierSchema>;