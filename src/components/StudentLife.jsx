// StudentLife.jsx
// Student Life & Culture section

function StudentLife({ className = "" }) {
  return (
    <section className={`section ${className}`} id="student-life">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title fade-up">Student Life & Culture</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A vibrant, inclusive community where students form lasting friendships, discover their
            passions, and grow into confident, responsible individuals.
          </p>
        </div>
        <div className="grid grid-2" style={{ marginTop: '3rem', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--primary-indigo)', marginBottom: '1.5rem' }}>
              A Day at HFS
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-grey)', marginBottom: '1.5rem' }}>
              Each day begins with assembly, followed by engaging classroom sessions. Afternoons
              are dedicated to co-curricular activities, sports, and clubs. Our balanced schedule
              ensures students excel academically while pursuing their interests.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-grey)' }}>
              Regular field trips, guest lectures, workshops, and cultural events enrich the learning
              experience and create memorable moments that shape character and worldview.
            </p>
          </div>
          <div className="card soft-elevation fade-up" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-indigo)', marginBottom: '1.5rem' }}>
              Community Values
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Respect for diversity', 'Collaborative spirit', 'Mentorship culture', 'Inclusive environment'].map((value, i) => (
                <li key={i} style={{ padding: '0.75rem 0', borderBottom: i < 3 ? '1px solid var(--bg-cream)' : 'none', color: 'var(--text-grey)' }}>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentLife;
