"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { Router } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ContentUnavailablePage = () => {
    // const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    //     }, 1000);

    //     return () => clearInterval(timer);
    // }, []);

    // const formatTime = (time: number) => {
    //     const minutes = Math.floor(time / 60);
    //     const seconds = time % 60;
    //     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    // };

    const router = useRouter();

    const containerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const childVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black to-slate-200 flex items-center justify-center p-4">
            <Head>
                <title>Content Coming Soon</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <motion.div
                className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-3xl font-bold mb-4 text-indigo-700"
                    variants={childVariants}
                >
                    Content Coming Soon!
                </motion.h1>
                <motion.p
                    className="text-lg text-gray-600 mb-6"
                    variants={childVariants}
                >
                    We&apos;re working hard to bring you amazing content. It&apos;s not quite ready yet, but it will be worth the wait!
                </motion.p>
                {/* <motion.div
                    className="mb-6"
                    variants={childVariants}
                >
                    <p className="text-sm text-gray-500 mb-2">Estimated time until content is available:</p>
                    <p className="text-2xl font-semibold text-indigo-600">{formatTime(timeLeft)}</p>
                </motion.div> */}
                <motion.div
                    className="space-y-4"
                    variants={childVariants}
                >
                    <p className="text-md text-gray-700">While you wait, why not:</p>
                    <ul className="text-sm text-gray-600 list-disc list-inside text-center">
                        <li>Check out our other pages</li>
                        <li>Follow us on social media for updates</li>
                        <li>Sign up for our newsletter</li>
                    </ul>
                </motion.div>
                <motion.button
                    className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300"
                    variants={childVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push("/resources")}
                >
                    Resources Page
                </motion.button>
            </motion.div>
        </div>
    );
};

export default ContentUnavailablePage;