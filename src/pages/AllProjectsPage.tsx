import { useMemo } from 'react';
import type { ProjectCategory } from '../data/projects';
import { categories, projects } from '../data/projects';
import { Navbar } from '../components/Navbar';
import { ProjectCarousel } from '../components/ProjectCarousel';
import { ContactSection } from '../sections/ContactSection';
import styles from './AllProjectsPage2.module.css';

export function AllProjectsPage() {
  const grouped = useMemo(() => {
    const exclude: ProjectCategory[] = ['Video Game'];

    return categories
      .filter((c) => !exclude.includes(c.key))
      .map((c) => ({
        category: c,
        items: projects.filter((p) => p.category === c.key),
      }));
  }, []);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.headerRow}>
            <div className={styles.kicker}>Projects</div>
            <h1 className={styles.title}>All projects</h1>
          </div>

          <div className={styles.stack}>
            {grouped.map((g) => (
              <section key={g.category.key} className={styles.categoryBlock}>
                <h2 className={styles.categoryTitle}>{g.category.label}</h2>
                <ProjectCarousel projects={g.items} />
              </section>
            ))}
          </div>

          <section className={styles.bottomNote} aria-label="Additional information">
            <div className={`card ${styles.bottomNoteCard}`}>
              <h2 className={styles.bottomNoteTitle}>Note</h2>
              <p className={styles.bottomNoteText}>
                  Most of my music projects are not available yet, check on my instagram to see more :)              </p>
            </div>
          </section>
        </div>
      </main>
      <ContactSection />
    </>
  );
}
