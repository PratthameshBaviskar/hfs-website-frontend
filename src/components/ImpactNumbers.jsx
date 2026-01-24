// ImpactNumbers.jsx
// A professional section displaying key school statistics with animated counters.

import React, { useState, useEffect, useRef } from 'react';
import bgImage from '../assets/images/hfs-numbersphoto.jpg';

// Reusable Counter component for the scroll-triggered animation
const Counter = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        // Trigger animation when the section enters the viewport
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime;
        const endValue = parseInt(target);

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * endValue));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(endValue);
            }
        };

        requestAnimationFrame(animate);
    }, [hasStarted, target, duration]);

    return <span ref={elementRef} className={`stat-number-value ${hasStarted ? 'fade-up' : ''}`}>{count}</span>;
};

const ImpactNumbers = () => {
    const stats = [
        { value: 3, suffix: ' Lakh+', label: 'Alumni Worldwide' },
        { value: 500, suffix: '+', label: 'Teaching & Non-Teaching Staff' },
        { value: 300, suffix: '+', label: 'Classrooms & Learning Spaces' },
        { value: 50, suffix: '+', label: 'Years of Educational Legacy' }
    ];

    return (
        <section className="impact-numbers-section">
            <div
                className="impact-bg"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="impact-overlay"></div>

                <div className="section-container impact-content">
                    <div className="impact-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="impact-card">
                                <div className="stat-number">
                                    <Counter target={stat.value} />
                                    <span className="stat-suffix">{stat.suffix}</span>
                                </div>
                                <div className="stat-divider"></div>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactNumbers;
