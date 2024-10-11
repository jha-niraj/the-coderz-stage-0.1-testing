"use client"

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface PracticeQuestionProps {
    language: string;
    practiceQuestions: {
        question: string;
        hint: string;
    }[];
}
export default function PracticeQuestion({ language, practiceQuestions } : PracticeQuestionProps) {
    const [ showPractice, setShowPractice ] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-white rounded-lg shadow-lg p-4 border border-gray-200"
        >
            <h2 className="text-3xl font-bold text-black mb-2">Time to Practice! 💪</h2>
            <p className="text-gray-700 mb-4 text-lg">
                Let&apos;s put your new { language } knowledge to the test with some fun exercises. Don&apos;t worry if you get stuck –
                that&apos;s all part of the learning process!
            </p>
            <div className="flex items-center justify-center gap-2 w-full">
                <button
                    onClick={() => setShowPractice(!showPractice)}
                    className="bg-sky-400 hover:bg-sky-600 text-white font-small p-2 justify-center w-[70%] rounded-lg focus:outline-none focus:shadow-outline transition duration-300 text-lg flex items-center"
                >
                    {showPractice ? 'Practice Questions' : 'Practice Questions'}
                    {showPractice ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
                </button>
                <Link href="#" className="bg-green-400 hover:bg-black text-white font-small p-2 justify-center w-[30%] rounded-lg focus:outline-none focus:shadow-outline transition duration-300 text-lg flex items-center">
                    Solution
                </Link>
            </div>
            <AnimatePresence>
                {showPractice && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {practiceQuestions.map((q, index) => (
                            <div key={index} className="mb-8 p-6 bg-gray-100 rounded-lg">
                                <h3 className="text-xl font-semibold text-black mb-3">Question {index + 1}:</h3>
                                <p className="text-gray-700 mb-4 text-lg">{q.question}</p>
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-r-lg">
                                    <p className="font-semibold mb-2">Hint:</p>
                                    <p>{q.hint}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}