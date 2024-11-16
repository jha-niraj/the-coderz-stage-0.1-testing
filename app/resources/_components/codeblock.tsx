import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
// Base languages
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
// Additional languages
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import { Copy, Check } from 'lucide-react';

type SupportedLanguage =
	| 'typescript'
	| 'javascript'
	| 'jsx'
	| 'tsx'
	| 'python'
	| 'java'
	| 'c'
	| 'cpp';

interface CodeBlockProps {
	code: string;
	language?: SupportedLanguage;
	filename?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
	code,
	language = 'typescript',
	filename
}) => {
	const [copied, setCopied] = React.useState(false);
	const timeoutRef = useRef<number>();

	useEffect(() => {
		Prism.highlightAll();
	}, [code]);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(code);
		setCopied(true);

		if (timeoutRef.current) {
			window.clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = window.setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	// Get file icon based on language
	const getFileIcon = (lang: string) => {
		switch (lang) {
			case 'python':
				return '🐍';
			case 'java':
				return '☕';
			case 'c':
			case 'cpp':
				return '⚡';
			default:
				return '📄';
		}
	};

	return (
		<div className="rounded-lg overflow-hidden bg-[#1e1e1e] shadow-xl">
			<div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
				<span className="flex items-center gap-2 text-sm text-gray-400">
					<span>{getFileIcon(language)}</span>
					<span>{filename}</span>
				</span>
				<button
					onClick={handleCopy}
					className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
				>
					{copied ? (
						<Check size={16} className="text-green-500" />
					) : (
						<Copy size={16} />
					)}
					{copied ? 'Copied!' : 'Copy'}
				</button>
			</div>
			<pre className="p-4 m-0 overflow-x-auto">
				<code className={`language-${language}`}>{code}</code>
			</pre>
		</div>
	);
};

export default CodeBlock;