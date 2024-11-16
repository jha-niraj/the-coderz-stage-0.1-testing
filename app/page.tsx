import SmoothScroll from "@/components/smoothscroll";
import MainPage from "../components/homepage/mainpage";
import ExploreResourcesSection from "../components/homepage/exploreresources";
import OpenSourceContribution from "../components/homepage/opensource";
import FeedbackSection from "../components/homepage/feedbacksection";
import SupportSection from "../components/homepage/supportsection";
import ContactSection from "../components/homepage/contactsection";
import FaqsAccrodian from "../components/homepage/faqs";
import StudentServices from "@/components/homepage/studentservices";
import StatsSection from "@/components/homepage/datacount";

export  default function LandingPage() {
    return (
        <SmoothScroll>
			<main className={`h-full w-[95%] sm:w-[80%] relative flex flex-col items-center justify-center mx-auto pt-16 sm:pt-32`}>
				<MainPage />
				<ExploreResourcesSection />
				<StudentServices />
				<OpenSourceContribution />
				<StatsSection />
				<FeedbackSection />
				<FaqsAccrodian />
				<SupportSection />
				<ContactSection />
			</main>
		</SmoothScroll>
    )
}