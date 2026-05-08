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
    name: "NoteShip.app",
    slug: "noteship-app",
    tagline: {
      fr: "Build in public — en cours de création",
      en: "Build in public — currently being built",
    },
    description: {
      fr: "NoteShip.app est un SaaS de changelog pour indie makers et solo founders, développé en build in public. Phase actuelle : landing page pour valider l'intérêt avant de coder quoi que ce soit.",
      en: "NoteShip.app is a changelog SaaS for indie makers and solo founders, built in public. Current phase: landing page to validate interest before writing a single line of product code.",
    },
    url: "https://noteship.app",
    github: "https://github.com/martincavil/noteship",
    color: "#FF6B00",
    createdAt: "2026",
    status: "in-progress",
    team: ["Martin Cavil"],
    statusNote: {
      fr: "Phase 0 — Validation via landing page. Zéro code produit, zéro MRR.",
      en: "Phase 0 — Idea validation via landing page. Zero product code, zero MRR.",
    },
    mrr: 0,
    customers: 0,
    monthlyVisits: 0,
    skills: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "Resend", "Vercel"],
    problem: {
      fr: "Headway est mort (aucune update depuis 2020), Beamer coûte 99$/mois, et la plupart des indie makers gèrent leurs updates produit dans un Notion que personne ne lit.",
      en: "Headway is dead (no updates since 2020), Beamer costs $99/month, and most indie makers manage their product updates in a Notion doc nobody reads.",
    },
    solution: {
      fr: "Une page changelog publique belle et rapide + un widget embarquable + des emails automatiques aux subscribers. Le tout pour 9$/mois.",
      en: "A beautiful public changelog page + embeddable widget + automatic emails to subscribers. All for $9/month.",
    },
    whyBuilt: {
      fr: "Après l'échec de ratee.me (codé avant de valider), j'applique la leçon inverse : landing page d'abord, distribution, et seulement si des gens s'inscrivent — je code. Je documente tout en build in public.",
      en: "After ratee.me's failure (built before validating), I'm applying the opposite lesson: landing page first, distribution, and only if people sign up — I build. Documenting everything in public.",
    },
    features: [
      {
        title: { fr: "Page changelog publique", en: "Public changelog page" },
        description: {
          fr: "Une page dédiée, belle et rapide pour afficher toutes les mises à jour produit. Design dark mode premium, brandable.",
          en: "A dedicated, beautiful and fast page to display all product updates. Premium dark mode design, fully brandable.",
        },
      },
      {
        title: { fr: "Widget embarquable", en: "Embeddable widget" },
        description: {
          fr: "Un widget iframe intégrable directement dans ton app pour notifier tes utilisateurs des nouveautés sans qu'ils quittent le produit.",
          en: "An iframe widget embeddable directly in your app to notify users of updates without leaving the product.",
        },
      },
      {
        title: { fr: "Emails automatiques", en: "Automatic email notifications" },
        description: {
          fr: "Chaque nouvelle update est envoyée automatiquement par email aux subscribers du projet.",
          en: "Every new update is automatically emailed to the project's subscribers.",
        },
      },
      {
        title: { fr: "AI drafts depuis GitHub", en: "AI drafts from GitHub" },
        description: {
          fr: "Connecte ton repo GitHub et Claude Haiku génère automatiquement un draft de changelog à partir de tes commits.",
          en: "Connect your GitHub repo and Claude Haiku automatically generates a changelog draft from your commits.",
        },
      },
    ],
    businessModel: {
      fr: "Freemium : plan gratuit (1 projet, 50 subscribers, branding NoteShip) + plan Pro à 9$/mois ou 49$/an (projets illimités, widget, custom domain, emails, AI drafts).",
      en: "Freemium: free plan (1 project, 50 subscribers, NoteShip branding) + Pro plan at $9/month or $49/year (unlimited projects, widget, custom domain, emails, AI drafts).",
    },
    roadmap: [
      {
        fr: "Phase 0 (Mai 2026) — Landing page + collecte d'emails waitlist.",
        en: "Phase 0 (May 2026) — Landing page + waitlist email collection.",
      },
      {
        fr: "Phase 1 — Build in public : articles Substack + posts LinkedIn/X pour acquérir une audience avant le lancement.",
        en: "Phase 1 — Build in public: Substack articles + LinkedIn/X posts to grow an audience before launch.",
      },
      {
        fr: "Phase 2 — MVP uniquement si validation positive (emails + feedback qualitatif).",
        en: "Phase 2 — MVP only if validation is positive (emails + qualitative feedback).",
      },
      {
        fr: "Phase 3 — Lancement bêta privé pour les inscrits sur la waitlist.",
        en: "Phase 3 — Private beta launch for waitlist subscribers.",
      },
    ],
    KPIs: [
      { number: "$0", fr: "MRR", en: "MRR" },
      { number: "Phase 0", fr: "Landing page live", en: "Landing page live" },
      { number: "9$/mois", fr: "Prix cible Pro", en: "Target Pro price" },
    ],
    metrics: {
      fr: "Phase actuelle : landing page live + waitlist active. Objectif : valider l'intérêt avant d'écrire la moindre ligne de code produit.",
      en: "Current phase: landing page live + active waitlist. Goal: validate interest before writing a single line of product code.",
    },
  },
  {
    name: "Ratee.me",
    slug: "ratee-me",
    tagline: {
      fr: "Feedback anonyme communautaire — projet à l'abandon",
      en: "Community anonymous feedback — abandoned project",
    },
    description: {
      fr: "Ratee.me était une plateforme de feedback anonyme. Soumets ton profil, ta landing page ou ton idée et reçois des notes et avis de la communauté. Lancé en décembre 2025, le projet est aujourd'hui à l'abandon : j'ai codé l'app entière avant d'avoir validé que ça intéressait quelqu'un.",
      en: "Ratee.me was an anonymous feedback platform. Submit your profile, landing page, or idea and get ratings and comments from the community. Launched in December 2025, the project is now abandoned: I built the entire app before validating whether anyone actually wanted it.",
    },
    url: "https://ratee.me",
    github: "https://github.com/martincavil/ratee-me",
    color: "#10B981",
    createdAt: "2025-12",
    status: "paused",
    team: ["Martin Cavil"],
    statusNote: {
      fr: "Lancé en décembre 2025 — à l'abandon. Erreur classique : code avant validation.",
      en: "Launched December 2025 — abandoned. Classic mistake: code before validation.",
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
      fr: "Ratee.me résolvait ça en 2 minutes. Tu soumets ce que tu veux : un lien, une image, du texte, une idée. La communauté évalue anonymement (0-10) et laisse des commentaires sincères. Tu reçois un score agrégé + feedback détaillé pour itérer rapidement.",
      en: "Ratee.me solved this in 2 minutes. Submit what you want: a link, image, text, or idea. The community rates it anonymously (0-10) and leaves honest feedback. You get an aggregated score + detailed comments to iterate fast.",
    },
    whyBuilt: {
      fr: "J'ai construit ratee.me en décembre 2025, motivé par l'idée. J'ai codé l'app complète en quelques semaines — auth, dashboard, système de notation, base de données, paiements Stripe. Et puis j'ai essayé de trouver des utilisateurs. Personne. Zéro traction, zéro intérêt mesurable. L'erreur était évidente en rétrospective : j'aurais dû valider l'idée avec une simple landing page avant d'écrire une seule ligne de code. C'est la leçon principale que j'ai tirée de ce projet, et que j'applique directement sur NoteShip.io.",
      en: "I built ratee.me in December 2025, driven by excitement about the idea. I coded the full app in a few weeks — auth, dashboard, rating system, database, Stripe payments. Then I tried to find users. Nobody. Zero traction, zero measurable interest. The mistake was obvious in hindsight: I should have validated the idea with a simple landing page before writing a single line of code. That's the main lesson I took from this project, and I'm applying it directly to NoteShip.io.",
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
    ],
    businessModel: {
      fr: "Freemium prévu : 5 soumissions/mois gratuites + Plan PRO (9,99€/mois). Non implémenté — le projet a été abandonné avant d'atteindre cette phase.",
      en: "Planned freemium: 5 free submissions/month + Pro plan (€9.99/month). Not implemented — the project was abandoned before reaching this stage.",
    },
    roadmap: [
      {
        fr: "✅ Développement de l'app complète (auth, dashboard, notation, Stripe) — Décembre 2025",
        en: "✅ Full app development (auth, dashboard, rating, Stripe) — December 2025",
      },
      {
        fr: "✅ Lancement public — Décembre 2025",
        en: "✅ Public launch — December 2025",
      },
      {
        fr: "❌ Acquisition utilisateurs — Zéro traction obtenue",
        en: "❌ User acquisition — Zero traction achieved",
      },
      {
        fr: "⛔ Projet abandonné — Janvier 2026",
        en: "⛔ Project abandoned — January 2026",
      },
    ],
    metrics: {
      fr: "Projet abandonné en janvier 2026 après un lancement en décembre 2025 sans traction. L'erreur principale : avoir codé l'intégralité de l'app avant de valider l'intérêt du marché.",
      en: "Project abandoned in January 2026 after a December 2025 launch with no traction. Main mistake: building the entire app before validating market interest.",
    },
    KPIs: [
      {
        number: "$0",
        fr: "MRR total",
        en: "Total MRR",
      },
      {
        number: "0",
        fr: "Clients payants",
        en: "Paying customers",
      },
      {
        number: "Déc. 2025",
        fr: "Date de lancement",
        en: "Launch date",
      },
      {
        number: "Janv. 2026",
        fr: "Date d'abandon",
        en: "Abandoned date",
      },
    ],
  },
];
