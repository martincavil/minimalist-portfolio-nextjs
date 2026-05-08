"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import useTranslation from "next-translate/useTranslation";
import { saasProjects } from "../data/saas";

export default function SaasSection() {
  const { t, lang } = useTranslation("common");
  const router = useRouter();

  return (
    <section id="saas" className="container py-10 md:pt-12 md:pb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-4xl bg-gradient-to-r from-primary to-text-tertiary bg-clip-text text-transparent font-semibold">
          {t("saas.title")}
        </h2>
        <Link
          href="/saas"
          className="text-text-tertiary hover:text-primary transition-colors text-sm md:text-base"
        >
          {t("saas.viewAll")} →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {saasProjects.map((saas) => (
          <div
            key={saas.slug}
            onClick={() => router.push(`/saas/${saas.slug}`)}
            className="group flex flex-col bg-primary-inverted border border-interactive rounded-xl p-6 hover:border-opacity-80 transition-all duration-300 relative overflow-hidden cursor-pointer"
          >
            {/* Color accent top bar */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ backgroundColor: saas.color }}
            />

            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {saas.name}
                </h3>
                <span className="text-text-tertiary text-sm">
                  {saas.createdAt}
                </span>
              </div>
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={
                  saas.mrr === 0
                    ? { backgroundColor: "#ef444420", color: "#ef4444" }
                    : { backgroundColor: `${saas.color}20`, color: saas.color }
                }
              >
                {saas.mrr === 0
                  ? "$0 MRR"
                  : `$${saas.mrr.toLocaleString()}/mo`}
              </span>
            </div>

            {/* Tagline */}
            <p className="text-sm font-medium mb-2" style={{ color: saas.color }}>
              {saas.tagline[lang as "fr" | "en"]}
            </p>

            {/* Description */}
            <p className="text-text-tertiary text-sm leading-relaxed mb-5 flex-1">
              {saas.description[lang as "fr" | "en"]}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {saas.skills.slice(0, 4).map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-text-secondary px-2 py-1 text-xs text-text-primary font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3 mt-auto">
              <a
                href={saas.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-lg border border-interactive hover:border-primary text-text-tertiary hover:text-primary transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {t("saas.card.visit")}
              </a>
              {saas.github && (
                <a
                  href={saas.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-lg border border-interactive hover:border-primary text-text-tertiary hover:text-primary transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              )}
              <div className="flex items-center justify-center w-8 h-8 rounded-lg border border-interactive text-text-tertiary group-hover:border-primary group-hover:text-primary transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
