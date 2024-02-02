import NextAuth from "next-auth/next";
import { db } from "@/app/_lib/prisma"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";


const handle = NextAuth({
  adapter: PrismaAdapter(db) as Adapter,
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  }),
  ],
})

export { handle as GET, handle as POST }
