"use client";

import { useState, useEffect, useRef } from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";

// import { gsap } from "gsap";
import {
  Ellipsis,
  Github,
  Linkedin,
  SunIcon,
  MoonIcon,
  UserPen,
} from "lucide-react";

const XIcon = () => (
  <svg className="mr-3 w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const { t, lang } = useTranslation("common");
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  const navItems = [
    { label: t("header.projects"), href: "/projects/", isPage: true },
    { label: t("header.saas"), href: "/saas/", isPage: true },
    { label: t("header.skills"), href: "skills", isPage: false },
    { label: t("header.about"), href: "about", isPage: false },
    // { label: t("header.posts"), href: "posts", isPage: true },
  ];

  const isMoreItems = [
    {
      label: t("header.github"),
      href: "https://github.com/martincavil/",
      icon: <Github className="mr-3 w-5" />,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      label: t("header.linkedin"),
      href: "https://www.linkedin.com/in/martin-cavil/",
      icon: <Linkedin className="mr-3 w-5" />,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      label: t("header.twitter"),
      href: "https://x.com/martincvl0",
      icon: <XIcon />,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    // {
    //   label: t("header.codeur"),
    //   href: "https://www.codeur.com/-martincavil",
    //   icon: <UserPen className="mr-3 w-5" />,
    //   target: "_blank",
    //   rel: "noopener noreferrer",
    // },
    {
      label: t("header.contact"),
      href: "mailto:martin.cavil98@gmail.com",
      icon: <UserPen className="mr-3 w-5" />,
    },
  ];

  // Scroll management with GSAP
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
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY || window.pageYOffset;
  //     const triggerPosition = 100;
  //     console.log("scrollY > triggerPosition", scrollY > triggerPosition);
  //     if (scrollY > triggerPosition) {
  //       // Animation to hide the logo and center the nav
  //     }
  //   };
  // });
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
          <Link href="/">
            <div ref={logoRef} className="text-3xl font-pacifico text-primary">
              Martin C.
            </div>
          </Link>

          {/* Navigation - Desktop */}
          <nav
            ref={navRef}
            className="hidden md:flex items-center justify-between gap-8 relative bg-primary-inverted border border-interactive rounded-full px-4 py-2"
          >
            {navItems.map((item, j) =>
              item.isPage ? (
                <Link
                  key={j}
                  href={item.href}
                  className="text-text-tertiary hover:text-primary transition-colors duration-300 text-sm font-semibold"
                >
                  {item.label}
                </Link>
              ) : isHomePage ? (
                <a
                  key={j}
                  href={`#${item.href}`}
                  className="text-text-tertiary hover:text-primary transition-colors duration-300 text-sm font-semibold"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(item.href);
                    if (el) {
                      const y =
                        el.getBoundingClientRect().top + window.scrollY - 120;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={j}
                  href={`/#${item.href}`}
                  className="text-text-tertiary hover:text-primary transition-colors duration-300 text-sm font-semibold"
                >
                  {item.label}
                </Link>
              )
            )}

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
                        target={item.target}
                        rel={item.rel}
                      >
                        {item.icon}
                        {item.label}
                      </a>
                    ))}
                  </div>

                  <div className="mt-3 border-t border-interactive pt-3 flex items-center gap-3">
                    <button
                      onClick={toggleDarkMode}
                      className="w-8 h-8 rounded-full  flex items-center justify-center bg-text-secondary text-text-tertiary hover:bg-interactive-hover text-tertiary hover:text-text-primary transition-colors group"
                    >
                      {darkMode ? (
                        <>
                          <SunIcon className="w-4 h-4 group-hover:rotate-180 group-hover:scale-105 duration-500 transition-all" />
                        </>
                      ) : (
                        <>
                          <MoonIcon className="w-4 h-4 group-hover:rotate-12 group-hover:scale-105 duration-500 transition-all" />
                        </>
                      )}
                    </button>
                    <Link
                      href={router.asPath}
                      locale={lang === "en" ? "fr" : "en"}
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-text-secondary text-text-tertiary hover:bg-interactive-hover text-tertiary hover:text-text-primary transition-colors group"
                      aria-label={
                        lang === "fr" ? t("header.english") : t("header.french")
                      }
                    >
                      {lang === "fr" ? (
                        <>
                          <span className="w-5">🇺🇸</span>
                        </>
                      ) : (
                        <>
                          <span className="w-5">🇫🇷</span>
                        </>
                      )}
                    </Link>
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
              {navItems.map((item, i) =>
                item.isPage ? (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={closeMenu}
                    className="block px-4 py-2 text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : isHomePage ? (
                  <a
                    key={i}
                    href={`#${item.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      closeMenu();
                      const el = document.getElementById(item.href);
                      if (el) {
                        const y =
                          el.getBoundingClientRect().top + window.scrollY - 120;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }}
                    className="block px-4 py-2 text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={i}
                    href={`/#${item.href}`}
                    onClick={closeMenu}
                    className="block px-4 py-2 text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
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
                  className="w-full flex items-center gap-3 px-4 py-2 text-primary transition-colors"
                >
                  {darkMode ? (
                    <>
                      <SunIcon className="w-4 h-4" />
                      {t("header.light_mode")}
                    </>
                  ) : (
                    <>
                      <MoonIcon className="w-4 h-4" />
                      {t("header.dark_mode")}
                    </>
                  )}
                </button>
                <Link
                  href={router.asPath}
                  locale={lang === "en" ? "fr" : "en"}
                  className="w-full flex items-center px-4 py-2 text-primary transition-colors"
                  aria-label={
                    lang === "fr" ? t("header.english") : t("header.french")
                  }
                  onClick={closeMenu}
                >
                  {lang === "fr" ? (
                    <div className="flex items-center gap-3">
                      <span className="w-4">🇺🇸</span>
                      <span>{t("header.english")}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <span className="w-4">🇫🇷</span>
                      <span>{t("header.french")}</span>
                    </div>
                  )}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
