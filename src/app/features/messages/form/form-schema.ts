import { z } from 'zod';

export const createFormSchema = z.object({
  body: z.string().min(1, 'Pesan minimal 1 karakter').max(255, 'Pesan maksimal 255 karakter')
});

export type CreateFormSchema = z.infer<typeof createFormSchema>
