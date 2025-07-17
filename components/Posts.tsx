"use client";
import useTranslation from "next-translate/useTranslation";

export default function Posts() {
  const { t } = useTranslation("common");

  return (
    <section id="posts" className="container pb-10">
      <p className="text-center">{t("posts.title")}</p>
    </section>
  );
}
