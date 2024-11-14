import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface QuizAndContributeProps {
    contributelink: string;
}
export default function QuizAndContribute({ contributelink } : QuizAndContributeProps) {
    return (
        <section>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-12 bg-green-400 flex items-center justify-center flex-col gap-4 rounded-lg p-2 border border-gray-700"
            >
                <h1 className="text-lg font-semibold text-center text-black">We are currently integrating the quiz application on this platfomr itself, till then please use this google form quiz for practice.</h1>
                <div className="bg-sky-500 flex items-center justify-center flex-col gap-2 p-2 rounded-lg">
                    <p className="text-white text-md text-center">PS: If you want to contribute to something which is already in open source, then this is your chance.</p>
                    <Link href="https://github.com/thecoderzhub" target="_blank" className="px-8 py-0.5  border-2 border-black hover:scale-105 dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                        Contribute
                    </Link>
                </div>
            </motion.div>
        </section>
    )
}