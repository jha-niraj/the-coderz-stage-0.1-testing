"use client"

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import SmoothScroll from "@/components/smoothscroll";
import SupportSection from "@/components/homepage/supportsection";
import FeedbackSection from "@/components/homepage/feedbacksection";
import ContactSection from "@/components/homepage/contactsection";
import ExploreResourcesSection from "@/components/homepage/exploreresources";
import OpenSourceContribution from "@/components/homepage/opensource";
import MainPage from "@/components/homepage/mainpage";

export default function Home() {
	const session = useSession();
	const router = useRouter();

	return (
		<SmoothScroll>
			<main className="bg-neutral-900 flex flex-col items-center justify-center w-full">
				<MainPage />
				<ExploreResourcesSection />
				<OpenSourceContribution />
				<FeedbackSection />
				<SupportSection />
				<ContactSection />
			</main>
			<ShootingStars />
			<StarsBackground />
		</SmoothScroll>
	);
};