import { z } from "zod";

export const PartTypeSchema = z.object({
  code: z.string().min(1).max(1),
  name: z.string().min(1),
  active: z.boolean().default(true),
});

export type PartTypeInput = z.infer<typeof PartTypeSchema>;