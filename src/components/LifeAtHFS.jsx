// LifeAtHFS.jsx
// An editorial-style immersive section bridging stats and events.

import React, { useEffect, useRef, useState } from 'react';
import '../styles/LifeAtHFS.css';
import visualImage1 from '../assets/images/visualimage1.JPG';
import visualImage2 from '../assets/images/visualimage2.JPG';

const HighlightRow = ({ icon, title, descriptor }) => (
    <div className="highlight-row">
        <div className="highlight-icon-wrapper">
            {icon}
        </div>
        <div className="highlight-info">
            <h4>{title}</h4>
            <p>{descriptor}</p>
        </div>
    </div>
);

const LifeAtHFS = ({ className = "" }) => {
    const sectionRef = useRef(null);
    const bgRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Parallax Effect on Scroll
        const handleScroll = () => {
            if (bgRef.current && isVisible) {
                const scrolled = window.scrollY;
                const offset = sectionRef.current.offsetTop;
                const distance = scrolled - offset;
                bgRef.current.style.transform = `translateY(${distance * 0.15}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible]);

    const highlights = [
        {
            title: "Holistic Education",
            descriptor: "Expanding horizons beyond the syllabus to nurture independent thinkers.",
            icon: (
                <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            )
        },
        {
            title: "Global Exposure",
            descriptor: "Forging international connections through a diverse and inclusive curriculum.",
            icon: (
                <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            )
        },
        {
            title: "Leadership & Values",
            descriptor: "Empowering students with integrity and resilience to lead tomorrow's world.",
            icon: (
                <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            )
        }
    ];

    return (
        <section className={`section life-at-hfs ${className}`} id="learning" ref={sectionRef}>
            {/* Layer 1: Parallax Background */}
            <div className="life-bg-layer" ref={bgRef}>
                <div className="life-bg-accent"></div>
            </div>

            <div className={`section-container life-content-layer ${isVisible ? 'visible' : ''}`}>
                <div className="life-story-grid">

                    {/* Visual Story Block */}
                    <div className="visual-story-block">
                        <div className="main-visual-placeholder hfs-framed-image" style={{ padding: '6px', backgroundColor: 'transparent' }}>
                            <img
                                src={visualImage1}
                                alt="Student activity at HFS"
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            />
                        </div>
                        <div className="overlap-visual-placeholder hfs-framed-image" style={{ padding: '6px', backgroundColor: '#fff' }}>
                            <img
                                src={visualImage2}
                                alt="HFS Life Moment"
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            />
                        </div>
                    </div>

                    {/* Narrative Text Stack */}
                    <article className="narrative-text-stack">
                        <span className="eyebrow-heading fade-up">Life at HFS Powai</span>
                        <h2 className="expressive-headline fade-up">
                            Where Learning Becomes <br />
                            <span style={{ color: 'var(--primary-indigo)' }}>a Way of Life</span>
                        </h2>
                        <div className="section-divider" style={{ margin: '16px 0 32px' }}></div>
                        <p className="narrative-paragraph">
                            At HFS, education is an exploration of potential. We cultivate a spirit of
                            restless curiosity and quiet confidence, where every student is encouraged
                            to find their voice, build their character, and define their own path to excellence.
                        </p>

                        <div className="highlight-stack">
                            {highlights.map((item, index) => (
                                <HighlightRow
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    descriptor={item.descriptor}
                                />
                            ))}
                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
};

export default LifeAtHFS;
