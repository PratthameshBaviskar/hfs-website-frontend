
import React, { useEffect, useRef, useState } from 'react';
import './KnowledgeFlowTransition.css';

const KnowledgeFlowTransition = () => {
    const sectionRef = useRef(null);
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsAnimated(true);
                    // Once animated, we don't need to observe anymore
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2,
                rootMargin: '0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id="knowledge-flow-transition"
            className="knowledge-flow"
            ref={sectionRef}
        >
            <div className={`kf-center ${isAnimated ? 'is-animated' : ''}`}>
                <p className="kf-label">ANSWERS TO GUIDE YOUR JOURNEY</p>
                <div className="kf-glow-line"></div>
            </div>
        </section>
    );
};

export default KnowledgeFlowTransition;
