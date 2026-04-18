import { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { categories, featuredByCategory, projects, type ProjectCategory } from '../data/projects';
import { VideoPlayer } from '../components/VideoPlayer';
import styles from './ProjectsSection.module.css';

export function ProjectsSection() {

  const [active, setActive] = useState<ProjectCategory>('Video Game');
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [lightbox]);

  const featuredProject = useMemo(() => {
    const id = featuredByCategory[active];
    return id ? projects.find((p) => p.id === id) ?? null : null;
  }, [active]);

  const filtered = useMemo(() => {
    if (featuredProject) return [featuredProject];
    return projects.filter((p) => p.category === active);
  }, [active, featuredProject]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="sectionTitle">Projects</h2>
        <p className="sectionLead">
          Filter by category. Each project has a short explanation plus video playback and optional images.
        </p>

        <div className={styles.actionsRow}>
          <div className={styles.tabs} role="tablist" aria-label="Project categories">
            {categories.map((c) => (
              <button
                key={c.key}
                role="tab"
                aria-selected={active === c.key}
                className={clsx(styles.tab, active === c.key && styles.active)}
                onClick={() => setActive(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <Link className={styles.more} to="/projects">
            More projects
          </Link>
        </div>

        {featuredProject ? (
          <div className={styles.featuredPill}>
            Featured in <strong>{active}</strong>: <strong>{featuredProject.title}</strong>
          </div>
        ) : null}

        <div className={styles.list}>
          {filtered.map((p) => (
            <article key={p.id} className={`card ${styles.project}`}>
              <div className={styles.projectGrid}>
                <div className={styles.text}>
                  <h3 className={styles.title}>{p.title}</h3>
                  <p className={styles.desc}>{p.description}</p>

                  {(p.role || p.tools?.length) && (
                    <div className={styles.metaGrid}>
                      {p.role && (
                        <div>
                          <div className={styles.metaLabel}>Role</div>
                          <div className={styles.metaValue}>{p.role}</div>
                        </div>
                      )}
                      {p.tools?.length && (
                        <div>
                          <div className={styles.metaLabel}>Tools</div>
                          <div className={styles.metaValue}>{p.tools.join(' • ')}</div>
                        </div>
                      )}
                    </div>
                  )}

                  {p.images?.length ? (
                    <div className={styles.images}>
                      {p.images.map((img) => (
                        <button
                          key={img.src}
                          type="button"
                          className={styles.imageButton}
                          onClick={() => setLightbox({ src: img.src, alt: img.alt })}
                          aria-label={`Open image: ${img.alt || p.title}`}
                        >
                          <img className={styles.image} src={img.src} alt={img.alt} loading="lazy" />
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className={styles.media}>
                  {p.video ? (
                    <VideoPlayer title={p.video.title} type={p.video.type} src={p.video.src} />
                  ) : (
                    <div className={styles.noVideo}>
                      Add a video to this project (YouTube/Vimeo or a local mp4 file).
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {lightbox && (
          <div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            onMouseDown={() => setLightbox(null)}
          >
            <div className={styles.lightboxInner} onMouseDown={(e) => e.stopPropagation()}>
              <button className={styles.lightboxClose} onClick={() => setLightbox(null)} aria-label="Close">
                ×
              </button>
              <img className={styles.lightboxImage} src={lightbox.src} alt={lightbox.alt} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
