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
    name: "Maison Du Temps",
    year: "2025",
    domain: {
      fr: "Site e-commerce de montres",
      en: "E-commerce site for watches",
    },
    dialog: {
      title1: {
        fr: "Ce que j'ai apporté au projet Maison Du Temps : ",
        en: "What I brought to the project Maison Du Temps : ",
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
    skills: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS"],
    url: "https://maisondutemps.com/",
    cover: "/images/projects/maisondutemps/cover.webp",
    excerpt: {
      fr: "Refonte et optimisation du site e-commerce Maison Du Temps, avec la création de modules sur-mesure et l'amélioration continue de l'expérience utilisateur.",
      en: "Redesign and optimization of Maison Du Temps's e-commerce platform, including custom module development and ongoing user experience improvements.",
    },
    about: {
      fr: "Maison du Temps propose une sélection de montres haut de gamme. J'ai accompagné la marque sur la refonte de son site Shopify, en développant des fonctionnalités avancées et en assurant la performance et la stabilité de la boutique en ligne.",
      en: "Maison Du Temps offers a curated selection of premium watches. I supported the brand with a Shopify site overhaul, building advanced features and ensuring the online store's performance and reliability.",
    },
    KPIs: [],
    technicalChallenges: [
      {
        fr: "Maintenance et amélioration continue du site e-commerce avec Shopify.",
        en: "Maintenance and continuous improvement of the e-commerce site with Shopify.",
      },
      {
        fr: "Optimisation du site, Création de composants from scratch",
        en: "Site optimization, creation of components from scratch.",
      },
    ],
    images: [
      "/images/projects/maisondutemps/cover.webp",
      "/images/projects/maisondutemps/maisondutemps-1.webp",
      "/images/projects/maisondutemps/maisondutemps-2.webp",
      "/images/projects/maisondutemps/maisondutemps-3.webp",
    ],
  },
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
      fr: "Site vitrine dynamique pour le club Padel15, avec une interface moderne, des scores Lighthouse exemplaires et une évolution prévue vers la réservation en ligne.",
      en: "Dynamic showcase website for Padel15 club, featuring a modern interface, top Lighthouse scores, and an upcoming evolution to online booking.",
    },
    about: {
      fr: "Padel15 est un club de padel parisien qui souhaitait une présence digitale à la hauteur de son dynamisme. J'ai imaginé et développé un site rapide, esthétique et évolutif, prêt à accueillir de nouvelles fonctionnalités comme la réservation en ligne et un blog.",
      en: "Padel15 is a Paris-based padel club seeking a digital presence to match its energy. I designed and built a fast, visually appealing, and scalable site, ready for future features like online booking and a blog.",
    },
    KPIs: [
      {
        number: "+10K",
        en: "Visitors since September 2025",
        fr: "Visiteurs depuis septembre 2025",
      },
      {
        number: "100",
        en: "Best Practices (Lighthouse)",
        fr: "Bonnes pratiques (Lighthouse)",
      },
      {
        number: "100",
        en: "SEO (Lighthouse)",
        fr: "SEO (Lighthouse)",
      },
    ],
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
  {
    name: "Les Yeux - Détectives Privés",
    year: "2025",
    domain: {
      fr: "Site pour un cabinet de détectives privés",
      en: "Site for a private detective agency",
    },
    dialog: {
      title1: {
        fr: "Ce que j'ai apporté au projet pharmExecutive : ",
        en: "What I brought to the project pharmExecutive : ",
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
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    url: "https://les-yeux-detectives.com/",
    cover: "/images/projects/les-yeux-detectives/cover.webp",
    excerpt: {
      fr: "Mise en ligne d'une plateforme sobre et rassurante pour Les Yeux - Détectives Privés, valorisant leur expertise et facilitant la prise de contact.",
      en: "Launched a sleek, trustworthy platform for Les Yeux - Détectives Privés, highlighting their expertise and making it easy for clients to get in touch.",
    },
    about: {
      fr: "Pour ce cabinet de détectives privés, j'ai conçu un site web qui inspire confiance et professionnalisme, avec une navigation claire et des outils marketing intégrés pour soutenir leur activité.",
      en: "For this private detective agency, I designed a website that inspires trust and professionalism, featuring clear navigation and integrated marketing tools to support their business.",
    },
    KPIs: [],
    technicalChallenges: [
      {
        fr: "Création du site web de formation avec Next.js en quelques jours.",
        en: "Creation of the training site with Next.js in a few days.",
      },
      {
        fr: "Gestion des différentes campagnes de mailing via Brevo et intégration des outils marketing.",
        en: "Management of various mailing campaigns via Brevo and integration of marketing tools.",
      },
    ],
    images: [
      "/images/projects/les-yeux-detectives/cover.webp",
      "/images/projects/les-yeux-detectives/les-yeux-detectives-1.webp",
      "/images/projects/les-yeux-detectives/les-yeux-detectives-2.webp",
      "/images/projects/les-yeux-detectives/les-yeux-detectives-3.webp",
    ],
  },
  {
    name: "pharmExecutive",
    year: "2024-2025",
    domain: {
      fr: "Site de formation pour pharmaciens d'officine",
      en: "Training site for pharmacists",
    },
    dialog: {
      title1: {
        fr: "Ce que j'ai apporté au projet pharmExecutive : ",
        en: "What I brought to the project pharmExecutive : ",
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
    url: "https://pharmexecutive.fr/",
    cover: "/images/projects/pharmexecutive/cover.webp",
    excerpt: {
      fr: "Développement d'une plateforme pédagogique intuitive pour pharmExecutive, dédiée à la formation continue des pharmaciens d'officine.",
      en: "Developed an intuitive educational platform for pharmExecutive, dedicated to ongoing training for pharmacists.",
    },
    about: {
      fr: "pharmExecutive accompagne les pharmaciens dans leur montée en compétences grâce à des modules de formation en ligne. J'ai conçu un site ergonomique, évolutif et performant, intégrant des outils marketing et des fonctionnalités sur-mesure.",
      en: "pharmExecutive supports pharmacists in their professional development with online training modules. I designed an ergonomic, scalable, and high-performance site, integrating marketing tools and custom features.",
    },
    KPIs: [],
    technicalChallenges: [
      {
        fr: "Création du site web de formation avec Next.js en quelques jours.",
        en: "Creation of the training site with Next.js in a few days.",
      },
      {
        fr: "Gestion des différentes campagnes de mailing via Brevo et intégration des outils marketing.",
        en: "Management of various mailing campaigns via Brevo and integration of marketing tools.",
      },
    ],
    images: [
      "/images/projects/pharmExecutive/cover.webp",
      "/images/projects/pharmExecutive/pharmExecutive-1.webp",
      "/images/projects/pharmExecutive/pharmExecutive-2.webp",
      "/images/projects/pharmExecutive/pharmExecutive-3.webp",
    ],
  },
];
