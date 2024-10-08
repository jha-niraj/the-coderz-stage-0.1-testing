"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from 'lucide-react';

const teamMembers = [
    {
        name: "Jane Doe",
        role: "Founder & CEO",
        image: "/placeholder.svg?height=400&width=400",
        linkedin: "https://linkedin.com/in/janedoe",
        github: "https://github.com/janedoe",
        instagram: "https://instagram.com/janedoe",
        bio: "Jane is a visionary leader with 10+ years of experience in EdTech. She's passionate about making CS education accessible to all."
    },
    {
        name: "John Smith",
        role: "CTO",
        image: "/placeholder.svg?height=400&width=400",
        linkedin: "https://linkedin.com/in/johnsmith",
        github: "https://github.com/johnsmith",
        instagram: "https://instagram.com/johnsmith",
        bio: "John is a tech enthusiast with a knack for building scalable systems. He oversees all technical aspects of our platform."
    },
    {
        name: "Alice Johnson",
        role: "Lead Developer",
        image: "/placeholder.svg?height=400&width=400",
        linkedin: "https://linkedin.com/in/alicejohnson",
        github: "https://github.com/alicejohnson",
        instagram: "https://instagram.com/alicejohnson",
        bio: "Alice is a full-stack developer with expertise in React and Node.js. She leads our development team in creating innovative features."
    },
    {
        name: "Bob Williams",
        role: "UX Designer",
        image: "/placeholder.svg?height=400&width=400",
        linkedin: "https://linkedin.com/in/bobwilliams",
        github: "https://github.com/bobwilliams",
        instagram: "https://instagram.com/bobwilliams",
        bio: "Bob is a UX/UI expert focused on creating intuitive and engaging user experiences. He ensures our platform is user-friendly and accessible."
    },
    {
        name: "Eva Brown",
        role: "Content Strategist",
        image: "/placeholder.svg?height=400&width=400",
        linkedin: "https://linkedin.com/in/evabrown",
        github: "https://github.com/evabrown",
        instagram: "https://instagram.com/evabrown",
        bio: "Eva is our content guru, crafting engaging learning materials and ensuring our curriculum is top-notch and up-to-date with industry standards."
    }
]

const AboutUsSection = ({ title, content, image, index }: any) => {
    const isEven = index % 2 === 0
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16`}
        >
            <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">{title}</h2>
                <p className="text-lg text-gray-300">{content}</p>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={300}
                    className="rounded-lg object-cover w-full h-64"
                />
            </div>
        </motion.div>
    )
}

const TeamMember = ({ member, index }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center"
        >
            <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <p className="text-sm text-gray-300 mb-2">{member.role}</p>
            <p className="text-sm mb-4 text-center">{member.bio}</p>
            <div className="flex space-x-2">
                <Link href={member?.linkedin || "#"} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                        <Linkedin className="h-4 w-4" />
                    </Button>
                </Link>
                <Link href={member?.github || "#"} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                        <Github className="h-4 w-4" />
                    </Button>
                </Link>
                <Link href={member?.instagram || "#"} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                        <Instagram className="h-4 w-4" />
                    </Button>
                </Link>
            </div>
        </motion.div>
    )
}

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
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
                    image="/placeholder.svg?height=300&width=500"
                    index={0}
                />

                <AboutUsSection
                    title="What We Do"
                    content="Our platform is a one-stop solution for computer science enthusiasts. We offer interactive courses, challenging quizzes, and opportunities for open-source contributions. Our vibrant WhatsApp and Discord communities foster collaboration and peer learning, creating a supportive environment for growth."
                    image="/placeholder.svg?height=300&width=500"
                    index={1}
                />

                <AboutUsSection
                    title="Our Vision"
                    content="We envision a world where quality computer science education is accessible to everyone, regardless of their background or location. By bridging the gap between theoretical knowledge and practical skills, we aim to prepare students for real-world challenges in the ever-evolving tech industry."
                    image="/placeholder.svg?height=300&width=500"
                    index={2}
                />

                <AboutUsSection
                    title="Freelance Agency"
                    content="As part of our commitment to practical learning, we run a freelance agency that provides students with real-world experience and income opportunities. By distributing client projects to deserving students, we help them build impressive portfolios, develop crucial professional skills, and earn while they learn."
                    image="/placeholder.svg?height=300&width=500"
                    index={3}
                />

                <Card className="bg-gray-900 border-gray-800 mb-16">
                    <CardContent className="p-6">
                        <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Our Goals</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                Provide comprehensive, up-to-date computer science education
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                Foster a vibrant community of learners and contributors
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                Bridge the gap between academia and industry through practical projects
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Empower students with the skills and confidence to succeed in the tech industry
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                Continuously innovate our platform based on student feedback and industry trends
                            </motion.li>
                        </ul>
                    </CardContent>
                </Card>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {teamMembers.map((member, index) => (
                            <TeamMember key={index} member={member} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}