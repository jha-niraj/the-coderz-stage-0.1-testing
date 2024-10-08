"use client"

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronDown, ChevronUp, Youtube, FileText, ExternalLink } from 'lucide-react';
import Link from "next/link";

interface UnitAccordionProps {
    unit: {
        title: string,
        lessons: Array<{
            name: string,
            href: string,
            youtube: string
        }>
    },
    unitIndex: number
}

const UnitAccordion = ({ unit, unitIndex }: UnitAccordionProps) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: unitIndex * 0.1 }}
            className="bg-gray-900 rounded-lg overflow-hidden mb-4 border border-gray-700"
        >
            <div
                className="p-4 flex justify-between items-center cursor-pointer bg-gray-800"
                onClick={() => setExpanded(!expanded)}
            >
                <h3 className="text-md sm:text-xl font-semibold text-white">{unit.title}</h3>
                <div className="flex items-center">
                    <span className="text-sm mr-2 text-center text-gray-300">{unit.lessons.length} lessons</span>
                    {expanded ? <ChevronUp className="text-gray-300" /> : <ChevronDown className="text-gray-300" />}
                </div>
            </div>

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-4">
                            <Table>
                                <TableHeader>
                                    <TableRow className="border-b">
                                        <TableHead className="text-gray-300">Lesson</TableHead>
                                        <TableHead className="text-center text-gray-300">Resources</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        unit.lessons.map((lesson, lessonIndex) => (
                                            <TableRow key={lessonIndex} className="border-b border-gray-700">
                                                <TableCell>
                                                    <Link href={lesson?.href} className="text-white hover:text-blue-300 underline">
                                                        {lesson.name}
                                                    </Link>
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    <Link href={lesson?.youtube} target="_blank" rel="noopener noreferrer">
                                                        <Youtube className="inline text-red-400 hover:scale-110" />
                                                    </Link>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default UnitAccordion;