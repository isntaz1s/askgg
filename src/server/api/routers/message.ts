import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { messages } from "~/server/db/schema";

export const messageRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ body: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(messages).values({
        body: input.body
      });
    }),

  getLatest: protectedProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.query.posts.findFirst({
      orderBy: (messages, { desc }) => [desc(messages.createdAt)],
    });

    return post ?? null;
  }),
});
