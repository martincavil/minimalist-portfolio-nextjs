export type Project = {
  name: string;
  slug: string;
  year: string;
  domain: {
    fr: string;
    en: string;
  };
  skills: string[];
  excerpt: {
    fr: string;
    en: string;
  };
  url: string;
  cover: string;
  gifCover?: string;
  images?: string[];
  // Detailed page content
  companyHistory?: {
    fr: string;
    en: string;
  };
  testimony?: {
    fr: string;
    en: string;
    author: string;
    role: string;
  };
  context?: {
    fr: string;
    en: string;
  };
  challenges?: {
    fr: string;
    en: string;
  }[];
  work?: {
    fr: string;
    en: string;
  };
  results?: {
    fr: string;
    en: string;
  };
  KPIs?: {
    number: string;
    fr: string;
    en: string;
  }[];
};

export const projects: Project[] = [
  {
    name: "Maison Du Temps",
    slug: "maison-du-temps",
    year: "2025",
    domain: {
      fr: "Site e-commerce de montres",
      en: "E-commerce site for watches",
    },
    skills: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS"],
    url: "https://maisondutemps.com/",
    cover: "https://res.cloudinary.com/martincvl/image/upload/v1763147434/portfolio/projects/maisondutemps/cover.webp",
    gifCover: "https://res.cloudinary.com/martincvl/video/upload/v1763147438/portfolio/projects/maisondutemps/maisondutemps.mp4",
    excerpt: {
      fr: "Refonte et optimisation du site e-commerce Maison Du Temps, avec la création de modules sur-mesure et l'amélioration continue de l'expérience utilisateur.",
      en: "Redesign and optimization of Maison Du Temps's e-commerce platform, including custom module development and ongoing user experience improvements.",
    },
    images: [
      "https://res.cloudinary.com/martincvl/image/upload/v1763147434/portfolio/projects/maisondutemps/cover.webp",
      "/images/projects/maisondutemps/maisondutemps-1.webp",
      "/images/projects/maisondutemps/maisondutemps-2.webp",
      "/images/projects/maisondutemps/maisondutemps-3.webp",
    ],
    companyHistory: {
      fr: "Maison du Temps est une boutique en ligne dédiée aux montres haut de gamme, offrant une sélection raffinée de pièces horlogères d'exception. Fondée avec la passion de l'horlogerie et le souci du détail, l'entreprise s'est rapidement imposée comme une référence pour les amateurs de belles montres cherchant qualité et authenticité.",
      en: "Maison du Temps is an online boutique dedicated to high-end watches, offering a refined selection of exceptional timepieces. Founded with a passion for watchmaking and attention to detail, the company has quickly established itself as a reference for watch enthusiasts seeking quality and authenticity.",
    },
    testimony: {
      fr: "Martin a su comprendre nos besoins et transformer notre vision en réalité. Son expertise technique et son sens du détail ont considérablement amélioré l'expérience de nos clients.",
      en: "Martin understood our needs and transformed our vision into reality. His technical expertise and attention to detail significantly improved our customers' experience.",
      author: "Client Maison Du Temps",
      role: "Founder",
    },
    context: {
      fr: "Maison Du Temps souhaitait moderniser son site e-commerce pour offrir une meilleure expérience utilisateur et augmenter ses conversions. L'objectif était de créer une boutique en ligne performante, élégante et facile à maintenir.",
      en: "Maison Du Temps wanted to modernize its e-commerce site to provide a better user experience and increase conversions. The goal was to create a high-performing, elegant, and easy-to-maintain online store.",
    },
    challenges: [
      {
        fr: "Nécessité d'optimiser les performances du site pour gérer un catalogue important de produits",
        en: "Need to optimize site performance to handle a large product catalog",
      },
      {
        fr: "Créer une expérience utilisateur fluide et intuitive pour valoriser les montres haut de gamme",
        en: "Create a smooth and intuitive user experience to showcase high-end watches",
      },
    ],
    work: {
      fr: "J'ai développé des modules Shopify personnalisés, optimisé les performances du site, et créé des composants sur-mesure pour améliorer l'expérience utilisateur. Technologies utilisées : Shopify, Liquid, JavaScript, HTML, CSS. Méthodologie : développement agile avec tests continus et optimisation SEO.",
      en: "I developed custom Shopify modules, optimized site performance, and created custom components to enhance user experience. Technologies used: Shopify, Liquid, JavaScript, HTML, CSS. Methodology: agile development with continuous testing and SEO optimization.",
    },
    results: {
      fr: "Le site e-commerce de Maison Du Temps bénéficie maintenant d'une expérience utilisateur améliorée, de temps de chargement réduits et d'une interface moderne qui valorise les produits. Les clients profitent d'une navigation fluide et intuitive.",
      en: "Maison Du Temps's e-commerce site now benefits from an improved user experience, reduced loading times, and a modern interface that showcases products. Customers enjoy smooth and intuitive navigation.",
    },
  },
  {
    name: "Uptoo",
    slug: "uptoo",
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
      "Framer Motion",
      "Prismic",
      "Strapi",
      "UI Kit",
    ],
    url: "https://www.uptoo.fr",
    cover: "https://res.cloudinary.com/martincvl/image/upload/v1763147456/portfolio/projects/uptoo/cover.webp",
    gifCover: "https://res.cloudinary.com/martincvl/video/upload/v1763147461/portfolio/projects/uptoo/uptoo.mp4",
    excerpt: {
      fr: "Responsable Frontend pendant 3 ans, j'ai piloté et développé des dizaines de projets web pour Uptoo : outils internes pour les collaborateurs, plateformes pour les candidats (ex : CV Maker connecté à nos bases de données et système de matching), et interfaces clients pour le suivi de recrutement, la formation et la gestion d'annonces. J'ai été référent technique sur tout ce qui touche au frontend.",
      en: "Frontend Lead for 3 years, I led and developed dozens of web projects for Uptoo: internal tools for employees, platforms for candidates (e.g., CV Maker connected to our databases and matching system), and client interfaces for recruitment tracking, training, and job posting. I was the technical reference for all things frontend.",
    },
    images: [
      "https://res.cloudinary.com/martincvl/image/upload/v1763147456/portfolio/projects/uptoo/uptoo-1.webp",
      "https://res.cloudinary.com/martincvl/image/upload/v1763147459/portfolio/projects/uptoo/uptoo-4.webp",
      "https://res.cloudinary.com/martincvl/image/upload/v1763147457/portfolio/projects/uptoo/uptoo-2.webp",
      "https://res.cloudinary.com/martincvl/image/upload/v1763147458/portfolio/projects/uptoo/uptoo-3.webp",
    ],
    companyHistory: {
      fr: "Uptoo est le leader français du recrutement commercial, générant plus de 25 millions d'euros de chiffre d'affaires annuel. Avec une base de données de plus de 700 000 candidats et plus de 9 000 clients entreprises, Uptoo accompagne les entreprises dans leur développement commercial depuis plus de 15 ans. L'entreprise se distingue par son expertise pointue du métier de la vente et sa capacité à matcher les meilleurs profils avec les opportunités les plus pertinentes.",
      en: "Uptoo is France's leading sales recruitment agency, generating over €25 million in annual revenue. With a database of over 700,000 candidates and more than 9,000 corporate clients, Uptoo has been supporting companies in their commercial development for over 15 years. The company stands out for its sharp expertise in sales professions and its ability to match the best profiles with the most relevant opportunities.",
    },
    testimony: {
      fr: "Martin a été un atout précieux pour notre équipe. Sa capacité à comprendre nos enjeux business et à traduire nos besoins en solutions techniques performantes a vraiment fait la différence. Son leadership technique et sa rigueur ont permis d'élever la qualité de tous nos projets frontend.",
      en: "Martin was a valuable asset to our team. His ability to understand our business challenges and translate our needs into high-performing technical solutions really made a difference. His technical leadership and rigor helped elevate the quality of all our frontend projects.",
      author: "Tech Team Uptoo",
      role: "CTO",
    },
    context: {
      fr: "En tant que Responsable Frontend, ma mission était de structurer et professionnaliser l'ensemble de l'écosystème frontend de l'entreprise : du site vitrine aux outils internes, en passant par les plateformes candidats et clients. L'enjeu était de garantir cohérence, performance et scalabilité sur l'ensemble des projets, tout en accompagnant la montée en compétence des équipes.",
      en: "As Frontend Lead, my mission was to structure and professionalize the company's entire frontend ecosystem: from the showcase website to internal tools, including candidate and client platforms. The challenge was to ensure consistency, performance, and scalability across all projects, while supporting team skill development.",
    },
    challenges: [
      {
        fr: "Mise en place d'un UI Kit complet avec plus de 100 composants sur Storybook pour garantir cohérence et rapidité",
        en: "Implementation of a complete UI Kit with over 100 components on Storybook to ensure consistency and speed",
      },
      {
        fr: "Coordination technique entre équipes multidisciplinaires (business, marketing, produit, dev backend)",
        en: "Technical coordination between multidisciplinary teams (business, marketing, product, backend dev)",
      },
      {
        fr: "Optimisation des performances et du SEO pour atteindre des scores Lighthouse de 100/100",
        en: "Performance and SEO optimization to achieve Lighthouse scores of 100/100",
      },
      {
        fr: "Développement d'outils innovants (CV Maker, système de matching, interfaces de suivi)",
        en: "Development of innovative tools (CV Maker, matching system, tracking interfaces)",
      },
    ],
    work: {
      fr: "J'ai structuré l'ensemble de l'architecture frontend de l'entreprise en développant un UI Kit complet sur Storybook, en mettant en place des process de développement agile, et en pilotant techniquement des dizaines de projets. Technologies utilisées : React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Prismic, Strapi. Méthodologie : Scrum, code reviews systématiques, tests automatisés, CI/CD, optimisation continue des performances et du SEO.",
      en: "I structured the company's entire frontend architecture by developing a complete UI Kit on Storybook, implementing agile development processes, and technically leading dozens of projects. Technologies used: React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Prismic, Strapi. Methodology: Scrum, systematic code reviews, automated testing, CI/CD, continuous performance and SEO optimization.",
    },
    results: {
      fr: "Mise en place d'un écosystème frontend performant et scalable, avec des scores Lighthouse de 100/100 sur l'accessibilité, le SEO et les bonnes pratiques. Développement de plusieurs dizaines de projets web (sites, plateformes, outils internes) utilisés par des centaines de milliers d'utilisateurs. Montée en compétence des équipes et amélioration significative de la communication inter-équipes.",
      en: "Implementation of a high-performing and scalable frontend ecosystem, with Lighthouse scores of 100/100 on accessibility, SEO, and best practices. Development of several dozen web projects (sites, platforms, internal tools) used by hundreds of thousands of users. Team skill development and significant improvement in inter-team communication.",
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
  },
  {
    name: "Padel15",
    slug: "padel15",
    year: "2025",
    domain: {
      fr: "Club de padel à Paris",
      en: "Padel club in Paris",
    },
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    url: "https://www.padel15.fr",
    cover: "https://res.cloudinary.com/martincvl/image/upload/v1763147441/portfolio/projects/padel15/cover.webp",
    gifCover: "https://res.cloudinary.com/martincvl/video/upload/v1763147447/portfolio/projects/padel15/padel15.mp4",
    excerpt: {
      fr: "Site vitrine dynamique pour le club Padel15, avec une interface moderne, des scores Lighthouse exemplaires et une évolution prévue vers la réservation en ligne.",
      en: "Dynamic showcase website for Padel15 club, featuring a modern interface, top Lighthouse scores, and an upcoming evolution to online booking.",
    },
    images: [
      "https://res.cloudinary.com/martincvl/image/upload/v1763147441/portfolio/projects/padel15/cover.webp",
      "https://res.cloudinary.com/martincvl/image/upload/v1763147441/portfolio/projects/padel15/padel15-1.webp",
      "https://res.cloudinary.com/martincvl/image/upload/v1763147443/portfolio/projects/padel15/padel15-2.webp",
      "https://res.cloudinary.com/martincvl/image/upload/v1763147444/portfolio/projects/padel15/padel15-3.webp",
    ],
    companyHistory: {
      fr: "Padel15 est un club de padel dynamique situé dans le 15ème arrondissement de Paris. Fondé par des passionnés de ce sport en plein essor, le club propose des terrains de qualité dans une ambiance conviviale et accessible à tous les niveaux. Padel15 s'est rapidement fait un nom dans la communauté parisienne du padel grâce à son emplacement stratégique et la qualité de ses installations.",
      en: "Padel15 is a dynamic padel club located in the 15th arrondissement of Paris. Founded by enthusiasts of this booming sport, the club offers quality courts in a friendly atmosphere accessible to all levels. Padel15 quickly made a name for itself in the Parisian padel community thanks to its strategic location and the quality of its facilities.",
    },
    testimony: {
      fr: "Martin a créé un site qui reflète parfaitement l'esprit de notre club : moderne, dynamique et accessible. Le résultat a dépassé nos attentes et nous avons déjà eu de nombreux retours positifs de nos membres.",
      en: "Martin created a website that perfectly reflects the spirit of our club: modern, dynamic, and accessible. The result exceeded our expectations and we've already received numerous positive feedback from our members.",
      author: "Équipe Padel15",
      role: "Founders",
    },
    context: {
      fr: "Padel15 avait besoin d'un site web vitrine pour développer sa visibilité en ligne et faciliter la découverte du club par de nouveaux membres. Le site devait être rapide, moderne, bien référencé sur Google et prêt à évoluer vers des fonctionnalités plus avancées comme la réservation en ligne.",
      en: "Padel15 needed a showcase website to develop its online visibility and make it easier for new members to discover the club. The site had to be fast, modern, well-ranked on Google, and ready to evolve towards more advanced features like online booking.",
    },
    challenges: [
      {
        fr: "Développement rapide du site en quelques jours tout en maintenant une qualité optimale",
        en: "Rapid site development in a few days while maintaining optimal quality",
      },
      {
        fr: "Optimisation SEO locale pour se positionner sur les recherches de clubs de padel à Paris",
        en: "Local SEO optimization to rank for padel club searches in Paris",
      },
      {
        fr: "Architecture évolutive pour faciliter l'ajout futur de fonctionnalités (réservation, blog)",
        en: "Scalable architecture to facilitate future addition of features (booking, blog)",
      },
    ],
    work: {
      fr: "J'ai pris en charge l'intégralité du projet : design, développement et déploiement. Le site a été développé avec Next.js pour garantir performance et SEO, Tailwind CSS pour un design moderne et responsive, et déployé sur Vercel pour une mise en ligne instantanée. Méthodologie : conception rapide, développement itératif, tests de performance, optimisation SEO locale, et préparation de l'architecture pour les évolutions futures.",
      en: "I handled the entire project: design, development, and deployment. The site was built with Next.js to ensure performance and SEO, Tailwind CSS for a modern and responsive design, and deployed on Vercel for instant online deployment. Methodology: rapid design, iterative development, performance testing, local SEO optimization, and architecture preparation for future evolutions.",
    },
    results: {
      fr: "Lancement réussi du site avec plus de 10 000 visiteurs depuis septembre 2025. Scores Lighthouse parfaits de 100/100 sur les bonnes pratiques et le SEO. Le site est maintenant prêt pour la V2 qui intégrera la réservation en ligne et un blog pour engager davantage la communauté.",
      en: "Successful site launch with over 10,000 visitors since September 2025. Perfect Lighthouse scores of 100/100 on best practices and SEO. The site is now ready for V2 which will integrate online booking and a blog to further engage the community.",
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
  },
  {
    name: "Les Yeux - Détectives Privés",
    slug: "les-yeux-detectives",
    year: "2025",
    domain: {
      fr: "Site pour un cabinet de détectives privés",
      en: "Site for a private detective agency",
    },
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    url: "https://les-yeux-detectives.com/",
    cover: "https://res.cloudinary.com/martincvl/image/upload/v1763147430/portfolio/projects/les-yeux-detectives/cover.webp",
    gifCover: "https://res.cloudinary.com/martincvl/video/upload/v1763147432/portfolio/projects/les-yeux-detectives/les-yeux-detectives.mp4",
    excerpt: {
      fr: "Mise en ligne d'une plateforme sobre et rassurante pour Les Yeux - Détectives Privés, valorisant leur expertise et facilitant la prise de contact.",
      en: "Launched a sleek, trustworthy platform for Les Yeux - Détectives Privés, highlighting their expertise and making it easy for clients to get in touch.",
    },
    images: [
      "https://res.cloudinary.com/martincvl/image/upload/v1763147430/portfolio/projects/les-yeux-detectives/cover.webp",
      "/images/projects/les-yeux-detectives/les-yeux-detectives-1.webp",
      "/images/projects/les-yeux-detectives/les-yeux-detectives-2.webp",
      "/images/projects/les-yeux-detectives/les-yeux-detectives-3.webp",
    ],
    companyHistory: {
      fr: "Les Yeux est un cabinet de détectives privés basé en France, spécialisé dans les investigations privées et professionnelles. Avec une approche discrète et professionnelle, le cabinet accompagne particuliers et entreprises dans leurs besoins d'enquête et de surveillance. L'équipe se distingue par son expertise juridique et sa capacité à fournir des preuves recevables en justice.",
      en: "Les Yeux is a private detective agency based in France, specializing in private and professional investigations. With a discreet and professional approach, the agency supports individuals and businesses in their investigation and surveillance needs. The team stands out for its legal expertise and ability to provide admissible evidence in court.",
    },
    testimony: {
      fr: "Martin a parfaitement compris l'image que nous souhaitions véhiculer : sérieux, discrétion et professionnalisme. Le site reflète exactement nos valeurs et nous aide à établir la confiance avec nos futurs clients dès le premier contact.",
      en: "Martin perfectly understood the image we wanted to convey: seriousness, discretion, and professionalism. The site exactly reflects our values and helps us establish trust with our future clients from the first contact.",
      author: "Les Yeux Team",
      role: "Managing Director",
    },
    context: {
      fr: "Le cabinet Les Yeux avait besoin d'une présence en ligne professionnelle pour développer sa clientèle et rassurer les prospects sur son sérieux et son expertise. Le site devait inspirer confiance tout en restant sobre et discret, à l'image du métier de détective privé.",
      en: "The Les Yeux agency needed a professional online presence to develop its clientele and reassure prospects about its seriousness and expertise. The site had to inspire trust while remaining sober and discreet, reflecting the private detective profession.",
    },
    challenges: [
      {
        fr: "Créer une identité visuelle qui inspire confiance et professionnalisme dans un domaine sensible",
        en: "Create a visual identity that inspires trust and professionalism in a sensitive field",
      },
      {
        fr: "Intégrer des outils marketing (Brevo) pour gérer les leads et campagnes tout en respectant la confidentialité",
        en: "Integrate marketing tools (Brevo) to manage leads and campaigns while respecting confidentiality",
      },
    ],
    work: {
      fr: "J'ai développé un site web sobre et professionnel qui met en avant l'expertise du cabinet. Le site intègre des formulaires de contact sécurisés, une présentation claire des services, et des outils marketing via Brevo pour gérer les campagnes de mailing. Technologies utilisées : Next.js, TypeScript, Tailwind CSS, Vercel. Méthodologie : design centré sur la confiance, développement rapide, intégration marketing, optimisation SEO.",
      en: "I developed a sober and professional website that highlights the agency's expertise. The site integrates secure contact forms, a clear presentation of services, and marketing tools via Brevo to manage mailing campaigns. Technologies used: Next.js, TypeScript, Tailwind CSS, Vercel. Methodology: trust-centered design, rapid development, marketing integration, SEO optimization.",
    },
    results: {
      fr: "Lancement réussi d'un site web professionnel qui inspire confiance et facilite la prise de contact. Les outils marketing intégrés permettent au cabinet de gérer efficacement ses campagnes et de suivre les leads. Le site contribue à renforcer la crédibilité et la visibilité en ligne du cabinet.",
      en: "Successful launch of a professional website that inspires trust and facilitates contact. Integrated marketing tools allow the agency to effectively manage its campaigns and track leads. The site contributes to strengthening the agency's credibility and online visibility.",
    },
  },
  {
    name: "pharmExecutive",
    slug: "pharmexecutive",
    year: "2024-2025",
    domain: {
      fr: "Site de formation pour pharmaciens d'officine",
      en: "Training site for pharmacists",
    },
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    url: "https://pharmexecutive.fr/",
    cover: "/images/projects/pharmexecutive/cover.webp",
    gifCover: "/images/projects/pharmexecutive/pharmexecutive.gif",
    excerpt: {
      fr: "Développement d'une plateforme pédagogique intuitive pour pharmExecutive, dédiée à la formation continue des pharmaciens d'officine.",
      en: "Developed an intuitive educational platform for pharmExecutive, dedicated to ongoing training for pharmacists.",
    },
    images: [
      "https://res.cloudinary.com/martincvl/image/upload/v1763147451/portfolio/projects/pharmExecutive/cover.webp",
      "/images/projects/pharmExecutive/pharmExecutive-1.webp",
      "/images/projects/pharmExecutive/pharmExecutive-2.webp",
      "/images/projects/pharmExecutive/pharmExecutive-3.webp",
    ],
    companyHistory: {
      fr: "pharmExecutive est une plateforme de formation continue dédiée aux pharmaciens d'officine. Fondée par des professionnels du secteur pharmaceutique, l'entreprise propose des modules de formation adaptés aux besoins spécifiques des pharmaciens, leur permettant de rester à jour sur les évolutions réglementaires, les nouveaux traitements et les meilleures pratiques du métier.",
      en: "pharmExecutive is a continuing education platform dedicated to community pharmacists. Founded by pharmaceutical sector professionals, the company offers training modules tailored to pharmacists' specific needs, enabling them to stay current on regulatory changes, new treatments, and best practices in the profession.",
    },
    testimony: {
      fr: "Nous avions besoin d'une plateforme moderne et facile à utiliser pour nos formations. Martin a livré un site qui dépasse nos attentes : intuitif pour nos utilisateurs, facile à maintenir pour notre équipe, et parfaitement intégré avec nos outils marketing.",
      en: "We needed a modern and easy-to-use platform for our training courses. Martin delivered a site that exceeds our expectations: intuitive for our users, easy to maintain for our team, and perfectly integrated with our marketing tools.",
      author: "pharmExecutive Team",
      role: "CEO",
    },
    context: {
      fr: "pharmExecutive souhaitait lancer une plateforme en ligne pour proposer ses formations aux pharmaciens d'officine. Le site devait être ergonomique, rapide à mettre en ligne, et intégrer des outils marketing pour gérer les inscriptions et les campagnes de communication.",
      en: "pharmExecutive wanted to launch an online platform to offer its training to community pharmacists. The site had to be ergonomic, quick to launch, and integrate marketing tools to manage registrations and communication campaigns.",
    },
    challenges: [
      {
        fr: "Développement rapide d'une plateforme fonctionnelle pour respecter les délais de lancement",
        en: "Rapid development of a functional platform to meet launch deadlines",
      },
      {
        fr: "Intégration des outils de mailing (Brevo) pour automatiser la communication avec les participants",
        en: "Integration of mailing tools (Brevo) to automate communication with participants",
      },
      {
        fr: "Création d'une interface intuitive adaptée au public cible des pharmaciens",
        en: "Creation of an intuitive interface tailored to the target audience of pharmacists",
      },
    ],
    work: {
      fr: "J'ai développé une plateforme de formation complète avec présentation des modules, formulaires d'inscription, et intégration des outils marketing. Le site a été conçu pour être facile à maintenir et à faire évoluer. Technologies utilisées : Next.js, TypeScript, Tailwind CSS, Brevo, Vercel. Méthodologie : développement agile, livraison rapide, intégration marketing, optimisation UX pour le secteur médical.",
      en: "I developed a complete training platform with module presentation, registration forms, and marketing tools integration. The site was designed to be easy to maintain and evolve. Technologies used: Next.js, TypeScript, Tailwind CSS, Brevo, Vercel. Methodology: agile development, rapid delivery, marketing integration, UX optimization for the medical sector.",
    },
    results: {
      fr: "Lancement réussi de la plateforme pharmExecutive en quelques jours. Le site permet aux pharmaciens de découvrir et de s'inscrire facilement aux formations. Les outils marketing intégrés facilitent la gestion des campagnes et le suivi des inscriptions. La plateforme est maintenant prête pour évoluer avec de nouvelles fonctionnalités.",
      en: "Successful launch of the pharmExecutive platform in a few days. The site allows pharmacists to easily discover and register for training courses. Integrated marketing tools facilitate campaign management and registration tracking. The platform is now ready to evolve with new features.",
    },
  },
];
