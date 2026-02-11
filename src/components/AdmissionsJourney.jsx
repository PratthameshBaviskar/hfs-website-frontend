// AdmissionsJourney.jsx
// Admissions Journey section - step-based layout

function AdmissionsJourney({ className = "" }) {
  const steps = [
    { number: '01', title: 'Inquiry & Application', description: 'Submit your inquiry form online or visit our campus. Our admissions team will guide you through the process.' },
    { number: '02', title: 'Campus Tour', description: 'Schedule a personalized campus tour to experience our facilities, meet faculty, and understand our educational approach.' },
    { number: '03', title: 'Assessment', description: 'Complete the age-appropriate assessment and interaction session to help us understand your child\'s potential.' },
    { number: '04', title: 'Admission Decision', description: 'Receive your admission decision and complete the enrollment process. Welcome to the HFS family!' },
  ];

  return (
    <section className={`section ${className}`} id="admissions">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-heading fade-up">Admissions Journey</h2>
          <p className="section-subtitle">
            A straightforward, transparent process designed to help families join our community
            with confidence and clarity.
          </p>
        </div>
        <div className="grid grid-4" style={{ marginTop: '4rem', gap: '2rem' }}>
          {steps.map((step, index) => (
            <div key={index} className="fade-up" style={{ position: 'relative' }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: '700',
                color: 'var(--gold-soft)',
                opacity: 0.2,
                position: 'absolute',
                top: '-1rem',
                left: '0',
                zIndex: 0
              }}>
                {step.number}
              </div>
              <div style={{ position: 'relative', zIndex: 1, paddingTop: '2rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--primary-indigo)', marginBottom: '1rem' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--text-grey)', lineHeight: '1.7' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1.2rem 3rem' }}>
            Begin Your Application
          </button>
        </div>
      </div>
    </section>
  );
}

export default AdmissionsJourney;
