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
      fr: "3 ans comme Lead Developer Frontend chez Uptoo : j'ai conçu et maintenu des dizaines d'outils web (plateformes candidats, interfaces clients, outils internes), mis en place tous les process frontend, et atteint le score parfait Lighthouse sur les projets clés. Référent technique sur tout le périmètre frontend pour une boîte à +25M€ de CA.",
      en: "3 years as Frontend Lead at Uptoo: I designed and maintained dozens of web tools (candidate platforms, client interfaces, internal tools), implemented all frontend processes, and achieved perfect Lighthouse scores on key projects. Technical reference for all things frontend at a €25M+ revenue company.",
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
    name: "MasteredByEdouard",
    year: "2026",
    domain: {
      fr: "Studio de mastering audio professionnel",
      en: "Professional audio mastering studio",
    },
    dialog: {
      title1: {
        fr: "Ce que j'ai apporté au projet MasteredByEdouard : ",
        en: "What I brought to the project MasteredByEdouard : ",
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
        fr: "À propos du studio : ",
        en: "About the studio : ",
      },
      title5: {
        fr: "Challenges techniques : ",
        en: "Technical challenges : ",
      },
    },
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Dropbox SDK",
      "jsPDF",
      "Strapi",
      "Vercel",
    ],
    url: "https://www.masteredbyedouard.com",
    cover: "/images/projects/masteredbyedouard/cover.webp",
    excerpt: {
      fr: "Conception et développement complet du site de Edouard Carbonne, ingénieur de mastering international. Site pensé comme une app — non-scrollable, full-screen, ultra-rapide. Les clients déposent leurs fichiers audio directement dans son Dropbox via le site. Bilingue FR/EN.",
      en: "Full design and development of Edouard Carbonne's site — international mastering engineer. Built like an app: non-scrollable, full-screen, ultra-fast. Clients upload their audio files directly to his Dropbox through the site. Bilingual FR/EN.",
    },
    about: {
      fr: "Edouard Carbonne est ingénieur de mastering international, ayant travaillé avec des artistes reconnus. Son ancien site ne reflétait pas son niveau d'exigence. Ensemble, on a repensé l'expérience de A à Z pour créer un outil qui lui ressemble vraiment — minimaliste, premium, fonctionnel.",
      en: "Edouard Carbonne is an international mastering engineer who has worked with acclaimed artists. His previous site didn't reflect his level of quality. Together, we reimagined the experience from scratch to create a tool that truly represents him — minimal, premium, functional.",
    },
    KPIs: [
      {
        number: "App-like",
        fr: "Expérience non-scrollable full-screen",
        en: "Non-scrollable full-screen experience",
      },
      {
        number: "Dropbox",
        fr: "Dépôt de fichiers intégré directement",
        en: "Integrated direct file upload",
      },
      {
        number: "FR/EN",
        fr: "Site entièrement bilingue",
        en: "Fully bilingual site",
      },
      {
        number: "From scratch",
        fr: "Conçu et développé seul",
        en: "Designed & built solo",
      },
    ],
    technicalChallenges: [
      {
        fr: "Conception d'une navigation non-scrollable pensée comme une application mobile — chaque section est une 'page' full-screen avec transitions fluides.",
        en: "Designing a non-scrollable navigation built like a mobile app — each section is a full-screen 'page' with smooth transitions.",
      },
      {
        fr: "Intégration du Dropbox SDK pour permettre aux clients de déposer leurs fichiers audio directement dans l'espace Dropbox d'Edouard, sans intermédiaire.",
        en: "Integration of the Dropbox SDK to allow clients to upload their audio files directly to Edouard's Dropbox, without any middleman.",
      },
      {
        fr: "Génération de fiches de production PDF (jsPDF) — les clients remplissent un formulaire multi-étapes et reçoivent un récapitulatif en PDF.",
        en: "PDF production sheet generation (jsPDF) — clients fill in a multi-step form and receive a PDF summary.",
      },
      {
        fr: "Site entièrement bilingue FR/EN avec gestion des contenus via Strapi.",
        en: "Fully bilingual FR/EN site with content management via Strapi.",
      },
    ],
    images: [
      "/images/projects/masteredbyedouard/cover.webp",
      "/images/projects/masteredbyedouard/mbe-1.webp",
      "/images/projects/masteredbyedouard/mbe-2.webp",
      "/images/projects/masteredbyedouard/mbe-3.webp",
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
      fr: "Padel15 n'avait qu'un nom de domaine. J'ai conçu et développé le site complet from scratch, seul, en quelques jours. Résultat : 3 500 à 4 000 visiteurs par mois, terrains complets tous les jours, bar et restaurant qui cartonnent — zéro blog, zéro pub.",
      en: "Padel15 had nothing but a domain name. I designed and built the entire site from scratch, solo, in a few days. Result: 3,500 to 4,000 monthly visitors, fully booked courts every day, a thriving bar and restaurant — no blog, no paid ads.",
    },
    about: {
      fr: "Padel15 est un club de padel parisien alliant sport, lifestyle et restauration. Ils m'ont contacté sans maquette ni contenu — juste une vision. J'ai pris en charge l'ensemble : design, développement, SEO local, déploiement Vercel. Le site génère aujourd'hui un trafic organique constant sans aucun investissement publicitaire.",
      en: "Padel15 is a Parisian padel club combining sport, lifestyle and dining. They came to me with no mockup, no content — just a vision. I handled everything: design, development, local SEO, Vercel deployment. The site now generates consistent organic traffic with zero ad spend.",
    },
    KPIs: [
      {
        number: "3 500 - 4 000",
        fr: "Visiteurs par mois",
        en: "Monthly visitors",
      },
      {
        number: "100/100",
        fr: "Score SEO Lighthouse",
        en: "Lighthouse SEO score",
      },
      { number: "0€", fr: "Budget publicitaire", en: "Ad spend" },
      {
        number: "From scratch",
        fr: "Conçu et développé seul",
        en: "Designed & built solo",
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
];
