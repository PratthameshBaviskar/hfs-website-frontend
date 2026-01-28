import React, { useState, useEffect, useRef } from 'react';
import './FAQAccordion.css';

const FAQAccordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
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

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section
            id="faq"
            className={`faq-section ${isVisible ? 'is-visible' : ''}`}
            ref={sectionRef}
        >
            <div className="faq-container">
                <h2 className="faq-heading">FREQUENTLY ASKED QUESTIONS</h2>
                <div className="faq-list">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'is-active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                                type="button"
                            >
                                <span className="faq-q-text">{item.question}</span>
                                <span className="faq-icon-box">
                                    <svg
                                        className="faq-chevron"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </span>
                            </button>
                            <div
                                className="faq-answer-wrapper"
                                style={{
                                    maxHeight: activeIndex === index ? '1000px' : '0'
                                }}
                            >
                                <div className="faq-answer">
                                    <p className="faq-a-text">{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
