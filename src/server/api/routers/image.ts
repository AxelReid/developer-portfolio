import { dest, imgBase } from "@static/index";
import { readdirSync } from "fs";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const imagesRouter = createTRPCRouter({
  getAll: publicProcedure.query(
    () => readdirSync(dest).map((name) => imgBase + name) || []
  ),
});
