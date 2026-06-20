import Hero from "./components/Hero";
import About from "./components/home_components/About";
import Articles from "./components/home_components/Articles";
import Experience from "./components/home_components/RelevantExperience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/home_components/Projects";
import Skills from "./components/home_components/Skills";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Articles />
      <Skills />
      <Experience />
      <Footer />
    </main>
  );
}
