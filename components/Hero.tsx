"use client";

import Image from "next/image";
import { Mail, Mouse } from "lucide-react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("common");

  return (
    <section
      id="hero"
      className="container pt-24 md:pt-20 min-h-screen flex items-center"
    >
      <div className="w-full flex flex-col justify-center">
        <div className="space-y-6">
          {/* Photo & availability */}
          <div className="flex flex-col md:flex-row items-start gap-1 md:gap-6">
            <div className="w-24 h-24 rounded-full bg-interactive overflow-hidden mb-8">
              <Image
                src="https://res.cloudinary.com/martincvl/image/upload/v1763147429/portfolio/hero/martin-profile.webp"
                alt="Martin Cavil"
                className="w-full h-full object-cover grayscale"
                width={96}
                height={96}
              />
            </div>
            <div className="flex items-center gap-2 w-fit rounded-full border border-interactive px-6 py-3 text-sm">
              <div className="rounded-full bg-emerald-500 w-3 h-3 animate-pulse" />
              {t("hero.availability")}
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-light leading-tight bg-gradient-to-r from-primary to-text-tertiary bg-clip-text text-transparent max-w-5xl">
            {t("hero.headline")}
          </h1>

          {/* Description */}
          <p className="text-lg font-light leading-relaxed max-w-5xl text-text-tertiary">
            {t("hero.description")}
          </p>

          {/* CTA */}
          <div className="pt-4">
            <Button
              href="mailto:martin.cavil98@gmail.com"
              icon={<Mail className="w-3.5 h-3.5" />}
              ariaLabel="Contact Martin Cavil"
              tabIndex={0}
            >
              {t("hero.contact")}
            </Button>
          </div>
        </div>
        {/* Scroll icon (mouse) */}
        <div className="flex justify-center mt-12">
          <Link href="#projects">
            <div className="flex flex-col items-center gap-2">
              <Mouse
                className="w-8 h-8 text-primary animate-bounce"
                aria-label="Scroll down"
              />
              <span className="text-xs text-text-tertiary">Scroll</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
