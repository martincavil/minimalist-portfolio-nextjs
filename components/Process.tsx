"use client";

import useTranslation from "next-translate/useTranslation";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Search, FileText, Rocket, CheckCircle } from "lucide-react";

export default function Process() {
  const { t } = useTranslation("common");
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  const processSteps = [
    {
      key: "audit",
      number: "01",
      icon: Search,
      title: "process.steps.audit.title",
      description: "process.steps.audit.description",
    },
    {
      key: "proposal",
      number: "02",
      icon: FileText,
      title: "process.steps.proposal.title",
      description: "process.steps.proposal.description",
    },
    {
      key: "sprint",
      number: "03",
      icon: Rocket,
      title: "process.steps.sprint.title",
      description: "process.steps.sprint.description",
    },
    {
      key: "decision",
      number: "04",
      icon: CheckCircle,
      title: "process.steps.decision.title",
      description: "process.steps.decision.description",
    },
  ];

  useEffect(() => {
    if (!stepsRef.current) return;
    const elements = stepsRef.current.filter(
      (el): el is HTMLDivElement => el !== null
    );
    gsap.set(elements, { opacity: 0, y: 30 });

    // Animation de la ligne (de gauche à droite)
    if (lineRef.current) {
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left" });
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animer la ligne
            if (lineRef.current) {
              gsap.to(lineRef.current, {
                scaleX: 1,
                duration: 1.2,
                ease: "power2.out",
              });
            }

            // Animer les étapes
            const idx = elements.findIndex((el) => el === entry.target);
            gsap.to(elements[idx], {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: idx * 0.15,
              ease: "power2.out",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="container py-16 md:py-24 relative z-20">
      <div className="space-y-12">
        <div className="space-y-4">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-primary to-text-tertiary bg-clip-text text-transparent">
            {t("process.title")}
          </h2>
          {/* Description */}
          <p className="text-text-tertiary">{t("process.description")}</p>
        </div>

        {/* Timeline - Mobile: vertical, Desktop: horizontal */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line - positioned at center of icons (24px from top = half of 48px icon height) */}
          <div
            ref={lineRef}
            className="hidden md:block absolute top-6 left-0 right-0 h-px bg-interactive"
          />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.key}
                  ref={(el) => {
                    stepsRef.current[i] = el;
                    return undefined;
                  }}
                  className="relative flex flex-col items-center md:items-start space-y-4"
                  style={{ opacity: 0, transform: "translateY(30px)" }}
                >
                  {/* Icon circle on timeline */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2 text-center md:text-left">
                    <div className="text-sm font-bold text-primary/60">
                      ÉTAPE {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {t(step.title)}
                    </h3>
                    <p className="text-sm text-text-tertiary leading-relaxed">
                      {t(step.description)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
