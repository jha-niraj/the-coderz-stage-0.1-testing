"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Users, Heart, ChevronDown, Menu, X, BookCopy, Router } from 'lucide-react';
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const router = useRouter();

    return (
        <section className="w-full flex items-center justify-center">
            <nav
                className={`fixed top-0 left-0 right-0 flex flex-col items-center justify-between w-full z-50 ${scrollPosition > 0 ? "bg-black border-b bg-opacity-70 rounded-lg" : "bg-transparent"
                    }`}
            >
                <div className={`flex items-center justify-between w-full p-2`}>
                    <div className="flex justify-between items-center w-full">
                        <div onClick={() => router.push("/")} className="text-white cursor-pointer text-2xl font-bold flex items-center space-x-2">
                            <span className="text-blue-400 text-md">&#60;/&#62;</span>
                            <span className='font-semibold text-xl hidden sm:block'>The Coder's</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-6">
                            <div className="relative group">
                                <button className="text-white hover:text-blue-400 transition-colors flex items-center">
                                    Resources
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                                <div className="absolute z-50 left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <Link href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-blue-400" role="menuitem">
                                            Programming Languages
                                        </Link>
                                        <Link href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-blue-400" role="menuitem">
                                            Development Foundations
                                        </Link>
                                        <Link href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-blue-400" role="menuitem">
                                            Front-End Development
                                        </Link>
                                        <span className="block px-4 py-2 text-sm text-gray-400 italic" role="menuitem">
                                            More coming soon...
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Link href="#" className="text-white hover:text-blue-400 transition-colors flex items-center">
                                <BookOpen className="mr-1 h-4 w-4" />
                                About Us
                            </Link>
                            <Link href="#" className="text-white hover:text-blue-400 transition-colors flex items-center">
                                <Users className="mr-1 h-4 w-4" />
                                Community
                            </Link>
                            <Link href="#" className="text-white hover:text-blue-400 transition-colors flex items-center">
                                <Heart className="mr-1 h-4 w-4" />
                                Support Us
                            </Link>
                        </div>
                        <button onClick={() => router.push("/signin")} className="inline-flex h-8 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            Sign In
                        </button>
                    </div>
                </div>
            </nav>
            {/* Mobile Menu */}
            <TooltipProvider>
                <div className="md:hidden absolute bottom-0 bg-slate-200 bg-opacity-90 mb-3 w-[75%] sm:w-[60%] rounded-full">
                    <div className="flex items-center justify-center w-full gap-10 sm:gap-16 translate-x-[30]">
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href="#" className="text-black hover:text-blue-400 transition-colors flex items-center py-2">
                                    <BookCopy className="mr-2" size={20} />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Resources</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href="#" className="text-black hover:text-blue-400 transition-colors flex items-center py-2">
                                    <BookOpen className="mr-2 font-mini" size={20} />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>About Us</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href="#" className="text-black hover:text-blue-400 transition-colors flex items-center py-2">
                                    <Users className="mr-2" size={20} />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Community</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href="#" className="text-black hover:text-blue-400 transition-colors flex items-center py-2">
                                    <Heart className="mr-2" size={20} />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Support Us</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </div>
            </TooltipProvider>
        </section>
    );
};

export default Navbar;