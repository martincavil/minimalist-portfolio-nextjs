"use client";

import useTranslation from "next-translate/useTranslation";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Testimonies() {
  const { t } = useTranslation("common");
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const testimonies = [
    {
      key: "testimony1",
      author: "testimonies.testimony1.author",
      role: "testimonies.testimony1.role",
      company: "testimonies.testimony1.company",
      text: "testimonies.testimony1.text",
    },
    {
      key: "testimony2",
      author: "testimonies.testimony2.author",
      role: "testimonies.testimony2.role",
      company: "testimonies.testimony2.company",
      text: "testimonies.testimony2.text",
    },
    {
      key: "testimony3",
      author: "testimonies.testimony3.author",
      role: "testimonies.testimony3.role",
      company: "testimonies.testimony3.company",
      text: "testimonies.testimony3.text",
    },
  ];

  useEffect(() => {
    if (!cardsRef.current) return;
    const elements = cardsRef.current.filter(
      (el): el is HTMLDivElement => el !== null,
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
          (idx) => idx < elements.length,
        ),
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
      { threshold: 0.8 },
    );
    lines.forEach((line) => {
      const first = elements[line[0]];
      if (first) observer.observe(first);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonies" className="container pb-10 relative z-20">
      <div className="py-10 md:py-16 rounded-lg bg-background space-y-6 relative z-20">
        <div className="text-center space-y-6">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-primary to-text-tertiary bg-clip-text text-transparent">
            {t("testimonies.title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonies.map((testimony, i) => (
            <div
              key={testimony.key}
              ref={(el) => {
                cardsRef.current[i] = el;
                return undefined;
              }}
              className="md:min-h-80 border border-interactive p-6 flex justify-between rounded-lg flex-col space-y-4"
              style={{ opacity: 0, transform: "scale(0.95)" }}
            >
              {/* Quote */}
              <div className="text-base italic text-text-tertiary leading-relaxed flex-1">
                &ldquo;{t(testimony.text)}&rdquo;
              </div>

              {/* Author info */}
              <div className="space-y-1 pt-4 border-t border-interactive">
                <div className="text-lg font-semibold">
                  {t(testimony.author)}
                </div>
                <div className="text-sm text-text-tertiary">
                  {t(testimony.role)}
                </div>
                <div className="text-sm text-primary font-medium">
                  {t(testimony.company)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
