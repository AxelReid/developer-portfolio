import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const projectRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        tagIds: z.array(z.string()),
        categoryIds: z.array(z.string()),
        image: z.string(),
        demo_link: z.string().optional(),
        code_link: z.string().optional(),
      })
    )
    .mutation(({ input, ctx }) => {
      ctx.checkAdmin();
      return ctx.prisma.project.create({
        data: {
          ...input,
          tagIds: { set: input.tagIds },
          categoryIds: { set: input.categoryIds },
        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.project.findMany({
      include: {
        categories: { select: { id: true } },
        tags: { select: { name: true } },
      },
    });
  }),
});
