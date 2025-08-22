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
    title5: {
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
        fr: "Stack technique : ",
        en: "Tech stack : ",
      },
      title4: {
        fr: "À propos de l'entreprise : ",
        en: "About the company : ",
      },
      title5: {
        fr: "Challenges techniques : ",
        en: "Technical challenges : ",
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
      "UI Kit",
    ],
    url: "https://www.uptoo.fr",
    cover: "/images/projects/uptoo/cover.webp",
    excerpt: {
      fr: "Responsable Frontend pendant 3 ans, j'ai piloté et développé des dizaines de projets web pour Uptoo : outils internes pour les collaborateurs, plateformes pour les candidats (ex : CV Maker connecté à nos bases de données et système de matching), et interfaces clients pour le suivi de recrutement, la formation et la gestion d'annonces. J'ai été référent technique sur tout ce qui touche au frontend.",
      en: "Frontend Lead for 3 years, I led and developed dozens of web projects for Uptoo: internal tools for employees, platforms for candidates (e.g., CV Maker connected to our databases and matching system), and client interfaces for recruitment tracking, training, and job posting. I was the technical reference for all things frontend.",
    },
    about: {
      fr: "Uptoo est une agence spécialisée dans la vente, générant +25 millions d'euros de chiffre d'affaires annuel, avec une base de +700 000 candidats et +9 000 clients entreprises. J'ai mis en place tous les process frontend, collaboré avec les équipes métiers, marketing, produit et dev pour fluidifier la communication et garantir une agilité optimale.",
      en: "Uptoo is a sales specialist agency generating over €25M in annual revenue, with a database of 700,000+ candidates and 9,000+ client companies. I implemented all frontend processes, worked closely with business, marketing, product, and dev teams to improve communication and ensure optimal agility.",
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
        en: "Candidates",
        fr: "Candidats",
      },
      {
        number: "100",
        en: "Accessibility, SEO, Best Practices (Lighthouse)",
        fr: "Accessibilité, SEO, Bonnes pratiques (Lighthouse)",
      },
    ],
    technicalChallenges: [
      {
        fr: "Développement et maintenance d'un UI Kit complet sur Storybook (+100 composants) en collaboration avec les designers pour garantir cohérence et rapidité de développement.",
        en: "Development and maintenance of a complete UI Kit on Storybook (100+ components) with designers to ensure consistency and fast development.",
      },
      {
        fr: "Mise en place de process frontend, encadrement des projets et référent technique pour les équipes, y compris les développeurs seniors orientés backend.",
        en: "Implementation of frontend processes, project supervision, and technical reference for teams, including senior backend developers.",
      },
      {
        fr: "Optimisation des performances, accessibilité et SEO pour viser le score maximal sur Lighthouse.",
        en: "Performance, accessibility, and SEO optimization to achieve top Lighthouse scores.",
      },
      {
        fr: "Collaboration transverse avec les équipes métiers, marketing, produit et dev pour améliorer l'agilité et la communication.",
        en: "Cross-team collaboration with business, marketing, product, and dev teams to improve agility and communication.",
      },
      {
        fr: "Intégration d'APIs tierces et développement d'outils innovants (matching, suivi, etc.) pour les clients et candidats.",
        en: "Integration of third-party APIs and development of innovative tools (matching, tracking, etc.) for clients and candidates.",
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
        fr: "Stack technique : ",
        en: "Tech stack : ",
      },
      title4: {
        fr: "À propos du club : ",
        en: "About the club : ",
      },
      title5: {
        fr: "Challenges techniques : ",
        en: "Technical challenges : ",
      },
    },
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    url: "https://www.padel15.fr",
    cover: "/images/projects/padel15/cover.webp",
    excerpt: {
      fr: "Création complète du site web du club Padel15 à Paris, de la conception au déploiement. Performances Lighthouse : 100/100 en SEO, 100/100 en bonnes pratiques, 94/100 en performance, 91/100 en accessibilité. La V2 avec réservation en ligne et blog arrive prochainement.",
      en: "Complete creation of the Padel15 club website in Paris, from design to deployment. Lighthouse scores: 100/100 in SEO, 100/100 in best practices, 94/100 in performance, 91/100 in accessibility. V2 with online booking and blog coming soon.",
    },
    about: {
      fr: "Padel15 est un club de padel situé à Paris, pour lequel j'ai conçu et développé le site web seul, en quelques jours, avec Next.js, React, Tailwind et déploiement sur Vercel. La V2 apportera de nombreuses nouvelles fonctionnalités.",
      en: "Padel15 is a padel club in Paris for which I designed and developed the website solo, in just a few days, using Next.js, React, Tailwind, and deployment on Vercel. V2 will bring many new features.",
    },
    KPIs: [],
    technicalChallenges: [
      {
        fr: "Développement et design from scratch en quelques jours, gestion complète du projet.",
        en: "Design and development from scratch in a few days, full project management.",
      },
      {
        fr: "Optimisation SEO locale et score maximal sur Lighthouse.",
        en: "Local SEO optimization and top Lighthouse scores.",
      },
      {
        fr: "Préparation de la V2 avec réservation en ligne et blog.",
        en: "Preparation of V2 with online booking and blog.",
      },
    ],
    images: [
      "/images/projects/padel15/cover.webp",
      "/images/projects/padel15/padel15-1.webp",
      "/images/projects/padel15/padel15-2.webp",
      "/images/projects/padel15/padel15-3.webp",
    ],
  },
];
