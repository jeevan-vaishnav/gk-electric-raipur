import { z } from "zod";

export const PartSchema = z.object({
  partName: z.string().min(1),
  description: z.string().optional(),
  partTypeCode: z.string().min(1),
  systemGroupCode: z.string().min(1),
  functionNo: z.number().int().positive(),
  importCode: z.string().min(1),
  supplierCode: z.string().min(1),
  variantCode: z.string().min(2),
  versionCode: z.string().min(2),
  active: z.boolean().default(true),
});

export type PartInput = z.infer<typeof PartSchema>;