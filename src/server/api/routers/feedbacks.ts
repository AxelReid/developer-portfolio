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
      const exists = await ctx.prisma.feedback.findFirst({
        where: {
          user: { email: ctx.session.user.email, id: ctx.session.user.id },
        },
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
  addManual: protectedProcedure
    .input(
      z.object({
        bio: z.string(),
        feedback: z.string(),
        rating: z.number().optional(),
        name: z.string(),
        imageId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      ctx.checkAdmin();
      return await ctx.prisma.feedback.create({
        data: { ...input, userId: ctx.session.user.id },
      });
    }),
  edit: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        feedback: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const data = await ctx.prisma.feedback.update({
        where: { id: input.id },
        data: {
          feedback: input.feedback,
        },
      });
      return data.feedback;
    }),
  publish: protectedProcedure
    .input(z.object({ id: z.string(), published: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      ctx.checkAdmin();
      const data = await ctx.prisma.feedback.update({
        where: { id: input.id },
        data: { published: input.published },
      });
      return data.published;
    }),
  getAll: publicProcedure
    .input(
      z.object({ includeUnPublished: z.boolean().optional().default(false) })
    )
    .query(async ({ ctx, input }) => {
      const where = !input.includeUnPublished
        ? {
            published: true,
          }
        : {};
      const reviews = await ctx.prisma.feedback.findMany({
        where,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          bio: true,
          createdAt: true,
          published: true,
          feedback: true,
          rating: true,
          avatar: true,
          name: true,
          user: {
            select: { name: true, image: true },
          },
        },
      });
      return reviews.map(({ avatar, name, user, ...rest }) => {
        return {
          ...rest,
          user: {
            name: (name as string) || (user as { name: string })?.name,
            image:
              (avatar?.url as string) || (user as { image: string })?.image,
          },
        };
      });
    }),
  getMine: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.feedback.findFirst({
      where: {
        user: { email: ctx.session.user.email, id: ctx.session.user.id },
      },
    });
  }),
});
