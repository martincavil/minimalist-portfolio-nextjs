"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import useTranslation from "next-translate/useTranslation";

export default function Hero() {
  const { t } = useTranslation("common");

  return (
    <section className="container pb-10 pt-24 md:pt-20 min-h-screen flex items-center">
      <div>
        <div className="space-y-6">
          {/* Photo & avalaibility*/}
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-interactive overflow-hidden mb-8">
              <Image
                src="/Martin-2.png"
                alt="Martin Cavil"
                className="w-full h-full object-cover grayscale"
                width={96}
                height={96}
              />
            </div>
            <div className="flex items-center gap-2 w-fit rounded-full border border-interactive px-6 py-3 text-sm">
              <div className="rounded-full bg-emerald-500 w-3 h-3 animate-pulse" />
              <span>{t("hero.availability")}</span>
            </div>
          </div>

          {/* Titre */}
          <h1 className="text-3xl md:text-5xl font-light leading-tight text-text-tertiary">
            {t("hero.headline1")}{" "}
            <span className="text-text-primary">{t("hero.headline2")}</span> —{" "}
            <br />
            <span>{t("hero.headline3")}</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-5xl text-text-tertiary">
            {t("hero.description")}
          </p>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="mailto:martin@email.com"
              className="relative group inline-flex items-center px-5 py-3 rounded-3xl border border-interactive overflow-hidden transition-colors duration-300"
            >
              {/* Voile animé */}
              <span className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>

              {/* Contenu du bouton */}
              <span className="relative z-10 flex items-center gap-2 text-lg font-light text-text-primary group-hover:text-text-secondary transition-colors duration-300">
                {t("hero.contact")}
                <div className="w-6 h-6 rounded-full border border-interactive flex items-center justify-center group-hover:border-interactive-hover transition-colors duration-200">
                  <Mail className="w-3.5 h-3.5" />
                </div>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
