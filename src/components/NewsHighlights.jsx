// NewsHighlights.jsx
// News & Highlights section

function NewsHighlights({ className = "" }) {
  const news = [
    { title: 'Annual Science Fair 2024', date: 'March 15, 2024', excerpt: 'Students showcased innovative projects in robotics, environmental science, and biotechnology.' },
    { title: 'Sports Day Champions', date: 'February 28, 2024', excerpt: 'HFS teams excelled at regional athletics meet, bringing home multiple medals and accolades.' },
    { title: 'Cultural Fest Success', date: 'January 20, 2024', excerpt: 'Three-day cultural festival celebrated diversity with performances, art exhibitions, and food festivals.' },
  ];

  return (
    <section className={`section ${className}`} id="news">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-heading fade-up">News & Highlights</h2>
          <p className="section-subtitle">
            Stay updated with the latest achievements, events, and milestones from our vibrant
            school community.
          </p>
        </div>
        <div className="grid grid-3" style={{ marginTop: '3rem' }}>
          {news.map((item, index) => (
            <div key={index} className="card soft-elevation fade-up" style={{ padding: '2rem' }}>
              <div style={{
                fontSize: '0.85rem',
                color: 'var(--gold-warm)',
                fontWeight: '600',
                marginBottom: '1rem',
                letterSpacing: '0.05em'
              }}>
                {item.date}
              </div>
              <h3 className="card-title" style={{ fontSize: '1.35rem', marginBottom: '1rem' }}>
                {item.title}
              </h3>
              <p className="card-text" style={{ lineHeight: '1.7' }}>
                {item.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsHighlights;
