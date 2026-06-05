import { z } from "zod";

export const ImportIndigenousSchema = z.object({
  code: z.enum(["I", "N"]),
  name: z.string().min(1),
  active: z.boolean().default(true),
});

export type ImportIndigenousInput =
  z.infer<typeof ImportIndigenousSchema>;