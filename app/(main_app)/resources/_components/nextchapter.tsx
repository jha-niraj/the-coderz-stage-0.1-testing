import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface NextChapterProps {
    language: string;
    link: string;
}
export default function NextChapter({ language, link }: NextChapterProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center bg-white rounded-lg p-4"
        >
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Ready for Your Next { language } Adventure?</h2>
            <p className="text-gray-700 mb-8 text-lg">
                Great job making it this far! There&apos;s still so much exciting stuff to learn about C++.
                Are you ready to take the next step in your coding journey?
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
                Start Your Next Chapter
            </Button>
        </motion.div>
    )
}