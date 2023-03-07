import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const certificatesRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z
        .object({
          includeUnPublished: z.boolean().default(false),
        })
        .optional()
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.certificate.findMany({
        where: {
          ...(!input?.includeUnPublished ? { published: true } : {}),
        },
        include: {
          image: { select: { url: true } },
        },
      });
    }),
  publish: protectedProcedure
    .input(z.object({ id: z.string(), published: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      ctx.checkAdmin();
      const data = await ctx.prisma.certificate.update({
        where: { id: input.id },
        data: { published: input.published },
      });
      return data.published;
    }),
  create: protectedProcedure
    .input(
      z.object({
        imageId: z.string().optional(),
        url: z.string().optional(),
      })
    )
    .mutation(({ input, ctx }) => {
      ctx.checkAdmin();
      return ctx.prisma.certificate.create({
        data: {
          ...input,
        },
      });
    }),
  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        imageId: z.string().optional(),
        url: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      ctx.checkAdmin();
      const { id, imageId, ...rest } = input;

      const cert = await ctx.prisma.certificate.findUnique({
        where: { id },
      });
      if (!cert) throw new Error("Certificate not found!");

      return ctx.prisma.certificate.update({
        where: { id },
        data: {
          ...rest,
          imageId: imageId || cert.imageId,
        },
      });
    }),
  remove: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      ctx.checkAdmin();
      return ctx.prisma.certificate.delete({ where: { id: input.id } });
    }),
});
