"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/app/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MenuIcon, User, X } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import ShinyButton from "@/components/ui/shiny-button";
import { ModeToggle } from "@/components/modetoggle";
import { AnimatePresence, motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import mainWebLogo from "@/app/lib/WhatsApp Image 2024-10-09 at 19.48.26.jpeg";
import Image from "next/image";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const { data: session, status } = useSession();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(c => !c);

    return (
        <div
            className={cn("fixed top-5 inset-x-0 max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto z-50 transition-all duration-200", className)}
        >
            <Menu setActive={setActive}>
                <Link href="/" className="flex gap-2 items-center justify-center">
                    <Image 
                        src={mainWebLogo}
                        alt="Main Web Logo"
                        height={40}
                        width={40}
                        className="rounded-full"
                    />
                    <h1 className="">The Coder&apos;z</h1>
                </Link>
                <div className="hidden md:flex items-center justify-center gap-10">
                    <MenuItem setActive={setActive} active={active} item="Exclusives">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/projects">Projects</HoveredLink>
                            <HoveredLink href="/pathways">Pathways</HoveredLink>
                            <HoveredLink href="">Open Source(coming soon)</HoveredLink>
                        </div>
                    </MenuItem>
                    <Link href="/aboutus">
                        About Us
                    </Link>
                    <Link href="/communities">
                        Communities
                    </Link>
                    <MenuItem setActive={setActive} active={active} item="Services">
                        <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                            <ProductItem
                                title="Website Design"
                                href="/services"
                                src="https://assets.aceternity.com/demos/algochurn.webp"
                                description="Prepare for tech interviews like never before."
                            />
                            <ProductItem
                                title="Website Development"
                                href="/services"
                                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                                description="Production ready Tailwind css components for your next project"
                            />
                            <ProductItem
                                title="Social Media Management"
                                href="/services"
                                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                                description="Never write from scratch again. Go from idea to blog in minutes."
                            />
                            <ProductItem
                                title="Video Editing"
                                href="/services"
                                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                            />
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Pricing">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/hobby">Hobby</HoveredLink>
                            <HoveredLink href="/individual">Individual</HoveredLink>
                            <HoveredLink href="/team">Team</HoveredLink>
                            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                        </div>
                    </MenuItem>
                </div>
                <div className="hidden md:flex gap-2 items-center justify-center">
                    <div>
                        <ModeToggle />
                    </div>
                    {
                        status === "authenticated" ?
                            <DropdownMenu>
                                <DropdownMenuTrigger className="focus:outline-none">
                                    <Avatar>
                                        <AvatarImage src={session?.user?.image!} alt="@shadcn" />
                                        <AvatarFallback><User size={24} /></AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-36">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-500">Log Out</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            :
                            <Link href="/signin" className="w-full mx-auto">
                                <ShinyButton>Sign In</ShinyButton>
                            </Link>
                    }
                </div>
                <div className="md:hidden flex gap-3 items-center justify-center">
                    <ModeToggle />
                    <div onClick={toggleMobileMenu}>
                        <MenuIcon size={36} />
                    </div>
                </div>
            </Menu>
            <AnimatePresence>
                {
                    isMobileMenuOpen && (
                        <motion.div
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "-100%", opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                            className={cn(
                                "fixed h-full w-full inset-0 bg-black dark:bg-black p-10 z-[50] flex flex-col justify-between",
                                className
                            )}
                        >
                            <div
                                className="absolute cursor-pointer right-8 top-12 z-50 text-white dark:text-neutral-200"
                                onClick={toggleMobileMenu}
                            >
                                <X size={32} />
                            </div>
                            <div className="flex flex-col space-y-6 pt-4">
                                <Link href="/web-dev" className="text-lg">Web Development</Link>
                                <Link href="/interface-design" className="text-lg">Interface Design</Link>
                                <Link href="/seo" className="text-lg">Search Engine Optimization</Link>
                                <Link href="/branding" className="text-lg">Branding</Link>
                                <Link href="/aboutus" className="text-lg">About Us</Link>
                                <Link href="/services" className="text-lg">Services</Link>
                                <Link href="/pricing" className="text-lg">Communities</Link>
                                {
                                    status === "authenticated" ? (
                                        <>
                                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                                <User size={24} className="text-gray-600" />
                                                <h1>{session?.user?.name}</h1>
                                            </div>
                                        </>
                                    ) : (
                                        <Link href="/signin" className="w-full flex items-center justify-center">
                                            <ShinyButton className="w-full">Sign In</ShinyButton>
                                        </Link>
                                    )
                                }
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    );
}
