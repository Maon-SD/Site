import { stats } from '../data/stats';
import styles from './StatsSection.module.css';

export function StatsSection() {
  return (
    <section id="stats" className="section">
      <div className="container">
        <h2 className="sectionTitle">A FEW NUMBERS</h2>

        <div className={styles.grid} style={{ ['--stat-count' as any]: stats.length }}>
          {stats.map((s) => (
            <div key={s.label} className={`card ${styles.stat}`}>
              <div className={styles.value}>{s.value}</div>
              <div className={styles.label}>{s.label}</div>
              {s.hint && <div className={styles.hint}>{s.hint}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

