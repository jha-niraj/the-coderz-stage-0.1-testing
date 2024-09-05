import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export default async function POST(request: NextRequest) {
    try {
        
    } catch (err: any) {
        console.log(err.message);
        return NextResponse.json({ message: "Error while signing up!!!" }, { status: 501 });
    }
}
