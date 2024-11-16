import { motion } from "framer-motion";
import CodeBlock from "./codeblock";

interface MainContentProps {
    index: number;
    title: string;
    content: string;
    points?: string;
    code?: string;
}
export default function MainContent({ index, title, content, points, code }: MainContentProps) {
    const bulletPoints = points?.split('\n');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 bg-gray-100 rounded-lg shadow-lg overflow-hidden border border-gray-200"
        >
            <div className="p-6">
                <h2 className="text-xl font-bold text-black mb-2">
                    {index + 1}. {title}
                </h2>
                <p className="text-black mb-6 text-lg">{content}</p>
                {
                    bulletPoints && (
                        <ul className="list-disc pl-5 text-black">
                        {bulletPoints && bulletPoints.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                    )}
                {code && <CodeBlock language="cpp" code={code} />}
            </div>
        </motion.div>
    )
}