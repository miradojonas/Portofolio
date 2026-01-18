export const content = {
  site: {
    name: "RANAIVOHASIVONY Onjamirado Christian Jonas",
    title: "Futur DevOps / AdminSys / Backend développeur",
    description:
      "Je construis des applications web, accessibles et maintenables.",
    location: "Madagascar",
  },

  profile: {
    image: {
      src: "/profile.svg",
      alt: "Photo de profil",
    },
    details: [
      { label: "Localisation", value: "Antananarivo, Madagascar" },
      {
        label: "Objectif",
        value: "Alternance / stage (DevOps / AdminSys / Backend)",
      },
      { label: "Email", value: "miradojonas11@gmail.com" },
    ],
  },

  links: {
    email: "miradojonas11@gmail.com",
    github: "https://github.com/miradojonas",
    linkedin: "https://www.linkedin.com/in/onjamirado-christian-jonas-ranaivohasivony-4195b036a/",
    cv: "/cv/CV_de_Mirado.pdf",
    facebook : "https://web.facebook.com/MiRaDo.JoNaS?locale=fr_FR"
  },

  hero: {
    headline: "Salut, moi c’est Mirado.",
    subheadline:
      "Étudiant en informatique, je construis des projets concrets (web, backend, DevOps) et je cherche une alternance / un stage.",
    ctas: [
      { label: "Voir mes projets", href: "#projects" },
      { label: "Me contacter", href: "#contact" },
    ],
  },

  about: {
    title: "À propos",
    paragraphs: [
      "Actuellement en 2ème année à l’École Supérieure des Technologies de l’Information, je vise un parcours DevOps / AdminSys / backend.",
      "J’aime comprendre tout le cycle: conception, développement, déploiement, et je progresse en continu via des projets et des formations.",
    ],
    highlights: [
      { label: "Intérêts", value: "Jeu vidéo, billard, football" },
      { label: "Localisation", value: "Antananarivo, Madagascar" },
    ],
  },

  skills: {
    title: "Compétences",
    groups: [
      {
        name : "Langage de programmation",
        items : [
          { name: "C", level: "Intermédiaire" },
          { name: "Python", level: "Intermédiaire" },
          { name: "JavaScript", level: "Base" },
          { name: "PHP", level: "Intermédiaire" },
        ],
      },
      {
        name: "Frontend",
        items: [
          { name: "Next.js", level: "Débutant" },
          { name: "React", level: "Débutant" },
          { name: "TypeScript", level: "Débutant" },
          { name: "CSS", level: "Intermédiaire" },
          { name: "Bootstrap", level: "Intermédiaire" },
        ],
      },
      {
        name: "Backend",
        items: [
          { name: "Python (Django, Flask)", level: "Intermédiaire" },
          { name: "PHP", level: "Intermédiaire" },
        ],
      },
      {
        name: "DevOps",
        items: [
          { name: "Docker", level: "Intermédiaire" },
          { name: "Nginx", level: "Intermédiaire" },
          { name: "GitHub Actions (CI)", level: "Intermédiaire" },
          { name: "Linux, Bash", level: "Intermédiaire" },
        ],
      },
      {
        name: "Outils",
        items: [
          { name: "Git/GitHub" },
          { name: "Jenkins" },
          { name: "GitHub Actions" },
          { name: "VMWare" },
          { name: "Windows Server" },
          { name: "Active Directory" },
          { name: "Microsoft Project" },
          { name: "VS Code" },
        ],
      },
      {
        name: "Réseaux",
        items: [
          { name: "GNS3", level: "Intermédiaire" },
          { name: "Wireshark", level: "Intermédiaire" },
          { name: "Cisco Packet Tracer", level: "Intermédiaire" },
        ],
      },
    ],
  },

  projects: {
    title: "Projets",
    items: [
      {
        name: "Planify",
        description:
          "Description: Planify est une solution web qui centralise l’organisation scolaire (emploi du temps, calendrier, devoirs, messages et notifications) dans un seul espace. Elle évite la dispersion des infos et réduit les oublis grâce à un tableau de bord “ce qui compte aujourd’hui”. Les fonctionnalités s’adaptent au rôle (élève/prof/admin) pour que chacun ait les bons droits et les bonnes actions.",
        tags: ["Flask", "HTML/CSS/JS", "SQLite", "Docker + Docker compose"],
        links: {
          demo: "https://planify-tau-seven.vercel.app/",
          repo: "https://github.com/miradojonas/Planify",
        },
      },
      {
        name: "Simulation d'une connectivité entre Routeur et Switch",
        description:
          "Simulation d'une connectivité entre routeur et switch (configuration + tests de connectivité).",
        tags: ["Réseaux"],
        links: {
          demo: "",
          repo: "",
        },
      },
      {
        name: "Gestion de notes étudiants",
        description:
          "Application web de gestion de notes d’étudiants avec authentification et tableau de bord, basée sur une structure MVC. Gestion multi-rôles : étudiant, professeur, administrateur. Fonctionnalités principales : inscription / connexion / déconnexion (sessions PHP), tableau de bord adapté au rôle, gestion des utilisateurs côté admin (ajout / modification / suppression), gestion des notes (enregistrement et consultation). Pour commencer utiliser l'identifiant admin@gmail.com, mdp : admin",
        tags: ["PHP", "MySQL"],
        links: {
          demo: "https://gestiondenotes.xo.je/views/auth/login.php",
          repo: "https://github.com/miradojonas/Gestion-de-notes-etudiants",
        },
      },
      {
        name: "Tohan'asa",
        description:
          "Tohanasa est une application web complète qui aide un utilisateur à organiser sa vie professionnelle et son apprentissage au même endroit. Elle propose l’inscription/connexion, un espace pour gérer son CV, consulter et publier des offres d’emploi, suivre des formations (documents/vidéos), et interagir via un module social. Un chatbot est aussi intégré pour guider l’utilisateur et répondre aux questions directement dans l’application.",
        tags: ["Django", "React.js", "SQLite", "API REST"],
        links: {
          demo: "",
          repo: "https://github.com/miradojonas/Tohanasa",
        },
      },
    ],
  },

  formations: {
    title: "Formations",
    items: [
      {
        title: "Informatique — 2ème année (en cours)",
        organization: "École Supérieure des Technologies de l’Information (ESTI)",
        period: "En cours",
        bullets: [
          "Parcours orienté développement logiciel et bases systèmes.",
        ],
      },
      {
        title: "Baccalauréat Technologie Général Industriel(TGI)",
        organization: "Collège Saint Michel Amparibe",
        period: "2024-2025"
      },
      {
        title: "Formation no-code",
        organization: "Orange Digital Center",
        period: "19 janvier 2026 - 23 janvier 2026",
        bullets: [
          "Découverte des outils no-code et prototypage rapide.",
        ],
      },
      {
        title: "Piscine 42",
        organization: "42",
        period: "Séptembre 2025",
        bullets: [
          "Immersion intensive: algorithmie, rigueur, autonomie, travail en équipe.",
          "Approche par projets et peer-learning.",
        ],
      },
    ],
  },

  contact: {
    title: "Contact",
    text:
      "Tu as une opportunité ou un projet ? Écris-moi et je réponds rapidement.",
  },
} as const;