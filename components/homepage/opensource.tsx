"use client"

import { motion } from "framer-motion";
import Link from "next/link";

const OpenSourceContribution = () => {
    const contributionBenefits = [
        "Enhance your coding skills",
        "Collaborate with global developers",
        "Build your professional network",
        "Gain real-world project experience",
        "Improve software documentation",
        "Participate in code reviews"
    ];

    return (
        <div className="relative py-16 sm:py-28 overflow-hidden w-full" id="contribute">
            <div className="mx-auto w-full px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto w-full text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Code for the Community: Join Our Open Source Mission
                    </h2>
                    <p className="mt-6 text-lg leading-8">
                        Be part of something bigger. Our open-source project aims to revolutionize
                        coding education, and we need passionate developers like you to make it happen.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mx-auto mt-16 max-w-2xl flex items-center justify-center flex-col md:flex-row rounded-3xl ring-1 ring-indigo-500 bg-black dark:bg-background sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
                >
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-white">
                            Contribute to Our Codebase
                        </h3>
                        <p className="mt-6 text-base leading-7 text-indigo-200">
                            Whether you&apos;re a seasoned developer or just starting out, there&apos;s a place for
                            you in our community. Help us build tools that empower the next generation of coders.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-300">
                                What you&apos;ll gain
                            </h4>
                            <div className="h-px flex-auto bg-indigo-500" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-indigo-200 sm:grid-cols-2 sm:gap-6"
                        >
                            {contributionBenefits.map((benefit, index) => (
                                <motion.li
                                    key={benefit}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="flex gap-x-3"
                                >
                                    <svg
                                        className="h-6 w-5 flex-none text-indigo-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    {benefit}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 sm:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-950 dark:bg-background text-black dark:text-white py-10 text-center ring-1 ring-inset ring-indigo-500 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold">Start Contributing Today</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl text-white dark:text-white font-bold tracking-tight">
                                        GitHub
                                    </span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-indigo-200">
                                        repository
                                    </span>
                                </p>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href="https://github.com/jha-niraj/the-coders.git"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Wanna Contribute?
                                    </Link>
                                </motion.div>
                                <p className="mt-6 text-xs leading-5 text-indigo-200">
                                    New to open source? Check out our beginner-friendly issues!
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
};

export default OpenSourceContribution;