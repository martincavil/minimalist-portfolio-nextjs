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
      fr: "E-commerce de montres haut de gamme",
      en: "High-end watch e-commerce",
    },
    skills: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS", "SEO"],
    url: "https://maisondutemps.com/",
    cover:
      "https://res.cloudinary.com/martincvl/image/upload/v1763147434/portfolio/projects/maisondutemps/cover.webp",
    gifCover:
      "https://res.cloudinary.com/martincvl/video/upload/v1763147438/portfolio/projects/maisondutemps/maisondutemps.mp4",
    excerpt: {
      fr: "Refonte complète et optimisation continue d'une boutique e-commerce de montres haut de gamme avec création de modules Shopify sur-mesure et amélioration de l'expérience utilisateur.",
      en: "Complete redesign and ongoing optimization of a high-end watch e-commerce store with custom Shopify module development and user experience enhancement.",
    },
    images: [
      "https://res.cloudinary.com/martincvl/image/upload/v1763147434/portfolio/projects/maisondutemps/cover.webp",
    ],
    companyHistory: {
      fr: "Maison du Temps est une boutique en ligne spécialisée dans les montres haut de gamme, offrant une sélection raffinée de pièces horlogères d'exception. Fondée avec une passion profonde pour l'horlogerie et un souci constant du détail, l'entreprise s'est rapidement imposée comme une référence pour les amateurs de belles montres en quête de qualité, d'authenticité et de service personnalisé. Chaque montre est sélectionnée avec soin pour répondre aux exigences des connaisseurs et collectionneurs.",
      en: "Maison du Temps is an online boutique specializing in high-end watches, offering a refined selection of exceptional timepieces. Founded with a deep passion for watchmaking and constant attention to detail, the company has quickly established itself as a benchmark for watch enthusiasts seeking quality, authenticity, and personalized service. Each watch is carefully selected to meet the demands of connoisseurs and collectors.",
    },
    // testimony: {
    //   fr: "Martin a su comprendre nos besoins et transformer notre vision en réalité. Son expertise technique et son sens du détail ont considérablement amélioré l'expérience de nos clients.",
    //   en: "Martin understood our needs and transformed our vision into reality. His technical expertise and attention to detail significantly improved our customers' experience.",
    //   author: "Client Maison Du Temps",
    //   role: "Founder",
    // },
    context: {
      fr: "Maison Du Temps souhaitait moderniser en profondeur son site e-commerce pour offrir une expérience utilisateur premium digne de ses produits haut de gamme et augmenter significativement ses conversions. L'objectif était de créer une boutique en ligne élégante, performante et facile à maintenir, tout en valorisant l'excellence et le prestige des montres proposées.",
      en: "Maison Du Temps wanted to thoroughly modernize its e-commerce site to provide a premium user experience worthy of its high-end products and significantly increase conversions. The goal was to create an elegant, high-performing, and easy-to-maintain online store while highlighting the excellence and prestige of the watches offered.",
    },
    challenges: [
      {
        fr: "Optimiser les performances du site pour gérer un large catalogue de produits tout en maintenant des temps de chargement rapides",
        en: "Optimize site performance to handle a large product catalog while maintaining fast loading times",
      },
      {
        fr: "Créer une expérience utilisateur fluide et intuitive qui valorise le prestige et le raffinement des montres haut de gamme",
        en: "Create a smooth and intuitive user experience that emphasizes the prestige and refinement of high-end watches",
      },
      {
        fr: "Développer des modules Shopify personnalisés pour répondre aux besoins spécifiques d'une boutique de luxe",
        en: "Develop custom Shopify modules to meet the specific needs of a luxury boutique",
      },
      {
        fr: "Améliorer le référencement naturel pour capter une audience qualifiée d'amateurs de montres de prestige",
        en: "Improve organic SEO to capture a qualified audience of prestige watch enthusiasts",
      },
    ],
    work: {
      fr: "J'ai pris en charge la refonte de certaines parties du site e-commerce en développant des modules Shopify personnalisés adaptés aux besoins d'une boutique de montres haut de gamme. J'ai créé des composants sur-mesure pour améliorer la présentation des produits, optimisé les performances du site pour garantir des temps de chargement rapides malgré un catalogue fourni, et mis en place une architecture responsive élégante. Un travail d'optimisation SEO approfondi a été réalisé pour améliorer le positionnement sur les requêtes liées aux montres de luxe. Technologies utilisées : Shopify, Liquid, JavaScript, HTML, CSS. Méthodologie : développement agile avec tests continus, optimisation SEO, amélioration continue basée sur les retours utilisateurs.",
      en: "I handled the complete redesign of the e-commerce site by developing custom Shopify modules tailored to the needs of a high-end watch boutique. I created custom components to enhance product presentation, optimized site performance to ensure fast loading times despite an extensive catalog, and implemented an elegant responsive architecture. Comprehensive SEO optimization work was carried out to improve rankings for luxury watch-related queries. Technologies used: Shopify, Liquid, JavaScript, HTML, CSS. Methodology: agile development with continuous testing, SEO optimization, ongoing improvement based on user feedback.",
    },
    results: {
      fr: "Le site e-commerce de Maison Du Temps bénéficie désormais d'une expérience utilisateur premium, de temps de chargement optimisés et d'une interface moderne et élégante qui met en valeur le prestige des montres. Les clients profitent d'une navigation fluide et intuitive qui facilite la découverte des produits et encourage la conversion. L'optimisation SEO permet d'attirer une audience qualifiée de passionnés d'horlogerie.",
      en: "Maison Du Temps's e-commerce site now benefits from a premium user experience, optimized loading times, and a modern, elegant interface that highlights the prestige of the watches. Customers enjoy smooth and intuitive navigation that facilitates product discovery and encourages conversion. SEO optimization attracts a qualified audience of watchmaking enthusiasts.",
    },
  },
  {
    name: "Uptoo",
    slug: "uptoo",
    year: "2022-2025",
    domain: {
      fr: "Agence leader du recrutement commercial",
      en: "Leading sales recruitment agency",
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
    cover:
      "https://res.cloudinary.com/martincvl/image/upload/v1763147456/portfolio/projects/uptoo/cover.webp",
    gifCover:
      "https://res.cloudinary.com/martincvl/video/upload/v1763147461/portfolio/projects/uptoo/uptoo.mp4",
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
      en: "Uptoo is France's leading sales recruitment agency, generating over €25 million in annual revenue. With a database of over 700,000 candidates and more than 9,000 corporate clients, Uptoo has been supporting companies in their commercial development for over 15 years. The company stands out through its sharp expertise in sales professions and its ability to match top profiles with the most relevant opportunities.",
    },
    testimony: {
      fr: "J’ai eu la chance de travailler avec Martin sur beaucoup de projets Frontend (React, Tailwind, Shadcn...), et c’est un développeur que je recommande sans hésiter. Sérieux, exigeant sur la qualité de ses rendus, il comprend vite les enjeux et fait toujours attention aux détails. Martin est aussi quelqu’un de très à l’écoute, toujours dans le dialogue pour trouver la meilleure solution. Bref, un vrai pro, fiable et agréable à avoir dans une équipe.",
      en: "I had the chance to work with Martin on many Frontend projects (React, Tailwind, Shadcn...), and he is a developer I recommend without hesitation. Serious, demanding about the quality of his work, he quickly understands the stakes and always pays attention to details. Martin is also very attentive, always engaging in dialogue to find the best solution. In short, a true professional, reliable and pleasant to have on a team.",
      author: "Alexandre A.",
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
      fr: "Site vitrine pour club de padel parisien",
      en: "Showcase website for Parisian padel club",
    },
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "SEO", "Vercel"],
    url: "https://www.padel15.fr",
    cover:
      "https://res.cloudinary.com/martincvl/image/upload/v1763147441/portfolio/projects/padel15/cover.webp",
    gifCover:
      "https://res.cloudinary.com/martincvl/video/upload/v1763147447/portfolio/projects/padel15/padel15.mp4",
    excerpt: {
      fr: "Conception et développement d'un site vitrine moderne pour Padel15 avec architecture évolutive, optimisation SEO locale et scores Lighthouse parfaits, préparant le terrain pour la V2 avec réservation en ligne.",
      en: "Design and development of a modern showcase website for Padel15 with scalable architecture, local SEO optimization, and perfect Lighthouse scores, paving the way for V2 with online booking.",
    },
    images: [
      "https://res.cloudinary.com/martincvl/image/upload/v1763147441/portfolio/projects/padel15/cover.webp",
      "https://res.cloudinary.com/martincvl/image/upload/v1763147441/portfolio/projects/padel15/padel15-1.webp",
      "https://res.cloudinary.com/martincvl/image/upload/v1763147443/portfolio/projects/padel15/padel15-2.webp",
      "https://res.cloudinary.com/martincvl/image/upload/v1763147444/portfolio/projects/padel15/padel15-3.webp",
    ],
    companyHistory: {
      fr: "Padel15 est un club de padel dynamique et convivial situé dans le 15ème arrondissement de Paris. Fondé par une équipe de passionnés de ce sport en pleine expansion, le club propose des terrains de qualité dans une ambiance chaleureuse et accessible à tous les niveaux de jeu, du débutant au joueur confirmé. Grâce à son emplacement stratégique au cœur de Paris, la qualité de ses installations modernes et son esprit communautaire, Padel15 s'est rapidement imposé comme une référence incontournable dans la scène parisienne du padel.",
      en: "Padel15 is a dynamic and welcoming padel club located in Paris's 15th arrondissement. Founded by a team of enthusiasts of this rapidly growing sport, the club offers quality courts in a warm atmosphere accessible to all skill levels, from beginners to experienced players. Thanks to its strategic location in the heart of Paris, the quality of its modern facilities, and its community spirit, Padel15 has quickly become an essential reference in the Parisian padel scene.",
    },
    testimony: {
      fr: "Martin a créé un site qui reflète parfaitement l'esprit de notre club : moderne, dynamique et accessible. Le résultat a dépassé nos attentes et nous avons déjà eu de nombreux retours positifs de nos membres.",
      en: "Martin created a website that perfectly reflects the spirit of our club: modern, dynamic, and accessible. The result exceeded our expectations and we've already received numerous positive feedback from our members.",
      author: "Gaspard M.",
      role: "Founder & CEO",
    },
    context: {
      fr: "Padel15 avait besoin d'une présence en ligne professionnelle pour développer sa visibilité auprès des joueurs parisiens et faciliter la découverte du club par de nouveaux membres. Le site devait être rapide, moderne, parfaitement optimisé pour le référencement local (recherches Google à Paris) et conçu avec une architecture évolutive permettant l'ajout futur de fonctionnalités avancées comme un système de réservation en ligne et un blog communautaire.",
      en: "Padel15 needed a professional online presence to develop its visibility among Parisian players and make it easier for new members to discover the club. The site had to be fast, modern, perfectly optimized for local SEO (Google searches in Paris), and designed with a scalable architecture enabling future addition of advanced features like an online booking system and a community blog.",
    },
    challenges: [
      {
        fr: "Livraison rapide d'un site de qualité en quelques jours pour répondre aux besoins urgents du club",
        en: "Fast delivery of a quality site within a few days to meet the club's urgent needs",
      },
      {
        fr: "Optimisation SEO locale poussée pour se positionner sur les requêtes 'padel Paris 15' et capter une audience locale qualifiée",
        en: "Advanced local SEO optimization to rank for 'padel Paris 15' queries and capture a qualified local audience",
      },
      {
        fr: "Conception d'une architecture modulaire et scalable facilitant l'ajout futur de réservation en ligne et blog",
        en: "Design of a modular and scalable architecture facilitating future addition of online booking and blog",
      },
      {
        fr: "Atteindre des performances optimales (Lighthouse 100/100) tout en conservant un design moderne et attractif",
        en: "Achieve optimal performance (Lighthouse 100/100) while maintaining a modern and attractive design",
      },
    ],
    work: {
      fr: "J'ai pris en charge l'intégralité du projet de A à Z : design UX/UI, développement frontend et déploiement. Le site a été développé avec Next.js pour garantir des performances optimales et un excellent référencement naturel, Tailwind CSS pour un design moderne, responsive et facilement maintenable, et déployé sur Vercel pour une mise en ligne instantanée avec CI/CD automatique. Un travail d'optimisation SEO local approfondi a été effectué pour maximiser la visibilité sur les recherches parisiennes. L'architecture a été pensée dès le départ pour faciliter l'évolution vers la V2 (réservation, blog). Technologies utilisées : Next.js, TypeScript, Tailwind CSS, Vercel. Méthodologie : design rapide centré utilisateur, développement itératif, tests de performance, optimisation SEO locale, architecture scalable.",
      en: "I handled the entire project from A to Z: UX/UI design, frontend development, and deployment. The site was built with Next.js to ensure optimal performance and excellent organic SEO, Tailwind CSS for a modern, responsive, and easily maintainable design, and deployed on Vercel for instant deployment with automatic CI/CD. Comprehensive local SEO optimization work was performed to maximize visibility for Parisian searches. The architecture was designed from the start to facilitate evolution to V2 (booking, blog). Technologies used: Next.js, TypeScript, Tailwind CSS, Vercel. Methodology: rapid user-centered design, iterative development, performance testing, local SEO optimization, scalable architecture.",
    },
    results: {
      fr: "Lancement réussi du site avec plus de 10 000 visiteurs depuis septembre 2025, démontrant l'efficacité de l'optimisation SEO locale. Scores Lighthouse parfaits de 100/100 sur les bonnes pratiques et le SEO, garantissant une expérience utilisateur optimale et une excellente visibilité sur Google. L'architecture modulaire et scalable permet désormais d'envisager sereinement la V2 qui intégrera un système de réservation en ligne et un blog pour renforcer l'engagement de la communauté de joueurs.",
      en: "Successful site launch with over 10,000 visitors since September 2025, demonstrating the effectiveness of local SEO optimization. Perfect Lighthouse scores of 100/100 on best practices and SEO, ensuring optimal user experience and excellent Google visibility. The modular and scalable architecture now enables confident planning for V2, which will integrate an online booking system and a blog to strengthen player community engagement.",
    },
    KPIs: [
      {
        number: "+13K",
        fr: "Visiteurs depuis septembre 2025",
        en: "Visitors since September 2025",
      },
      {
        number: "100",
        fr: "Bonnes pratiques (Lighthouse)",
        en: "Best Practices (Lighthouse)",
      },
      {
        number: "100",
        fr: "SEO (Lighthouse)",
        en: "SEO (Lighthouse)",
      },
    ],
  },
  {
    name: "Les Yeux - Détectives Privés",
    slug: "les-yeux-detectives",
    year: "2025",
    domain: {
      fr: "Site professionnel pour cabinet de détectives privés",
      en: "Professional website for private detective agency",
    },
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Brevo", "SEO", "Vercel"],
    url: "https://les-yeux-detectives.com/",
    cover:
      "https://res.cloudinary.com/martincvl/image/upload/v1763147430/portfolio/projects/les-yeux-detectives/cover.webp",
    gifCover:
      "https://res.cloudinary.com/martincvl/video/upload/v1763147432/portfolio/projects/les-yeux-detectives/les-yeux-detectives.mp4",
    excerpt: {
      fr: "Création d'une plateforme web sobre et professionnelle pour Les Yeux - Détectives Privés, conçue pour inspirer confiance, valoriser l'expertise juridique du cabinet et faciliter la prise de contact sécurisée.",
      en: "Creation of a sober and professional web platform for Les Yeux - Détectives Privés, designed to inspire trust, showcase the agency's legal expertise, and facilitate secure contact.",
    },
    images: [
      "https://res.cloudinary.com/martincvl/image/upload/v1763147430/portfolio/projects/les-yeux-detectives/cover.webp",
    ],
    companyHistory: {
      fr: "Les Yeux est un cabinet de détectives privés professionnel basé en France, spécialisé dans les investigations privées et professionnelles pour particuliers et entreprises. Fort d'une approche rigoureuse, discrète et confidentielle, le cabinet accompagne ses clients dans leurs besoins d'enquête, de surveillance et de recherche de preuves. L'équipe se distingue par son expertise juridique pointue, sa connaissance approfondie du cadre légal des investigations privées et sa capacité à fournir des preuves recevables en justice, essentielles dans les procédures judiciaires.",
      en: "Les Yeux is a professional private detective agency based in France, specializing in private and professional investigations for individuals and businesses. With a rigorous, discreet, and confidential approach, the agency supports its clients in their investigation, surveillance, and evidence-gathering needs. The team stands out for its sharp legal expertise, in-depth knowledge of the legal framework for private investigations, and ability to provide court-admissible evidence, essential in legal proceedings.",
    },
    testimony: {
      fr: "Martin a parfaitement compris l'image que nous souhaitions véhiculer : sérieux, discrétion et professionnalisme. Le site reflète exactement nos valeurs et nous aide à établir la confiance avec nos futurs clients dès le premier contact.",
      en: "Martin perfectly understood the image we wanted to convey: seriousness, discretion, and professionalism. The site exactly reflects our values and helps us establish trust with our future clients from the first contact.",
      author: "Anonyme",
      role: "Founder & CEO",
    },
    context: {
      fr: "Le cabinet Les Yeux avait besoin d'une présence en ligne professionnelle et rassurante pour développer sa clientèle et établir la confiance avec des prospects confrontés à des situations souvent sensibles et délicates. Le site devait refléter le sérieux et l'expertise du cabinet tout en restant sobre et discret, à l'image des valeurs fondamentales du métier de détective privé : confidentialité, rigueur et professionnalisme. L'objectif était également d'intégrer des outils marketing pour gérer efficacement les demandes de contact et les campagnes de communication.",
      en: "The Les Yeux agency needed a professional and reassuring online presence to develop its clientele and establish trust with prospects facing often sensitive and delicate situations. The site had to reflect the agency's seriousness and expertise while remaining sober and discreet, in line with the fundamental values of the private detective profession: confidentiality, rigor, and professionalism. The goal was also to integrate marketing tools to efficiently manage contact requests and communication campaigns.",
    },
    challenges: [
      {
        fr: "Créer une identité visuelle sobre qui inspire confiance et professionnalisme dans un domaine sensible nécessitant discrétion",
        en: "Create a sober visual identity that inspires trust and professionalism in a sensitive field requiring discretion",
      },
      {
        fr: "Présenter clairement les services d'investigation tout en respectant la confidentialité et le cadre légal du métier",
        en: "Clearly present investigation services while respecting confidentiality and the legal framework of the profession",
      },
      {
        fr: "Intégrer des outils marketing (Brevo) pour gérer les leads et campagnes tout en garantissant la sécurité des données",
        en: "Integrate marketing tools (Brevo) to manage leads and campaigns while ensuring data security",
      },
      {
        fr: "Optimiser le référencement pour capter les recherches locales liées aux services de détective privé",
        en: "Optimize SEO to capture local searches related to private detective services",
      },
    ],
    work: {
      fr: "J'ai développé un site web professionnel au design sobre et rassurant qui met en avant l'expertise juridique et l'expérience du cabinet. Le site intègre des formulaires de contact sécurisés avec validation côté serveur pour garantir la confidentialité, une présentation claire et structurée des différents services d'investigation proposés, et des outils marketing via Brevo pour gérer les campagnes de mailing et le suivi des prospects. Un travail d'optimisation SEO a été réalisé pour améliorer la visibilité sur les recherches locales. L'ensemble a été conçu avec une attention particulière portée à la confiance et à la crédibilité. Technologies utilisées : Next.js, TypeScript, Tailwind CSS, Brevo, Vercel. Méthodologie : design centré sur la confiance et la discrétion, développement rapide, intégration marketing sécurisée, optimisation SEO.",
      en: "I developed a professional website with a sober and reassuring design that highlights the agency's legal expertise and experience. The site integrates secure contact forms with server-side validation to ensure confidentiality, a clear and structured presentation of the various investigation services offered, and marketing tools via Brevo to manage mailing campaigns and prospect tracking. SEO optimization work was carried out to improve visibility on local searches. Everything was designed with particular attention to trust and credibility. Technologies used: Next.js, TypeScript, Tailwind CSS, Brevo, Vercel. Methodology: design centered on trust and discretion, rapid development, secure marketing integration, SEO optimization.",
    },
    results: {
      fr: "Lancement réussi d'un site web professionnel qui inspire confiance et facilite la prise de contact pour des clients dans des situations sensibles. L'identité visuelle sobre et rassurante renforce la crédibilité du cabinet. Les outils marketing intégrés permettent au cabinet de gérer efficacement ses campagnes de communication et de suivre les demandes de prospects tout en garantissant la confidentialité. Le site contribue à renforcer significativement la visibilité en ligne et la crédibilité professionnelle du cabinet Les Yeux.",
      en: "Successful launch of a professional website that inspires trust and facilitates contact for clients in sensitive situations. The sober and reassuring visual identity strengthens the agency's credibility. Integrated marketing tools enable the agency to effectively manage its communication campaigns and track prospect inquiries while ensuring confidentiality. The site significantly strengthens the online visibility and professional credibility of the Les Yeux agency.",
    },
  },
  {
    name: "pharmExecutive",
    slug: "pharmexecutive",
    year: "2024-2025",
    domain: {
      fr: "Plateforme de formation professionnelle pour pharmaciens d'officine",
      en: "Professional training platform for community pharmacists",
    },
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Brevo",
      "Google Analytics",
      "Vercel",
    ],
    url: "https://pharmexecutive.fr/",
    cover:
      "https://res.cloudinary.com/martincvl/image/upload/v1763147451/portfolio/projects/pharmExecutive/cover.webp",
    gifCover:
      "https://res.cloudinary.com/martincvl/video/upload/v1763147452/portfolio/projects/pharmExecutive/pharmexecutive.mp4",
    excerpt: {
      fr: "Conception d'une plateforme premium pour le programme de formation ESSEC à destination des pharmaciens propriétaires, avec un parcours de conversion optimisé et une architecture évolutive.",
      en: "Design of a premium platform for the ESSEC training program for pharmacy owners, with optimized conversion funnel and scalable architecture.",
    },
    images: [
      "https://res.cloudinary.com/martincvl/image/upload/v1763147451/portfolio/projects/pharmExecutive/cover.webp",
    ],
    companyHistory: {
      fr: "pharmExecutive by ESSEC est un programme de formation d'excellence destiné aux pharmaciens propriétaires d'officine. Porté par ESSEC Business School, le programme combine l'expertise académique de référence en management et stratégie avec une connaissance approfondie du secteur pharmaceutique. Le programme vise à transformer les pharmacies en véritables entreprises performantes en abordant quatre piliers fondamentaux : croissance commerciale, leadership d'équipe, management opérationnel et rentabilité financière. Avec un positionnement premium, pharmExecutive se distingue par son approche pragmatique basée sur des études de cas réelles, des ateliers pratiques et des masterclasses animées par 9 intervenants experts (professeurs ESSEC, experts-comptables, avocats spécialisés).",
      en: "pharmExecutive by ESSEC is an executive training program designed for pharmacy owners. Led by ESSEC Business School, the program combines world-class academic expertise in management and strategy with in-depth knowledge of the pharmaceutical sector. The program aims to transform pharmacies into high-performing businesses by addressing four fundamental pillars: commercial growth, team leadership, operational management, and financial profitability. With a premium positioning, pharmExecutive stands out through its pragmatic approach based on real case studies, hands-on workshops, and masterclasses delivered by 9 expert instructors (ESSEC professors, certified accountants, specialized lawyers).",
    },
    testimony: {
      fr: "Je travaille avec Martin depuis plusieurs années sur notre site et nos campagnes email. C'est un partenariat qui fonctionne. Il a su comprendre nos besoins et nous proposer des solutions concrètes et efficaces. Le site qu'il a livré est parfaitement adapté à notre activité : fiable, clair pour nos utilisateurs et simple à maintenir. Une collaboration que je valorise.",
      en: "I have been working with Martin for several years on our website and email campaigns. It is a partnership that works. He understood our needs and offered us concrete and effective solutions. The site he delivered is perfectly suited to our business: reliable, clear for our users, and easy to maintain. A collaboration that I value.",
      author: "Christophe V.",
      role: "CEO",
    },
    context: {
      fr: "pharmExecutive by ESSEC avait besoin d'une plateforme web qui reflète le positionnement premium de son programme de formation. L'enjeu était de créer une vitrine digitale capable de convaincre des pharmaciens propriétaires, professionnels exigeants, de la valeur du programme tout en facilitant leur parcours d'inscription. Le site devait structurer efficacement l'information sur 4 modules de formation répartis sur l'année 2026, valoriser une faculté de 9 intervenants experts, et intégrer les outils marketing nécessaires au suivi des campagnes et à la gestion des inscriptions.",
      en: "pharmExecutive by ESSEC needed a web platform that reflects the premium positioning of its training program. The challenge was to create a digital showcase capable of convincing pharmacy owners—demanding professionals—of the program's value while facilitating their registration journey. The site had to effectively structure information on 4 training modules spread throughout 2026, showcase a faculty of 9 expert instructors, and integrate the necessary marketing tools for campaign tracking and registration management.",
    },
    challenges: [
      {
        fr: "Créer un parcours de conversion optimisé avec plusieurs points de contact stratégiques (CTA) sans être intrusif",
        en: "Create an optimized conversion funnel with multiple strategic touchpoints (CTAs) without being intrusive",
      },
      {
        fr: "Structurer clairement 4 modules de formation avec contenu détaillé extensible et dates précises",
        en: "Clearly structure 4 training modules with expandable detailed content and specific dates",
      },
      {
        fr: "Valoriser le positionnement premium tout en maintenant une navigation fluide et accessible",
        en: "Emphasize premium positioning while maintaining smooth and accessible navigation",
      },
      {
        fr: "Intégrer un système d'inscription avec paiement échelonné (3 fois) et outils de marketing automation",
        en: "Integrate a registration system with installment payments (3 times) and marketing automation tools",
      },
      {
        fr: "Optimiser le référencement local pour capter les recherches de formations pharmaceutiques professionnelles",
        en: "Optimize local SEO to capture searches for professional pharmaceutical training",
      },
    ],
    work: {
      fr: "J'ai conçu et développé une plateforme web premium pour le programme pharmExecutive by ESSEC, en créant une architecture modulaire permettant de présenter efficacement 4 sessions de formation réparties sur 2026. Le site intègre un système de navigation par ancres avec header sticky pour une UX fluide, des sections de contenu extensibles ('Voir plus...') pour les modules détaillés, et une mise en avant stratégique des 9 profils d'intervenants pour renforcer la crédibilité. J'ai développé un parcours de conversion optimisé avec plusieurs CTA positionnés stratégiquement, intégré les formulaires d'inscription avec système de paiement échelonné en 3 fois, et connecté Brevo pour l'automation marketing et le suivi des campagnes email. L'ensemble a été conçu en mobile-first avec Tailwind CSS, optimisé pour les performances (Next.js Image, lazy loading, SVG icons) et le SEO. Technologies utilisées : Next.js 14, TypeScript, Tailwind CSS, Brevo, Google Analytics, Vercel. Méthodologie : design thinking centré utilisateur, développement agile, architecture scalable, optimisation SEO et performance, intégration marketing automation.",
      en: "I designed and developed a premium web platform for the pharmExecutive by ESSEC program, creating a modular architecture to effectively present 4 training sessions spread across 2026. The site integrates an anchor navigation system with sticky header for smooth UX, expandable content sections ('See more...') for detailed modules, and strategic highlighting of 9 instructor profiles to strengthen credibility. I developed an optimized conversion funnel with strategically positioned CTAs, integrated registration forms with a 3-installment payment system, and connected Brevo for marketing automation and email campaign tracking. Everything was designed mobile-first with Tailwind CSS, optimized for performance (Next.js Image, lazy loading, SVG icons) and SEO. Technologies used: Next.js 14, TypeScript, Tailwind CSS, Brevo, Google Analytics, Vercel. Methodology: user-centered design thinking, agile development, scalable architecture, SEO and performance optimization, marketing automation integration.",
    },
    results: {
      fr: "Lancement réussi d'une plateforme qui reflète parfaitement le positionnement premium du programme pharmExecutive by ESSEC. Le site offre une expérience utilisateur fluide et professionnelle qui accompagne efficacement les pharmaciens propriétaires dans leur parcours de décision. L'architecture modulaire facilite les mises à jour de contenu et l'évolution du programme. Les outils marketing intégrés (Brevo, Analytics) permettent un suivi précis des conversions et l'optimisation continue des campagnes. Le design responsive et les performances optimisées assurent une accessibilité parfaite sur tous les devices, essentielle pour une cible de professionnels exigeants.",
      en: "Successful launch of a platform that perfectly reflects the premium positioning of the pharmExecutive by ESSEC program. The site offers a smooth and professional user experience that effectively guides pharmacy owners through their decision journey. The modular architecture facilitates content updates and program evolution. Integrated marketing tools (Brevo, Analytics) enable precise conversion tracking and continuous campaign optimization. Responsive design and optimized performance ensure perfect accessibility across all devices, essential for a demanding professional audience.",
    },
    KPIs: [
      {
        number: "+60",
        fr: "Participants inscrits pour la première session",
        en: "Participants registered for the first session",
      },
      {
        number: "9",
        fr: "Experts intervenants (ESSEC + secteur)",
        en: "Expert instructors (ESSEC + industry)",
      },
      {
        number: "4",
        fr: "Modules de 2 jours répartis sur 2026",
        en: "2-day modules throughout 2026",
      },
    ],
  },
];
