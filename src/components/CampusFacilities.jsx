// CampusFacilities.jsx
// Campus & Facilities section with image grid

function CampusFacilities({ className = "" }) {
  const facilities = [
    { title: 'Science Laboratories', description: 'Fully equipped labs for physics, chemistry, and biology' },
    { title: 'Library & Resource Center', description: 'Extensive collection of books, digital resources, and study spaces' },
    { title: 'Technology Infrastructure', description: 'Smart classrooms, computer labs, and high-speed connectivity' },
    { title: 'Sports Complex', description: 'Multi-purpose courts, swimming pool, and athletic tracks' },
    { title: 'Arts & Music Rooms', description: 'Dedicated spaces for visual arts, music, and performing arts' },
    { title: 'Auditorium', description: 'Modern auditorium for assemblies, performances, and events' },
  ];

  return (
    <section className={`section ${className}`} id="campus-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title fade-up">Campus & Facilities</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A modern, purpose-built campus designed to support learning, growth, and excellence in
            every aspect of student development.
          </p>
        </div>
        <div className="grid grid-3" style={{ marginTop: '3rem' }}>
          {facilities.map((facility, index) => (
            <div key={index} className="card soft-elevation fade-up" style={{ padding: '2rem', minHeight: '200px' }}>
              <h3 className="card-title" style={{ fontSize: '1.35rem', marginBottom: '1rem' }}>
                {facility.title}
              </h3>
              <p className="card-text">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CampusFacilities;
