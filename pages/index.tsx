import Head from "next/head";
import DotGridBackground from "@/components/DotGridBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Results from "@/components/Results";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Posts from "@/components/Posts";
import Footer from "@/components/Footer";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Ctext y='96' font-size='96'%3E🧑‍💻%3C/text%3E%3C/svg%3E"
        />
        <title>{t("seo.title")}</title>
        <meta name="description" content={t("seo.description")} />
        <link rel="canonical" href="https://martincavil.com" />
        <meta property="og:title" content={t("seo.title")} />
        <meta property="og:description" content={t("seo.description")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://martincavil.com" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/martincvl/image/upload/v1763147429/portfolio/hero/martin-profile.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("seo.title")} />
        <meta name="twitter:description" content={t("seo.description")} />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/martincvl/image/upload/v1763147429/portfolio/hero/martin-profile.webp"
        />
        <meta httpEquiv="Content-Language" content="fr,en" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Martin Cavil" />
        <meta
          name="keywords"
          content="Next.js, React, Tailwind, Freelance, Developer, Portfolio, Martin Cavil"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Martin Cavil",
              url: "https://martincavil.com",
              image:
                "https://res.cloudinary.com/martincvl/image/upload/v1763147429/portfolio/hero/martin-profile.webp",
              jobTitle: "Freelance Next.js/React Developer",
              sameAs: [
                "https://github.com/martincavil",
                "https://www.linkedin.com/in/martin-cavil/",
              ],
            }),
          }}
        />
      </Head>
      <DotGridBackground />
      <Header />
      <Hero />
      <Projects />
      <Results />
      <Skills />
      <Process />
      <About />
      <Posts />
      <Footer />
    </>
  );
}
