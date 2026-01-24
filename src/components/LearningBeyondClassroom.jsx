// LearningBeyondClassroom.jsx
// Learning Beyond Classroom section - sports, arts, leadership

function LearningBeyondClassroom({ className = "" }) {
  return (
    <section className={`section ${className}`} id="beyond-classroom">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title fade-up">Learning Beyond the Classroom</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Holistic development through sports, arts, leadership programs, and co-curricular activities
            that shape well-rounded individuals.
          </p>
        </div>
        <div className="grid grid-3" style={{ marginTop: '3rem' }}>
          <div className="card soft-elevation fade-up">
            <h3 className="card-title">Sports & Athletics</h3>
            <p className="card-text">
              State-of-the-art facilities for football, basketball, tennis, swimming, and more.
              Our sports program builds teamwork, discipline, and physical fitness while competing
              at regional and national levels.
            </p>
          </div>
          <div className="card soft-elevation fade-up">
            <h3 className="card-title">Arts & Creativity</h3>
            <p className="card-text">
              Visual arts, music, theater, and dance programs that nurture creative expression.
              Students explore various artistic mediums, participate in exhibitions, and showcase
              their talent in annual cultural events.
            </p>
          </div>
          <div className="card soft-elevation fade-up">
            <h3 className="card-title">Leadership & Service</h3>
            <p className="card-text">
              Student councils, clubs, and community service initiatives that develop leadership
              skills and social responsibility. Programs include Model UN, debate, robotics, and
              environmental clubs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningBeyondClassroom;
