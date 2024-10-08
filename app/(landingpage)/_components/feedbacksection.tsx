"use client"

import { motion } from "framer-motion";

interface FeedbackItemProps {
	name: string;
	role: string;
	feedback: string;
}
const FeedbackItem = ({ name, role, feedback }: FeedbackItemProps) => (
	<motion.div
		className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-black via-gray-600"
		initial={{ opacity: 0, y: 50 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
	>
		<p className="font-bold italic mb-4 text-white">&quot;{feedback}&quot;</p>
		<div className="flex items-center">
			<div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-xl">
				{name[0]}
			</div>
			<div className="ml-4">
				<h3 className="font-bold">{name}</h3>
				<p className="text-sm">{role}</p>
			</div>
		</div>
	</motion.div>
);

const FeedbackSection = () => {
	const feedbacks = [
		{ name: "John Doe", role: "Software Developer", feedback: "This platform has been invaluable in my coding journey. The resources are top-notch!" },
		{ name: "Jane Smith", role: "UX Designer", feedback: "I love how the community here is so supportive. It's a great place to learn and grow." },
		{ name: "Mike Johnson", role: "Student", feedback: "As a beginner, I found the tutorials here extremely helpful and easy to follow." },
		{ name: "Niraj Jha", role: "Student", feedback: "As a beginner, I found the tutorials here extremely helpful and easy to follow." },
	];

	return (
		<section className="w-full sm:w-[90%]">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">What Our Coder&apos;z Say</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{feedbacks.map((item, index) => (
						<FeedbackItem key={index} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default FeedbackSection;