import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <h1 className="text-xl font-bold text-indigo-700">Naman Sharma</h1>
      <ul className="flex space-x-6 font-medium text-indigo-700">
        <li><a href="#about" className="hover:text-purple-700">About</a></li>
        <li><a href="#skills" className="hover:text-purple-700">Skills</a></li>
        <li><a href="#projects" className="hover:text-purple-700">Projects</a></li>
        <li><a href="#resume" className="hover:text-purple-700">Resume</a></li>
        <li><a href="#contact" className="hover:text-purple-700">Contact</a></li>
      </ul>
    </nav>
  );
}
