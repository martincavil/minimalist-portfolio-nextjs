import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { ArrowLeft, ArrowUpRight, Calendar } from "lucide-react";
import useTranslation from "next-translate/useTranslation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DotGridBackground from "@/components/DotGridBackground";
import { fetchSubstackPosts, formatDate, Post } from "@/lib/substack";

interface BlogPageProps {
  posts: Post[];
}

export default function BlogPage({ posts }: BlogPageProps) {
  const { t, lang } = useTranslation("common");

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Ctext y='96' font-size='96'%3E🧑‍💻%3C/text%3E%3C/svg%3E"
        />
        <title>{`${t("blogPage.title")} - Martin Cavil`}</title>
        <meta name="description" content={t("blogPage.description")} />
        <link rel="canonical" href="https://martincavil.com/blog" />
        <meta
          property="og:title"
          content={`${t("blogPage.title")} - Martin Cavil`}
        />
        <meta property="og:description" content={t("blogPage.description")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://martincavil.com/blog" />
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
            {t("blogPage.title")}
          </h1>
          <p className="text-lg text-text-tertiary max-w-3xl">
            {t("blogPage.description")}
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-text-tertiary">{t("blogPage.empty")}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-primary-inverted border border-interactive rounded-xl overflow-hidden hover:border-white transition-all duration-300"
              >
                {post.image && (
                  <div className="relative w-full aspect-video overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="flex flex-col flex-1 p-6">
                  {post.pubDate && (
                    <div className="flex items-center gap-1.5 text-text-tertiary text-xs mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formatDate(post.pubDate, lang)}</span>
                    </div>
                  )}

                  <h2 className="text-base font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>

                  {post.description && (
                    <p className="text-text-tertiary text-sm leading-relaxed flex-1 mb-4">
                      {post.description}
                      {post.description.length >= 200 ? "…" : ""}
                    </p>
                  )}

                  <div className="flex items-center gap-1 text-xs font-semibold text-text-tertiary group-hover:text-primary transition-colors mt-auto">
                    <span>{t("blogPage.readOnSubstack")}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="https://martincvl.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-tertiary hover:text-primary transition-colors text-sm font-semibold border border-interactive hover:border-primary rounded-full px-6 py-3"
          >
            {t("blogPage.viewAll")}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await fetchSubstackPosts();
    return { props: { posts }, revalidate: 3600 };
  } catch {
    return { props: { posts: [] }, revalidate: 3600 };
  }
};
