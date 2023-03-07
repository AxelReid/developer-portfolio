import firebase from "@utils/firebase";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
} from "firebase/storage";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const imagesRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) =>
    ctx.prisma.image.findMany({ orderBy: { createdAt: "desc" } })
  ),
  delete: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        url: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      ctx.checkAdmin();
      try {
        const storage = getStorage(firebase);
        const imgRef = ref(storage, input.url);
        const checkCloud = await getDownloadURL(imgRef)
          .then(() => true)
          .catch((error: { code: string }) => {
            return error?.code === "storage/object-not-found"
              ? false
              : { error };
          });

        if (checkCloud !== false) {
          await deleteObject(imgRef);
        }
        const res = await ctx.prisma.image.delete({ where: { id: input.id } });
        return !!res.id;
      } catch (error) {
        return false;
      }
    }),
});
