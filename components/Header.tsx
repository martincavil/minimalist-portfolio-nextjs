"use client";

import { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
import {
  Ellipsis,
  Github,
  Linkedin,
  SunIcon,
  MoonIcon,
  UserPen,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const navItems = [
    { label: "Compétences", href: "skills" },
    { label: "À propos", href: "about" },
    { label: "Projets", href: "projects" },
    { label: "Articles", href: "posts" },
  ];

  const isMoreItems = [
    {
      label: "Github",
      href: "https://github.com/martincavil/",
      icon: <Github className="mr-3 w-5" />,
    },
    {
      label: "Linkedin",
      href: "https://www.linkedin.com/in/martin-cavil/",
      icon: <Linkedin className="mr-3 w-5" />,
    },
    {
      label: "Contactez-moi",
      href: "mailto:martin.cavil98@gmail.com",
      icon: <UserPen className="mr-3 w-5" />,
    },
  ];

  // Gestion du scroll avec GSAP
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY || window.pageYOffset;
  //     const triggerPosition = 100;
  //     console.log("scrollY > triggerPosition", scrollY > triggerPosition);
  //     if (scrollY > triggerPosition) {
  //       // Animation pour cacher le logo et centrer la nav
  //       gsap.to(logoRef.current, {
  //         opacity: 0,
  //         duration: 0.8,
  //         ease: "power2.out",
  //       });
  //       gsap.to(navRef.current, {
  //         x: "50%",
  //         right: "50%",
  //         top: "3rem",
  //         duration: 0.8,
  //         ease: "power2.out",
  //         position: "fixed",
  //       });
  //     } else {
  //       // Animation pour tout remettre à l'état initial
  //       gsap.to(logoRef.current, {
  //         opacity: 1,
  //         duration: 0.8,
  //       });
  //       gsap.to(navRef.current, {
  //         x: 0,
  //         right: 0,
  //         top: 0,
  //         duration: 0.6,
  //         position: "relative",
  //       });
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // Appliquer le thème au chargement et quand il change
  useEffect(() => {
    // Vérifier la préférence système ou le localStorage
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      (!("darkMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    updateTheme(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", String(newMode));
    updateTheme(newMode);
  };

  const updateTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMoreMenu = () => setIsMoreMenuOpen(!isMoreMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
    <header
      ref={headerRef}
      // Delete the className below if gsap scroll animation is activated
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm opacty-90"
    >
      <div className="container">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div ref={logoRef} className="text-3xl font-pacifico text-primary">
            Martin C.
          </div>

          {/* Navigation - Desktop */}
          <nav
            ref={navRef}
            className="hidden md:flex items-center justify-between gap-8 relative bg-primary-inverted border border-interactive rounded-full px-4 py-2"
          >
            {navItems.map((item, j) => (
              <a
                key={j}
                href={`#${item.href}`}
                className="text-text-tertiary hover:text-primary transition-colors duration-300 text-sm font-semibold"
              >
                {item.label}
              </a>
            ))}

            {/* More menu */}
            <div className="relative" ref={moreMenuRef}>
              <button
                onClick={toggleMoreMenu}
                className="text-text-tertiary hover:text-primary transition-all duration-300"
              >
                <div className="flex items-center justify-center p-2 hover:bg-text-secondary rounded-full">
                  <Ellipsis className="w-5 h-5" />
                </div>
              </button>

              {isMoreMenuOpen && (
                <div className="absolute -right-4 top-full mt-6 w-48 bg-primary-inverted backdrop-blur-sm rounded-2xl p-4 border border-interactive shadow-lg">
                  <div className="space-y-3">
                    {isMoreItems.map((item, k) => (
                      <a
                        key={k}
                        href={item.href}
                        className="flex items-center text-sm duration-300 text-text-tertiary hover:text-primary transition-colors font-semibold"
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>

                  <div className="mt-3 flex items-center gap-3">
                    <button
                      onClick={toggleDarkMode}
                      className="w-8 h-8 rounded-full  flex items-center justify-center bg-text-secondary text-text-tertiary hover:bg-interactive-hover text-tertiary hover:text-text-primary transition-colors group"
                    >
                      {darkMode ? (
                        <SunIcon className="w-4 h-4 group-hover:rotate-180 group-hover:scale-105 duration-500 transition-all" />
                      ) : (
                        <MoonIcon className="w-4 h-4 group-hover:rotate-12 group-hover:scale-105 duration-500 transition-all" />
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-text-tertiary hover:text-primary transition-colors"
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
          <div className="md:hidden border-t border-interactive rounded-b-xl">
            <nav className="py-4 space-y-2">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={`#${item.href}`}
                  onClick={closeMenu}
                  className="block px-4 py-2 text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-interactive mt-2 pt-2">
                {isMoreItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center px-4 py-2 text-primary transition-colors"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                ))}
                <button
                  onClick={() => {
                    toggleDarkMode();
                    closeMenu();
                  }}
                  className="w-full flex items-center px-4 py-2 text-primary transition-colors"
                >
                  {darkMode ? (
                    <>
                      <SunIcon className="mr-3 w-4 h-4" />
                      Mode clair
                    </>
                  ) : (
                    <>
                      <MoonIcon className="mr-3 w-4 h-4" />
                      Mode sombre
                    </>
                  )}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
