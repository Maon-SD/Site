import { FiHeadphones, FiMusic, FiVideo } from 'react-icons/fi';
import styles from './AboutSection.module.css';

import profilePhoto from '../assets/photo_naom.jpg';

// Remplace `profilePhoto` par ton image (import local) si besoin.

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className={`card ${styles.aboutCard}`}>
          <div className={styles.grid}>
            <div className={styles.photoWrap} aria-hidden="true">
              <img className={styles.photo} src={profilePhoto} alt="" />
              <div className={styles.photoFade} />
            </div>

            <div className={styles.content}>
              <div className="pill">Sound design • Video • Music</div>
              <h1 className={styles.title}>Who am I?</h1>
              <p className={styles.lead}>
                Sound designer, composer, and audio engineer for visual media and video games. I create immersive soundscapes,
                music that tells stories, and sound effects that bring the scene to life.
              </p>

              <h2 className={styles.subTitle}>What I do</h2>
              <p className={styles.paragraph}>
                From idea to final output, I build complete audiovisual pieces: scripting, voice-over, editing, and sound design
                for short-form content. I also produce music for artists (composition, recording, mixing, mastering) and design
                interactive audio for games (FMOD/Wwise), integrating directly into engines.
              </p>

              <h2 className={styles.subTitle}>Why work with me?</h2>
              <p className={styles.paragraph}>
                I pay close attention to every detail, while keeping communication central to the process. The goal is always
                the same: professional, impactful results that match the desired outcome.
              </p>

              <div className={styles.ctaRow}>
                <a className="button" href="#projects">
                  View projects
                </a>
                <a className={styles.secondary} href="#contact">
                  Contact
                </a>
              </div>

              <div className={styles.highlights}>
                <div className={styles.highlight}>
                  <FiHeadphones />
                  <div>
                    <div className={styles.hTitle}>Sound Design</div>
                    <div className={styles.hText}>SFX, Foley, editing, mixing</div>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <FiVideo />
                  <div>
                    <div className={styles.hTitle}>Video</div>
                    <div className={styles.hText}>Editing, sync, audio polish</div>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <FiMusic />
                  <div>
                    <div className={styles.hTitle}>Music</div>
                    <div className={styles.hText}>Composition, textures, grooves</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

