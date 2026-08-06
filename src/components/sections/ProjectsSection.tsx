import Image from "next/image";
import styles from "./ProjectsSection.module.css";
import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { content } from "@/data/content";

export default function ProjectsSection() {
  return (
    <Section id="projects" title={content.projects.title}>
      <div className={styles.projectsGrid}>
        {content.projects.items.map((project) => (
          <article key={project.name} className={styles.projectCard}>
            <div>
              {project.image?.src ? (
                <div className={styles.projectImageWrap}>
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={320}
                    height={180}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    loading="lazy"
                  />
                </div>
              ) : null}
              <h3 className={styles.h3}>{project.name}</h3>
              <p className={styles.p}>{project.description}</p>

              <div className={styles.tagRow}>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>

            <div className={styles.projectLinks}>
              {project.links.demo ? (
                <a className={`${styles.link} tap`} href={project.links.demo}>
                  Demo
                </a>
              ) : (
                <span className={styles.linkMuted}>Demo</span>
              )}
              {project.links.repo ? (
                <a className={`${styles.link} tap`} href={project.links.repo}>
                  Code
                </a>
              ) : (
                <span className={styles.linkMuted}>Code</span>
              )}
              {project.links.report ? (
                <a className={`${styles.link} tap`} href={project.links.report}>
                  Rapport
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
