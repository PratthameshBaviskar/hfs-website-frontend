// ParentTrust.jsx
// Parent Trust & Achievements section

function ParentTrust({ className = "" }) {
  const achievements = [
    { title: 'Academic Excellence', value: '95%', description: 'Students scoring above 90% in board exams' },
    { title: 'University Placements', value: '100%', description: 'College placement rate' },
    { title: 'Parent Satisfaction', value: '98%', description: 'Parents rate us highly' },
    { title: 'Years of Excellence', value: '25+', description: 'Delivering quality education' },
  ];

  return (
    <section className={`section section-stats ${className}`} id="parent-trust" style={{ paddingBottom: 0 }}>
      {/* HEADER SECTION - WHITE BACKGROUND */}
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-heading fade-up">
            Parent Trust & Achievements
          </h2>
          <p className="section-subtitle stat-description">
            Trusted by thousands of families, HFS has a proven track record of academic excellence,
            character development, and student success.
          </p>
        </div>
      </div>

      {/* STATISTICS BAND - CHARCOAL/SLATE BACKGROUND */}
      <div style={{
        backgroundColor: 'var(--hfs-maroon)',
        width: '100%',
        padding: '5rem 0',
        marginTop: '3rem',
        color: '#ffffff'
      }}>
        <div className="section-container">
          <div className="grid grid-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="fade-up" style={{ textAlign: 'center', padding: '1rem' }}>
                <div className="stat-number" style={{
                  fontSize: '3.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--gold-soft)' // Gold numbers
                }}>
                  {achievement.value}
                </div>
                <h3 className="stat-label" style={{
                  fontSize: '1.25rem',
                  marginBottom: '0.5rem',
                  color: '#ffffff', // White titles
                  fontFamily: 'var(--font-heading)'
                }}>
                  {achievement.title}
                </h3>
                <p className="stat-description" style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.8)' // Soft white description
                }}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParentTrust;
