import { createTRPCRouter, publicProcedure } from "../trpc";

export const category = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) =>
    ctx.prisma.projectCategory.findMany({ select: { id: true, name: true } })
  ),
});
