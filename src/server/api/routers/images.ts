import { createTRPCRouter, protectedProcedure } from "../trpc";

export const imagesRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => ctx.prisma.image.findMany()),
});
