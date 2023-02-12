import { createTRPCRouter, publicProcedure } from "../trpc";

export const tags = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) =>
    ctx.prisma.tag.findMany({ select: { id: true, name: true } })
  ),
});
