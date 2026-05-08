export type Saas = {
  name: string;
  slug: string;
  tagline: { fr: string; en: string };
  description: { fr: string; en: string };
  url: string;
  github?: string;
  color: string;
  cover?: string;
  gifCover?: string;
  images?: string[];
  createdAt: string;
  mrr: number;
  customers: number;
  monthlyVisits?: number;
  skills: string[];
  problem?: { fr: string; en: string };
  solution?: { fr: string; en: string };
  features?: {
    title: { fr: string; en: string };
    description: { fr: string; en: string };
  }[];
  businessModel?: { fr: string; en: string };
  roadmap?: { fr: string; en: string }[];
  KPIs?: { number: string; fr: string; en: string }[];
};

export const saasProjects: Saas[] = [
  {
    name: "Ratee.me",
    slug: "ratee-me",
    tagline: {
      fr: "Obtiens un feedback honnête sur n'importe quoi",
      en: "Get honest feedback on anything",
    },
    description: {
      fr: "Soumets ton profil, ton projet ou ton idée et reçois des notes et avis anonymes de la communauté. Un outil simple pour obtenir des retours sincères, sans filtre.",
      en: "Submit your profile, project, or idea and receive anonymous ratings and reviews from the community. A simple tool to get honest, unfiltered feedback.",
    },
    url: "https://ratee.me",
    github: "https://github.com/martincavil/ratee-me",
    color: "#11B981",
    createdAt: "2026",
    mrr: 0,
    customers: 0,
    monthlyVisits: 0,
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    problem: {
      fr: "Il est difficile d'obtenir des retours honnêtes sur son travail, son profil ou ses idées. Les proches manquent d'objectivité, les forums sont bruyants, et les feedbacks professionnels sont coûteux.",
      en: "Getting honest feedback on your work, profile, or ideas is hard. Friends lack objectivity, forums are noisy, and professional feedback is expensive.",
    },
    solution: {
      fr: "Ratee.me permet à n'importe qui de soumettre ce qu'il veut faire évaluer et de recevoir des notes anonymes et des commentaires sincères de la communauté, en quelques minutes.",
      en: "Ratee.me lets anyone submit what they want evaluated and receive anonymous ratings and honest comments from the community, in minutes.",
    },
    features: [
      {
        title: { fr: "Notation anonyme", en: "Anonymous rating" },
        description: {
          fr: "Les évaluateurs restent totalement anonymes, ce qui garantit des retours sans complaisance.",
          en: "Evaluators remain completely anonymous, ensuring unbiased and candid feedback.",
        },
      },
      {
        title: { fr: "Soumission libre", en: "Open submission" },
        description: {
          fr: "Soumets un lien, une image, un texte ou une idée — le format est libre.",
          en: "Submit a link, image, text, or idea — the format is open.",
        },
      },
      {
        title: { fr: "Score global", en: "Overall score" },
        description: {
          fr: "Chaque soumission reçoit un score agrégé sur 10, basé sur les votes de la communauté.",
          en: "Each submission receives an aggregated score out of 10, based on community votes.",
        },
      },
    ],
    businessModel: {
      fr: "Freemium : soumissions de base gratuites, fonctionnalités premium (plus de détails, analytics, mise en avant) payantes.",
      en: "Freemium: basic submissions free, premium features (more detail, analytics, promotion) paid.",
    },
    roadmap: [
      {
        fr: "Lancement public et acquisition des premiers utilisateurs",
        en: "Public launch and first user acquisition",
      },
      {
        fr: "Système de catégories (profil LinkedIn, landing page, idée de startup…)",
        en: "Category system (LinkedIn profile, landing page, startup idea…)",
      },
      {
        fr: "Tableau de bord analytics pour les créateurs",
        en: "Analytics dashboard for creators",
      },
      {
        fr: "Plan premium avec soumissions illimitées et mise en avant",
        en: "Premium plan with unlimited submissions and promotion",
      },
    ],
    KPIs: [
      {
        number: "$0",
        fr: "MRR",
        en: "MRR",
      },
      {
        number: "0",
        fr: "Clients actifs",
        en: "Active customers",
      },
      {
        number: "2026",
        fr: "Année de création",
        en: "Year founded",
      },
    ],
  },
];
