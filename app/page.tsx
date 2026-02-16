import React from "react";
import Hero from "./components/Hero";
import About from "./components/home_components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Consultation from "./components/Consultation";
import Trainings from "./components/home_components/RelevantExperience";
import JoinCircle from "./components/JoinCircle";
import LatestArticles from "./components/LatestArticles";
import Skills from "./components/home_components/Skills";
import Articles from "./components/home_components/Articles";

export default function Page() {
  return (
    <main className="text-gray-800">
      <Navbar />
      <Hero />

      <section id="about" className="py-20">
        <div className="container-max px-6">
          <About />
        </div>
      </section>

      <section id="about" className="py-20 bg-black text-white">
        <div className="container-max px-6">
          <Skills />
        </div>
      </section>

      <section id="trainings" className="py-20">
        <div className="container-max px-6">
          <Trainings />
        </div>
      </section>
      
       <section id="trainings" className="bg-neutral-100 py-20">
        <div className="container-max px-6">
          <Articles />
        </div>
      </section>


      <Footer />
    </main>
  );
}
