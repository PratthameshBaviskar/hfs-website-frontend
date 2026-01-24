// Recognitions.jsx
// Recognitions & Affiliations section component

import hfsLogo from '../assets/images/hfslogo.png';
import ucasLogo from '../assets/images/UCAS_thumbnail.jpg';
import leadingSchoolLogo from '../assets/images/leading-school-image.png';

function Recognitions() {
  return (
    <section className="recognitions">
      <div className="recognitions-container">
        <h2 className="recognitions-title">Recognitions & Affiliations</h2>
        <p className="recognitions-subtitle">
          HFS is proudly recognised by national and international educational bodies.
        </p>
        
        <div className="recognitions-logos">
          <div className="recognition-item">
            <img 
              src={hfsLogo} 
              alt="Hiranandani Foundation School Logo" 
              className="recognition-logo"
            />
          </div>
          <div className="recognition-item">
            <img 
              src={ucasLogo} 
              alt="UCAS Logo" 
              className="recognition-logo"
            />
          </div>
          <div className="recognition-item">
            <img 
              src={leadingSchoolLogo} 
              alt="Leading School Badge" 
              className="recognition-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recognitions;
