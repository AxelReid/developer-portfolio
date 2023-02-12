import { createTRPCRouter } from "./trpc";
import { projectRouter } from "./routers/project";
import { category } from "./routers/category";
import { tags } from "./routers/tags";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  project: projectRouter,
  category: category,
  tags: tags,
});

// export type definition of API
export type AppRouter = typeof appRouter;
