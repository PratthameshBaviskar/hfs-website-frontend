// CampusLifeHighlight.jsx
// Displays a feature grid focusing on "Beyond Academics" at HFS Powai.

import React, { useEffect, useRef, useState } from 'react';
import '../styles/CampusLifeHighlight.css';

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="feature-card">
            <div className="feature-icon-wrapper">
                {icon}
            </div>
            <h3>{title}</h3>
            <p className="feature-description">{description}</p>
            <div className="feature-image-placeholder">
                <span className="placeholder-text">Image coming soon</span>
            </div>
        </div>
    );
};

const CampusLifeHighlight = () => {
    const sectionRef = useRef(null);
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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const features = [
        {
            title: "Holistic Education",
            description: "Fostering intellectual, emotional, and physical growth through a diverse curriculum that empowers students to discover their unique strengths.",
            icon: (
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
            )
        },
        {
            title: "Global Exposure",
            description: "Developing a world-view through international collaborations, cultural exchanges, and a global curriculum that prepares students for a borderless future.",
            icon: (
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            )
        },
        {
            title: "Leadership & Values",
            description: "Cultivating integrity, empathy, and resilience, empowering the next generation of leaders to drive positive change in their communities.",
            icon: (
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            )
        }
    ];

    return (
        <section className="section campus-highlight" id="beyond-academics">
            <div className="section-container">
                <header className="highlight-header">
                    <h2>Beyond Academics</h2>
                    <p className="highlight-subheading">
                        Shaping confident, compassionate, and globally aware learners
                    </p>
                </header>

                <div
                    ref={sectionRef}
                    className={`highlight-grid ${isVisible ? 'visible' : ''}`}
                >
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CampusLifeHighlight;
