import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const projectRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        tagIds: z.array(z.string()),
        imageId: z.string().optional(),
        demo_link: z.string().optional(),
        source_link: z.string().optional(),
      })
    )
    .mutation(({ input, ctx }) => {
      ctx.checkAdmin();
      return ctx.prisma.project.create({
        data: {
          ...input,
          tagIds: { set: input.tagIds },
        },
      });
    }),
  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string(),
        tagIds: z.array(z.string()),
        imageId: z.string().optional(),
        demo_link: z.string().optional(),
        source_link: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      ctx.checkAdmin();
      const { id, imageId, ...rest } = input;

      const project = await ctx.prisma.project.findUnique({ where: { id } });
      if (!project) throw new Error("project not found!");

      return ctx.prisma.project.update({
        where: { id },
        data: {
          ...rest,
          imageId: imageId || (project.imageId as string),
          tagIds: input.tagIds,
        },
      });
    }),

  getAll: publicProcedure
    .input(
      z
        .object({
          includeUnPublished: z.boolean().default(false),
        })
        .optional()
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.project.findMany({
        where: {
          ...(!input?.includeUnPublished ? { published: true } : {}),
        },
        include: {
          tags: { select: { name: true, id: true } },
          image: { select: { url: true } },
        },
      });
    }),
  publish: protectedProcedure
    .input(z.object({ id: z.string(), published: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      ctx.checkAdmin();
      const data = await ctx.prisma.project.update({
        where: { id: input.id },
        data: { published: input.published },
      });
      return data.published;
    }),
  remove: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      ctx.checkAdmin();
      return ctx.prisma.project.delete({ where: { id: input.id } });
    }),
});
