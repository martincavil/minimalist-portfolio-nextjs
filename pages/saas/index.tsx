import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ExternalLink, Github, ArrowLeft, ArrowUpRight } from "lucide-react";
import useTranslation from "next-translate/useTranslation";
import { saasProjects } from "@/data/saas";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DotGridBackground from "@/components/DotGridBackground";

export default function SaasPage() {
  const { t, lang } = useTranslation("common");
  const router = useRouter();

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Ctext y='96' font-size='96'%3E🧑‍💻%3C/text%3E%3C/svg%3E"
        />
        <title>{`${t("saasPage.title")} - Martin Cavil`}</title>
        <meta name="description" content={t("saasPage.description")} />
        <link rel="canonical" href="https://martincavil.com/saas" />
        <meta
          property="og:title"
          content={`${t("saasPage.title")} - Martin Cavil`}
        />
        <meta property="og:description" content={t("saasPage.description")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://martincavil.com/saas" />
      </Head>
      <DotGridBackground />
      <Header />

      <main className="container pt-32 md:pt-40 pb-16">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-tertiary hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("projects.details.backToHome")}
          </Link>
          <h1 className="text-3xl md:text-5xl bg-gradient-to-r from-primary to-text-tertiary bg-clip-text text-transparent font-semibold mb-4">
            {t("saasPage.title")}
          </h1>
          <p className="text-lg text-text-tertiary max-w-3xl">
            {t("saasPage.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {saasProjects.map((saas) => (
            <div
              key={saas.slug}
              onClick={() => router.push(`/saas/${saas.slug}`)}
              className="group flex flex-col bg-primary-inverted border border-interactive rounded-xl p-6 hover:border-opacity-80 transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: saas.color }}
              />

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {saas.name}
                  </h2>
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

              <p
                className="text-sm font-medium mb-2"
                style={{ color: saas.color }}
              >
                {saas.tagline[lang as "fr" | "en"]}
              </p>

              <p className="text-text-tertiary text-sm leading-relaxed mb-5 flex-1">
                {saas.description[lang as "fr" | "en"]}
              </p>

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
      </main>

      <Footer />
    </>
  );
}
