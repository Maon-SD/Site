import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';

type NavItem = { id: string; label: string };

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const items: NavItem[] = useMemo(
    () => [
      { id: 'about', label: 'About' },
      { id: 'stats', label: 'Stats' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('about');

  useEffect(() => {
    if (!isHome) return;

    const handler = () => {
      const y = window.scrollY;
      const offsets = items
        .map((it) => {
          const el = document.getElementById(it.id);
          return el ? { id: it.id, top: el.getBoundingClientRect().top + y } : null;
        })
        .filter(Boolean) as { id: string; top: number }[];

      const current = offsets
        .slice()
        .reverse()
        .find((o) => y + 120 >= o.top);

      if (current) setActive(current.id);
    };

    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [items, isHome]);

  const onNav = (id: string) => {
    setOpen(false);

    if (!isHome) {
      navigate(`/#${id}`);
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          {!isHome && (
            <Link className={styles.back} to="/" aria-label="Back to home">
              <FiArrowLeft />
              Home
            </Link>
          )}

          <button className={styles.brand} onClick={() => onNav('about')} aria-label="Go to top">
            <img className={styles.logo} src="/A_logo.png" alt="A Logo" />
            <span>Noam — Portfolio</span>
          </button>
        </div>

        <nav className={styles.nav} aria-label="Primary">
          <button className={`${styles.link} ${isHome && active === 'about' ? styles.active : ''}`} onClick={() => onNav('about')}>
            About
          </button>
          <button className={`${styles.link} ${isHome && active === 'stats' ? styles.active : ''}`} onClick={() => onNav('stats')}>
            Stats
          </button>

          <button
            className={`${styles.link} ${isHome && active === 'projects' ? styles.active : ''}`}
            onClick={() => onNav('projects')}
          >
            Projects
          </button>

          <button className={`${styles.link} ${isHome && active === 'contact' ? styles.active : ''}`} onClick={() => onNav('contact')}>
            Contact
          </button>
        </nav>

        <button
          className={styles.menuButton}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className={styles.mobile}>
          <div className={`container ${styles.mobileInner}`}>
            <Link className={styles.mobileLink} to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <button className={styles.mobileLink} onClick={() => onNav('about')}>
              About
            </button>
            <button className={styles.mobileLink} onClick={() => onNav('stats')}>
              Stats
            </button>
            <button className={styles.mobileLink} onClick={() => onNav('contact')}>
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

