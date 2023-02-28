import firebase from "@utils/firebase";
import { getStorage } from "firebase/storage";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const imagesRouter = createTRPCRouter({
  getAll: protectedProcedure.query(() => {
    const storage = getStorage(firebase);
    console.log(storage);

    return "";
  }),
});
