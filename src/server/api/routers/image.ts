import { imgBase } from "@static/index";
import { readdirSync } from "fs";
import { dest } from "src/pages/api/upload";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const imagesRouter = createTRPCRouter({
  getAll: publicProcedure.query(
    () => readdirSync(dest).map((name) => imgBase + name) || []
  ),
});
