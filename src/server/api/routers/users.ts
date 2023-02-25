import { createTRPCRouter, protectedProcedure } from "../trpc";

export const usersRouter = createTRPCRouter({
  me: protectedProcedure.query(({ ctx }) =>
    ctx.prisma.user.findUnique({ where: { id: ctx.session.user.id } })
  ),
});
