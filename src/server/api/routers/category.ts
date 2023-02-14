import { z } from "zod";
import { handleAsyncErr } from "../root";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const category = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string().min(2) }))
    .mutation(async ({ ctx, input }) => {
      try {
        ctx.checkAdmin();
        return await ctx.prisma.projectCategory.create({ data: input });
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
        return await ctx.prisma.projectCategory.update({
          where: { id },
          data: { name },
        });
      } catch (error) {
        handleAsyncErr(error);
      }
    }),
  remove: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        ctx.checkAdmin();
        return await ctx.prisma.projectCategory.delete({
          where: { id: input.id },
        });
      } catch (error) {
        throw new Error("Something went wrong");
      }
    }),
  getAll: publicProcedure.query(({ ctx }) =>
    ctx.prisma.projectCategory.findMany({
      select: { id: true, name: true, _count: { select: { projects: true } } },
    })
  ),
});
