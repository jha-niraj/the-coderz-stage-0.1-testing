import { useSession } from "next-auth/react";
import DashboardPage from "./_components/page";
import { prisma } from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { useRouter } from "next/navigation";

export default async function Dashboard() {

    return (
        <section>
            <DashboardPage />
        </section>
    )
}