import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CVSection from "./components/CVSection";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div>
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <CVSection />
      <Contact />
    </div>
  );
}

export default App;
