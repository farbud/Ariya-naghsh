import Hero from "@/app/components/home/Hero";
import Services from "@/app/components/home/Services";
import Stats from "@/app/components/home/Stats";
import AboutPreview from "@/app/components/home/AboutPreview";
import Portfolio from "@/app/components/home/Portfolio";
import CTA from "@/app/components/home/CTA";
import Footer from "@/app/components/layout/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <AboutPreview />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  );
}
