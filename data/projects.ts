export type Project = {
  name: string;
  year: string;
  domain: {
    fr: string;
    en: string;
  };
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
  excerpt: {
    fr: string;
    en: string;
  };
  about: {
    fr: string;
    en: string;
  };
  technicalChallenges?: {
    fr: string;
    en: string;
  }[];
  KPIs: {
    number: string;
    fr: string;
    en: string;
  }[];
  url: string;
  cover: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    name: "Uptoo",
    year: "2022-2025",
    domain: {
      fr: "Agence spécialiste de la vente",
      en: "Sales specialist agency",
    },
    dialog: {
      title1: {
        fr: "Ce que j'ai apporté au projet Uptoo : ",
        en: "What I brought to the project Uptoo : ",
      },
      title2: {
        fr: "Chiffres clés : ",
        en: "Key figures : ",
      },
      title3: {
        fr: "Stacks utilisées : ",
        en: "Stacks used: ",
      },
      title4: {
        fr: "À propos de l'entreprise : ",
        en: "About the company : ",
      },
    },
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Tailwind CSS",
      "Framer Motion",
      "Prismic",
      "Strapi",
    ],
    url: "https://www.uptoo.fr",
    cover: "/images/projects/uptoo/cover.webp",
    excerpt: {
      fr: "Pendant 3 ans, j'ai contribué à la création d'applications web pour les collaborateurs, les clients et les candidats d'Uptoo, une agence spécialisée dans la vente qui génère + 25 millions d'euros de CA par an.",
      en: "For 3 years, I contributed to the creation of web applications for Uptoo's employees, clients, and candidates, a sales specialist agency generating +25 million euros in annual revenue.",
    },
    about: {
      fr: "Uptoo est une agence spécialisée dans la vente, générant + 25 millions d'euros de chiffre d'affaires par an. L'entreprise se concentre sur l'accompagnement des entreprises dans le recrutement et la formation de leurs équipes commerciales.",
      en: "Uptoo is a sales specialist agency generating +25 million euros in annual revenue. The company focuses on supporting businesses in recruiting and training their sales teams.",
    },
    KPIs: [
      {
        number: "+25M€",
        en: "Annual revenue",
        fr: "Chiffre d'affaires annuel",
      },
      {
        number: "+9000",
        en: "Clients",
        fr: "Clients",
      },
      {
        number: "+700 000",
        en: "Attendees",
        fr: "Candidats",
      },
    ],
    technicalChallenges: [
      {
        fr: "Optimisation des performances",
        en: "Performance optimization",
      },
      {
        fr: "Responsive design avancé",
        en: "Advanced responsive design",
      },
      {
        fr: "Intégration d'APIs tierces",
        en: "Integration of third-party APIs",
      },
    ],
    images: [
      "/images/projects/uptoo/uptoo-1.webp",
      "/images/projects/uptoo/uptoo-4.webp",
      "/images/projects/uptoo/uptoo-2.webp",
      "/images/projects/uptoo/uptoo-3.webp",
    ],
  },

  {
    name: "Padel15",
    year: "2025",
    domain: {
      fr: "Club de padel à Paris",
      en: "Padel club in Paris",
    },
    dialog: {
      title1: {
        fr: "Ce que j'ai apporté au projet Padel15 : ",
        en: "What I brought to the project Padel15 : ",
      },
      title2: {
        fr: "Chiffres clés : ",
        en: "Key figures : ",
      },
      title3: {
        fr: "Stacks utilisées : ",
        en: "Stacks used: ",
      },
      title4: {
        fr: "À propos du club : ",
        en: "About the club : ",
      },
    },
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://www.padel15.fr",
    cover: "/images/projects/padel15/cover.webp",
    excerpt: {
      fr: "Création d'un site web pour présenter un club de padel à Paris et le référencer sur les différents moteurs de recherche.",
      en: "Creation of a website to present a padel club in Paris and reference it on various search engines.",
    },
    about: {
      fr: "Padel15 est un club de padel situé à Paris, offrant des installations modernes et des événements pour les passionnés de padel.",
      en: "Padel15 is a padel club located in Paris, offering modern facilities and events for padel enthusiasts.",
    },
    KPIs: [
      {
        number: "N/A",
        en: "Annual revenue",
        fr: "Chiffre d'affaires annuel",
      },
      {
        number: "N/A",
        en: "Clients",
        fr: "Clients",
      },
      {
        number: "N/A",
        en: "Attendees",
        fr: "Participants",
      },
    ],
    technicalChallenges: [
      {
        fr: "Développement rapide pour une mise en ligne avant l'ouverture du club",
        en: "Rapid development for launch before club opening",
      },
      {
        fr: "Référencement SEO local optimisé",
        en: "Optimized local SEO",
      },
    ],
    images: ["/images/projects/padel15/cover.webp"],
  },

  // {
  //   name: "Victor Villemin",
  //   year: "2022",
  //   domain: {
  //     fr: "Art contemporain",
  //     en: "Contemporary art",
  //   },
  //   url: "https://victorvillemin.com/",
  //   image: "/images/projects/victor-villemin/cover.webp",
  // },
];
