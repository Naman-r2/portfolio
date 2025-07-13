import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CVSection from "./components/CVSection";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <CVSection />
      <Contact />
    </>
  );
}

export default App;