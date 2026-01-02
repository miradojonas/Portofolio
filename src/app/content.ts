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
      "Je suis développeur full‑stack. Je travaille sur des applications web modernes, du design système jusqu’au déploiement.",
      "Je cherche des projets où je peux livrer vite, bien, et apprendre en continu.",
    ],
    highlights: [
      { label: "Stack", value: "Next.js, Node.js, PostgreSQL" },
      { label: "Intérêts", value: "DX, performance, accessibilité" },
      { label: "Localisation", value: "France (remote possible)" },
    ],
  },

  skills: {
    title: "Compétences",
    groups: [
      {
        name: "Frontend",
        items: ["Next.js", "React", "TypeScript", "HTML", "CSS"],
      },
      {
        name: "Backend",
        items: ["Node.js", "Express", "REST", "Auth", "PostgreSQL"],
      },
      {
        name: "DevOps",
        items: ["Docker", "Nginx", "GitHub Actions (CI)", "Linux"],
      },
    ],
  },

  projects: {
    title: "Projets",
    items: [
      {
        name: "Projet 1",
        description:
          "Description courte : le problème, la solution, et ton impact.",
        tags: ["Next.js", "TypeScript"],
        links: {
          demo: "https://example.com",
          repo: "https://github.com/toncompte/projet1",
        },
      },
      {
        name: "Projet 2",
        description:
          "Un autre projet avec une fonctionnalité intéressante (auth, dashboard, etc.).",
        tags: ["Node.js", "PostgreSQL"],
        links: {
          demo: "",
          repo: "https://github.com/toncompte/projet2",
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