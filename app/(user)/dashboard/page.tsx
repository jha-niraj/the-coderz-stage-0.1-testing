import { useSession } from "next-auth/react";
import DashboardPage from "./_components/page";
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Construction, Github, FileCode, User } from 'lucide-react';
import Link from 'next/link';
import SmoothScroll from "@/components/smoothscroll";

const upcomingFeatures = [
    {
        icon: Construction,
        title: "Enhanced Dashboard Analytics",
        description: "We're developing a comprehensive dashboard to help you track your project submissions and progress in real-time.",
    },
    {
        icon: Github,
        title: "Curated Open Source Opportunities",
        description: "A carefully selected list of open-source projects will be available, matched to your skill level and interests.",
    },
    {
        icon: User,
        title: "Advanced Profile Management",
        description: "Enhanced profile customization including resume uploads and profile image management capabilities.",
    }
];

export default async function Dashboard() {

    return (
        <SmoothScroll>
            <section>
                <div className="min-h-screen py-24">
                    <div className="max-w-7xl mx-auto p-6 space-y-8">
                        <Card className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                            <CardContent className="p-8">
                                <h1 className="text-3xl font-bold mb-4">Dashboard 0.2 Coming Soon!</h1>
                                <p className="text-lg opacity-90">We&apos;re working on something exciting. Stage 0.2 is under development with amazing new features.</p>
                            </CardContent>
                        </Card>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <Link href="/resources" className="block">
                                <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-semibold">Explore Resources</h3>
                                            <ArrowRight className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <p className="mt-2 text-gray-600">Access our curated collection of learning materials and resources.</p>
                                    </CardContent>
                                </Card>
                            </Link>

                            <Link href="/projects" className="block">
                                <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-semibold">View Projects</h3>
                                            <ArrowRight className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <p className="mt-2 text-gray-600">Explore available projects and start building your portfolio.</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>

                        <Card className="mt-12">
                            <CardHeader>
                                <h2 className="text-2xl font-bold">What&apos;s Coming in Stage 0.2</h2>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6 md:grid-cols-3">
                                    {upcomingFeatures.map((feature, index) => (
                                        <Card key={index} className="border-l-4 border-indigo-500">
                                            <CardContent className="p-4">
                                                <feature.icon className="w-8 h-8 text-indigo-600 mb-3" />
                                                <h3 className="font-semibold mb-2">{feature.title}</h3>
                                                <p className="text-sm text-gray-600">{feature.description}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-r from-purple-100 to-indigo-100">
                            <CardContent className="p-8 text-center">
                                <h2 className="text-2xl font-bold mb-4">Want to Contribute?</h2>
                                <p className="text-gray-600 mb-6">We welcome developers who want to help build the future of learning. Join our community of contributors!</p>
                                <Link href="https://www.github.com" target="_blank">
                                    <Button
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white"
                                    >
                                        <FileCode className="w-4 h-4 mr-2" />
                                        Contribute to Project
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </SmoothScroll>
    )
}