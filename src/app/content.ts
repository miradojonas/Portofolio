export const content = {
  site: {
    name: "RANAIVOHASIVONY Onjamirado Christian Jonas",
    title: "Futur Devops / AdminSys",
    description:
      "Je construis des applications web rapides, accessibles et maintenables.",
    location: "Madagascar",
  },

  links: {
    email: "miradojonas11@gmail.com",
    github: "https://github.com/miradojonas",
    linkedin: "https://www.linkedin.com/in/onjamirado-christian-jonas-ranaivohasivony-4195b036a/",
    cv: "/cv.pdf",
  },

  hero: {
    headline: "Salut, moi c’est Mirado.",
    subheadline:
      "Actuellement en 2ème année en informatique à l'École Supérieur des Technologies de l'Information, je suis à la recherche d'une alternance/stage aux seins d'une entreprise.",
    ctas: [
      { label: "Voir mes projets", href: "#projects" },
      { label: "Me contacter", href: "#contact" },
    ],
  },

  about: {
    title: "À propos",
    paragraphs: [
      "Je suis étudiant en 2è en informatique dans le but devenir DevOps/AdminSys, j'ai déja développer des applications web modernes, du design système jusqu'au déploiement.",
      "Je cherche une entreprise ou je peux mettre mes compétences à pratique tout en continuant en apprendre.",
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
        items: ["Python (Django, Flask)", "PHP",],
      },
      {
        name: "DevOps",
        items: ["Docker", "Nginx", "GitHub Actions (CI)", "Linux"],
      },
      {
        name: "Outils",
        items: ["Microsoft Project", "Git/Github", "Jenkins", "VS Code"],
      },
      {
        name : "Réseaux",
        items : ["GNS3", "Wireshark", "Cisco Packet Tracer"]
      }
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
          "Application web de gestion de notes d’étudiants avec authentification et tableau de bord avec une structure MVC.Gestion multi-rôles : étudiant, professeur, administrateur.Fonctionnalités principales :Inscription / connexion / déconnexion (sessions PHP).Tableau de bord adapté au rôle.Administrateur : gestion des utilisateurs (ajout / modification / suppression).Gestion des notes associées à un étudiant (enregistrement et consultation).",
        tags: ["PHP", "MySQL"],
        links: {
          demo: "https://gestiondenotes.xo.je/views/auth/login.php",
          repo: "https://github.com/miradojonas/Gestion-de-notes-etudiants",
        },
      },
    ],
  },

  experience: {
    title: "Expérience",
    items: [
      {
        role: "Développeur",
        company: "Entreprise / Freelance",
        period: "2024 — 2025",
        points: [
          "Livraison d’une application web de A à Z (frontend + backend).",
          "Amélioration des performances et de l’accessibilité.",
          "Mise en place CI/CD et Docker pour la mise en production.",
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