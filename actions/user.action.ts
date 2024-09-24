"use server"

import { prisma } from "@/app/lib/prisma";
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";

export const getCurrentUser = async() => {
    try {
        const session = await getServerSession(authOptions);

        if(session?.user?.email) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session?.user?.email as string
            }
        })

        if(!currentUser) {
            return null;
        }

        return currentUser;
    } catch(err: any) {
        return null;
    }
}