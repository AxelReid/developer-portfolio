import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const feedbacksRouter = createTRPCRouter({
  add: protectedProcedure
    .input(
      z.object({
        bio: z.string(),
        feedback: z.string(),
        rating: z.number().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const exists = await ctx.prisma.feedback.findUnique({
        where: { userId },
      });
      if (exists)
        return { data: exists, message: "You gave a feedback before." };

      const data = await ctx.prisma.feedback.create({
        data: { userId, ...input },
      });
      return {
        data,
        message: "Feedback is successfully sent. Thank you so much!",
      };
    }),
  publish: protectedProcedure
    .input(z.object({ id: z.string(), published: z.boolean() }))
    .mutation(({ ctx, input }) =>
      ctx.prisma.feedback.update({
        where: { id: input.id },
        data: { published: input.published },
      })
    ),
  getAll: publicProcedure
    .input(
      z.object({ includeUnPublished: z.boolean().optional().default(false) })
    )
    .query(({ ctx, input }) => {
      const where = !input.includeUnPublished
        ? {
            published: true,
          }
        : {};
      return ctx.prisma.feedback.findMany({
        where,
        orderBy: { createdAt: "asc" },
      });
    }),
  getMine: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.feedback.findUnique({
      where: { userId: ctx.session.user.id },
    });
  }),
});
