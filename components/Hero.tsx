"use client";

import Image from "next/image";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="container pb-10 pt-24 md:pt-20 min-h-screen flex items-center">
      <div>
        <div className="space-y-8">
          {/* Photo */}
          <div className="w-24 h-24 rounded-full bg-interactive overflow-hidden mb-8">
            <Image
              src="/Martin-2.png"
              alt="Martin Cavil"
              className="w-full h-full object-cover grayscale"
              width={96}
              height={96}
            />
          </div>

          {/* Titre */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-text-tertiary">
            Salut, moi c'est <span className="text-text-primary">Martin</span> —{" "}
            <br />
            Développeur freelance Next.js / React
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-5xl text-text-tertiary">
            J'aide les entreprises à{" "}
            <span className="text-text-primary">
              créer des sites marketing animés, des MVPs ou des interfaces
              produits sur-mesure
            </span>
            . Je code en{" "}
            <span className="text-text-primary">React/Next.js, Tailwind</span>{" "}
            et j'intègre des maquettes pixel-perfect depuis Figma.
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
                On échange ?
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
