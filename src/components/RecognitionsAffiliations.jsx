// RecognitionsAffiliations.jsx
// Refined minimalistic section for school recognitions and affiliations.
// Strictly follows logo-only, direct on background layout.

import React from 'react';
import '../styles/recognitionsAffiliations.css';

// Import Logos
import BCLogo from '../assets/images/British_Council_logo.svg.png';
import ETLogo from '../assets/images/education-today.png';
import LeadingSchoolLogo from '../assets/images/leading-school-image.png';
import UCASLogo from '../assets/images/UCAS_thumbnail.jpg';

const RecognitionsAffiliations = () => {
    const recognitionLogos = [
        { src: BCLogo, alt: "British Council" },
        { src: ETLogo, alt: "Education Today" },
        { src: LeadingSchoolLogo, alt: "Leading School of India" }
    ];

    return (
        <section className="recognitions-affiliations">
            <div className="section-container">

                {/* Recognitions */}
                <div className="ra-group">
                    <h3>Recognitions</h3>
                    <div className="logo-row">
                        {recognitionLogos.map((logo, index) => (
                            <img key={index} src={logo.src} alt={logo.alt} />
                        ))}
                    </div>
                </div>

                {/* Affiliations */}
                <div className="ra-group">
                    <h3>Affiliations</h3>
                    <div className="logo-row">
                        <img src={UCASLogo} alt="UCAS" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RecognitionsAffiliations;
