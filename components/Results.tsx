"use client";

import useTranslation from "next-translate/useTranslation";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Results() {
  const { t } = useTranslation("common");
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const results = [
    {
      key: "maison-du-temps",
      emoji: "⌚",
      metric: "20 000",
      metricLabel: "results.maisonDuTemps.metricLabel",
      title: "results.maisonDuTemps.title",
      description: "results.maisonDuTemps.description",
    },
    {
      key: "padel15",
      emoji: "🎾",
      metric: "+3000",
      metricLabel: "results.padel15.metricLabel",
      title: "results.padel15.title",
      description: "results.padel15.description",
    },
    {
      key: "uptoo",
      emoji: "📈",
      metric: "25M€",
      metricLabel: "results.uptoo.metricLabel",
      title: "results.uptoo.title",
      description: "results.uptoo.description",
    },
  ];

  useEffect(() => {
    if (!cardsRef.current) return;
    const elements = cardsRef.current.filter(
      (el): el is HTMLDivElement => el !== null
    );
    gsap.set(elements, { opacity: 0, scale: 0.95 });

    const getCols = () => {
      if (typeof window === "undefined") return 3;
      if (window.innerWidth < 768) return 1;
      return 3;
    };

    const cols = getCols();
    const lines: number[][] = [];
    for (let i = 0; i < elements.length; i += cols) {
      lines.push(
        Array.from({ length: cols }, (_, j) => i + j).filter(
          (idx) => idx < elements.length
        )
      );
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = elements.findIndex((el) => el === entry.target);
            const lineIdx = Math.floor(idx / cols);
            const line = lines[lineIdx].map((i) => elements[i]).filter(Boolean);
            gsap.to(line, {
              opacity: 1,
              scale: 1,
              duration: 1.5,
              stagger: 0.18,
              ease: "power2.out",
            });
            line.forEach((el) => observer.unobserve(el));
          }
        });
      },
      { threshold: 0.8 }
    );
    lines.forEach((line) => {
      const first = elements[line[0]];
      if (first) observer.observe(first);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="results" className="container pb-10 relative z-20">
      <div className="md:border md:border-interactive md:px-8 py-10 md:py-16 rounded-lg bg-background space-y-6 relative z-20">
        <div className="text-center space-y-6">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-primary to-text-tertiary bg-clip-text text-transparent">
            {t("results.title")}
          </h2>
          {/* Description */}
          <p className="text-text-tertiary">{t("results.description")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((result, i) => (
            <div
              key={result.key}
              ref={(el) => {
                cardsRef.current[i] = el;
                return undefined;
              }}
              className="md:min-h-80 border border-interactive p-6 flex justify-between rounded-lg flex-col space-y-4"
              style={{ opacity: 0, transform: "scale(0.95)" }}
            >
              {/* Emoji */}
              <div className="text-5xl mb-2" aria-hidden="true">
                {result.emoji}
              </div>

              {/* Metric */}
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">
                  {result.metric}
                </div>
                <div className="text-sm text-text-tertiary">
                  {t(result.metricLabel)}
                </div>
              </div>

              {/* Title */}
              <div className="text-lg font-semibold">{t(result.title)}</div>

              {/* Description */}
              <div className="text-sm text-text-tertiary">
                {t(result.description)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
