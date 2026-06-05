import { z } from "zod";

export const VariantSchema = z.object({
  code: z.string().regex(/^\d{2}$/,
      "Code must be 00-99"
    ),

  category: z.string().min(1),
  value: z.string().min(1),
  useCase: z.string().optional(),
  active: z.boolean().default(true),
});

export type VariantInput =z.infer<typeof VariantSchema>;