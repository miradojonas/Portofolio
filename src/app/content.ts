export const content = {
  site: {
    name: "RANAIVOHASIVONY Onjamirado Christian Jonas",
    title: "Futur DevOps / AdminSys",
    description:
      "Je construis des applications web rapides, accessibles et maintenables.",
    location: "Madagascar",
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
      "Actuellement en 2ème année en informatique à l’École Supérieure des Technologies de l’Information, je suis à la recherche d’une alternance / d’un stage au sein d’une entreprise.",
    ctas: [
      { label: "Voir mes projets", href: "#projects" },
      { label: "Me contacter", href: "#contact" },
    ],
  },

  about: {
    title: "À propos",
    paragraphs: [
      "Je suis étudiant en 2ème année d’informatique avec l’objectif de devenir DevOps / AdminSys. J’ai déjà développé des applications web modernes, du design système jusqu’au déploiement.",
      "Je cherche une entreprise où je peux mettre mes compétences en pratique tout en continuant à apprendre.",
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
        name: "Frontend",
        items: ["Next.js", "React", "TypeScript", "HTML", "CSS", "JS", "Bootstrap"],
      },
      {
        name: "Backend",
        items: ["Python (Django, Flask)", "PHP"],
      },
      {
        name: "DevOps",
        items: ["Docker", "Nginx", "GitHub Actions (CI)", "Linux"],
      },
      {
        name: "Outils",
        items: ["Microsoft Project", "Git/GitHub", "Jenkins", "VS Code"],
      },
      {
        name: "Réseaux",
        items: ["GNS3", "Wireshark", "Cisco Packet Tracer"],
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
          "Application web de gestion de notes d’étudiants avec authentification et tableau de bord, basée sur une structure MVC. Gestion multi-rôles : étudiant, professeur, administrateur. Fonctionnalités principales : inscription / connexion / déconnexion (sessions PHP), tableau de bord adapté au rôle, gestion des utilisateurs côté admin (ajout / modification / suppression), gestion des notes (enregistrement et consultation).",
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

  contact: {
    title: "Contact",
    text:
      "Tu as une opportunité ou un projet ? Écris-moi et je réponds rapidement.",
  },
} as const;