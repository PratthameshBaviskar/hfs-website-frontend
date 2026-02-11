// AcademicFramework.jsx
// Academic Framework section

function AcademicFramework() {
  return (
    <section className="section" id="academics" style={{ backgroundColor: 'var(--bg-cream)' }}>
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-heading">Academic Framework</h2>
          <p className="section-subtitle">
            A comprehensive curriculum that balances rigorous academics with real-world application,
            preparing students for national and international pathways.
          </p>
        </div>
        <div className="grid grid-2" style={{ marginTop: '3rem', gap: '3rem' }}>
          <div className="card" style={{ padding: '2.5rem' }}>
            <h3 className="card-title" style={{ color: 'var(--primary-indigo)', fontSize: '1.75rem' }}>
              CBSE Curriculum
            </h3>
            <p className="card-text" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Our CBSE program provides a strong foundation in core subjects while encouraging
              analytical thinking and problem-solving skills. The curriculum is designed to meet
              national standards while incorporating modern pedagogical approaches.
            </p>
            <ul style={{ marginTop: '1.5rem', paddingLeft: '1.5rem', color: 'var(--text-grey)' }}>
              <li style={{ marginBottom: '0.75rem' }}>Comprehensive subject coverage</li>
              <li style={{ marginBottom: '0.75rem' }}>Project-based learning</li>
              <li style={{ marginBottom: '0.75rem' }}>Regular assessments and feedback</li>
            </ul>
          </div>
          <div className="card" style={{ padding: '2.5rem' }}>
            <h3 className="card-title" style={{ color: 'var(--primary-indigo)', fontSize: '1.75rem' }}>
              International Outlook
            </h3>
            <p className="card-text" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Beyond the curriculum, we foster global perspectives through international collaborations,
              exchange programs, and exposure to diverse cultures. Our students develop the skills
              needed to thrive in an interconnected world.
            </p>
            <ul style={{ marginTop: '1.5rem', paddingLeft: '1.5rem', color: 'var(--text-grey)' }}>
              <li style={{ marginBottom: '0.75rem' }}>Global competency programs</li>
              <li style={{ marginBottom: '0.75rem' }}>International partnerships</li>
              <li style={{ marginBottom: '0.75rem' }}>Cultural exchange opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcademicFramework;
