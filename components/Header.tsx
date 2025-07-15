// components/Header.tsx
"use client";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const closeMoreMenu = () => {
    setIsMoreMenuOpen(false);
  };

  // Fermer le menu "more" quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        moreMenuRef.current &&
        !moreMenuRef.current.contains(event.target as Node)
      ) {
        setIsMoreMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="text-2xl font-light text-white">Martin</div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8 relative bg-grey border rounded-full px-4 py-2">
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#blog"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Blog
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Projects
            </a>
            <a
              href="#resume"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Resume
            </a>

            {/* More menu button */}
            <div className="relative" ref={moreMenuRef}>
              <button
                onClick={toggleMoreMenu}
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                •••
              </button>

              {/* Dropdown menu */}
              {isMoreMenuOpen && (
                <div className="absolute right-0 top-full mt-4 w-48 bg-grey backdrop-blur-sm rounded-2xl p-6 border border-gray-800 py-2">
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="mr-3">📁</span>
                      <span>Github</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="mr-3">🧵</span>
                      <span>Threads</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="mr-3">🏀</span>
                      <span>Dribbble</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="mr-3">🎨</span>
                      <span>Behance</span>
                    </a>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <button className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                      <span className="text-xs">🌙</span>
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                      <span className="text-xs">💬</span>
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                      <span className="text-xs">☀️</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <nav className="py-4 space-y-2">
              <a
                href="#about"
                onClick={closeMenu}
                className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#blog"
                onClick={closeMenu}
                className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Blog
              </a>
              <a
                href="#projects"
                onClick={closeMenu}
                className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#resume"
                onClick={closeMenu}
                className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Resume
              </a>
              <div className="border-t border-gray-800 mt-2 pt-2">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
                <a
                  href="#services"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </a>
                <a
                  href="#testimonials"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
