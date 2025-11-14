import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { projects } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DotGridBackground from "@/components/DotGridBackground";
import ProjectsList from "@/components/ProjectsList";

export default function ProjectsPage() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Ctext y='96' font-size='96'%3E🧑‍💻%3C/text%3E%3C/svg%3E"
        />
        <title>{`${t("projectsPage.title")} - Martin Cavil Portfolio`}</title>
        <meta name="description" content={t("projectsPage.description")} />
        <link rel="canonical" href="https://martincavil.com/projects" />
        <meta
          property="og:title"
          content={`${t("projectsPage.title")} - Martin Cavil Portfolio`}
        />
        <meta
          property="og:description"
          content={t("projectsPage.description")}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://martincavil.com/projects" />
        <meta property="og:image" content="/images/projects/uptoo/cover.webp" />
      </Head>
      <DotGridBackground />
      <Header />

      <main className="container pt-32 md:pt-40 pb-16">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl bg-gradient-to-r from-primary to-text-tertiary bg-clip-text text-transparent font-semibold mb-4">
            {t("projectsPage.title")}
          </h1>
          <p className="text-lg text-text-tertiary max-w-3xl">
            {t("projectsPage.description")}
          </p>
        </div>

        <ProjectsList projects={projects} />
      </main>

      <Footer />
    </>
  );
}
