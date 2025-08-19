"use client";
import { useState, useRef } from "react";
import { projects } from "../data/projects";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t, lang } = useTranslation("common");

  return (
    <section id="projects" className="container py-10 md:pt-12 md:pb-16">
      <h2 className="text-2xl md:text-4xl  bg-gradient-to-r from-primary to-text-tertiary bg-clip-text text-transparent font-semibold mb-8">
        {t("projects.title")}
      </h2>
      <div className="relative">
        <ul className="divide-y divide-interactive">
          {projects.map((project, idx) => (
            <Link
              href={project.url}
              key={project.name}
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <li
                className="grid items-center grid-cols-6 md:grid-cols-8 gap-8 rounded-lg py-6 px-2 md:px-6 cursor-pointer group relative hover:bg-primary-inverted"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                onMouseMove={(e) => {
                  const rect = sectionRef.current?.getBoundingClientRect();
                  setMouse({
                    x: e.clientX - (rect?.left ?? 0),
                    y: e.clientY - (rect?.top ?? 0),
                  });
                }}
              >
                <span className="col-span-2 lg:col-span-1 text-text-tertiary">
                  {project.year}
                </span>
                <span className="col-span-3 md:col-span-2 lg:col-span-1 lg:text-xl font-semibold">
                  {project.name}
                </span>
                <div className="hidden lg:flex items-center gap-1 flex-wrap lg:col-span-3">
                  {project.skills.map((skill, skillId) => (
                    <div
                      key={skillId}
                      className="rounded-md bg-interactive px-2 py-1 text-xs text-text-primary font-semibold"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
                <span className="hidden md:flex text-text-tertiary md:col-span-3 lg:col-span-2">
                  {project.domain[lang as "fr" | "en"]}
                </span>
                <ArrowUpRight className="w-5 text-text-tertiary group-hover:text-primary transition-colors duration-500 justify-self-end" />
                {hovered === idx && (
                  <span
                    className="pointer-events-none absolute z-30 transition-transform duration-75"
                    style={{
                      left: mouse.x + 24,
                      top: mouse.y - 150,
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={300}
                      height={169}
                      className="w-[300px] h-[169px] object-cover rounded-lg shadow-lg border border-interactive bg-primary-inverted"
                    />
                  </span>
                )}
              </li>
            </Link>
          ))}
        </ul>
        <div
          ref={sectionRef}
          className="absolute inset-0 pointer-events-none"
        />
      </div>
    </section>
  );
}
