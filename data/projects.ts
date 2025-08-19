export type Project = {
  name: string;
  year: string;
  domain: {
    fr: string;
    en: string;
  };
  skills: string[];
  url: string;
  image: string;
};

export const projects: Project[] = [
  {
    name: "Uptoo",
    year: "2022-2025",
    domain: {
      fr: "Agence spécialiste de la vente",
      en: "Sales specialist agency",
    },
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Tailwind CSS",
      "Prismic",
      "Strapi",
    ],
    url: "https://www.uptoo.fr",
    image: "/images/projects/uptoo.webp",
  },
  {
    name: "Padel15",
    year: "2025",
    domain: {
      fr: "Club de padel à Paris",
      en: "Padel club in Paris",
    },
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://www.padel15.fr",
    image: "/images/projects/padel15.webp",
  },
  // {
  //   name: "Victor Villemin",
  //   year: "2022",
  //   domain: {
  //     fr: "Art contemporain",
  //     en: "Contemporary art",
  //   },
  //   url: "https://victorvillemin.com/",
  //   image: "/images/projects/victor-villemin.webp",
  // },
];
