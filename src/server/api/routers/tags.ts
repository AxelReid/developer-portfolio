import { z } from "zod";
import { handleAsyncErr } from "../root";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

// TODO: secure these all after auth workig
export const tags = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) =>
    ctx.prisma.tag.findMany({
      select: { id: true, name: true, _count: { select: { projects: true } } },
    })
  ),
  create: protectedProcedure
    .input(z.object({ name: z.string().min(2) }))
    .mutation(async ({ ctx, input }) => {
      try {
        ctx.checkAdmin();
        return await ctx.prisma.tag.create({ data: input });
      } catch (error) {
        handleAsyncErr(error);
      }
    }),
  update: protectedProcedure
    .input(z.object({ id: z.string(), name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        ctx.checkAdmin();
        const { id, name } = input;
        return await ctx.prisma.tag.update({
          where: { id },
          data: { name },
        });
      } catch (error) {
        handleAsyncErr(error);
      }
    }),
  remove: protectedProcedure
    .input(z.object({ ids: z.array(z.string()) }))
    .mutation(async ({ ctx, input }) => {
      try {
        ctx.checkAdmin();
        return await ctx.prisma.tag.deleteMany({
          where: { id: { in: input.ids } },
        });
      } catch (error) {
        handleAsyncErr(error);
      }
    }),
});
