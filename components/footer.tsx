"use client"

import { motion } from "framer-motion";
import { ChevronUp, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="text-white bg-black py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">The Coder'z</h3>
                        <p className="mb-4">Empowering developers with cutting-edge resources and a supportive community.</p>
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
                    <div>
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
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Support</h4>
                        <ul className="space-y-2">
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
                <div className="mt-8 pt-8 border-t border-gray-700 flex justify-between items-center">
                    <p>&copy; 2024 The Coder'z. All rights reserved.</p>
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