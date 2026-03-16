import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import Vision from "@/components/Vision";
import WhyMe from "@/components/WhyMe";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="hero-bg-radial">
      <Navbar />
      <Hero />
      <StatsStrip />
      <Vision />
      <WhyMe />
      <Experience />
      <Skills />
      <CTA />
      <Footer />
    </main>
  );
}
