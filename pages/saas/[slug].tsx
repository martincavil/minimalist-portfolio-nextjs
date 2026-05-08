import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Mail, X } from "lucide-react";
import useTranslation from "next-translate/useTranslation";
import { saasProjects, Saas, SaasStatus } from "@/data/saas";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

interface SaasPageProps {
  saas: Saas;
}

const STATUS_STYLES: Record<SaasStatus, { bg: string; text: string; label: string }> = {
  beta:        { bg: "bg-yellow-500/10", text: "text-yellow-500", label: "saas.details.statusBeta" },
  live:        { bg: "bg-emerald-500/10", text: "text-emerald-500", label: "saas.details.statusLive" },
  "in-progress": { bg: "bg-blue-500/10", text: "text-blue-500",   label: "saas.details.statusInProgress" },
  paused:      { bg: "bg-gray-500/10", text: "text-gray-400",     label: "saas.details.statusPaused" },
  acquired:    { bg: "bg-purple-500/10", text: "text-purple-400", label: "saas.details.statusAcquired" },
};

const PARTNERSHIP_TYPE_ICONS: Record<string, string> = {
  integration:   "🔗",
  acquisition:   "💰",
  reseller:      "📦",
  "white-label": "⚪",
};

export default function SaasDetailPage({ saas }: SaasPageProps) {
  const { t, lang } = useTranslation("common");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const l = lang as "fr" | "en";

  const isVideo = (url: string) =>
    url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".mov");

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const accentStyle = { color: saas.color };
  const accentBorderStyle = { borderColor: saas.color };
  const accentBgStyle = { backgroundColor: `${saas.color}15` };

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Ctext y='96' font-size='96'%3E🧑‍💻%3C/text%3E%3C/svg%3E"
        />
        <title>{`${saas.name} - Martin Cavil`}</title>
        <meta name="description" content={saas.description[l]} />
        <link rel="canonical" href={`https://martincavil.com/saas/${saas.slug}`} />
        <meta property="og:title" content={`${saas.name} - Martin Cavil`} />
        <meta property="og:description" content={saas.description[l]} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://martincavil.com/saas/${saas.slug}`} />
        {saas.cover && <meta property="og:image" content={saas.cover} />}
      </Head>
      <Header />

      <main className="container pt-32 md:pt-40 pb-16">
        {/* Back */}
        <Link
          href="/saas"
          className="inline-flex items-center gap-2 text-text-tertiary hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("saas.details.backToSaas")}
        </Link>

        {/* ── HERO ── */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            {/* MRR badge */}
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full"
              style={
                saas.mrr === 0
                  ? { backgroundColor: "#ef444420", color: "#ef4444" }
                  : { backgroundColor: `${saas.color}20`, color: saas.color }
              }
            >
              {saas.mrr === 0 ? "$0 MRR" : `$${saas.mrr.toLocaleString()}/mo`}
            </span>

            {/* Status badge */}
            {saas.status && (
              <span
                className={`text-xs font-bold px-2.5 py-1 rounded-full ${STATUS_STYLES[saas.status].bg} ${STATUS_STYLES[saas.status].text}`}
              >
                {t(STATUS_STYLES[saas.status].label)}
              </span>
            )}

            <span className="text-text-tertiary text-sm">{saas.createdAt}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <h1 className="text-3xl md:text-5xl font-bold" style={accentStyle}>
              {saas.name}
            </h1>
            <div className="flex gap-3">
              <a
                href={saas.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg border transition-all"
                style={{ ...accentBorderStyle, ...accentStyle }}
              >
                <ExternalLink className="w-4 h-4" />
                {t("saas.details.visitSaas")}
              </a>
              {saas.github && (
                <a
                  href={saas.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg border border-interactive text-text-tertiary hover:text-primary hover:border-primary transition-all"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
            </div>
          </div>

          <p className="text-lg font-medium mb-2" style={accentStyle}>
            {saas.tagline[l]}
          </p>
          <p className="text-lg text-text-tertiary leading-relaxed">
            {saas.description[l]}
          </p>
        </div>

        {/* Cover */}
        {saas.gifCover && (
          <div className="mb-16 rounded-lg overflow-hidden">
            <video src={saas.gifCover} autoPlay loop muted playsInline className="w-full h-auto" />
          </div>
        )}
        {!saas.gifCover && saas.cover && (
          <div className="mb-16 rounded-lg overflow-hidden">
            <Image src={saas.cover} alt={saas.name} width={1200} height={675} className="w-full h-auto" />
          </div>
        )}

        {/* ── KPIs ── */}
        {saas.KPIs && saas.KPIs.length > 0 && (
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {saas.KPIs.map((kpi, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 p-6 bg-background rounded-lg border"
                  style={accentBorderStyle}
                >
                  <span className="text-3xl md:text-4xl font-bold" style={accentStyle}>
                    {kpi.number}
                  </span>
                  <span className="text-text-tertiary text-center text-sm">{kpi[l]}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── PROBLEM ── */}
        {saas.problem && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t("saas.details.problem")}</h2>
            <p className="text-text-tertiary leading-relaxed text-lg">{saas.problem[l]}</p>
          </section>
        )}

        {/* ── SOLUTION ── */}
        {saas.solution && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t("saas.details.solution")}</h2>
            <p className="text-text-tertiary leading-relaxed text-lg">{saas.solution[l]}</p>
          </section>
        )}

        {/* ── FEATURES ── */}
        {saas.features && saas.features.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t("saas.details.features")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {saas.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg border"
                  style={{ ...accentBgStyle, borderColor: `${saas.color}30` }}
                >
                  <h3 className="text-lg font-semibold mb-2" style={accentStyle}>
                    {feature.title[l]}
                  </h3>
                  <p className="text-text-tertiary text-sm leading-relaxed">
                    {feature.description[l]}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── MY JOURNEY ── */}
        {saas.whyBuilt && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {t("saas.details.whyBuilt")}
            </h2>
            <div
              className="p-6 rounded-lg border-l-4 bg-background"
              style={{ borderColor: saas.color }}
            >
              <p className="text-text-tertiary leading-relaxed text-lg">{saas.whyBuilt[l]}</p>
            </div>
          </section>
        )}

        {/* ── TECH STACK ── */}
        {saas.skills && saas.skills.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t("saas.details.techStack")}</h2>
            <div className="flex flex-wrap gap-2">
              {saas.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-md px-3 py-1.5 text-sm font-semibold"
                  style={{ ...accentBgStyle, color: saas.color }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* ── BUSINESS MODEL ── */}
        {saas.businessModel && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t("saas.details.businessModel")}</h2>
            <p className="text-text-tertiary leading-relaxed text-lg">{saas.businessModel[l]}</p>
          </section>
        )}

        {/* ── ROADMAP ── */}
        {saas.roadmap && saas.roadmap.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t("saas.details.roadmap")}</h2>
            <ul className="space-y-4">
              {saas.roadmap.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start text-text-tertiary text-lg">
                  <span className="font-bold mt-0.5 shrink-0" style={accentStyle}>
                    {idx + 1}.
                  </span>
                  <span className="leading-relaxed">{item[l]}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ── METRICS / WHERE I'M AT ── */}
        {saas.metrics && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t("saas.details.metrics")}</h2>
            <div
              className="p-6 rounded-lg border bg-background"
              style={accentBorderStyle}
            >
              {saas.statusNote && (
                <p className="text-sm font-semibold mb-3" style={accentStyle}>
                  {saas.statusNote[l]}
                </p>
              )}
              <p className="text-text-tertiary leading-relaxed">{saas.metrics[l]}</p>
            </div>
          </section>
        )}

        {/* ── GALLERY ── */}
        {saas.images && saas.images.length > 0 && (
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {saas.images.map((image, idx) => (
                <div
                  key={idx}
                  className="rounded-lg overflow-hidden border border-interactive cursor-pointer hover:border-primary transition-colors group"
                  onClick={() => setSelectedImage(image)}
                >
                  {isVideo(image) ? (
                    <video
                      src={image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <Image
                      src={image}
                      alt={`${saas.name} - Screenshot ${idx + 1}`}
                      width={800}
                      height={500}
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── PARTNERSHIP & ACQUISITION ── */}
        {(saas.partnership?.isOpen || saas.acquisition?.isOpen) && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              {t("saas.details.partnership")}
            </h2>
            <p className="text-text-tertiary mb-8">{t("saas.details.partnershipSubtitle")}</p>

            <div
              className="rounded-xl border p-8 space-y-8"
              style={{ ...accentBgStyle, ...accentBorderStyle }}
            >
              {/* Current status */}
              {saas.statusNote && (
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide mb-2" style={accentStyle}>
                    {t("saas.details.partnershipCurrentStatus")}
                  </p>
                  <p className="text-text-tertiary">{saas.statusNote[l]}</p>
                </div>
              )}

              {/* Partnership types */}
              {saas.partnership?.types && saas.partnership.types.length > 0 && (
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={accentStyle}>
                    {t("saas.details.partnershipInterestedIn")}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {saas.partnership.types.map((type) => (
                      <div
                        key={type}
                        className="flex items-center gap-2 px-4 py-3 rounded-lg bg-background border border-interactive"
                      >
                        <span>{PARTNERSHIP_TYPE_ICONS[type]}</span>
                        <span className="text-sm font-semibold text-text-primary">
                          {t(`saas.details.partnershipTypes.${type}`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Details */}
              {saas.partnership?.details && (
                <div className="border-t border-interactive pt-6">
                  <p className="text-text-tertiary">{saas.partnership.details[l]}</p>
                </div>
              )}

              {/* CTA */}
              {saas.acquisition?.contact && (
                <div className="border-t border-interactive pt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                  <p className="text-sm font-semibold" style={accentStyle}>
                    {t("saas.details.partnershipContact")}
                  </p>
                  <a
                    href={`mailto:${saas.acquisition.contact}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all text-white"
                    style={{ backgroundColor: saas.color }}
                  >
                    <Mail className="w-4 h-4" />
                    {saas.acquisition.contact}
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-lg bg-background/80 hover:bg-background transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {isVideo(selectedImage) ? (
                <video
                  src={selectedImage}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg"
                />
              ) : (
                <Image
                  src={selectedImage}
                  alt="SaaS preview"
                  width={1920}
                  height={1080}
                  className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg"
                />
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths: Array<{ params: { slug: string }; locale: string }> = [];
  saasProjects.forEach((saas) => {
    locales?.forEach((locale) => {
      paths.push({ params: { slug: saas.slug }, locale });
    });
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const saas = saasProjects.find((s) => s.slug === params?.slug);
  if (!saas) return { notFound: true };
  return { props: { saas } };
};
