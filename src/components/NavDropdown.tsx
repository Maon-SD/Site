import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavDropdown.module.css';

export function NavDropdown({
  label,
  items,
  active,
}: {
  label: string;
  active?: boolean;
  items: { to: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, []);

  return (
    <div ref={ref} className={`${styles.wrap} ${open || active ? styles.open : ''}`}>
      <div className={styles.hoverArea} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <button
          className={styles.trigger}
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="menu"
          aria-expanded={open}
        >
          {label}
        </button>

        {open && (
          <div className={styles.menu} role="menu">
            {items.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                className={styles.item}
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                {it.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

