"use client";

import Image from "next/image";
import { Mail, Mouse } from "lucide-react";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useRef, useState } from "react";
import ScrambleText from "./ScrambleText";

const Hero = () => {
  const { t, lang } = useTranslation("common");
  // For fixed height, calculate the longest version of the texts
  const headlineFr =
    "Bienvenue, moi c'est Martin— Développeur freelance Next.js / React & Tailwind";
  const headlineEn =
    "Welcome, I'm Martin— Freelance Next.js / React & Tailwind Developer";
  const maxHeadlineLength = Math.max(headlineFr.length, headlineEn.length);
  const minHeadlineHeight = "72px";
  const descFr =
    "J'aide les entreprises à créer des sites marketing animés, des MVPs ou des interfaces produits sur-mesure.";
  const descEn =
    "I help businesses create dynamic marketing sites, MVPs, or custom product interfaces.";
  const minDescHeight = "48px";

  return (
    <section
      id="hero"
      className="container pt-24 md:pt-20 min-h-screen flex items-center"
    >
      <div className="w-full flex flex-col justify-center">
        <div className="space-y-6">
          {/* Photo & availability */}
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-interactive overflow-hidden mb-8">
              <Image
                src="/images/hero/martin-profile.webp"
                alt="Martin Cavil"
                className="w-full h-full object-cover grayscale"
                width={96}
                height={96}
              />
            </div>
            <div className="flex items-center gap-2 w-fit rounded-full border border-interactive px-6 py-3 text-sm">
              <div className="rounded-full bg-emerald-500 w-3 h-3 animate-pulse" />
              <ScrambleText text={t("hero.availability")} className="" />
            </div>
          </div>

          {/* Headline */}
          <ScrambleText
            text={t("hero.headline")}
            tag="h1"
            className="text-3xl md:text-5xl font-light leading-tight bg-gradient-to-r from-primary to-text-tertiary bg-clip-text text-transparent max-w-5xl"
            minHeight={minHeadlineHeight}
          />

          {/* Description */}
          <ScrambleText
            text={t("hero.description")}
            tag="p"
            className="text-lg  font-light leading-relaxed max-w-5xl text-text-tertiary"
            minHeight={minDescHeight}
          />

          {/* CTA */}
          <div className="pt-4">
            <a
              href="mailto:martin.cavil98@gmail.com"
              className="relative w-full md:w-fit group inline-flex justify-center items-center px-5 py-3 rounded-3xl border border-interactive overflow-hidden transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Contact Martin Cavil"
              tabIndex={0}
            >
              {/* Animated overlay */}
              <span className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>

              {/* Button content */}
              <ScrambleText
                text={t("hero.contact")}
                className="relative z-10 flex items-center gap-2 text-lg font-light text-text-primary group-hover:text-text-secondary transition-colors duration-300"
              />
              <div className="ml-3 w-6 h-6 rounded-full border border-interactive flex items-center justify-center group-hover:border-interactive-hover transition-colors duration-200 z-10 group-hover:text-text-secondary">
                <Mail className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>
        </div>
        {/* Scroll icon (mouse) */}
        <div className="flex justify-center mt-12">
          <div className="flex flex-col items-center gap-2">
            <Mouse
              className="w-8 h-8 text-primary animate-bounce"
              aria-label="Scroll down"
            />
            <span className="text-xs text-text-tertiary">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
