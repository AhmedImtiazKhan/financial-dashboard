import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import type { User } from "@/app/lib/definitions";
import bcrypt from "bcrypt";

// Function to get user from the database
async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

// NextAuth configuration with Credentials provider
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig, // Spread the existing configuration

  providers: [
    Credentials({
      async authorize(credentials) {
        // Validate email and password using Zod
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          // Fetch user by email
          const user = await getUser(email);

          // If user not found, return null (invalid login)
          if (!user) return null;

          // Compare provided password with stored hash
          const passwordsMatch = await bcrypt.compare(password, user.password);

          // If passwords match, return user object
          if (passwordsMatch) return user;
        }

        // If validation fails or passwords don't match, return null
        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});
