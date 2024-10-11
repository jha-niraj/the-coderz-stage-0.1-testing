"use client"

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconArrowLeft, IconBrandTabler, IconSettings, IconUserBolt } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/app/lib/utils";
import Footer from "@/components/footer";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { BookOpen, Building2, ChartNoAxesGantt, LogIn, Users2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useTheme } from "next-themes"
import { ModeToggle } from "@/components/modetoggle";


export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const { data: session, status } = useSession();
    const router = useRouter();
    const { theme, setTheme } = useTheme();

    const handleSignOut = async () => {
        try {
            await signOut({ redirect: false });
            toast.success("Logged out successfully");
        } catch (err: any) {
            console.log("Error Occurres: " + err);
            toast.error("Error while logging out!!!");
        } finally {
            router.push("/");
        }
    };

    const links = [
        {
            label: "Dashboard",
            href: "/dashboard",
            icon: (
                <IconBrandTabler className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Profile",
            href: "/profile",
            icon: (
                <IconUserBolt className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Pathways",
            href: "/pathways",
            icon: (
                <ChartNoAxesGantt className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            )
        },
        {
            label: "Projects",
            href: "/projects",
            icon: (
                <ChartNoAxesGantt className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            )
        },
        {
            label: "Communities",
            href: "/communities",
            icon: (
                <Users2 className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Services",
            href: "/services",
            icon: (
                <Building2 className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "About Us",
            href: "/aboutus",
            icon: (
                <BookOpen className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        }
    ];

    const nonAuthenticatedLinks = [
        {
            label: "About Us",
            href: "/aboutus",
            icon: (
                <BookOpen className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            )
        },
        {
            label: "Pathways",
            href: "/pathways",
            icon: (
                <ChartNoAxesGantt className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            )
        },
        {
            label: "Projects",
            href: "/projects",
            icon: (
                <ChartNoAxesGantt className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            )
        },
        {
            label: "Services",
            href: "/services",
            icon: (
                <Building2 className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];

    return (
        <div
            className={cn(
                "flex flex-col dark:bg-dot-white/[0.2] bg-dot-black/[0.2] w-full flex-1 mx-auto dark:border-neutral-700 overflow-hidden transition-all"
            )}
        >
            <Toaster />
            <Sidebar open={open} setOpen={setOpen} animate={false}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        <>
                            <Logo open={open} />
                        </>
                        <>
                            {
                                status === "authenticated" ?
                                    <div className="mt-8 flex flex-col gap-3">
                                        {
                                            links.map((link, idx) => (
                                                <SidebarLink key={idx} link={link} />
                                            ))
                                        }
                                        <div className="flex gap-5 items-center text-white cursor-pointer" onClick={handleSignOut}>
                                            <IconArrowLeft className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                                            <p className="hover:pl-2 transition-all duration-200">Logout</p>
                                        </div>
                                    </div>
                                    :
                                    <div className="mt-12 flex flex-col gap-3">
                                        {
                                            nonAuthenticatedLinks.map((link, idx) => (
                                                <SidebarLink key={idx} link={link} />
                                            ))
                                        }
                                    </div>
                            }
                        </>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        {status === "authenticated" ? (
                            <SidebarLink
                                link={{
                                    label: session?.user?.name!,
                                    href: "#",
                                    icon: (
                                        <Image
                                            src={session?.user?.image!}
                                            className="h-7 w-7 flex-shrink-0 rounded-full"
                                            width={50}
                                            height={50}
                                            alt="Avatar"
                                        />
                                    ),
                                }}
                            />
                        ) : open ? (
                            <button
                                onClick={() => router.push("/signin")}
                                className="inline-flex h-8 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-white transition-colors focus:outline-none hover:border-2 hover:border-white"
                            >
                                Sign In
                            </button>
                        ) : (
                            <LogIn size={32} className="text-white" />
                        )}
                    </div>
                </SidebarBody>
            </Sidebar>
            <div className="hidden md:block">
                <ModeToggle />
            </div>
            <main className={`${open ? "pl-[200px]" : "md:pl-[60px]"} transition-all duration-300 pt-12 md:pt-0`}>
                {
                    children
                }
                <Footer />
            </main>
        </div >
    )
}

export const Logo = ({ open }: { open: boolean }) => {
    return (
        <Link
            href="/"
            className="font-bold flex space-x-2 items-center text-lg text-black py-1 relative z-20"
        >
            {
                open ?
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-bold flex items-center text-2xl justify-center gap-4 text-white dark:text-white whitespace-pre"
                    >
                        The Coder&apos;z
                    </motion.span>
                    :
                    <h1 className="text-white font-bold text-xl">C&apos;z</h1>
            }
        </Link>
    );
};
export const LogoIcon = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <div className="h-5 w-6 bg-white dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        </Link>
    );
};