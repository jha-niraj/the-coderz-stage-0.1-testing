import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { RequestBody } from "@/types";
import { sendEmail } from "@/utils/mail";

export async function POST(request: NextRequest) {
    try {
        const body: RequestBody = await request.json();
        const { fullname, email, password } = body;

        console.log(body);

        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(existingUser) {
            return NextResponse.json({ message: "User alreay exist with this email" }, { status: 501 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Now create a verify token and verify expiry time
        const verifyToken = Math.random().toString(36).substring(2); // Simple token for example purpose
        const verifyTokenExpiry = new Date();
        verifyTokenExpiry.setHours(verifyTokenExpiry.getHours() + 72); // Token will be valid for 3 days

        // Now create a new user in the database:
        const user = await prisma.user.create({
            data: {
                fullname,
                email,
                hashedPassword,
                verifyToken,
                verifyTokenExpiry
            }
        })

        // After you have created the user in the database, send an verification email to the user:
        // await sendEmail({ email, emailType: "VERIFY", userId: user?.id });

        return NextResponse.json({ message: "Sign Up Successful", user }, { status: 200 });
    } catch(err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}