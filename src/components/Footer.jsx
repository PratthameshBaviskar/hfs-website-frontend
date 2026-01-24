// Footer.jsx
// Dark themed footer with school information

function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: 'fa-facebook-f', url: '#facebook' },
    { name: 'Twitter', icon: 'fa-x-twitter', url: '#twitter' }, // Updated to X icon
    { name: 'LinkedIn', icon: 'fa-linkedin-in', url: '#linkedin' },
    { name: 'Instagram', icon: 'fa-instagram', url: '#instagram' }
  ];

  return (
    <footer className="footer" id="contact">
      <div className="section-container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-heading-logo">HFS Powai</h3>
            <p className="footer-address">
              Hiranandani Foundation School<br />
              Powai, Mumbai 400076<br />
              Maharashtra, India
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {['About Us', 'Academics', 'Admissions', 'Campus Life'].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact-info">
              <p>Phone: +91 22 2570 1234</p>
              <p>Email: info@hfspowai.edu.in</p>
              <p>Admissions: admissions@hfspowai.edu.in</p>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="social-icon-link"
                  aria-label={social.name}
                  title={social.name}
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hiranandani Foundation School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
