// AboutHFS.jsx
// "Who We Are" overlapping section

function AboutHFS({ className = "" }) {
  return (
    <section className={`section overlap-section ${className}`} id="about">
      <div className="section-container overlap-container">
        <div className="who-we-are-content">
          <h2 className="section-title text-center fade-up">WHO WE ARE</h2>
          <div className="section-divider"></div>
          <div className="who-we-are-body">
            <p>
              Hiranandani Foundation School is a premier educational institution dedicated to nurturing global citizens.
              We believe in the power of "Freedom to Think" — encouraging students to question, explore, and innovate.
            </p>
            <p>
              Our campus is a vibrant community where academic excellence meets character development.
              With state-of-the-art facilities and a values-driven curriculum, we empower every student to become
              a confident, compassionate leader of tomorrow.
            </p>
            <p>
              Join us in shaping a future where education goes beyond textbooks, creating a legacy of lifelong learners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHFS;
