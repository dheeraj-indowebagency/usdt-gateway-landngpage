import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Networks from "@/components/Networks";
import Industries from "@/components/Industries";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Networks />
      <Industries />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
