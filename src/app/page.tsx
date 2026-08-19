import styles from "./page.module.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import FormationsSection from "@/components/sections/FormationsSection";
import ContactSection from "@/components/sections/ContactSection";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Home() {
  return (
    <div className={styles.appShell}>
      <Header />

      <main id="top" className={styles.pageEnter}>
        <HeroSection />

        <Container>
          <div className={styles.sectionsStack}>
            <RevealOnScroll>
              <AboutSection />
            </RevealOnScroll>
            <RevealOnScroll>
              <SkillsSection />
            </RevealOnScroll>
            <RevealOnScroll>
              <ProjectsSection />
            </RevealOnScroll>
            <RevealOnScroll>
              <FormationsSection />
            </RevealOnScroll>
            <RevealOnScroll>
              <ContactSection />
            </RevealOnScroll>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
