import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
// import TwitterProvider from "next-auth/providers/twitter";
// import DiscordProvider from "next-auth/providers/discord";
// import LinkedInProvider from "next-auth/providers/linkedin";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db";
import { Role } from "src/types/next-auth.d";

const canBeAdmin = ["mr.webdevsemail@gmail.com"];

export const authOptions: NextAuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      const { email, image, name } = user;
      try {
        const userExist = await prisma.user.findUnique({
          where: { email: user?.email as string },
        });

        if (!userExist) {
          await prisma.user.create({
            data: {
              email,
              image,
              name,
              role: canBeAdmin.includes(email as string)
                ? Role.ADMIN
                : Role.USER,
              providers: account?.provider ? [account?.provider] : [],
            },
          });
        } else if (
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          !userExist.providers?.includes(account?.provider as string)
        ) {
          await prisma.user.update({
            where: { email: userExist.email as string },
            data: {
              providers: [
                account?.provider as string,
                ...((userExist.providers || []) as []),
              ],
            },
          });
        }
        return true;
      } catch (error) {
        return false;
      }
    },
    session({ session, token }) {
      return {
        ...session,
        role: token.role as Role,
        providers: token?.providers as string[],
      };
    },
    async jwt({ token }) {
      if (token?.email) {
        const user = await prisma.user.findUnique({
          where: { email: token.email },
          select: { role: true, providers: true },
        });
        if (!user) return {};
        return {
          ...token,
          ...user,
        };
      }
      return {};
    },
  },
  // Configure one or more authentication providers
  // adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    // TwitterProvider({
    //   clientId: env.GITHUB_CLIENT_ID,
    //   clientSecret: env.GITHUB_CLIENT_SECRET,
    // }),
    // DiscordProvider({
    //   clientId: env.DISCORD_CLIENT_ID,
    //   clientSecret: env.DISCORD_CLIENT_SECRET,
    // }),
    // LinkedInProvider({
    //   clientId: env.LINKEDIN_CLIENT_ID,
    //   clientSecret: env.LINKEDIN_CLIENT_SECRET,
    // }),
    /**
     * ...add more providers here
     *
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the
     * `refresh_token_expires_in` field to the Account model. Refer to the
     * NextAuth.js docs for the provider you want to use. Example:
     * @see https://next-auth.js.org/providers/github
     */
  ],
  session: { strategy: "jwt" },
};

export default NextAuth(authOptions);
