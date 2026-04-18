import { FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './ContactSection.module.css';

export function ContactSection() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <h2 className={styles.title}>LET&apos;S WORK TOGETHER !</h2>

          <div className={styles.buttons}>
            <a
              className={styles.platformButton}
              href="mailto:noamloucif@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <FiMail />
            </a>
            <a
              className={styles.platformButton}
              href="https://www.linkedin.com/in/noam-loucif-77143a32b/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              className={styles.platformButton}
              href="https://www.instagram.com/noam.loucif/?hl=fr"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <FiInstagram />
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.name}>NOAM LOUCIF</div>
            <div className={styles.tagline}>
              SOUND DESIGNER · PRODUCER · CONTENT CREATOR · EMOTION-MAKER
            </div>
            <div className={styles.madeBy}>
              MADE BY{' '}
              <a
                className={styles.madeByLink}
                href="https://github.com/JuliannMerit"
                target="_blank"
                rel="noreferrer"
              >
                JULIANN
              </a>
            </div>
          </div>

          <div className={styles.right}>© {year} ATMOS</div>
        </div>
      </div>
    </footer>
  );
}

