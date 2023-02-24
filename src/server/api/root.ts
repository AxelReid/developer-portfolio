import { createTRPCRouter } from "./trpc";
import { projectRouter } from "./routers/project";
import { category } from "./routers/category";
import { tags } from "./routers/tags";
// import { imagesRouter } from "./routers/image";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  project: projectRouter,
  category: category,
  tags: tags,
  // images: imagesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

export const handleAsyncErr = (error: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  if (error?.message?.includes("Unique")) {
    throw new Error("Already exists!");
  }
  throw new Error("Something went wrong");
};
