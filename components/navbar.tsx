"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen, Users, Heart, ChevronDown, Menu, X, BookCopy, Router, Building2 } from 'lucide-react';
import { Button } from './ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import logo from "@/public/images/TheCoder'z.jpeg";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub, IconBrandX, IconExchange, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react";
import Image from 'next/image';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [navbarVisible, setNavbarVisible] = useState(false);
    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (navbarVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [navbarVisible]);

    const navbarLinks = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Products",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Components",
            icon: (
                <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Changelog",
            icon: (
                <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];

    const desktopNavbar = [
        {
            title: "Programming Languages",
            href: "/resource/programminglanguages"
        },
        {
            title: "Full Stack Web Development",
            href: "/resource/fullstackdevelopment"
        },
        {
            title: "Database Management",
            href: "/resources/database"
        }
    ]

    const handleLogOut = async () => {
        await signOut();
        router.push("/");
    }

    return (

        <nav
            className={`
                fixed h-10 px-4 py-8 flex flex-row md:hidden bg-neutral-900 items-center z-50 justify-between dark:bg-neutral-800 w-full 
                ${scrollPosition > 0 ? "bg-black border-b bg-opacity-70 rounded-lg" : "bg-transparent"}
              `}
        >
            <div className={`flex items-center justify-between w-full p-2`}>
                <div className="flex justify-between items-center w-full">
                    <div onClick={() => router.push("/")} className="text-white cursor-pointer text-2xl font-bold flex items-center space-x-2">
                        <Image
                            src={logo}
                            alt="Main Logo"
                            height={40}
                            width={60}
                            className='rounded-2xl'
                        />
                        {/* <span className='font-semibold text-xl hidden sm:block'>The Coder's</span> */}
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="relative group">
                            <button className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center space-x-1 rounded-md p-2">
                                <span className="font-bold text-sm font-poppins transition-transform duration-300 transform group-hover:scale-105">Resources</span>
                                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                            </button>
                            <div className="absolute z-50 left-1/2 transform -translate-x-1/2 mt-2 w-56 rounded-xl shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                                <div className="py-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    {desktopNavbar.map((item, index) => (
                                        <Link key={index} href={item?.href} className="block px-4 py-2 text-sm font-bold font-poppins text-white hover:bg-gray-700 hover:text-white transition-colors duration-200 rounded-md transform hover:scale-105" role="menuitem">
                                            {item.title}
                                        </Link>
                                    ))}
                                    <span className="block px-4 py-2 text-sm font-poppins text-gray-400 italic" role="menuitem">
                                        More coming soon...
                                    </span>
                                </div>
                            </div>
                        </div>
                        {[
                            { text: 'About Us', icon: BookOpen, link: '/aboutus' },
                            { text: 'Community', icon: Users, link: '/aboutus' },
                            { text: 'Services', icon: Building2, link: '/aboutus' },
                            { text: 'Support Us', icon: Heart, link: '/aboutus' }
                        ].map((item, index) => (
                            <Link key={index} href={item?.link!} className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center space-x-1 group">
                                <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                                <span className="font-bold text-sm font-poppins transition-transform duration-300 transform group-hover:scale-105">{item.text}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center pr-2">
                        {
                            status === "authenticated" ?
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="focus:outline-none">
                                        <Avatar>
                                            <AvatarImage src={session.user?.image || ''} alt={session.user?.name || ''} />
                                            <AvatarFallback>{session.user?.name?.charAt(0) || 'U'}</AvatarFallback>
                                        </Avatar>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-38" align="end" forceMount>
                                        <DropdownMenuLabel className="font-normal">
                                            <div className="flex flex-col space-y-1">
                                                <p className="text-sm font-medium leading-none">{session?.user?.name}</p>
                                            </div>
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem asChild className="cursor-pointer hover:bg-gray-200">
                                            <Link href="/dashboard">Dashboard</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild className="cursor-pointer">
                                            <Link href="/settings">Settings</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="cursor-pointer" onClick={handleLogOut}>
                                            Log out
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                :
                                <button onClick={() => router.push("/signin")} className="inline-flex h-8 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-white transition-colors focus:outline-none hover:border-2 hover:border-white">
                                    Sign In
                                </button>
                        }
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <FloatingDock
                desktopClassName="h-16 bg-transparent"
                items={navbarLinks}
            />
        </nav>
    );
};

export default Navbar;