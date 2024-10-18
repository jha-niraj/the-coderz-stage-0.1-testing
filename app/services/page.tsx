import SmoothScroll from "@/components/smoothscroll";
import Hero from "./_components/herosection";
import Portfolio from "./_components/portfolio";
import Services from "./_components/servicesoffer";
import FaqsAccrodian from "./_components/faqs";
import ContactSection from "./_components/contact";

export default function ServicesPage() {
    return (
        <SmoothScroll>
            <Hero />
            <Services />
            <Portfolio />
            <FaqsAccrodian />
            <ContactSection />
        </SmoothScroll>
    )
}