import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        const existingGuest = await getGuest(user.email);

        if (!existingGuest)
          await createGuest({ fullName: user.name, email: user.email });

        return true;
      } catch (err) {
        return false;
      }
    },
    async session({ session }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
