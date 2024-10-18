"use client"

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from 'lucide-react';
import SmoothScroll from '@/components/smoothscroll';
import teamImage from "./images/nirajjha (copy).jpeg";
import { RainbowButton } from '@/components/ui/rainbow-button';
import { cn } from "@/app/lib/utils";
import Marquee from "@/components/ui/marquee";

const theCoderzFamily = [
    {
        name: "Abhinav Shankar",
        role: "Co-Founder & Manager",
        img: teamImage,
        linkedin: "https://linkedin.com/in/janedoe",
        github: "https://github.com/janedoe",
        instagram: "https://instagram.com/janedoe",
        bio: "Jane is a visionary leader with 10+ years of experience in EdTech. She's passionate about making CS education accessible to all."
    },
    {
        name: "Harsh Pandey",
        role: "Co-Founder & PR Head",
        img: teamImage,
        linkedin: "https://linkedin.com/in/janedoe",
        github: "https://github.com/janedoe",
        instagram: "https://instagram.com/janedoe",
        bio: "Jane is a visionary leader with 10+ years of experience in EdTech. She's passionate about making CS education accessible to all."
    },
    {
        name: "Tejasvi Sinha",
        role: "Social Media Management Head",
        img: teamImage,
        linkedin: "https://linkedin.com/in/janedoe",
        github: "https://github.com/janedoe",
        instagram: "https://instagram.com/janedoe",
        bio: "Jane is a visionary leader with 10+ years of experience in EdTech. She's passionate about making CS education accessible to all."
    },
    {
        name: "",
        role: "Founder & CEO",
        img: teamImage,
        linkedin: "https://linkedin.com/in/janedoe",
        github: "https://github.com/janedoe",
        instagram: "https://instagram.com/janedoe",
        bio: "Jane is a visionary leader with 10+ years of experience in EdTech. She's passionate about making CS education accessible to all."
    },
    {
        name: "Jane Doe",
        role: "Founder & CEO",
        img: teamImage,
        linkedin: "https://linkedin.com/in/janedoe",
        github: "https://github.com/janedoe",
        instagram: "https://instagram.com/janedoe",
        bio: "Jane is a visionary leader with 10+ years of experience in EdTech. She's passionate about making CS education accessible to all."
    },
]

const firstRow = theCoderzFamily.slice(0, theCoderzFamily.length / 2);
const secondRow = theCoderzFamily.slice(theCoderzFamily.length / 2);
const ReviewCard = ({
    img,
    name,
    role,
    linkedin,
    github,
    instagram,
    bio,
}: {
    img: string | StaticImageData;
    name: string;
    role: string,
    linkedin: string;
    github: string;
    instagram: string;
    bio: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                // Another customizations
                "flex flex-col gap-6 w-64"
            )}
        >
            <div className="flex flex-row items-center justify-center gap-6">
                <Image
                    className="rounded-full"
                    width={50}
                    height={50}
                    alt="Team member image"
                    src={img}
                />
                <div className="flex flex-col">
                    <figcaption className="text-md font-bold dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-sm font-semiboldtext-gray-500 dark:text-white/70">{role}</p>
                </div>
            </div>
            <div className="flex space-x-2 items-center justify-center gap-5">
                <Link href={linkedin || "#"} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                        <Linkedin className="h-4 w-4" />
                    </Button>
                </Link>
                <Link href={github || "#"} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                        <Github className="h-4 w-4" />
                    </Button>
                </Link>
                <Link href={instagram || "#"} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                        <Instagram className="h-4 w-4" />
                    </Button>
                </Link>
            </div>
        </figure>
    );
};

const TheCoderZFamily = () => {
    return (
        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.role} {...review} />
                ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.role} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}

const AboutUsSection = ({ title, content, index }: any) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16`}
        >
            <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">{title}</h2>
                <p className="text-lg">{content}</p>
            </div>
        </motion.div>
    )
}

const ourgoals = [
    "Provide comprehensive, up-to-date computer science education",
    "Foster a vibrant community of learners and contributors",
    "Bridge the gap between academia and industry through practical projects",
    "Empower students with the skills and confidence to succeed in the tech industry",
    "Continuously innovate our platform based on student feedback and industry trends"
]
export default function AboutUs() {
    return (
        <SmoothScroll>
            <div className="min-h-screen text-black dark:text-white pt-28 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                    >
                        About Us
                    </motion.h1>

                    <AboutUsSection
                        title="Our Mission"
                        content="We are on a mission to revolutionize computer science education by providing a comprehensive, accessible, and engaging platform for students to learn, grow, and thrive in the world of technology. Our goal is to empower the next generation of tech innovators and problem-solvers."
                        index={0}
                    />

                    <AboutUsSection
                        title="What We Do"
                        content="Our platform is a one-stop solution for computer science enthusiasts. We offer interactive courses, challenging quizzes, and opportunities for open-source contributions. Our vibrant WhatsApp and Discord communities foster collaboration and peer learning, creating a supportive environment for growth."
                        index={1}
                    />

                    <AboutUsSection
                        title="Our Vision"
                        content="We envision a world where quality computer science education is accessible to everyone, regardless of their background or location. By bridging the gap between theoretical knowledge and practical skills, we aim to prepare students for real-world challenges in the ever-evolving tech industry."
                        index={2}
                    />

                    <AboutUsSection
                        title="Freelance Agency"
                        content="As part of our commitment to practical learning, we run a freelance agency that provides students with real-world experience and income opportunities. By distributing client projects to deserving students, we help them build impressive portfolios, develop crucial professional skills, and earn while they learn."
                        index={3}
                    />

                    <Card className="border-gray-800 mb-16">
                        <CardContent className="p-6">
                            <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Our Goals</h2>
                            <ul className="list-disc pl-6 space-y-2 flex flex-col gap-2">
                                {
                                    ourgoals.map((goal, index) => {
                                        return (
                                            <motion.li
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.1 }}
                                                className="font-md text-xl text-center sm:text-left"
                                            >
                                                {
                                                    goal
                                                }
                                            </motion.li>
                                        )
                                    })
                                }
                            </ul>
                        </CardContent>
                    </Card>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-center">The Coder&apos;z Family</h2>
                        <TheCoderZFamily />
                        <div className='mx-auto pt-6'>
                            <RainbowButton>Join Us</RainbowButton>
                        </div>
                    </motion.div>
                </div>
            </div>
        </SmoothScroll>
    )
};