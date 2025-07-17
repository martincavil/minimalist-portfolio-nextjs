"use client";

import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
export default function About() {
  const { t } = useTranslation("common");

  return (
    <section className="container py-10 md:py-16">
      {/* Titre */}
      <h2 className="text-center text-4xl md:text-7xl  bg-gradient-to-r from-primary to-text-tertiary bg-clip-text text-transparent font-semibold mb-8">
        {t("about.title")}
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 border-y border-interactive">
        {/* Ligne 1 */}
        <div className="aspect-video relative p-8">
          <Image
            src="/images/about/photo1.webp"
            alt="about-image-1"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:col-span-2 flex items-center border-l border-interactive pl-6">
          <p className="text-text-tertiary leading-relaxed">
            {t("about.description1")}
          </p>
        </div>
      </div>

      {/* Ligne 2 */}
      <div className="grid md:grid-cols-3 gap-8 border-b border-interactive">
        <div className="md:col-span-2 flex items-center order-2 md:order-none border-r border-interactive pr-6">
          <p className="text-text-tertiary leading-relaxed">
            {t("about.description1")}
          </p>
        </div>
        <div className="aspect-video relative p-8">
          <Image
            src="/images/about/photo2.webp"
            alt="about-image-2"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
