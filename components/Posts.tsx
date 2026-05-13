"use client";

import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import useTranslation from "next-translate/useTranslation";
import { formatDate, Post } from "@/lib/substack";

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  const { t, lang } = useTranslation("common");

  if (posts.length === 0) return null;

  return (
    <section id="posts" className="container py-10 md:pt-12 md:pb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-4xl bg-gradient-to-r from-primary to-text-tertiary bg-clip-text text-transparent font-semibold">
          {t("posts.title")}
        </h2>
        <Link
          href="/blog"
          className="text-text-tertiary hover:text-primary transition-colors text-sm md:text-base"
        >
          {t("posts.viewAll")} →
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        {posts.slice(0, 3).map((post) => (
          <a
            key={post.link}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-5 bg-primary-inverted border border-interactive rounded-xl p-5 hover:border-opacity-80 transition-all duration-300"
          >
            {post.image && (
              <div className="hidden sm:block flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}

            <div className="flex flex-col flex-1 min-w-0">
              {post.pubDate && (
                <div className="flex items-center gap-1.5 text-text-tertiary text-xs mb-2">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(post.pubDate, lang)}</span>
                </div>
              )}

              <h3 className="font-semibold text-base leading-snug mb-1.5 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              {post.description && (
                <p className="text-text-tertiary text-sm leading-relaxed line-clamp-2">
                  {post.description}
                </p>
              )}
            </div>

            <div className="flex-shrink-0 self-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg border border-interactive text-text-tertiary group-hover:border-primary group-hover:text-primary transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
