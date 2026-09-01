import Hero from "./Hero";
import Features from "./Features";
import Trust from "./Trust";
import Testimonials from "./Testimonials";
import Experience from "./Experience";
import Faq from "./Faq";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

export default function Home() {
  return (
    <div className="overflow-hidden">
        <Hero />
        <Features />
        <Trust />
        <Testimonials />
        <Experience />
        <Faq />
        <Footer />
        <BackToTop />
    </div>
  );
}

