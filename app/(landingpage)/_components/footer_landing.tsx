import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-white text-lg font-semibold mb-4">EduTech Pro</h2>
                        <p className="text-sm">Empowering learners worldwide with cutting-edge online education.</p>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
                        <form className="flex flex-col space-y-2">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700">
                    <div className="flex justify-between items-center">
                        <p className="text-sm">&copy; 2024 EduTech Pro. All rights reserved.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;