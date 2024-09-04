"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { getPageContentFromNotion } from "./lessons/paytm/page";

export default function Home() {
	const session = useSession();

	const [pageData, setPageData] = useState({ title: '', content: '' });
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getPageContentFromNotion();
			if (data) {
				setPageData(data);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	console.log(pageData.title)

	return (
		<>
			<AuroraBackground className="bg-black text-white">
				<motion.div
					initial={{ opacity: 0.0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="relative flex flex-col gap-4 items-center justify-center px-4"
				>
					<div>
						{
							JSON.stringify(session?.data?.user)
						}
						{
							loading ? <div>
									Loading...
								</div>
								:
								<div>
									<h1>{pageData.title}</h1>
									<div>
										<pre>{pageData.content}</pre>
									</div>
								</div>
						}
					</div>
				</motion.div>
			</AuroraBackground>
			<div>
				Niraj Jha
			</div>
		</>
	);
}
