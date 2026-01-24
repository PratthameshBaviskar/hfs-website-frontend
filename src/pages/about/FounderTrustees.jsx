import React, { useState, useEffect, useRef } from "react";
import heroBanner from "../../assets/images/foundersNtrustees_herobanner.webp";
import founderImg from "../../assets/images/legend_lh_hiranandani.webp";
import surendraImg from "../../assets/images/trustee_surendra-hiranandani.jpg";
import niranjanImg from "../../assets/images/trustee_niranjan-sir.jpg";
import Breadcrumbs from "../../components/Breadcrumbs";
import FounderSidebar from "../../components/FounderSidebar";
import "./FoundersTrustees.css";

const FounderTrustees = () => {
  const [isVisionaryExpanded, setIsVisionaryExpanded] = useState(false);
  const [activeTrustee, setActiveTrustee] = useState(null); // 'surendra' | 'niranjan' | null
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleVisionary = () => setIsVisionaryExpanded(!isVisionaryExpanded);

  const handleReadMore = (name) => {
    if (activeTrustee === name) {
      setActiveTrustee(null);
    } else {
      setActiveTrustee(name);
      // Optional: smooth scroll to details if needed
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  };

  const closeDetails = () => setActiveTrustee(null);

  const trustees = {
    surendra: {
      id: 'surendra',
      name: 'Mr. Surendra Hiranandani',
      role: 'Trustee, Hiranandani Foundation',
      image: surendraImg,
      short: 'A visionary in urban development and infrastructure, Mr. Surendra Hiranandani has been pivotal in shaping modern living spaces.',
      bio: (
        <>
          <p>Mr. Surendra Hiranandani, Founder of House of Hiranandani, has been the driving force in shaping the Hiranandani Group’s approach to engineering, architecture, and urban planning. His work in transforming undeveloped land into vibrant, well-planned communities reflects his enduring commitment to quality, innovation, and disciplined execution.</p>
          <h3 className="detail-subheading">A Word from Our Patron</h3>
          <p>Education is where curiosity becomes capability. At HFS, we want our students to question, to explore, and to grow into individuals who can think for themselves and act with integrity. A great school does more than prepare children for examinations – it prepares them for life. Our goal is to nurture young minds who will shape the future with knowledge, imagination, and courage.</p>
        </>
      )
    },
    niranjan: {
      id: 'niranjan',
      name: 'Mr. Niranjan Hiranandani',
      role: 'Trustee, Hiranandani Foundation',
      image: niranjanImg,
      short: 'Widely regarded as a doyen of the Indian real estate industry, Mr. Niranjan Hiranandani is known for his leadership and commitment to excellence.',
      bio: (
        <>
          <p>Mr. Niranjan Hiranandani is recognized for his immense contribution to the Indian infrastructure landscape and its global standing. His passion for education is reflected in the world-class infrastructure and academic standards maintained at Hiranandani Foundation School. He believes in empowering students through knowledge and skill development.</p>
          <h3 className="detail-subheading">Vision for Excellence</h3>
          <p>As a trustee, he provides strategic direction to the school, ensuring that it remains a beacon of academic excellence and character building in the ever-evolving educational landscape. He remains dedicated to the values and principles laid down by our founders, preparing our students to be the leaders of tomorrow.</p>
          <p>He continues to mentor the institution, ensuring that every student receives a holistic education that prepares them for global challenges while keeping them rooted in core values.</p>
        </>
      )
    }
  };

  return (
    <div className="founder-page-root">
      {/* HERO SECTION */}
      <section className="founder-hero-section">
        <div className="founder-hero-bg">
          <img
            src={heroBanner}
            alt="HFS Founder and Trustees"
            className="founder-hero-img"
          />
          <div className="founder-hero-overlay"></div>
        </div>

        <div className="founder-hero-content">
          <Breadcrumbs variant="hero" />
          <h1 className="founder-hero-title">Founder & Trustees</h1>
        </div>
      </section>

      {/* BODY SECTION */}
      <div className="founder-body-container">
        <div className="founder-layout-wrapper">
          {/* SIDEBAR */}
          <aside className="founder-sidebar-wrapper">
            <FounderSidebar />
          </aside>

          {/* MAIN CONTENT */}
          <main className="founder-main-content">
            {/* VISIONARY LEADERSHIP SECTION */}
            <section className="founder-visionary-section">
              <h2 className="founder-section-title">Visionary Leadership</h2>

              <div className="founder-visionary-grid">
                <div className="founder-visionary-text">
                  <p className="founder-text">
                    Hiranandani Foundation School was established under the aegis of the Hiranandani Foundation, a trust committed to the cause of education and healthcare. The school is a reflection of the vision and dedication of our founders who believed that quality education is the foundation of a progressive society.
                  </p>

                  <p className="founder-text">
                    Dr. L.H. Hiranandani, the guiding light behind the foundation, was a man of great vision and compassion. His legacy continues to inspire us to strive for excellence in every endeavor. Our trustees, who share this vision, are actively involved in the school's growth and development, ensuring that we remain at the forefront of educational innovation.
                  </p>
                </div>

                <div className="founder-visionary-image-box">
                  <img
                    src={founderImg}
                    alt="Dr. L.H. Hiranandani"
                    className="founder-legend-img"
                  />
                  <span className="founder-img-caption">Dr. L.H. Hiranandani</span>
                </div>
              </div>

              <div className={`founder-additional-info ${isVisionaryExpanded ? 'expanded' : 'collapsed'}`}>
                <p className="founder-text">
                  Our trustees bring a wealth of experience and expertise from diverse fields, providing the school with the strategic direction and support needed to provide 21st-century education. Their commitment to creating a nurturing and stimulating learning environment has been instrumental in the school's success.
                </p>

                <p className="founder-text">
                  Today, Hiranandani Foundation School stands as a testament to the power of visionary leadership and the enduring impact of quality education. We remain committed to the values and principles laid down by our founders, preparing our students to be the leaders of tomorrow.
                </p>
              </div>

              <button
                className="founder-toggle-btn"
                onClick={toggleVisionary}
                aria-expanded={isVisionaryExpanded}
              >
                {isVisionaryExpanded ? "Read Less" : "Read More"}
              </button>
            </section>
          </main>
        </div>
      </div>

      {/* TRUSTEES PREMIUM FULL-WIDTH SECTION */}
      <section ref={sectionRef} className="trustees-full-section">
        <div className={`trustees-inner-container ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="founder-section-title trustees-premium-title">Our Trustees</h2>

          <div className="trustees-summary-grid">
            {Object.values(trustees).map((t) => (
              <div
                key={t.id}
                className={`trustee-summary-card ${activeTrustee === t.id ? 'active' : ''}`}
                onClick={() => handleReadMore(t.id)}
              >
                <div className="trustee-summary-photo">
                  <img src={t.image} alt={t.name} />
                </div>
                <div className="trustee-summary-content">
                  <h3 className="trustee-card-name">{t.name}</h3>
                  <p className="trustee-card-role">{t.role}</p>
                  <p className="trustee-card-intro">{t.short}</p>
                  <span className="founder-toggle-btn">Read More</span>
                </div>
              </div>
            ))}
          </div>

          {/* EXPANDED DETAIL VIEW AREA */}
          <div
            ref={detailsRef}
            className={`trustee-detail-container ${activeTrustee ? 'expanded' : 'collapsed'}`}
          >
            {activeTrustee && (
              <div className="trustee-detail-card">
                <button className="detail-close-btn" onClick={closeDetails} aria-label="Close">
                  <i className="fas fa-times"></i>
                </button>
                <div className="detail-image-box">
                  <img src={trustees[activeTrustee].image} alt={trustees[activeTrustee].name} />
                </div>
                <div className="detail-info-pane">
                  <h2 className="detail-name">{trustees[activeTrustee].name}</h2>
                  <div className="detail-text">
                    {trustees[activeTrustee].bio}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FounderTrustees;
