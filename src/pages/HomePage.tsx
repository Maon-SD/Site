import { Navbar } from '../components/Navbar';
import { AboutSection } from '../sections/AboutSection';
import { StatsSection } from '../sections/StatsSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { ContactSection } from '../sections/ContactSection';

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutSection />
        <StatsSection />
        <ProjectsSection />
      </main>
      <ContactSection />
    </>
  );
}
