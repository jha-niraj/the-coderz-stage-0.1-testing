import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface QuizAndContributeProps {
    quizlink: string;
    contributelink: string;
}
export default function QuizAndContribute({ quizlink, contributelink } : QuizAndContributeProps) {
    return (
        <section>
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
                    href={quizlink}
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
                className="mt-12 bg-green-400 flex items-center justify-center flex-col gap-4 rounded-lg p-2 border border-gray-700"
            >
                <h1 className="text-lg font-semibold text-center text-black">We are currently integrating the quiz application on this platfomr itself, till then please use this google form quiz for practice.</h1>
                <div className="bg-sky-500 flex items-center justify-center flex-col gap-2 p-2 rounded-lg">
                    <p className="text-white text-md text-center">PS: If you want to contribute to something which is already in open source, then this is your chance.</p>
                    <Link href={contributelink} className="px-8 py-0.5  border-2 border-black hover:scale-105 dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                        Contribute
                    </Link>
                </div>
            </motion.div>
        </section>
    )
}