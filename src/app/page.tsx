import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full pt-20 bg-background min-h-screen">
      <div className="flex flex-col w-full">
        {/* Top Accent Atmospheric Glow + Hero */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
          <div className="absolute top-20 -left-20 w-[420px] h-[420px] bg-secondary-container/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
          <Hero />
        </div>

        <About />
        <Projects />
        <Experience />
        <Skills />
        <Leadership />
        <Contact />
      </div>
    </main>
  );
}