import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export default async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { token } = reqBody;

        const user = await prisma.user.findFirst({
            where: {
                verifyToken: token,
                verifyTokenExpiry: {
                    
                }
            }
        })

        if(!user) {
            return NextResponse.json({ message: "Invalid token" }, { status: 501 });
        }

        // const verifyResponse = await prisma.user.update({
            
        // })
    } catch (err: any) {
        console.log(err.message);
        return NextResponse.json({ message: "Error while verifying user!!!" }, { status: 501 });
    }
}
