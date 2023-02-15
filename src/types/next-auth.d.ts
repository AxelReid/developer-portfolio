import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    role?: Role;
    user?: {
      id: string;
    } & DefaultSession["user"];
  }
}

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}
