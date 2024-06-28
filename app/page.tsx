import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen xl:snap-y xl:snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <header className="w-screen bg-[#000] fixed top-0 z-20 py-4 px-4 sm:px-10 lg:px-0 ">
        <Header />
      </header>
      {/* Hero */}
      <section id="hero" className="page">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="page">
        <About />
        <Skills />
      </section>

      <section id="projects" className="page">
        <Projects />
      </section>
      {/* Contact */}
      <section id="contact" className="page">
        <Contact />
      </section>
      <footer className='fixed bottom-0 z-20 p-4 bg-stone-900 w-screen'>
        <Link href={'#hero'}>
          <p className='page-title text-shadow font-extralight tracking-[3px] text-sm text-center hover:text-stone-400 transition duration-300'>© {new Date().getFullYear()} Ammar Hajbakour.</p>
        </Link>
      </footer>
    </main>
  );
}
