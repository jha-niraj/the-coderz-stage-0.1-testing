"use client"

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import CodeBlock from './codeblock';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface LessonDataProps {
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

interface SlideInModalProps {
    isOpen: boolean;
    onClose: () => void;
    lessonData: LessonDataProps | null;
}

const SlideInModal: React.FC<SlideInModalProps> = ({ isOpen, onClose, lessonData }) => {
    if (!lessonData) return null;

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent
                side="right"
                className="w-full h-full sm:w-[80vw] md:w-[60vw] sm:max-w-[80vw] p-6 overflow-y-auto"
                style={{ maxWidth: '90vw' }}
            >
                <SheetHeader>
                    <SheetTitle>{lessonData.title}</SheetTitle>
                    <SheetDescription>{lessonData.description}</SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                    {
                        lessonData?.sections ?
                            (lessonData.sections.map((section, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="mb-4 bg-gray-100 rounded-lg shadow-lg border border-gray-200"
                                    key={index}
                                >
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold text-black mb-2">
                                            {index + 1}. {section.title}
                                        </h2>
                                        <p className="text-black mb-6 text-lg">{section.content}</p>
                                        {
                                            section.points && (
                                                <ul className="list-disc pl-5 text-black">
                                                    {
                                                        section?.points.map((item, index) => (
                                                            <li key={index}>{item}</li>
                                                        ))
                                                    }
                                                </ul>
                                            )}
                                        {section.code && <CodeBlock language="C++" code={section.code} />}
                                    </div>
                                </motion.div>
                            ))
                            ) : (
                                <div>We are working on this</div>
                            )
                    }
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-12 bg-gray-900 rounded-lg p-6 border border-gray-700"
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-white">Test Your Knowledge</h2>
                        <p className="text-gray-300 mb-4">
                            If you have completed the course or want to test your knowledge, please take our comprehensive quiz.
                        </p>
                        <Link
                            href="#"
                            target="_blank"
                            className="shadow-[0_0_0_3px_#000000_inset] flex items-center justify-center p-2 w-[60%] sm:w-[30%] sm:mx-auto bg-transparent border border-white dark:border-white dark:text-white text-white rounded-lg font-semibold transform hover:-translate-y-1 transition duration-400"
                        >
                            Take the Quiz <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-16 bg-white rounded-lg shadow-lg p-4 border border-gray-200"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-3xl font-bold text-black">Practice Questions 💪</h2>
                            <Link
                                href="#"
                                className="bg-green-400 hover:bg-black text-white font-small p-2 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 text-lg"
                            >
                                Solution
                            </Link>
                        </div>

                        <p className="text-gray-700 mb-4 text-lg">
                            Let&apos;s put your new knowledge to the test with some fun exercises. Don&apos;t worry if you get stuck – that&apos;s all part of the learning process!
                        </p>

                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {
                                    lessonData.practiceQuestions ?
                                        (
                                            lessonData.practiceQuestions.map((q, index) => (
                                                <div key={index} className="mb-8 p-6 bg-gray-100 rounded-lg">
                                                    <h3 className="text-xl font-semibold text-black mb-3">Question {index + 1}:</h3>
                                                    <p className="text-gray-700 mb-4 text-lg">{q.question}</p>
                                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-r-lg">
                                                        <p className="font-semibold mb-2">Hint:</p>
                                                        <p>{q.hint}</p>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div>We are working on this</div>
                                        )
                                }
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default SlideInModal;
