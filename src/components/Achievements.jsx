// Achievements.jsx
// Displays school accolades with a premium card-based layout and scroll animations.

import React, { useEffect, useRef, useState } from 'react';
import '../styles/Achievements.css';

// Import images (Even-numbered actual photos)
import Top20Img from '../assets/images/top20-achievement.jfif';
import ExcellenceImg from '../assets/images/kalyanipathakmam-achievement.jpg';
import AsiaOneImg from '../assets/images/asiaonegreatestbrand_achievement.jpg';

const AchievementCard = ({ accolade, className = "" }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={cardRef} className={`achievement-card soft-elevation fade-up ${isVisible ? 'visible' : ''} ${className}`}>
            <div className="achievement-image-wrapper">
                <img src={accolade.image} alt={accolade.title} className="achievement-img" />
            </div>
            <div className="achievement-content">
                <h3 className="achievement-title">{accolade.title}</h3>
                <div className="achievement-divider"></div>
                <p className="achievement-description">{accolade.description}</p>
            </div>
        </div>
    );
};

const Achievements = ({ className = "" }) => {
    const accolades = [
        {
            title: "Top 20 ICSE Schools in Maharashtra",
            description: "Recognised for academic rigour and holistic student development among the state's elite institutions.",
            image: Top20Img
        },
        {
            title: "Lifetime Achievement in Education",
            description: "Honouring Mrs. Kalyani Patnaik’s decade-long commitment to pedagogical innovation and leadership.",
            image: ExcellenceImg
        },
        {
            title: "Asia One Greatest Brands & Leaders",
            description: "An international accolade identifying HFS Powai as a premier brand in the Asian educational landscape.",
            image: AsiaOneImg
        }
    ];

    return (
        <section className={`achievements-section ${className}`} id="achievements">
            <div className="section-container">
                <header className="achievements-header">
                    <h2 className="section-title fade-up">Achievements & Accolades</h2>
                    <div className="section-divider"></div>
                </header>

                <div className="achievements-grid">
                    {accolades.map((accolade, index) => (
                        <AchievementCard
                            key={index}
                            accolade={accolade}
                            className={index === 0 ? "first-achievement-fix" : ""}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
