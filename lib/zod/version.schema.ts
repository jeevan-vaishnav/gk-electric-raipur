import { z } from "zod";

export const VersionSchema = z.object({
  code: z.string().regex(/^[A-Z][0-9]$/,
      "Code must be like E0, E1, E2, A1, A2"
    ),
  stage: z.string().min(1),
  description: z.string().optional().default(""),
  active: z.boolean().default(true),
});

export type VersionInput =z.infer<typeof VersionSchema>;