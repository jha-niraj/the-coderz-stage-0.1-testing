import SmoothScroll from "@/components/smoothscroll";
import SupportSection from "@/components/homepage/supportsection";
import FeedbackSection from "@/components/homepage/feedbacksection";
import ContactSection from "@/components/homepage/contactsection";
import ExploreResourcesSection from "@/components/homepage/exploreresources";
import OpenSourceContribution from "@/components/homepage/opensource";
import MainPage from "@/components/homepage/mainpage";

export default function Home() {
	return (
		<SmoothScroll>
			<main className="h-full w-full dark:bg-black bg-black dark:bg-dot-white/[0.2] bg-dot-white/[0.2] relative flex flex-col items-center justify-center lg:pt-20">
				<MainPage />
				<ExploreResourcesSection />
				<OpenSourceContribution />
				<FeedbackSection />
				<SupportSection />
				<ContactSection />
			</main>
			{/* <ShootingStars />
			<StarsBackground /> */}
		</SmoothScroll>
	);
};