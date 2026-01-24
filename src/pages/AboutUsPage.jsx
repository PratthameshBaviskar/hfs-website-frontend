import React from "react";
import aboutHeroBanner from "../assets/images/aboutus_herobanner.JPG";
import Breadcrumbs from "../components/Breadcrumbs";
import AboutSidebar from "../components/AboutSidebar";
import AboutImageSlider from "../components/AboutImageSlider";
import "./about.css";

const AboutUsPage = () => {
  return (
    <div className="about-page-root">
      {/* HERO SECTION */}
      <section className="about-hero-section">
        <div className="about-hero-bg-container">
          <img
            src={aboutHeroBanner}
            alt="About Hiranandani Foundation School"
            className="about-hero-img"
          />
          <div className="about-hero-overlay"></div>
        </div>

        <div className="about-hero-content">
          <Breadcrumbs variant="hero" />
          <h1 className="about-hero-title">About Us</h1>
        </div>
      </section>

      {/* BODY SECTION */}
      <div className="about-body-layout">
        <div className="about-container">
          <aside className="about-sidebar-wrapper">
            <AboutSidebar />
          </aside>

          <main className="about-main-content">
            <section className="about-journey-section">
              <h2 className="about-journey-title">OUR JOURNEY</h2>
              <div className="about-journey-text-content">
                <p className="about-journey-text">
                  Hiranandani Foundation School was founded in 1990 by the Hiranandani Foundation in the Powai area of Mumbai. The school was established with the vision of providing high-quality education that nurtures the intellectual, emotional, and social development of every child.
                </p>
                <p className="about-journey-text">
                  Over the decades, HFS has grown into a premier educational institution known for its commitment to academic excellence and holistic development. Our journey began with a handful of students and a dedicated team of educators, and today, we stand as a beacon of learning, inspiring generations of students to reach their full potential.
                </p>
                <p className="about-journey-text">
                  At HFS, we believe that education is not just about academic achievements but also about building character and fostering values that help students become responsible global citizens. Our state-of-the-art facilities and innovative teaching methods ensure that our students are well-prepared for the challenges of the 21st century.
                </p>
              </div>
            </section>
          </main>
        </div>

        {/* IMAGE SLIDER - Spans Full Width */}
        <AboutImageSlider />
      </div>
    </div>
  );
};

export default AboutUsPage;

