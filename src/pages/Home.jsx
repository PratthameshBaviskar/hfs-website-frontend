import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import heroVideo from '../assets/videos/school-hero.mp4';
import AboutHFS from '../components/AboutHFS';
import PrincipalsMessage from '../components/PrincipalsMessage';
import ImpactNumbers from '../components/ImpactNumbers';
import RecognitionsAffiliations from '../components/RecognitionsAffiliations';
import LifeAtHFS from '../components/LifeAtHFS';
import EventsSection from '../components/EventsSection';
import Achievements from '../components/Achievements';
import LearningBeyondClassroom from '../components/LearningBeyondClassroom';
import CampusFacilities from '../components/CampusFacilities';
import StudentLife from '../components/StudentLife';
import ParentTrust from '../components/ParentTrust';
import AdmissionsJourney from '../components/AdmissionsJourney';
import NewsHighlights from '../components/NewsHighlights';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else if (location.pathname === '/campus') {
      const element = document.getElementById('facilities');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero" id="home">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay" />
        <div className="hero-content text-left refined-quote">
          <h1 className="hero-quote">
            Where learning inspires<br />purpose and possibility.
          </h1>
          <p className="hero-description">
            A learning environment that nurtures excellence, values, and global citizenship.
          </p>
        </div>
      </section>

      {/* Section 1: About HFS */}
      <AboutHFS />

      {/* Section 2: From the Principal's Desk */}
      <PrincipalsMessage className="section-soft" />

      {/* Section 2.5: Impact Numbers */}
      <ImpactNumbers />


      {/* Section 2.6: Life At HFS (Editorial Story) */}
      <LifeAtHFS className="section-soft" />

      {/* Section 2.7: Events */}
      <EventsSection />

      {/* Section 2.8: Achievements & Accolades */}
      <Achievements className="section-soft" />

      {/* Section 3: Learning Beyond Classroom */}
      <LearningBeyondClassroom />

      {/* Section 4: Campus & Facilities */}
      <CampusFacilities className="section-soft" />

      {/* Section 5: Student Life & Culture */}
      <StudentLife />

      {/* Section 6: Parent Trust & Achievements */}
      <ParentTrust className="section-soft" />

      {/* Section 7: Admissions Journey */}
      <AdmissionsJourney />

      {/* News & Highlights */}
      <NewsHighlights className="section-soft" />

      {/* Section 8: Recognitions & Affiliations (Pre-footer) */}
      <RecognitionsAffiliations />
    </main>
  );
}

export default Home;
