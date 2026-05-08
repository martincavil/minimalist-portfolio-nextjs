export type SaasStatus = "in-progress" | "beta" | "live" | "paused" | "acquired";

export type Partnership = {
  isOpen: boolean;
  types?: ("integration" | "acquisition" | "reseller" | "white-label")[];
  contact?: string;
  details?: { fr: string; en: string };
};

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
  status?: SaasStatus;
  team?: string[];
  statusNote?: { fr: string; en: string };
  problem?: { fr: string; en: string };
  solution?: { fr: string; en: string };
  whyBuilt?: { fr: string; en: string };
  features?: {
    title: { fr: string; en: string };
    description: { fr: string; en: string };
  }[];
  businessModel?: { fr: string; en: string };
  roadmap?: { fr: string; en: string }[];
  metrics?: { fr: string; en: string };
  KPIs?: { number: string; fr: string; en: string }[];
  acquisition?: {
    isOpen: boolean;
    notes?: { fr: string; en: string };
    contact?: string;
  };
  partnership?: Partnership;
};

export const saasProjects: Saas[] = [
  {
    name: "Ratee.me",
    slug: "ratee-me",
    tagline: {
      fr: "Obtiens un feedback honnête et anonyme sur n'importe quoi en 2 minutes",
      en: "Get honest anonymous feedback on anything in 2 minutes",
    },
    description: {
      fr: "Ratee.me est une plateforme communautaire de feedback anonyme. Soumets ton profil LinkedIn, ta landing page, ton idée de startup ou n'importe quel projet et reçois des notes (0-10) et des commentaires constructifs de la communauté. Rapide, honnête, sans filtre.",
      en: "Ratee.me is a community-powered anonymous feedback platform. Submit your LinkedIn profile, landing page, startup idea, or any project and get ratings (0-10) and honest feedback from the community. Fast, candid, unfiltered.",
    },
    url: "https://ratee.me",
    github: "https://github.com/martincavil/ratee-me",
    color: "#10B981",
    createdAt: "2026-01",
    status: "beta",
    team: ["Martin Cavil"],
    statusNote: {
      fr: "2 mois, 0 revenue — en cours de lancement sur le marché US + exploration de partnerships",
      en: "2 months, $0 MRR — launching on US market + exploring partnerships",
    },
    mrr: 0,
    customers: 0,
    monthlyVisits: 0,
    skills: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "Vercel", "Resend"],
    problem: {
      fr: "Obtenir un feedback honnête est quasi-impossible. Tes amis ne veulent pas te critiquer, les forums sont bruyants et subjectifs, les agences de feedback coûtent des milliers d'euros. Du coup, tu construis en aveugle sans savoir si ton idée, ton profil ou ton projet intéresse vraiment les gens.",
      en: "Getting honest feedback is nearly impossible. Friends won't criticize you, forums are noisy and subjective, professional feedback agencies cost thousands. So you build blind, never knowing if your idea, profile, or project actually resonates.",
    },
    solution: {
      fr: "Ratee.me résout ça en 2 minutes. Tu soumets ce que tu veux : un lien, une image, du texte, une idée. La communauté évalue anonymement (0-10) et laisse des commentaires sincères. Tu reçois un score agrégé + feedback détaillé pour itérer rapidement. Pas de complaisance, pas d'amis qui ménagent, juste la vérité.",
      en: "Ratee.me solves this in 2 minutes. Submit what you want: a link, image, text, or idea. The community rates it anonymously (0-10) and leaves honest feedback. You get an aggregated score + detailed comments to iterate fast. No sugar-coating, just truth.",
    },
    whyBuilt: {
      fr: "Au début, j'ai construit ratee.me comme outil d'automatisation de feedback pour freelancers (collecte NPS, témoignages automatiques). Mais j'ai vite réalisé le vrai problème : les gens ont besoin de feedback honnête, pas d'automatisation. Et ils ont peur. Peur de construire quelque chose que personne ne veut. Du coup j'ai pivoté en plateforme communautaire.",
      en: "Initially, I built ratee.me as a feedback automation tool for freelancers (NPS collection, auto testimonials). But I quickly realized the real problem: people need honest feedback, not automation. And they're scared — scared to build something nobody wants. So I pivoted to a community platform.",
    },
    features: [
      {
        title: { fr: "Évaluation anonyme", en: "Anonymous evaluation" },
        description: {
          fr: "Les évaluateurs restent 100% anonymes. Zéro possibilité de savoir qui a donné quelle note. Ça garantit des retours sans complaisance et totalement honnêtes.",
          en: "Evaluators stay 100% anonymous. No way to know who rated what. This guarantees unbiased, candid feedback.",
        },
      },
      {
        title: { fr: "Soumission multi-formats", en: "Multi-format submission" },
        description: {
          fr: "Soumets ce que tu veux : lien URL (landing page, profil LinkedIn), image (design, mockup), texte (pitch, idée), ou description. Totalement flexible.",
          en: "Submit anything: URL links (landing pages, LinkedIn profiles), images (designs, mockups), text (pitch, ideas), or descriptions. Completely flexible.",
        },
      },
      {
        title: { fr: "Score global + insights", en: "Overall score + insights" },
        description: {
          fr: "Reçois un score 0-10 agrégé basé sur les votes, PLUS des commentaires détaillés pour comprendre pourquoi. Les insights comptent plus que le chiffre.",
          en: "Get an aggregated 0-10 score based on votes, PLUS detailed comments to understand why. Insights matter more than the number.",
        },
      },
      {
        title: { fr: "Dashboard personnel", en: "Personal dashboard" },
        description: {
          fr: "Vois toutes tes soumissions, leurs scores, et l'historique des feedbacks. Track tes progrès en itérant sur les critiques.",
          en: "View all your submissions, their scores, and feedback history. Track progress as you iterate on feedback.",
        },
      },
      {
        title: { fr: "Système de catégories", en: "Category system" },
        description: {
          fr: "Chaque catégorie a son contexte : profils (recrutement), landing pages (conversion), idées (viabilité), designs (esthétique). Les retours sont contextualisés.",
          en: "Each category has context: profiles (hiring), landing pages (conversion), ideas (viability), designs (aesthetics). Feedback is contextualized.",
        },
      },
      {
        title: { fr: "Export & partage", en: "Export & sharing" },
        description: {
          fr: "Exporte ton score + feedbacks en PDF. Partage les résultats sur LinkedIn, email, etc. Preuve sociale instantanée.",
          en: "Export your score + feedback as PDF. Share results on LinkedIn, email, etc. Instant social proof.",
        },
      },
    ],
    businessModel: {
      fr: "Freemium : 5 soumissions/mois gratuites + feedback basique. Plan PRO (9,99€/mois) : soumissions illimitées, commentaires détaillés, analytics avancée, pas de limites de catégories, mise en avant sur la plateforme.",
      en: "Freemium: 5 submissions/month free + basic feedback. Pro plan (€9.99/month): unlimited submissions, detailed comments, advanced analytics, no category limits, featured on platform.",
    },
    roadmap: [
      {
        fr: "Phase 1 (Janvier 2026) — Lancement public sur les produits US (Product Hunt, Reddit, HN). Focus acquisition des premiers 1000 users.",
        en: "Phase 1 (January 2026) — Public launch on US platforms (Product Hunt, Reddit, HN). Focus on acquiring first 1,000 users.",
      },
      {
        fr: "Phase 2 (Février) — Système de catégories avancées avec templates spécifiques (landing page checklist, profil hiring, pitch startup).",
        en: "Phase 2 (February) — Advanced category system with specific templates (landing page checklist, hiring profile, startup pitch).",
      },
      {
        fr: "Phase 3 (Mars) — Tableau de bord analytics pour comprendre les tendances (quel type de contenu score le mieux, patterns par catégorie).",
        en: "Phase 3 (March) — Analytics dashboard to understand trends (what content scores best, patterns by category).",
      },
      {
        fr: "Phase 4 (Avril) — Plan premium avec soumissions illimitées, export avancé, badges 'top rated', intégration Slack/Zapier.",
        en: "Phase 4 (April) — Premium plan with unlimited submissions, advanced export, 'top rated' badges, Slack/Zapier integration.",
      },
      {
        fr: "Phase 5 (Mai+) — API publique pour devs tiers, marketplace de templates custom, possible acquisition par une plateforme plus large.",
        en: "Phase 5 (May+) — Public API for third-party devs, custom template marketplace, possible acquisition by a larger platform.",
      },
    ],
    metrics: {
      fr: "Phase actuelle : lancement sur le marché US + exploration de partnerships/acquisition. Objectif : 50+ signups US + 1 partnership d'ici 2 semaines.",
      en: "Current phase: US market launch + exploring partnerships/acquisition. Goal: 50+ US signups + 1 partnership within 2 weeks.",
    },
    KPIs: [
      {
        number: "$0",
        fr: "MRR (Janvier 2026)",
        en: "MRR (January 2026)",
      },
      {
        number: "0",
        fr: "Clients payants",
        en: "Paying customers",
      },
      {
        number: "~1 000",
        fr: "Soumissions en bêta",
        en: "Beta submissions",
      },
      {
        number: "2026",
        fr: "Année de création",
        en: "Year founded",
      },
    ],
    acquisition: {
      isOpen: true,
      notes: {
        fr: "Ouvert aux propositions d'acquisition. Je considère aussi les partnerships stratégiques : intégration, white-label, revenue share.",
        en: "Open to acquisition offers. Also considering strategic partnerships: integration, white-label, revenue share.",
      },
      contact: "martin.cavil98@gmail.com",
    },
    partnership: {
      isOpen: true,
      types: ["integration", "acquisition", "reseller", "white-label"],
      contact: "martin.cavil98@gmail.com",
      details: {
        fr: "Intéressé par : embed dans ton écosystème, revenue share sur users premium, white-label, ou acquisition complète.",
        en: "Interested in: embed in your ecosystem, revenue share on premium users, white-label, or full acquisition.",
      },
    },
  },
];
