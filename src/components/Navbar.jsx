import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Resume", path: "/resume" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-md"
          : "bg-gradient-to-r from-purple-600 to-indigo-700"
      }`}
    >
      <h1 className="text-2xl font-bold text-white dark:text-yellow-300">Naman</h1>

      <ul className="flex space-x-6 font-medium">
        {navItems.map(({ label, path }) => (
          <li key={label}>
            <Link
              to={path}
              className={`${
                location.pathname === path
                  ? "text-yellow-300 font-semibold"
                  : "text-white dark:text-gray-300 hover:text-yellow-300"
              } transition-colors duration-200`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

