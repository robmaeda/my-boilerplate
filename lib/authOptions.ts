import { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import client from "./mongodb";
import { databaseName, usersCollection } from "@/app/utils";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                },
            },
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                const dbClient = await client.connect();
                const db = dbClient.db(databaseName);

                const user = await db
                    .collection(usersCollection)
                    .findOne({ email: credentials?.email });

                const isPasswordCorrect = await bcrypt.compare(
                    credentials?.password || "",
                    user?.password,
                );

                if (isPasswordCorrect) {
                    return {
                        id: user?._id,
                        email: user?.email,
                        name: user?.username,
                    } as unknown as User;
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async session({ session, user }) {
            if (session && session.user && user && user.name) {
                session.user.name = user.name;
            }
            return session;
        },
    },
};
