'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Code, Database, Globe, Shield, Cpu, Lightbulb, Rocket, Target, Zap, Sparkles, LucideIcon } from 'lucide-react';
import { pathwaysData } from './pathwaysdata';
import { motion, useAnimation } from "framer-motion";
import ShimmerButton from '@/components/ui/shimmer-button';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { useRouter } from 'next/navigation';

const benefits = [
    { title: 'Structured Learning', description: 'Follow a curated path designed by industry experts', icon: <Target className="w-6 h-6" /> },
    { title: 'Hands-on Experience', description: 'Build real-world projects to apply your skills', icon: <Cpu className="w-6 h-6" /> },
    { title: 'Career Guidance', description: 'Get insights into various tech career opportunities', icon: <Lightbulb className="w-6 h-6" /> },
    { title: 'Community Support', description: 'Connect with peers and mentors in your chosen field', icon: <Globe className="w-6 h-6" /> },
    { title: 'Flexible Learning', description: 'Learn at your own pace with on-demand resources', icon: <Rocket className="w-6 h-6" /> },
    { title: 'Industry-Aligned', description: 'Stay updated with the latest trends and technologies', icon: <Zap className="w-6 h-6" /> },
]
const techPaths = [
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Cloud Computing",
    "DevOps Engineering",
    "Mobile Development",
    "UI/UX Design",
    "Data Science",
    "Machine Learning",
    "Blockchain Development"
];

interface PathwayProps {
    id: string;
    title: string;
    icon: JSX.Element;
    description: string;
    color: string;
    niche: string;
    domain: string;
    careers: {
        title: string;
        description: string;
        skills: string;
        opportunities: string;
    }[];
    challenges: {
        title: string;
        description: string;
        opportunity: string;
    }[];
    skills: {
        name: string;
        description: string;
    }[];
    trends: {
        name: string;
        description: string;
    }[];
    learningPath: {
        name: string;
        duration: string;
    }[];
}

export default function Component() {
    const [selectedPathway, setSelectedPathway] = useState<PathwayProps | null>(null);
    const router = useRouter();

    const handleCardClick = (pathway: PathwayProps) => {
        setSelectedPathway(pathway);
    };

    const handleResourcesClick = (pathwayId: string) => {
        router.push(`/resources/${pathwayId}`);
    };

    return (
        <div className="max-w-7xl mx-auto min-h-screen pt-28 sm:pt-40">
            <div className="absolute inset-0" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center space-y-8">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        The fastest way to become a
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                            tech professional
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-black dark:text-white max-w-3xl mx-auto">
                        Find your perfect learning pathway and join thousands of developers building the future of technology
                    </p>
                    <div className="pt-4">
                        <div className="relative flex overflow-x-hidden">
                            <div className="animate-marquee whitespace-nowrap py-6 flex gap-8">
                                {[...techPaths, ...techPaths].map((path, index) => (
                                    <div key={index} className="z-10 flex min-h-32 items-center justify-center">
                                        <ShimmerButton className="shadow-2xl">
                                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                                {
                                                    path
                                                }
                                            </span>
                                        </ShimmerButton>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-7xl mx-auto">
                        {[
                            { label: "Active Learners", value: "10,000+" },
                            { label: "Success Rate", value: "94%" },
                            { label: "Career Transitions", value: "2,000+" },
                            { label: "Learning Paths", value: "25+" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center shadow-2xl rounded-2xl dark:border-2 p-4">
                                <div className="text-3xl font-bold text-black dark:text-white mb-2">{stat.value}</div>
                                <div className="text-gray-500 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Pathways?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            benefits.map((benefit, index) => (
                                <Card key={index} className="shadow-2xl dark:border-2 rounded-2xl p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
                                    <CardHeader>
                                        <CardTitle className="flex items-center justify-center">
                                            <div className="mr-4 p-2 bg-blue-100 rounded-full text-blue-600">
                                                {benefit.icon}
                                            </div>
                                            <p className="text-center">
                                                {benefit.title}
                                            </p>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-center">{benefit.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* Pathways Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Explore Our Pathways</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            pathwaysData.map((pathway) => (
                                <CardContainer
                                    className="inter-var w-full cursor-pointer"
                                    key={pathway.id}
                                >
                                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] h-[250px] border-black/[0.1] w-full rounded-xl p-4 border">
                                        <div className="flex flex-col justify-between h-full">
                                            <div>
                                                <div className="flex flex-col items-start justify-between mb-4">
                                                    <CardItem
                                                        translateZ="50"
                                                        className="text-xl font-semibold text-neutral-600 dark:text-white flex gap-3 items-center justify-center"
                                                    >
                                                        <div className={`mr-4 p-2 rounded-full bg-gradient-to-r ${pathway.color} text-white`}>
                                                            {pathway.icon}
                                                        </div>
                                                        <h1>
                                                            {pathway.title}
                                                        </h1>
                                                    </CardItem>
                                                    <CardItem>
                                                        {pathway.description}
                                                    </CardItem>
                                                </div>
                                            </div>
                                            <CardItem
                                                translateZ="60"
                                                as="div"
                                                className="flex gap-3 w-full justify-between"
                                            >
                                                <Button
                                                    variant="default"
                                                    className="flex-1"
                                                    onClick={() => handleCardClick(pathway)}
                                                >
                                                    Explore Pathway
                                                </Button>
                                            </CardItem>
                                        </div>
                                    </CardBody>
                                </CardContainer>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* Sheet to show the Pathway Data */}
            <Sheet open={!!selectedPathway} onOpenChange={() => setSelectedPathway(null)}>
                <SheetContent side="right" className="w-full md:max-w-[640px] overflow-y-auto">
                    {
                        selectedPathway && (
                            <>
                                <SheetHeader>
                                    <SheetTitle>{selectedPathway.title}</SheetTitle>
                                    <SheetDescription>{selectedPathway.description}</SheetDescription>
                                </SheetHeader>
                                <div className="mt-6">
                                    <h3 className="text-lg font-semibold mb-2">Niche</h3>
                                    <p>{selectedPathway.niche}</p>
                                    <h3 className="text-lg font-semibold mt-4 mb-2">Domain</h3>
                                    <p>{selectedPathway.domain}</p>

                                    <h3 className="text-lg font-semibold mt-4 mb-2">Careers</h3>
                                    {
                                        selectedPathway.careers?.map((career, index) => (
                                            <div key={index} className="mb-4">
                                                <h4 className="font-medium">{career.title}</h4>
                                                <p className="text-sm text-gray-600">{career.description}</p>
                                                <p className="text-sm mt-1"><strong>Skills:</strong> {career.skills}</p>
                                                <p className="text-sm mt-1"><strong>Opportunities:</strong> {career.opportunities}</p>
                                            </div>
                                        ))
                                    }

                                    <h3 className="text-lg font-semibold mt-4 mb-2">Challenges</h3>
                                    {
                                        selectedPathway.challenges?.map((challenge, index) => (
                                            <div key={index} className="mb-4">
                                                <h4 className="font-medium">{challenge.title}</h4>
                                                <p className="text-sm text-gray-600">{challenge.description}</p>
                                                <p className="text-sm mt-1"><strong>Opportunity:</strong> {challenge.opportunity}</p>
                                            </div>
                                        ))
                                    }

                                    <h3 className="text-lg font-semibold mt-4 mb-2">Key Skills</h3>
                                    {
                                        selectedPathway.skills?.map((skill, index) => (
                                            <div key={index} className="mb-2">
                                                <h4 className="font-medium">{skill.name}</h4>
                                                <p className="text-sm text-gray-600">{skill.description}</p>
                                            </div>
                                        ))
                                    }

                                    <h3 className="text-lg font-semibold mt-4 mb-2">Industry Trends</h3>
                                    {
                                        selectedPathway.trends?.map((trend, index) => (
                                            <div key={index} className="mb-2">
                                                <h4 className="font-medium">{trend.name}</h4>
                                                <p className="text-sm text-gray-600">{trend.description}</p>
                                            </div>
                                        ))
                                    }

                                    {
                                        selectedPathway.learningPath && (
                                            <>
                                                <h3 className="text-lg font-semibold mt-4 mb-2">Learning Path</h3>
                                                <ol className="list-decimal list-inside">
                                                    {
                                                        selectedPathway.learningPath.map((step, index) => (
                                                            <li key={index} className="mb-2">
                                                                <span className="font-medium">{step.name}</span> - {step.duration}
                                                            </li>
                                                        ))
                                                    }
                                                </ol>
                                            </>
                                        )
                                    }
                                    <div className="mt-8">
                                        <Button
                                            className="w-full"
                                            onClick={() => handleResourcesClick(selectedPathway.id)}
                                        >
                                            Explore {selectedPathway.title} Resources
                                        </Button>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </SheetContent>
            </Sheet>
        </div>
    )
}