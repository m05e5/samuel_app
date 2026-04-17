import Hero from "./components/Hero";
import About from "./components/home_components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Experience from "./components/home_components/RelevantExperience";
import Skills from "./components/home_components/Skills";
import Articles from "./components/home_components/Articles";

export default function Page() {
  return (
    <main className="text-gray-800 scroll-smooth">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about" className="py-20">
        <div className="container-max px-6">
          <About />
        </div>
      </section>

      <section id="skills" className="bg-black py-20 text-white">
        <div className="container-max px-6">
          <Skills />
        </div>
      </section>

      <section id="experience" className="py-20">
        <div className="container-max px-6">
          <Experience />
        </div>
      </section>

      <section id="articles" className="bg-neutral-100 py-20">
        <div className="container-max px-6">
          <Articles />
        </div>
      </section>

      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}