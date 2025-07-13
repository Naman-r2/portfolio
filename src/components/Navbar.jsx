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

  const navItems = ["About", "Projects", "Resume", "Contact"]; // replaced Skills

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-end items-center transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-md"
          : "bg-gradient-to-r from-purple-600 to-indigo-700"
      }`}
    >
      <ul className="flex space-x-6 font-medium">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-white dark:text-gray-300 hover:text-yellow-300 transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
        <li className="w-8" /> {/* Spacer for ThemeToggle */}
      </ul>
    </nav>
  );
}
