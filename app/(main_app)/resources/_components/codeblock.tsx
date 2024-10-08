"use client"

import { CheckCircle2, ClipboardCheck } from "lucide-react";
import { useState } from "react";
import Highlight from "react-highlight";
import toast from "react-hot-toast";

const CodeBlock = ({ code, language }: { code: string, language: string }) => {
	const [copied, setCopied] = useState(false);
	const lines = code.trim().split('\n');

	const handleCopyCode = () => {
		navigator.clipboard.writeText(code);
		setCopied(true);
		toast.success("Code copied successfully");
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="relative mb-3 w-full rounded-md overflow-hidden">
			<div className="bg-gray-800 text-gray-400 text-xs w-full py-2 px-4 flex justify-between items-center">
				<span>{ language }</span>
				<button
					onClick={handleCopyCode}
					className="text-gray-400 hover:text-white transition-colors"
					aria-label="Copy code"
				>
					{copied ? <CheckCircle2 size={18} /> : <ClipboardCheck size={18} />}
				</button>
			</div>
			<div className="flex overflow-x-auto bg-black w-full">
				<Highlight className="flex-grow leading-5 text-white overflow-x-auto w-full">
					{code}
				</Highlight>
			</div>
		</div>
	);
};

export default CodeBlock;