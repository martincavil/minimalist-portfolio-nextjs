import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, X } from "lucide-react";
import useTranslation from "next-translate/useTranslation";
import { saasProjects, Saas } from "@/data/saas";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

interface SaasPageProps {
  saas: Saas;
}

export default function SaasDetailPage({ saas }: SaasPageProps) {
  const { t, lang } = useTranslation("common");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
        <meta
          name="description"
          content={saas.description[lang as "fr" | "en"]}
        />
        <link
          rel="canonical"
          href={`https://martincavil.com/saas/${saas.slug}`}
        />
        <meta
          property="og:title"
          content={`${saas.name} - Martin Cavil`}
        />
        <meta
          property="og:description"
          content={saas.description[lang as "fr" | "en"]}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://martincavil.com/saas/${saas.slug}`}
        />
        {saas.cover && <meta property="og:image" content={saas.cover} />}
      </Head>
      <Header />

      <main className="container pt-32 md:pt-40 pb-16">
        {/* Back button */}
        <Link
          href="/saas"
          className="inline-flex items-center gap-2 text-text-tertiary hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("saas.details.backToSaas")}
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: `${saas.color}20`,
                color: saas.color,
              }}
            >
              {saas.mrr === 0
                ? "$0 MRR"
                : `$${saas.mrr.toLocaleString()}/mo`}
            </span>
            <span className="text-text-tertiary text-sm">{saas.createdAt}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <h1
              className="text-3xl md:text-5xl font-bold"
              style={accentStyle}
            >
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
            {saas.tagline[lang as "fr" | "en"]}
          </p>
          <p className="text-lg text-text-tertiary leading-relaxed">
            {saas.description[lang as "fr" | "en"]}
          </p>
        </div>

        {/* Cover video/image */}
        {saas.gifCover && (
          <div className="mb-16 rounded-lg overflow-hidden">
            <video
              src={saas.gifCover}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
        )}
        {!saas.gifCover && saas.cover && (
          <div className="mb-16 rounded-lg overflow-hidden">
            <Image
              src={saas.cover}
              alt={saas.name}
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* KPIs */}
        {saas.KPIs && saas.KPIs.length > 0 && (
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {saas.KPIs.map((kpi, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 p-6 bg-background rounded-lg border"
                  style={accentBorderStyle}
                >
                  <span
                    className="text-4xl font-bold"
                    style={accentStyle}
                  >
                    {kpi.number}
                  </span>
                  <span className="text-text-tertiary text-center">
                    {kpi[lang as "fr" | "en"]}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Problem */}
        {saas.problem && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {t("saas.details.problem")}
            </h2>
            <p className="text-text-tertiary leading-relaxed text-lg">
              {saas.problem[lang as "fr" | "en"]}
            </p>
          </section>
        )}

        {/* Solution */}
        {saas.solution && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {t("saas.details.solution")}
            </h2>
            <p className="text-text-tertiary leading-relaxed text-lg">
              {saas.solution[lang as "fr" | "en"]}
            </p>
          </section>
        )}

        {/* Features */}
        {saas.features && saas.features.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {t("saas.details.features")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {saas.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg border"
                  style={{ ...accentBgStyle, borderColor: `${saas.color}30` }}
                >
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={accentStyle}
                  >
                    {feature.title[lang as "fr" | "en"]}
                  </h3>
                  <p className="text-text-tertiary text-sm leading-relaxed">
                    {feature.description[lang as "fr" | "en"]}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack */}
        {saas.skills && saas.skills.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {t("saas.details.techStack")}
            </h2>
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

        {/* Business Model */}
        {saas.businessModel && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {t("saas.details.businessModel")}
            </h2>
            <p className="text-text-tertiary leading-relaxed text-lg">
              {saas.businessModel[lang as "fr" | "en"]}
            </p>
          </section>
        )}

        {/* Roadmap */}
        {saas.roadmap && saas.roadmap.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {t("saas.details.roadmap")}
            </h2>
            <ul className="space-y-4">
              {saas.roadmap.map((item, idx) => (
                <li
                  key={idx}
                  className="flex gap-4 items-start text-text-tertiary text-lg"
                >
                  <span className="font-bold mt-0.5" style={accentStyle}>
                    {idx + 1}.
                  </span>
                  <span className="leading-relaxed">
                    {item[lang as "fr" | "en"]}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Gallery */}
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
