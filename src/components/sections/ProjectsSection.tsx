import Image from "next/image";
import styles from "./ProjectsSection.module.css";
import Section from "@/components/ui/Section";
import { content } from "@/data/content";

export default function ProjectsSection() {
  return (
    <Section id="projects" title="Selected Work" number="03">
      <div className={styles.list}>
        {content.projects.items.map((project, index) => (
          <article key={project.name} className={styles.project}>
            <div className={styles.projectMeta}>
              <span className={styles.projectNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className={styles.projectLinks}>
                {project.links.demo ? (
                  <a className={styles.link} href={project.links.demo}>
                    Live ↗
                  </a>
                ) : null}
                {project.links.repo ? (
                  <a className={styles.link} href={project.links.repo}>
                    Code ↗
                  </a>
                ) : null}
                {project.links.report ? (
                  <a className={styles.link} href={project.links.report}>
                    Report ↗
                  </a>
                ) : null}
              </div>
            </div>

            {project.image?.src ? (
              <div className={styles.imageWrap}>
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={800}
                  height={450}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  loading="lazy"
                  className={styles.image}
                />
              </div>
            ) : null}

            <div className={styles.projectBody}>
              <h3 className={styles.h3}>{project.name}</h3>
              <p className={styles.p}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
