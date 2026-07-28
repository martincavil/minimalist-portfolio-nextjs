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
    name: "Cage Legacy",
    slug: "cage-legacy",
    tagline: {
      fr: "Simulateur de carrière MMA — en développement actif",
      en: "MMA career simulator — actively in development",
    },
    description: {
      fr: "Cage Legacy est un jeu de simulation de carrière MMA dans le navigateur : construis ton combattant de 18 ans jusqu'à la retraite, sans chance, uniquement à travers tes choix. Défi quotidien, classement mondial, badges et Hall of Fame.",
      en: "Cage Legacy is a browser-based MMA career simulation game: build your fighter from age 18 to retirement, no luck, only your choices. Daily challenge, global rankings, badges and a Hall of Fame.",
    },
    url: "https://cage-legacy.vercel.app/",
    color: "#DC2626",
    createdAt: "2026-07",
    status: "in-progress",
    team: ["Martin Cavil"],
    statusNote: {
      fr: "$0 MRR · En développement actif · Je continue de peaufiner l'expérience pour la rendre la meilleure possible.",
      en: "$0 MRR · Actively in development · Still refining the experience to make it the best it can be.",
    },
    mrr: 0,
    customers: 0,
    monthlyVisits: 0,
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    problem: {
      fr: "Les jeux de simulation sportive tombent souvent dans deux travers : soit trop dépendants du hasard (RNG qui casse la stratégie), soit trop répétitifs pour donner l'impression d'une vraie carrière. Les fans de MMA n'ont pas vraiment d'endroit pour vivre une progression de carrière crédible, choix après choix.",
      en: "Sports simulation games often fall into two traps: either too RNG-dependent (luck breaks strategy) or too repetitive to feel like a real career. MMA fans don't really have a place to live out a credible career progression, choice by choice.",
    },
    solution: {
      fr: "Cage Legacy retire le hasard de l'équation : chaque décision (style de combat, poids, lieu d'entraînement, gestion des blessures) façonne directement la trajectoire du combattant, de ses débuts amateurs jusqu'à sa retraite. Un défi de combattant renouvelé chaque jour et un classement mondial ajoutent une couche de compétition et de rejouabilité.",
      en: "Cage Legacy removes luck from the equation: every decision (fighting style, weight class, training location, injury management) directly shapes the fighter's trajectory, from amateur beginnings to retirement. A daily rotating fighter challenge and a global leaderboard add competition and replayability.",
    },
    whyBuilt: {
      fr: "Fan de MMA, je voulais un jeu de carrière où la stratégie prime vraiment sur le hasard, et où les blessures amateurs ont de vraies conséquences plus tard dans la carrière. Le projet est encore en construction active : je pousse pour offrir la meilleure expérience possible avant de penser à autre chose.",
      en: "As an MMA fan, I wanted a career game where strategy actually beats luck, and where amateur injuries carry real consequences later in a career. The project is still under active construction: I'm pushing to deliver the best possible experience before thinking about anything else.",
    },
    features: [
      {
        title: { fr: "Aucune chance, que des choix", en: "No luck, only choices" },
        description: {
          fr: "Style de combat, catégorie de poids, lieu d'entraînement : chaque décision façonne directement la progression du combattant, sans dé à lancer.",
          en: "Fighting style, weight class, training location: every decision directly shapes the fighter's progression, with no dice roll involved.",
        },
      },
      {
        title: { fr: "Défi quotidien", en: "Daily challenge" },
        description: {
          fr: "Un combattant vedette change chaque jour, affronté par tous les joueurs en même temps pour une expérience partagée.",
          en: "A featured fighter changes every day, faced by all players at the same time for a shared experience.",
        },
      },
      {
        title: { fr: "Classement mondial", en: "Global ranking" },
        description: {
          fr: "Grimpe dans le classement mondial au fil de ta progression et compare ta carrière à celle des autres joueurs.",
          en: "Climb the global ranking as you progress and compare your career against other players.",
        },
      },
      {
        title: { fr: "Blessures avec conséquences", en: "Injuries with consequences" },
        description: {
          fr: "Les blessures encaissées en amateur suivent le combattant tout au long de sa carrière et affectent ses performances.",
          en: "Injuries taken as an amateur follow the fighter throughout their career and affect performance.",
        },
      },
      {
        title: { fr: "Badges et Hall of Fame", en: "Badges and Hall of Fame" },
        description: {
          fr: "35 badges à débloquer et un Hall of Fame qui garde une trace des carrières terminées et des accomplissements marquants.",
          en: "35 badges to unlock and a Hall of Fame that tracks completed careers and notable accomplishments.",
        },
      },
    ],
    businessModel: {
      fr: "Encore non défini — le jeu est actuellement gratuit pendant la phase de développement et d'affinage de l'expérience.",
      en: "Not yet defined — the game is currently free while the experience is still being developed and refined.",
    },
    roadmap: [
      {
        fr: "Affiner l'équilibrage des choix de carrière et le système de blessures.",
        en: "Refine the balance of career choices and the injury system.",
      },
      {
        fr: "Étoffer le système de badges et le Hall of Fame.",
        en: "Expand the badge system and the Hall of Fame.",
      },
      {
        fr: "Continuer à peaufiner l'expérience avant d'envisager une monétisation.",
        en: "Keep polishing the experience before considering monetization.",
      },
    ],
    metrics: {
      fr: "En développement actif. Aucune monétisation pour l'instant : la priorité est de peaufiner l'expérience de jeu.",
      en: "Actively in development. No monetization yet: the priority is polishing the game experience.",
    },
    KPIs: [
      { number: "$0", fr: "MRR", en: "MRR" },
      { number: "35", fr: "Badges à débloquer", en: "Badges to unlock" },
      { number: "0", fr: "Part de hasard", en: "Luck involved" },
      { number: "18 → retraite", fr: "Durée de carrière", en: "Career span" },
    ],
  },
  {
    name: "terribleidea",
    slug: "terribleidea",
    tagline: {
      fr: "Simulateur de fondateur de startup — jeu 100% gratuit",
      en: "Startup founder simulator — 100% free game",
    },
    description: {
      fr: "terribleidea est un jeu satirique sur la culture startup : tu démarres avec 20k$ et une idée terrible, tu réponds à un quiz de plus de 10 questions, et tu reçois un verdict absurde sur ta carrière de fondateur. Un archétype de fondateur différent chaque jour, joué par tout le monde en même temps.",
      en: "terribleidea is a satirical game about startup culture: you start with $20k and a terrible idea, answer a 10+ question quiz, and get an absurd verdict on your founder career. A different founder archetype every day, played by everyone at the same time.",
    },
    url: "https://terribleidea.vercel.app/",
    color: "#F97316",
    createdAt: "2026-07",
    status: "live",
    team: ["Martin Cavil"],
    statusNote: {
      fr: "$0 MRR · Lancé vendredi 24 juillet 2026 · Plusieurs centaines de visiteurs via LinkedIn et Reddit, 100% gratuit, aucune monétisation prévue.",
      en: "$0 MRR · Launched Friday, July 24, 2026 · Several hundred visitors via LinkedIn and Reddit, 100% free, no monetization planned.",
    },
    mrr: 0,
    customers: 0,
    monthlyVisits: 0,
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    problem: {
      fr: "La culture startup regorge de clichés (le pivot permanent, le \"10x engineer\", le growth hacking à tout prix) que tout le monde reconnaît mais dont personne ne rit vraiment ensemble. Il manquait un endroit léger pour se moquer gentiment de tout ça, sans y passer des heures.",
      en: "Startup culture is full of clichés (the endless pivot, the \"10x engineer\", growth hacking at all costs) that everyone recognizes but nobody really laughs about together. There was no lightweight place to gently poke fun at all of it without spending hours doing so.",
    },
    solution: {
      fr: "Un quiz de plus de 10 questions où tu incarnes un archétype de fondateur qui change chaque jour (aujourd'hui : \"The 10x Engineer\"), avec 5 statistiques suivies et un verdict final absurde. Tout le monde joue le même personnage le même jour, ce qui crée une expérience partagée et des discussions autour du résultat.",
      en: "A 10+ question quiz where you play a founder archetype that changes every day (today: \"The 10x Engineer\"), with 5 tracked stats and one absurd final verdict. Everyone plays the same character on the same day, which creates a shared experience and conversations around the result.",
    },
    whyBuilt: {
      fr: "Un pur projet fun, sans aucune ambition commerciale : je voulais tester la distribution 100% organique et gratuite (LinkedIn, Reddit) pour voir si un petit jeu bien exécuté pouvait trouver une audience sans budget ni intention de monétiser. Lancé vendredi 24 juillet 2026, avec déjà plusieurs centaines de visiteurs.",
      en: "A pure fun project, with zero commercial ambition: I wanted to test 100% organic, free distribution (LinkedIn, Reddit) to see if a small, well-executed game could find an audience with no budget and no intent to monetize. Launched Friday, July 24, 2026, already with several hundred visitors.",
    },
    features: [
      {
        title: { fr: "Quiz de fondateur", en: "Founder quiz" },
        description: {
          fr: "Plus de 10 questions pour incarner un fondateur de startup face à des décisions absurdes mais familières.",
          en: "10+ questions to play a startup founder facing absurd but familiar decisions.",
        },
      },
      {
        title: { fr: "Archétype quotidien", en: "Daily archetype" },
        description: {
          fr: "Un archétype de fondateur différent chaque jour, joué par tous les visiteurs en même temps.",
          en: "A different founder archetype every day, played by every visitor at the same time.",
        },
      },
      {
        title: { fr: "5 statistiques suivies", en: "5 tracked stats" },
        description: {
          fr: "Chaque réponse influence 5 statistiques qui déterminent le verdict final de ta carrière.",
          en: "Every answer affects 5 stats that determine your career's final verdict.",
        },
      },
      {
        title: { fr: "Verdict absurde", en: "Absurd verdict" },
        description: {
          fr: "Un verdict final volontairement excessif et drôle, pensé pour être partagé.",
          en: "A deliberately over-the-top, funny final verdict, designed to be shared.",
        },
      },
    ],
    businessModel: {
      fr: "100% gratuit, sans publicité ni monétisation prévue. Le projet est distribué uniquement via LinkedIn et Reddit, sans budget marketing.",
      en: "100% free, no ads or monetization planned. The project is distributed solely via LinkedIn and Reddit, with no marketing budget.",
    },
    roadmap: [
      {
        fr: "✅ Lancement — Vendredi 24 juillet 2026, via LinkedIn et Reddit.",
        en: "✅ Launch — Friday, July 24, 2026, via LinkedIn and Reddit.",
      },
      {
        fr: "✅ Plusieurs centaines de visiteurs en quelques jours, 100% organique.",
        en: "✅ Several hundred visitors within days, 100% organic.",
      },
      {
        fr: "Continuer à faire tourner de nouveaux archétypes de fondateurs au fil du temps.",
        en: "Keep rotating in new founder archetypes over time.",
      },
    ],
    metrics: {
      fr: "Lancé le 24 juillet 2026. Plusieurs centaines de visiteurs via LinkedIn et Reddit, sans dépenser un centime en acquisition. Aucune monétisation prévue.",
      en: "Launched July 24, 2026. Several hundred visitors via LinkedIn and Reddit, without spending a cent on acquisition. No monetization planned.",
    },
    KPIs: [
      { number: "$0", fr: "MRR (voulu)", en: "MRR (by design)" },
      { number: "Plusieurs centaines", fr: "Visiteurs depuis le lancement", en: "Visitors since launch" },
      { number: "10+", fr: "Questions du quiz", en: "Quiz questions" },
      { number: "24 juil. 2026", fr: "Date de lancement", en: "Launch date" },
    ],
  },
  {
    name: "ZeroToSale",
    slug: "zerotosale",
    tagline: {
      fr: "Projet à l'abandon — $0 MRR",
      en: "Abandoned project — $0 MRR",
    },
    description: {
      fr: "ZeroToSale était un parcours gamifié pour indie hackers : Acte 1 (7 étapes) de l'idée à la première vente, Acte 2 (7 niveaux) de la première vente à $10k MRR. À chaque étape, une IA générait un output personnalisé basé sur le projet de l'utilisateur, avec un système de progression XP et des récompenses débloquées. Le projet est aujourd'hui à l'abandon.",
      en: "ZeroToSale was a gamified journey for indie hackers: Act 1 (7 steps) from idea to first sale, Act 2 (7 levels) from first sale to $10k MRR. At each step, an AI generated a personalized output based on the user's project, with an XP progression system and unlockable rewards. The project is now abandoned.",
    },
    url: "https://zeroto-sale.vercel.app/",
    color: "#8B5CF6",
    createdAt: "2026-06",
    status: "paused",
    team: ["Martin Cavil"],
    statusNote: {
      fr: "À l'abandon · $0 MRR · Mis en pause faute de temps, au profit de terribleidea et cage legacy.",
      en: "Abandoned · $0 MRR · Put on hold for lack of time, in favor of terribleidea and cage legacy.",
    },
    mrr: 0,
    customers: 0,
    monthlyVisits: 0,
    skills: ["Next.js 16", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "Resend", "Groq (Llama 3.3 70B)", "Vercel"],
    problem: {
      fr: "La plupart des indie hackers ne manquent pas d'idées, ils manquent de structure. Ils codent pendant des mois, lancent dans le silence, et abandonnent avant même d'avoir essayé de vendre. Le chemin entre \"j'ai une idée\" et \"j'ai mon premier client payant\" n'est jamais clair, et encore moins celui entre la première vente et un revenu récurrent solide.",
      en: "Most indie hackers don't lack ideas, they lack structure. They code for months, launch in silence, and give up before even trying to sell. The path from \"I have an idea\" to \"I have my first paying customer\" is never clear — and even less so the path from first sale to solid recurring revenue.",
    },
    solution: {
      fr: "ZeroToSale est un parcours gamifié en deux actes : Acte 1 (7 étapes) de l'idée à la première vente, Acte 2 (7 niveaux) de la première vente à $10k MRR. À chaque étape, une IA génère un output personnalisé (pitch, landing page, stratégie de validation, etc.) basé sur le projet de l'utilisateur, avec un système de progression (XP, niveaux, récompenses débloquées).",
      en: "ZeroToSale is a gamified two-act journey: Act 1 (7 steps) from idea to first sale, Act 2 (7 levels) from first sale to $10k MRR. At each step, an AI generates a personalized output (pitch, landing page, validation strategy, etc.) based on the user's project, with a progression system (XP, levels, unlockable rewards).",
    },
    whyBuilt: {
      fr: "Après Ratee.me (construit sans jamais valider la demande), j'ai voulu tester l'inverse : un produit déjà construit, mais avec 0€ de budget et 0 audience, et tout le build-in-public fait en temps réel pour prouver qu'on peut décrocher des clients sans dépenser un centime. En pratique, le temps et l'énergie sont partis sur terribleidea et cage legacy, deux projets plus excitants à construire, et ZeroToSale est resté sur l'étagère.",
      en: "After Ratee.me (built without ever validating demand), I wanted to test the opposite: a product already built, but with €0 budget and 0 audience, doing the entire build-in-public process in real time to prove you can land customers without spending a cent. In practice, time and energy went into terribleidea and cage legacy instead — two more exciting projects to build — and ZeroToSale stayed on the shelf.",
    },
    features: [
      {
        title: { fr: "Onboarding en 3 questions", en: "3-question onboarding" },
        description: {
          fr: "Réponds à 3 questions sur ton projet et l'IA génère un parcours sur-mesure adapté à ton contexte.",
          en: "Answer 3 questions about your project and the AI generates a custom-tailored journey for your context.",
        },
      },
      {
        title: { fr: "Système XP et récompenses", en: "XP and rewards system" },
        description: {
          fr: "Gagne de l'XP et débloque des récompenses à chaque étape franchie, avec un personnage pixel art qui évolue avec ta progression.",
          en: "Earn XP and unlock rewards at every step you complete, with a pixel-art character that evolves alongside your progress.",
        },
      },
      {
        title: { fr: "Outputs IA sauvegardés", en: "AI outputs saved to your profile" },
        description: {
          fr: "Chaque output généré (pitch, landing page, stratégie...) est sauvegardé sur ton profil. Historique complet, zéro token gaspillé.",
          en: "Every generated output (pitch, landing page, strategy...) is saved to your profile. Full history, zero wasted tokens.",
        },
      },
      {
        title: { fr: "Gating free/pro", en: "Free/pro gating" },
        description: {
          fr: "Les étapes 1 à 3 sont gratuites pour valider l'idée. Les étapes 4 à 14 (jusqu'à $10k MRR) sont réservées au plan Pro.",
          en: "Steps 1-3 are free to validate the idea. Steps 4-14 (up to $10k MRR) are reserved for the Pro plan.",
        },
      },
      {
        title: { fr: "Design pixel art évolutif", en: "Evolving pixel art design" },
        description: {
          fr: "Un personnage pixel art qui grandit et se transforme visuellement à mesure que tu progresses dans le parcours.",
          en: "A pixel-art character that visually grows and transforms as you progress through the journey.",
        },
      },
    ],
    businessModel: {
      fr: "Free : étapes 1-3 (de l'idée à la validation). Pro : $9/mois ou $89 à vie pour les étapes 4-14 (de la première vente à $10k MRR).",
      en: "Free: steps 1-3 (from idea to validation). Pro: $9/month or $89 lifetime for steps 4-14 (from first sale to $10k MRR).",
    },
    roadmap: [
      {
        fr: "✅ Construction du parcours complet (Acte 1 + Acte 2, 14 étapes) et du système XP.",
        en: "✅ Full journey built (Act 1 + Act 2, 14 steps) and the XP system.",
      },
      {
        fr: "❌ Build in public — jamais vraiment lancé, aucun post publié.",
        en: "❌ Build in public — never really launched, no post ever published.",
      },
      {
        fr: "❌ Recherche des 10-20 premiers beta testeurs — abandonnée.",
        en: "❌ Search for the first 10-20 beta testers — abandoned.",
      },
      {
        fr: "⛔ Projet mis en pause — Juillet 2026, au profit de terribleidea et cage legacy.",
        en: "⛔ Project put on hold — July 2026, in favor of terribleidea and cage legacy.",
      },
    ],
    metrics: {
      fr: "Projet à l'abandon. Construit mais jamais réellement lancé en build in public : le temps est parti sur terribleidea et cage legacy.",
      en: "Abandoned project. Built but never really launched in public: time went into terribleidea and cage legacy instead.",
    },
    KPIs: [
      { number: "$0", fr: "MRR", en: "MRR" },
      { number: "Abandonné", fr: "Statut", en: "Status" },
      { number: "14", fr: "Étapes du parcours", en: "Journey steps" },
      { number: "9$/mois", fr: "Prix Pro visé", en: "Target Pro price" },
    ],
  },
  {
    name: "NoteShip.app",
    slug: "noteship-app",
    tagline: {
      fr: "Projet à l'abandon — landing page jamais suivie de produit",
      en: "Abandoned project — landing page never followed by a product",
    },
    description: {
      fr: "NoteShip.app devait être un SaaS de changelog pour indie makers et solo founders, développé en build in public. La landing page de validation a été mise en ligne, mais le projet est resté bloqué en phase 0, faute de temps disponible.",
      en: "NoteShip.app was meant to be a changelog SaaS for indie makers and solo founders, built in public. The validation landing page went live, but the project stayed stuck at phase 0, for lack of available time.",
    },
    url: "https://noteship.app",
    github: "https://github.com/martincavil/noteship",
    color: "#FF6B00",
    createdAt: "2026",
    status: "paused",
    team: ["Martin Cavil"],
    statusNote: {
      fr: "À l'abandon · Phase 0 jamais dépassée. Zéro code produit, zéro MRR.",
      en: "Abandoned · Never got past phase 0. Zero product code, zero MRR.",
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
      fr: "Après l'échec de ratee.me (codé avant de valider), je voulais appliquer la leçon inverse : landing page d'abord, distribution, et seulement si des gens s'inscrivent — je code. Dans les faits, le temps et l'énergie sont partis sur terribleidea et cage legacy, et la validation de NoteShip.app n'a jamais été poussée jusqu'au bout.",
      en: "After ratee.me's failure (built before validating), I wanted to apply the opposite lesson: landing page first, distribution, and only if people sign up — I build. In practice, time and energy went into terribleidea and cage legacy instead, and NoteShip.app's validation was never pushed through.",
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
        fr: "✅ Phase 0 (2026) — Landing page + collecte d'emails waitlist.",
        en: "✅ Phase 0 (2026) — Landing page + waitlist email collection.",
      },
      {
        fr: "❌ Phase 1 — Build in public jamais lancé : aucun article, aucun post.",
        en: "❌ Phase 1 — Build in public never launched: no articles, no posts.",
      },
      {
        fr: "❌ Phase 2 — MVP jamais commencé.",
        en: "❌ Phase 2 — MVP never started.",
      },
      {
        fr: "⛔ Projet mis en pause — Juillet 2026, au profit de terribleidea et cage legacy.",
        en: "⛔ Project put on hold — July 2026, in favor of terribleidea and cage legacy.",
      },
    ],
    KPIs: [
      { number: "$0", fr: "MRR", en: "MRR" },
      { number: "Abandonné", fr: "Statut", en: "Status" },
      { number: "Phase 0", fr: "Dernière phase atteinte", en: "Last phase reached" },
      { number: "9$/mois", fr: "Prix cible Pro visé", en: "Target Pro price" },
    ],
    metrics: {
      fr: "Projet à l'abandon. La landing page et la waitlist sont restées en ligne, mais jamais suivies d'un build in public ni d'un produit.",
      en: "Abandoned project. The landing page and waitlist stayed live, but were never followed by build in public or an actual product.",
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
  {
    name: "MilestoneHit",
    slug: "milestonehit",
    tagline: {
      fr: "Annonces automatiques de milestones — projet à l'abandon",
      en: "Automated milestone announcements — abandoned project",
    },
    description: {
      fr: "MilestoneHit automatisait l'annonce des milestones de fondateurs : connecté à Stripe, GitHub et aux réseaux sociaux, il postait automatiquement sur X et LinkedIn dès qu'un seuil de MRR, de followers ou d'utilisateurs était franchi. Lancé puis abandonné faute de traction.",
      en: "MilestoneHit automated founder milestone announcements: connected to Stripe, GitHub and social accounts, it automatically posted to X and LinkedIn as soon as an MRR, follower, or user threshold was crossed. Launched, then abandoned for lack of traction.",
    },
    url: "https://saas-milestone.vercel.app/",
    color: "#3B82F6",
    createdAt: "2026",
    status: "paused",
    team: ["Martin Cavil"],
    statusNote: {
      fr: "À l'abandon · $0 MRR · Lancé puis délaissé, comme Ratee.me.",
      en: "Abandoned · $0 MRR · Launched then abandoned, like Ratee.me.",
    },
    mrr: 0,
    customers: 0,
    monthlyVisits: 0,
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "Satori", "Vercel Cron", "OAuth"],
    problem: {
      fr: "Les fondateurs en build in public font des captures d'écran manuelles de leurs métriques et postent à la main sur X et LinkedIn dès qu'ils atteignent un cap. C'est chronophage, et l'annonce est souvent retardée ou carrément oubliée.",
      en: "Founders building in public manually screenshot their metrics and post by hand to X and LinkedIn whenever they hit a milestone. It's time-consuming, and the announcement is often delayed or simply forgotten.",
    },
    solution: {
      fr: "MilestoneHit se connectait à Stripe, GitHub et aux comptes sociaux, détectait automatiquement le franchissement de 6 types de seuils (MRR, followers X, utilisateurs, visites mensuelles, étoiles GitHub, abonnés email) via un cron horaire, générait une image de milestone et postait automatiquement l'annonce.",
      en: "MilestoneHit connected to Stripe, GitHub and social accounts, automatically detected 6 types of threshold crossings (MRR, X followers, users, monthly visits, GitHub stars, email subscribers) via an hourly cron, generated a milestone image, and auto-posted the announcement.",
    },
    whyBuilt: {
      fr: "Construit pour résoudre une vraie friction du build in public : l'annonce manuelle des milestones. Lancé publiquement, mais comme Ratee.me, le projet n'a pas trouvé de traction et a fini par être abandonné.",
      en: "Built to solve a real build-in-public friction: manually announcing milestones. Launched publicly, but like Ratee.me, the project never found traction and ended up abandoned.",
    },
    features: [
      {
        title: { fr: "6 types de milestones", en: "6 milestone types" },
        description: {
          fr: "MRR, followers X, utilisateurs inscrits, visites mensuelles, étoiles GitHub et abonnés email, tous suivis automatiquement.",
          en: "MRR, X followers, registered users, monthly visits, GitHub stars, and email subscribers, all tracked automatically.",
        },
      },
      {
        title: { fr: "Visuels auto-générés", en: "Auto-generated visuals" },
        description: {
          fr: "Des cartes de milestone (1200×630) générées côté serveur avec le nom du SaaS, le montant atteint et la progression vers le prochain cap.",
          en: "Server-side rendered milestone cards (1200×630) showing the SaaS name, the amount reached, and progress toward the next threshold.",
        },
      },
      {
        title: { fr: "Multi-produits", en: "Multi-product support" },
        description: {
          fr: "Connecte plusieurs comptes Stripe pour suivre plusieurs SaaS indépendamment.",
          en: "Connect multiple Stripe accounts to track several SaaS independently.",
        },
      },
      {
        title: { fr: "Publication automatique", en: "Automatic posting" },
        description: {
          fr: "Publication automatique sur X et LinkedIn dès qu'un seuil est franchi, sans validation manuelle.",
          en: "Automatic publishing to X and LinkedIn as soon as a threshold is crossed, with no manual approval.",
        },
      },
      {
        title: { fr: "Clés Stripe en lecture seule", en: "Read-only Stripe keys" },
        description: {
          fr: "Utilise des clés API Stripe restreintes en lecture seule, sans permission d'écriture, révocables depuis le dashboard Stripe.",
          en: "Uses restricted, read-only Stripe API keys, no write permissions, revocable from the Stripe dashboard.",
        },
      },
    ],
    businessModel: {
      fr: "Gratuit tant que le MRR reste sous 100$ (toutes fonctionnalités incluses, sans carte bancaire). Plan Pro à 9$/mois au-delà de 100$ MRR, avec détail par produit et support prioritaire.",
      en: "Free while MRR stays under $100 (all features included, no credit card required). Pro plan at $9/month above $100 MRR, with per-product breakdowns and priority support.",
    },
    roadmap: [
      {
        fr: "✅ Développement de l'app complète (connexions Stripe/GitHub/réseaux sociaux, génération de visuels, cron horaire).",
        en: "✅ Full app development (Stripe/GitHub/social connections, visual generation, hourly cron).",
      },
      {
        fr: "✅ Lancement public",
        en: "✅ Public launch",
      },
      {
        fr: "❌ Acquisition utilisateurs — Aucune traction obtenue",
        en: "❌ User acquisition — No traction achieved",
      },
      {
        fr: "⛔ Projet abandonné — 2026",
        en: "⛔ Project abandoned — 2026",
      },
    ],
    metrics: {
      fr: "Projet abandonné après un lancement sans traction. Le produit était fonctionnel (connexions Stripe/GitHub, publication automatique), mais n'a jamais trouvé son audience.",
      en: "Abandoned project after a launch with no traction. The product was functional (Stripe/GitHub connections, automatic posting), but never found its audience.",
    },
    KPIs: [
      { number: "$0", fr: "MRR", en: "MRR" },
      { number: "0", fr: "Clients payants", en: "Paying customers" },
      { number: "6", fr: "Types de milestones suivis", en: "Milestone types tracked" },
      { number: "100$ MRR", fr: "Seuil du plan gratuit", en: "Free plan threshold" },
    ],
  },
];
