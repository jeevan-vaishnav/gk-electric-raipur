import { z } from "zod";

export const SystemGroupSchema = z.object({
  code: z.string().min(1).max(1),
  name: z.string().min(1),
  description: z.string().default(""),
  active: z.boolean().default(true),
});

export type SystemGroupInput = z.infer<typeof SystemGroupSchema>;