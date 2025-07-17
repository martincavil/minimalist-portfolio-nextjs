"use client";

import useTranslation from "next-translate/useTranslation";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { skills } from "@/data/skills";
import { Rocket, ScanLine, BarChart2, Layers, Handshake } from "lucide-react";

export default function Skills() {
  const { t } = useTranslation("common");
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!cardsRef.current) return;
    const elements = cardsRef.current;
    gsap.set(elements, { opacity: 0, scale: 0.95 });

    const getCols = () => {
      if (typeof window === "undefined") return 3;
      if (window.innerWidth < 768) return 2;
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
    <section id="skills" className="container pb-10 relative z-20">
      <div className="md:border md:border-interactive md:px-8 py-10 md:py-16 rounded-lg bg-background space-y-6 relative z-20">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-primary to-text-tertiary bg-clip-text text-transparent">
            {t("skills.title")}
          </h2>
          <p className="text-text-tertiary">{t("skills.description")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => {
            const iconMap: Record<string, React.ElementType> = {
              Rocket,
              ScanLine,
              BarChart2,
              Layers,
              Handshake,
            };
            const LucideIcon = iconMap[skill.icon];
            return (
              <div
                key={skill.key}
                ref={(el) => {
                  cardsRef.current[i] = el;
                  return undefined;
                }}
                className="md:min-h-96 border border-interactive p-4 flex justify-center rounded-lg flex-col space-y-3"
                style={{ opacity: 0, transform: "scale(0.95)" }}
              >
                {LucideIcon && (
                  <LucideIcon
                    size={48}
                    className="text-primary mb-2"
                    aria-hidden="true"
                  />
                )}
                <div className="text-lg font-semibold">{t(skill.label)}</div>
                <div className="text-sm text-text-tertiary">
                  {t(skill.description)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
