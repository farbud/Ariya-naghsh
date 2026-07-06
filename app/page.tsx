import Footer from "@/app/components/layout/Footer";
import Hero from "./components/home/Hero";
import AboutPreview from "./components/home/AboutPreview";
import CTA from "./components/home/CTA";
import Services from "./components/home/Services";

export default function Home() {
  return (
    <div>
      <section className="stack-section z-10 bg-[#05060a]">
        <Hero />
      </section>

      {/* SERVICES (اول کامل دیده میشه) */}
      <section className="min-h-screen bg-white text-black relative z-10">
        <Services />
      </section>

      {/* PAPER STACK START (بعد از Services) */}
      <section className="stack bg-slate-100 text-black rounded-t-3xl relative z-20">
        <AboutPreview />
      </section>

      <section className="stack-section z-40 bg-white text-black rounded-t-3xl shadow-[0_-20px_60px_rgba(0,0,0,0.4)]">
        <CTA />
      </section>

      {/* 🚨 Footer خارج از sticky stack */}
      <footer className="relative z-50 bg-black text-white py-16">
        <Footer />
      </footer>
    </div>
  );
}
