import SmoothScroll from "@/components/smoothscroll";
import MainPage from "./_components/mainpage";
import ExploreResourcesSection from "./_components/exploreresources";
import OpenSourceContribution from "./_components/opensource";
import FeedbackSection from "./_components/feedbacksection";
import SupportSection from "./_components/supportsection";
import ContactSection from "./_components/contactsection";
import FaqsAccrodian from "./_components/faqs";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer_landing";

export  default function LandingPage() {
    return (
        <SmoothScroll>
			<main className={`h-full w-full sm:w-[80%] relative flex flex-col items-center justify-center mx-auto pt-20 sm:pt-28 lg:pt-40`}>
                <Navbar />
				<MainPage />
				<ExploreResourcesSection />
				<OpenSourceContribution />
				<FeedbackSection />
				<FaqsAccrodian />
				<SupportSection />
				<ContactSection />
                <Footer />
			</main>
		</SmoothScroll>
    )
}