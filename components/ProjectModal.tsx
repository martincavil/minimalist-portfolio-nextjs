"use client";
import { useEffect, useState } from "react";
import { X, ExternalLink } from "lucide-react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

interface ProjectModalProps {
  project: {
    name: string;
    year: string;
    cover: string;
    url: string;
    dialog: {
      title1: {
        fr: string;
        en: string;
      };
      title2: {
        fr: string;
        en: string;
      };
      title3: {
        fr: string;
        en: string;
      };
      title4: {
        fr: string;
        en: string;
      };
    };
    skills: string[];
    technicalChallenges?: {
      fr: string;
      en: string;
    }[];
    excerpt: {
      fr: string;
      en: string;
    };
    about: {
      fr: string;
      en: string;
    };
    KPIs: {
      number: string;
      fr: string;
      en: string;
    }[];
    domain: {
      fr: string;
      en: string;
    };
    images?: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const { t, lang } = useTranslation("common");

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (zoomedImage) {
          setZoomedImage(null);
        } else {
          onClose();
        }
      }
    };

    if (isOpen || zoomedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, zoomedImage]);

  if (!isOpen) return null;

  return (
    <>
      {/* Image overlay & zoomed */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setZoomedImage(null)}
        >
          <div className="absolute top-6 right-6">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomedImage(null);
              }}
              className="p-2 rounded-lg hover:bg-primary-inverted transition-colors"
              title="Fermer l'image"
            >
              <X className="w-6 h-6 text-text-tertiary" />
            </button>
          </div>
          <Image
            src={zoomedImage}
            alt="Image zoomée"
            width={1200}
            height={900}
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={zoomedImage ? () => setZoomedImage(null) : onClose}
      >
        <div
          className="relative w-full h-full lg:w-[95%] lg:h-[95%] bg-background rounded-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 lg:p-8 border-b border-primary-inverted">
            <div className="flex items-center gap-4">
              <h2 className="text-xl lg:text-2xl font-semibold">
                {project.name}
              </h2>
              <p className="text-text-tertiary">{project.year}</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary-inverted transition-colors"
                title="Ouvrir le projet"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-primary-inverted transition-colors"
                title="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="h-full overflow-y-auto p-4 lg:px-8 lg:pt-8 pb-32">
            {project.excerpt && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  {project.dialog?.title1[lang as "fr" | "en"]}
                </h3>
                <p className="text-text-tertiary leading-relaxed mb-4">
                  {project.excerpt[lang as "fr" | "en"]}
                </p>
              </div>
            )}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">
                {project.dialog?.title2[lang as "fr" | "en"]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.KPIs.map((kpi, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-2 text-text-tertiary"
                  >
                    <span className="text-4xl">{kpi.number} </span>
                    <span>{kpi[lang as "fr" | "en"]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">
                {project.dialog?.title3[lang as "fr" | "en"]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded-md bg-blue-100 dark:bg-blue-900 px-2 py-1 text-sm text-text-primary font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">
                {project.dialog?.title3[lang as "fr" | "en"]}
              </h3>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-text-tertiary leading-relaxed mb-4">
                  {project.about[lang as "fr" | "en"]}
                </p>
                <h3 className="text-lg font-semibold mb-3">
                  {project.dialog?.title4[lang as "fr" | "en"]}
                </h3>
                <ul className="list-disc list-inside text-text-tertiary space-y-2">
                  {project.technicalChallenges?.map((challenge, idx) => (
                    <li key={idx} className="text-text-tertiary">
                      {challenge[lang as "fr" | "en"]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images &&
                  project.images.map((image, idx) => (
                    <div
                      key={idx}
                      className="rounded-md overflow-hidden border cursor-zoom-in"
                      onClick={() => setZoomedImage(image)}
                    >
                      <Image
                        src={image}
                        alt={`${project.name} image ${idx + 1}`}
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
