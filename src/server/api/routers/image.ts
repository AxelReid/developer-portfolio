import { createTRPCRouter, publicProcedure } from "../trpc";

export const imagesRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    const images: { id: string; url: string }[] = [];
    return images;
  }),
});
