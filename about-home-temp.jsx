import { NavLink } from "react-router-dom";
import aboutHeroBanner from "./src/assets/images/aboutus_herobanner.JPG";
import "./src/pages/about.css";

const AboutHome = () => {
  return (
    <>
      <section className="about-hero-section" aria-label="About Us hero">
        <div
          className="about-hero-bg"
          style={{ backgroundImage: `url(${aboutHeroBanner})` }}
        />
        <div className="about-hero-overlay" />
        <div className="about-hero-inner">
          <nav className="about-hero-breadcrumbs" aria-label="Breadcrumb">
            <NavLink to="/">Home</NavLink>
            <span className="about-hero-breadcrumb-sep">»</span>
            <span className="about-hero-breadcrumb-current">About Us</span>
          </nav>
          <h1 className="about-hero-title">About Us</h1>
        </div>
      </section>

      <div className="about-founder-section">
        <div className="about-founder-card">
          <h2 className="about-founder-card-title">Our Founder</h2>
          <p className="about-founder-card-text">
            Hiranandani Foundation School is built on a legacy of excellence and
            a vision to nurture young minds. Our founder's commitment to quality
            education continues to guide everything we do.
          </p>
        </div>
      </div>

      <main className="about-main-content">
        <section className="about-journey-section">
          <h2 className="about-journey-title">Our Journey</h2>
          <p className="about-journey-text">
            Since our inception, we have grown into an institution that
            balances academic rigour with holistic development. Our journey
            reflects our dedication to creating a learning environment where
            every child can thrive.
          </p>
          <p className="about-journey-text">
            We offer a curriculum that prepares students for the future while
            staying rooted in values. From our campus to our pedagogy, every
            aspect of HFS is designed to inspire purpose and possibility.
          </p>
        </section>
      </main>
    </>
  );
};

export default AboutHome;
