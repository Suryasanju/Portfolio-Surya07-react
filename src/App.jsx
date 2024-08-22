import "./App.css";
import Certification from "./sections/Certification/Certification";
import Contact from "./sections/Contact/Contact";
import Education from "./sections/Education/Education";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Certification />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
