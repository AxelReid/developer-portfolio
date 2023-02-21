import type { inferReactQueryProcedureOptions } from "@trpc/react-query";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "src/server/api/root";

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
export type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>;

export type TagsGetAll = RouterOutput["tags"]["getAll"];
export type TagType = RouterOutput["tags"]["getAll"][0];
export type CategoriesGetAll = RouterOutput["category"]["getAll"];
export type ProjectsGetAll = RouterOutput["project"]["getAll"];
export type ProjectType = RouterOutput["project"]["getAll"][0];
export type CategoryType = RouterOutput["category"]["getAll"][0];

export type CreateProjectInput = RouterInput["project"]["create"];
