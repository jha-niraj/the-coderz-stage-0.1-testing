"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { categories, realProjects } from './projectsdata/project';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';
import { ChevronRight, Monitor, Smartphone, Zap } from 'lucide-react';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

// // Type Definitions
// interface CategoryProps {
//     name: string;
// }[];
type DifficultyLevel = "All" | "Beginner" | "Intermediate" | "Advanced";
interface Resource {
    documentation: string[];
    tools: string[];
}

interface ProjectGuide {
    description: string;
    desktopImage?: string;
    mobileImage?: string;
    learningOutcomes: string[];
    keyFeatures: string[];
    prerequisites: string[];
    skillsGained: string[];
    steps: string[];
    resources: Resource;
}

interface Project {
    id: string;
    title: string;
    description: string;
    difficulty: DifficultyLevel;
    tags: string[];
    guide: ProjectGuide;
}

const difficultyLevel: DifficultyLevel[] = ["All", "Beginner", "Intermediate", "Advanced"];

const ProjectsPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel>("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = realProjects.filter((project) => {
        const categoryMatch = activeCategory === 'All' || project.tags.includes(activeCategory);
        const difficultyMatch = selectedLevel === 'All' || project.difficulty === selectedLevel;
        return categoryMatch && difficultyMatch;
    });

    return (
        <section>
            <div className="min-h-screen text-black dark:text-white pt-28">
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <h1 className="text-3xl font-medium text-center">Explore projects on different tech stacks</h1>
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:items-center sm:justify-between gap-4 mb-8 py-8">
                        <motion.div layout className="flex flex-wrap items-center justify-center gap-2">
                            {
                                categories.map((category, index) => (
                                    <button
                                        key={index}
                                        className={`text-black text-sm font-small dark:text-black p-1 pl-2 pr-2 rounded-lg
                                        ${activeCategory === category ? "bg-black text-white" : "bg-white text-black"}
                                        ${activeCategory.includes(category) ? "hover:bg-sky-100 hover:text-black" : "opacity-50 cursor-not-allowed"}
                                    `}
                                        onClick={() => activeCategory.includes(category) && setActiveCategory(category)}
                                        disabled={!activeCategory.includes(category)}
                                    >
                                        <span className="flex items-center gap-2">
                                            {category}
                                        </span>
                                    </button>
                                ))
                            }
                        </motion.div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">
                                    {selectedLevel}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {
                                    difficultyLevel.map((level, index) => (
                                        <DropdownMenuItem key={index} onClick={() => setSelectedLevel(level)}>
                                            {level}
                                        </DropdownMenuItem>
                                    ))
                                }
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className="">
                        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-full lg:grid-cols-3 gap-6 min-h-[300px]">
                            {
                                filteredProjects.length === 0 ? (
                                    <div className="col-span-full flex flex-col items-center justify-center pt-28 text-center">
                                        <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
                                            <Zap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Available</h3>
                                            <p className="text-gray-500">There are no projects available with the selected filters. Please try different criteria.</p>
                                        </div>
                                    </div>
                                ) : (
                                    filteredProjects.map((project) => (
                                        <CardContainer className="inter-var w-full" key={project.id}>
                                            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] h-[250px] border-black/[0.1] w-full rounded-xl p-4 border">
                                                <div className="flex flex-col justify-between h-full">
                                                    <div>
                                                        <div className="flex items-start justify-between mb-4">
                                                            <CardItem
                                                                translateZ="50"
                                                                className="text-xl font-semibold text-neutral-600 dark:text-white"
                                                            >
                                                                {project.title}
                                                            </CardItem>
                                                            <CardItem
                                                                translateZ="50"
                                                                as="div"
                                                            >
                                                                <Badge className={`
                                                                            ${project.difficulty === "Beginner" ? "bg-green-500" : ""}
                                                                            ${project.difficulty === "Intermediate" ? "bg-yellow-500" : ""}
                                                                            ${project.difficulty === "Advanced" ? "bg-red-500" : ""}
                                                                    `}
                                                                >
                                                                    {project.difficulty}
                                                                </Badge>
                                                            </CardItem>
                                                        </div>

                                                        <CardItem
                                                            as="p"
                                                            translateZ="60"
                                                            className="text-neutral-800 text-sm max-w-sm mt-2 mb-4 dark:text-neutral-300"
                                                        >
                                                            {project.description}
                                                        </CardItem>

                                                        <CardItem
                                                            translateZ="60"
                                                            as="div"
                                                            className="flex flex-wrap gap-2 mb-6"
                                                        >
                                                            {project.tags.map((tag: string) => (
                                                                <Badge key={tag} variant="outline">{tag}</Badge>
                                                            ))}
                                                        </CardItem>
                                                    </div>
                                                    <CardItem
                                                        translateZ="60"
                                                        as="div"
                                                        className="flex gap-3 w-full justify-between"
                                                    >
                                                        <Button variant="outline" className="flex-1">
                                                            Build from Scratch
                                                        </Button>
                                                        <Button
                                                            variant="default"
                                                            className="flex-1"
                                                            onClick={() => setSelectedProject(project)}
                                                        >
                                                            Start Project
                                                        </Button>
                                                    </CardItem>
                                                </div>
                                            </CardBody>
                                        </CardContainer>
                                    ))
                                )
                            }
                        </div>
                    </div>
                </main>

                <Sheet open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                    <SheetContent className="w-full md:max-w-[640px] overflow-y-auto">
                        {selectedProject && (
                            <div className="space-y-8">
                                <SheetHeader>
                                    <SheetTitle>{selectedProject.title}</SheetTitle>
                                    <p className="text-gray-500">{selectedProject.guide.description}</p>
                                </SheetHeader>

                                <div className="space-y-6">
                                    {selectedProject.guide.desktopImage && selectedProject.guide.mobileImage && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                                                    <Monitor className="w-4 h-4" />
                                                    <span>Desktop Preview</span>
                                                </div>
                                                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                                                    <Image
                                                        src={selectedProject.guide.desktopImage}
                                                        alt="Desktop preview"
                                                        className="w-full h-full object-cover"
                                                        height={200}
                                                        width={200}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                                                    <Smartphone className="w-4 h-4" />
                                                    <span>Mobile Preview</span>
                                                </div>
                                                <div className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden max-w-[240px] mx-auto">
                                                    <Image
                                                        src={selectedProject.guide.mobileImage}
                                                        alt="Mobile preview"
                                                        className="w-full h-full object-cover"
                                                        height={200}
                                                        width={200}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tags.map((tag: string) => (
                                                <Badge key={tag} variant="secondary">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <Separator className="my-6" />

                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Learning Outcomes</h3>
                                        <ul className="list-disc pl-6 space-y-1">
                                            {selectedProject.guide.learningOutcomes.map((outcome) => (
                                                <li key={outcome} className="text-gray-600 dark:text-gray-300">
                                                    {outcome}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SheetContent>
                </Sheet>
            </div>
        </section>
    );
};

export default ProjectsPage;
