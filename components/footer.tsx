"use client"

import { motion } from "framer-motion";
import { ChevronUp, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="text-black dark:text-white mx-auto py-4 max-w-xl md:max-w-3xl lg:max-w-7xl">
            <div className="container mx-auto px-4 mb-2">
                <div className="flex flex-col gap-8 mb-8">
                    <div className="flex items-start sm:items-center gap-3 flex-col sm:flex-row sm:justify-between">
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-bold">The Coder&apos;z</h3>
                            <p className="">Empowering developers with cutting-edge resources and a supportive community.</p>
                        </div>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-blue-400 transition-colors">
                                <Github className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="hover:text-blue-400 transition-colors">
                                <Twitter className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="hover:text-blue-400 transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-start sm:items-center sm:justify-between gap-4 flex-col sm:flex-row">
                    <div className="">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="hover:text-blue-400 transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-blue-400 transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-blue-400 transition-colors">Courses</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-blue-400 transition-colors">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h4 className="text-lg text-right font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 sm:text-right">
                            <li>
                                <Link href="#" className="hover:text-blue-400 transition-colors">FAQ</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-blue-400 transition-colors">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-2 border-t border-gray-700 flex justify-between items-center">
                    <p>&copy; 2024 The Coder&apos;z. All rights reserved.</p>
                    <motion.button
                        onClick={scrollToTop}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronUp className="w-6 h-6" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;