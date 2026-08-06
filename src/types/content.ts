export interface SiteMeta {
  name: string;
  title: string;
  description: string;
  location: string;
}

export interface ImageRef {
  src: string;
  alt: string;
}

export interface Detail {
  label: string;
  value: string;
}

export interface Links {
  email: string;
  github: string;
  linkedin: string;
  cv: string;
  facebook: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface Hero {
  headline: string;
  subheadline: string;
  ctas: Cta[];
}

export interface Highlight {
  label: string;
  value: string;
}

export interface About {
  title: string;
  paragraphs: string[];
  highlights: Highlight[];
}

export interface Skill {
  name: string;
  level?: string;
}

export interface SkillGroup {
  name: string;
  items: Skill[];
}

export interface Skills {
  title: string;
  groups: SkillGroup[];
}

export interface ProjectLinks {
  demo?: string;
  repo?: string;
  report?: string;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  image?: ImageRef;
  links: ProjectLinks;
}

export interface Projects {
  title: string;
  items: Project[];
}

export interface Formation {
  title: string;
  organization: string;
  period: string;
  bullets?: string[];
}

export interface Formations {
  title: string;
  items: Formation[];
}

export interface Contact {
  title: string;
  text: string;
}

export interface SiteContent {
  site: SiteMeta;
  profile: {
    image: ImageRef;
    details: Detail[];
  };
  links: Links;
  hero: Hero;
  about: About;
  skills: Skills;
  projects: Projects;
  formations: Formations;
  contact: Contact;
}
