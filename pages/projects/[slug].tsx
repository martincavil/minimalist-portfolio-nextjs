import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, X, Mail } from "lucide-react";
import useTranslation from "next-translate/useTranslation";
import { projects, Project } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import DotGridBackground from "@/components/DotGridBackground";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const { t, lang } = useTranslation("common");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
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

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Ctext y='96' font-size='96'%3E🧑‍💻%3C/text%3E%3C/svg%3E"
        />
        <title>{`${project.name} - Martin Cavil Portfolio`}</title>
        <meta
          name="description"
          content={project.excerpt[lang as "fr" | "en"]}
        />
        <link
          rel="canonical"
          href={`https://martincavil.com/projects/${project.slug}`}
        />
        <meta
          property="og:title"
          content={`${project.name} - Martin Cavil Portfolio`}
        />
        <meta
          property="og:description"
          content={project.excerpt[lang as "fr" | "en"]}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://martincavil.com/projects/${project.slug}`}
        />
        <meta property="og:image" content={project.cover} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${project.name} - Martin Cavil Portfolio`}
        />
        <meta
          name="twitter:description"
          content={project.excerpt[lang as "fr" | "en"]}
        />
        <meta name="twitter:image" content={project.cover} />
      </Head>
      {/* <DotGridBackground /> */}
      <Header />

      <main className="container pt-32 md:pt-40 pb-16">
        {/* Back button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-text-tertiary hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("projects.details.backToProjects")}
        </Link>

        {/* Project header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <h1 className="text-3xl md:text-5xl font-bold">{project.name}</h1>
            <Button
              href={project.url}
              icon={<ExternalLink className="w-4 h-4" />}
              ariaLabel="External link to project website"
              as="a"
            >
              {t("projects.details.visitWebsite")}
            </Button>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-text-tertiary mb-6">
            <span>{project.year}</span>
            <span className="hidden md:flex">•</span>
            <span>{project.domain[lang as "fr" | "en"]}</span>
          </div>
          <p className="text-lg text-text-tertiary leading-relaxed">
            {project.excerpt[lang as "fr" | "en"]}
          </p>
        </div>

        {/* Cover Video */}
        <div className="mb-16 rounded-lg overflow-hidden">
          {project.gifCover && (
            <video
              src={project.gifCover}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          )}
        </div>

        {/* Company History */}
        {project.companyHistory && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {t("projects.details.companyHistory")}
            </h2>
            <p className="text-text-tertiary leading-relaxed text-lg">
              {project.companyHistory[lang as "fr" | "en"]}
            </p>
          </section>
        )}

        {/* Client Testimony */}
        {project.testimony && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {t("projects.details.testimony")}
            </h2>
            <div className="bg-background p-8 rounded-lg border border-interactive">
              <p className="text-lg italic text-text-tertiary mb-4">
                &ldquo;{project.testimony[lang as "fr" | "en"]}&rdquo;
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-semibold">{project.testimony.author}</p>
                <p className="text-text-tertiary text-sm">
                  {project.testimony.role}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Context */}
        {project.context && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {t("projects.details.context")}
            </h2>
            <p className="text-text-tertiary leading-relaxed text-lg">
              {project.context[lang as "fr" | "en"]}
            </p>
          </section>
        )}

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {t("projects.details.challenges")}
            </h2>
            <ul className="space-y-4">
              {project.challenges.map((challenge, idx) => (
                <li
                  key={idx}
                  className="flex gap-4 items-start text-text-tertiary text-lg"
                >
                  <span className="text-primary font-bold">•</span>
                  <span className="leading-relaxed">
                    {challenge[lang as "fr" | "en"]}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Work & Technologies */}
        {project.work && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {t("projects.details.work")}
            </h2>
            <p className="text-text-tertiary leading-relaxed text-lg mb-6">
              {project.work[lang as "fr" | "en"]}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-md bg-text-secondary px-3 py-1.5 text-sm text-text-primary font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Results & KPIs */}
        {project.results && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {t("projects.details.results")}
            </h2>
            <p className="text-text-tertiary leading-relaxed text-lg mb-8">
              {project.results[lang as "fr" | "en"]}
            </p>

            {/* KPIs */}
            {project.KPIs && project.KPIs.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {project.KPIs.map((kpi, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-2 p-6 bg-background rounded-lg border border-interactive"
                  >
                    <span className="text-4xl font-bold text-primary">
                      {kpi.number}
                    </span>
                    <span className="text-text-tertiary text-center">
                      {kpi[lang as "fr" | "en"]}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Project Images */}
        {project.images && project.images.length > 1 && (
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, idx) => (
                <div
                  key={idx}
                  className="rounded-lg overflow-hidden border border-interactive cursor-pointer hover:border-primary transition-colors group"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={`${project.name} - Screenshot ${idx + 1}`}
                    width={800}
                    height={500}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Lightbox Modal */}
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
              <Image
                src={selectedImage}
                alt="Project preview"
                width={1920}
                height={1080}
                className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="text-center py-16 px-4 bg-background rounded-lg border border-interactive">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            {t("projects.details.bookMeeting")}
          </h2>
          <p className="text-text-tertiary mb-8 max-w-2xl mx-auto">
            {lang === "fr"
              ? "Vous avez un projet similaire ? Discutons de vos besoins et voyons comment je peux vous aider à concrétiser vos ambitions."
              : "Have a similar project? Let's discuss your needs and see how I can help bring your ambitions to life."}
          </p>
          <Button
            href="mailto:martin.cavil98@gmail.com"
            icon={<Mail className="w-3.5 h-3.5" />}
            ariaLabel="Contact Martin Cavil"
            tabIndex={0}
          >
            {t("hero.contact")}
          </Button>
        </section>
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths: Array<{ params: { slug: string }; locale: string }> = [];

  projects.forEach((project) => {
    locales?.forEach((locale) => {
      paths.push({
        params: { slug: project.slug },
        locale,
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};
