"use server"
import db from "@repo/db/client";
import bcrypt from "bcrypt";
export async function register(name: string, number: string, password: string) {
    try {
        const existingUser = await db.user.findFirst({
            where: {
                number: number
            }
        });
        const hashedPassword = await bcrypt.hash(password, 10);
        if (existingUser) {
            return {
                error: "User already exists"
            };
        }

        const user = await db.user.create({
            data: {
                name: name,
                number: number,
                password: hashedPassword
            }
        });

        if (user) {
            return {
                success: true,
                user: user
            };
        } else {
            throw new Error("User creation failed"); // Throw an error if user creation fails
        }
    } catch (e) {
        console.error("Error in register function:", e); // Log the error for debugging

       
        return {
            error: "Failed to register user"
        };
    }
}
