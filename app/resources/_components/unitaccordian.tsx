"use client"

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Youtube } from 'lucide-react';
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SlideInModal from "./slideinmodal";

interface Lesson {
    title: string;
    description: string;
    sections: {
        title: string;
        content: string;
        points?: string[];
        code?: string;
    }[];
    practiceQuestions: {
        question: string;
        hint: string;
    }[];
    nextChapter: string;
}

interface UnitLessonProps {
    name: string;
    lessonkey: string;
    youtube: string;
}
interface UnitAccordianSeconProps {
    title: string;
    lessons: UnitLessonProps[];
}

interface UnitAccordionProps {
    unit: UnitAccordianSeconProps;
    unitIndex: number;
    lessonData: { [key: string]: any };
}

const UnitAccordion: React.FC<UnitAccordionProps> = ({ unit, unitIndex, lessonData }) => {
    const [expanded, setExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

    // Effect to handle scroll lock
    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        // Cleanup when the component unmounts or modal closes
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isModalOpen]);

    const handleLessonClick = (lesson: UnitLessonProps) => {
        const lessonKey = lesson.lessonkey;
        const detailedLessonData = lessonData[lessonKey];
        setSelectedLesson({ ...lesson, ...detailedLessonData });
        setIsModalOpen(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: unitIndex * 0.1 }}
            className="w-full overflow-hidden"
        >
            <Card className="mb-4 bg-black dark:bg-white border-gray-700">
                <CardHeader
                    className="cursor-pointer"
                    onClick={() => setExpanded(!expanded)}
                >
                    <div className="flex justify-between items-center">
                        <CardTitle className="text-md sm:text-xl font-semibold text-white dark:text-black">
                            {unit.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 w-24 sm:w-32">
                            <Badge variant="secondary" className="bg-gray-700 text-gray-300 w-2/3 text-center">
                                {unit.lessons.length} lessons
                            </Badge>
                            {expanded ? (
                                <ChevronUp className="text-gray-200 dark:text-gray-600" />
                            ) : (
                                <ChevronDown className="text-gray-200 dark:text-gray-600" />
                            )}
                        </div>
                    </div>
                </CardHeader>
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <CardContent>
                                <div className="grid gap-4 mt-4">
                                    {unit.lessons.map((lesson, lessonIndex) => (
                                        <Card key={lessonIndex} className="bg-gray-700">
                                            <CardContent className="p-4 flex justify-between items-center">
                                                <button
                                                    onClick={() => handleLessonClick(lesson)}
                                                    className="text-white hover:text-blue-300 text-left"
                                                >
                                                    <span className="font-medium">{lesson.name}</span>
                                                </button>
                                                <div className="flex space-x-2">
                                                    <Link href={lesson.youtube} target="_blank" rel="noopener noreferrer">
                                                        <Youtube className="text-red-400 hover:text-red-300" />
                                                    </Link>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </CardContent>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>
            <SlideInModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                lessonData={selectedLesson}
            />
        </motion.div>
    );
};

export default UnitAccordion;