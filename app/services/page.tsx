import SmoothScroll from "@/components/smoothscroll";
import HeroSection from "./_components/herosection";
import Portfolio from "./_components/portfolio";
import Services from "./_components/servicesoffer";
import FaqsAccrodian from "./_components/faqs";
import ContactSection from "./_components/contact";
import FollowUs from "./_components/followus";

export default function ServicesPage() {
    return (
        <SmoothScroll>
            <main className={`h-full w-[95%] sm:w-[80%] relative flex flex-col items-center justify-center mx-auto`}>
                <HeroSection />
                <Services />
                <Portfolio />
                <FaqsAccrodian />
                <ContactSection />
                <FollowUs />
            </main>
        </SmoothScroll>
    )
}