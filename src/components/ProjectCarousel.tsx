import { useEffect, useMemo, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { VideoPlayer } from './VideoPlayer';
import type { Project } from '../data/projects';
import styles from './ProjectCarousel.module.css';

function modIndex(n: number, len: number) {
  return ((n % len) + len) % len;
}

type Dir = -1 | 1;

export function ProjectCarousel({
  projects,
  onActiveChange,
}: {
  projects: Project[];
  onActiveChange?: (project: Project) => void;
}) {
  const len = projects.length;
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [dir, setDir] = useState<Dir | null>(null);
  const [offset, setOffset] = useState(0); // px offset handled via CSS var
  const [animating, setAnimating] = useState(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [stepPx, setStepPx] = useState<number>(0);

  const active = projects[modIndex(index, len)];
  const prev = projects[modIndex(index - 1, len)];
  const next = projects[modIndex(index + 1, len)];

  useEffect(() => {
    if (active && onActiveChange) onActiveChange(active);
  }, [active, onActiveChange]);

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [lightbox]);

  const panels = useMemo(() => [prev, active, next], [prev, active, next]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const compute = () => {
      // First panel element inside track
      const panelEl = el.querySelector<HTMLElement>(`.${styles.panel}`);
      if (!panelEl) return;
      const panelRect = panelEl.getBoundingClientRect();
      // gap is defined in CSS (track gap). Estimate via computed style.
      const trackEl = el.querySelector<HTMLElement>(`.${styles.track}`);
      const gapStr = trackEl ? getComputedStyle(trackEl).columnGap : '0px';
      const gap = Number.parseFloat(gapStr) || 0;
      setStepPx(panelRect.width + gap);
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const move = (d: Dir) => {
    if (animating || len < 2) return;
    setAnimating(true);
    setDir(d);
    // slide by one step
    setOffset(d === 1 ? -stepPx : stepPx);
  };

  // After transition completes, snap back to centered and update index.
  useEffect(() => {
    if (!animating || dir === null) return;
    const t = window.setTimeout(() => {
      setIndex((v) => v + dir);
      setOffset(0);
      setAnimating(false);
      setDir(null);
    }, 430);
    return () => window.clearTimeout(t);
  }, [animating, dir]);

  if (!len) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.stage}>
        <button className={`${styles.navButton} ${styles.navLeft}`} onClick={() => move(-1)} aria-label="Previous project">
          <FiChevronLeft />
        </button>

        <div className={styles.viewport} ref={viewportRef}>
          <div
            className={styles.track}
            style={{
              transform: `translateX(${offset}px)`,
              transition: animating ? undefined : 'none',
            }}
          >
            {panels.map((p, i) => (
              <div
                key={`${p.id}-${i}`}
                className={`${styles.panel} ${i === 1 ? styles.panelCenter : ''}`}
                onClick={i === 0 ? () => move(-1) : i === 2 ? () => move(1) : undefined}
                role={i === 1 ? undefined : 'button'}
                tabIndex={i === 1 ? -1 : 0}
                onKeyDown={(e) => {
                  if (i === 1) return;
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (i === 0) move(-1);
                    if (i === 2) move(1);
                  }
                }}
              >
                <article className={styles.panelInner}>
                  <div className={styles.panelGrid}>
                    <div className={styles.leftCol}>
                      <h3 className={styles.title}>{p.title}</h3>
                      <p className={styles.desc}>{p.description}</p>

                      {p.images?.length ? (
                        <div className={styles.images}>
                          {p.images.slice(0, 2).map((img) => (
                            <button
                              key={img.src}
                              type="button"
                              className={styles.imageButton}
                              onClick={(e) => {
                                e.stopPropagation();
                                setLightbox({ src: img.src, alt: img.alt });
                              }}
                              aria-label={`Open image: ${img.alt || p.title}`}
                            >
                              <img className={styles.image} src={img.src} alt={img.alt} loading="lazy" />
                            </button>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    <div className={styles.rightCol}>
                      {p.video ? (
                        <VideoPlayer title={p.video.title} type={p.video.type} src={p.video.src} />
                      ) : (
                        <div className={styles.noVideo}>No video provided.</div>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <button className={`${styles.navButton} ${styles.navRight}`} onClick={() => move(1)} aria-label="Next project">
          <FiChevronRight />
        </button>
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
  );
}
