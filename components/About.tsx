"use client";

import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
export default function About() {
  const { t } = useTranslation("common");

  return (
    <section id="about" className="container py-10 md:py-16">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-4xl  bg-gradient-to-r from-primary to-text-tertiary bg-clip-text text-transparent font-semibold mb-8">
        {t("about.title")}
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-5 md:border-y border-interactive mb-6 md:mb-0">
        {/* Row 1 */}
        <div className="md:p-6 col-span-2 mb-4 md:mb-0">
          <div className="aspect-video relative">
            <Image
              src="/images/about/martin-works.webp"
              alt="about-image-1"
              fill
              className="object-cover rounded-lg md:rounded-none"
            />
          </div>
        </div>
        <div className="md:col-span-3 flex items-center md:border-l border-interactive md:pl-6">
          <p className="text-text-tertiary leading-relaxed">
            {t("about.description1")}
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid md:grid-cols-5 md:border-b border-interactive">
        <div className="md:col-span-3 flex items-center order-2 md:order-none md:border-r border-interactive md:pr-6">
          <p className="text-text-tertiary leading-relaxed">
            {t("about.description2")}
          </p>
        </div>
        <div className="md:p-6 col-span-2 mb-4 md:mb-0">
          <div className="aspect-video relative">
            <Image
              src="/images/about/valencia-ciutat-vella.webp"
              alt="about-image-2"
              fill
              className="object-cover rounded-lg md:rounded-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
