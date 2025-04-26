import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Resume", path: "/resume" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-dark-800 shadow-soft transition-colors duration-300">
      <nav className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
        <NavLink
          to="/"
          className="text-2xl font-bold text-primary-600 dark:text-primary-400 tracking-tight"
          onClick={() => setIsOpen(false)}
        >
          Mo.Hasmi
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-200"
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            {theme === "light" ? (
              <Moon size={18} className="text-gray-700" />
            ) : (
              <Sun size={18} className="text-gray-200" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-200"
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            {theme === "light" ? (
              <Moon size={18} className="text-gray-700" />
            ) : (
              <Sun size={18} className="text-gray-200" />
            )}
          </button>

          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-dark-800 shadow-md md:hidden"
          >
            <ul className="px-4 py-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                        isActive
                          ? "bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300"
                          : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-700"
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
