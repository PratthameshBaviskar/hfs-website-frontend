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

        {/* MODERN ASYMMETRICAL WAVE DIVIDER */}
        <div className="hero-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,60 C240,110 480,10 720,60 C1000,110 1250,20 1440,50 V120 H0 Z"
            />
          </svg>
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
      <EventsSection className="section-slate" />

      {/* Section 2.8: Achievements & Accolades */}
      <Achievements className="section-soft" />

      {/* Section 6: Parent Trust & Achievements */}
      <ParentTrust />

      {/* Section 7: Admissions Journey */}
      <AdmissionsJourney className="section-soft" />

      {/* News & Highlights */}
      <NewsHighlights className="section-soft" />

      {/* Section 8: Recognitions & Affiliations (Pre-footer) */}
      <RecognitionsAffiliations />
    </main>
  );
}

export default Home;
