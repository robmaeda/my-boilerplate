import { NextRequest, NextResponse } from "next/server";
import client from "../../../lib/mongodb";
import { databaseName, usersCollection } from "@/app/utils";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
    try {
        const { email, password, username } = await req.json();

        const hashedPassword = await bcrypt.hash(password, 10);

        const dbClient = await client.connect();
        const db = dbClient.db(databaseName);

        // Create new user. Modify this to include other items or data
        await db.collection(usersCollection).insertOne({
            email,
            password: hashedPassword,
            username,
            createdAt: new Date(),
        });

        return NextResponse.json(
            {
                message: "New user created successfully",
            },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            {
                error: `Error creating new user: ${error}`,
            },
            { status: 500 },
        );
    }
}
