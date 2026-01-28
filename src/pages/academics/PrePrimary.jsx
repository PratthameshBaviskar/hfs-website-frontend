import React, { useEffect, useRef, useState } from 'react';
import './PrePrimary.css';
import heroImage from '../../assets/images/preprimary_herobanner.JPG';
import FAQAccordion from '../../components/FAQAccordion';
import WhyHFS from '../../components/WhyHFS';
import KnowledgeFlowTransition from '../../components/KnowledgeFlowTransition';
import useAcademicsAtmosphere from '../../hooks/useAcademicsAtmosphere';
import '../../styles/AcademicsAtmosphere.css';
import '../../styles/CosmicAtmosphere.css'; // Import Cosmic Styles
import CosmicStarfield from '../../components/CosmicStarfield'; // Import Starfield Component

// WHY HFS Images
import whyhfs1 from '../../assets/images/whyhfs1.JPG';
import whyhfs2 from '../../assets/images/whyhfs2.JPG';
import whyhfs3 from '../../assets/images/whyhfs3.JPG';
import whyhfs4 from '../../assets/images/whyhfs4.JPG';
import whyhfs5 from '../../assets/images/whyhfs5.JPG';
import whyhfs6 from '../../assets/images/whyhfs6.JPG';
import whyhfs7 from '../../assets/images/whyhfs7.JPG';
import whyhfs8 from '../../assets/images/whyhfs8.jpg';
import whyhfs9 from '../../assets/images/whyhfs9.JPG';

const PrePrimary = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredNode, setHoveredNode] = useState(null);
    const atmosphereWrapperRef = useRef(null);

    // Apply atmosphere effects
    useAcademicsAtmosphere(atmosphereWrapperRef);

    // Scroll Logic for Universe Reveal (Cinematic Transition)
    const [universeRevealed, setUniverseRevealed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollValues = window.scrollY;
            const threshold = 150; // Trigger reveal after slight scroll
            if (scrollValues > threshold) {
                setUniverseRevealed(true);
            } else {
                setUniverseRevealed(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Pre-Primary specific learning nodes (Exactly 5)
    const prePrimaryNodes = [
        {
            id: 1,
            label: 'PLAY',
            angle: 0,
            text: 'Active, discovery-led learning that builds curiosity and confidence.'
        },
        {
            id: 2,
            label: 'CARE',
            angle: 72,
            text: 'A safe, warm environment fostering emotional security and trust.'
        },
        {
            id: 3,
            label: 'FOUNDATION',
            angle: 144,
            text: 'Strong early skills in communication, motor development, and thinking.'
        },
        {
            id: 4,
            label: 'JOY',
            angle: 216,
            text: 'Learning experiences that spark happiness and a love for school.'
        },
        {
            id: 5,
            label: 'COMMUNITY',
            angle: 288,
            text: 'Fostering early social bonds, empathy, and collaborative spirit among young learners.'
        }
    ];

    const whyHfsItems = [
        { id: 1, title: 'Personalised Learning', img: whyhfs1, type: 'maroon' },
        { id: 2, title: 'Global Outlook', img: whyhfs2, type: 'gold' },
        { id: 3, title: 'Holistic Development', img: whyhfs3, type: 'blue' },
        { id: 4, title: 'Safe & Nurturing Campus', img: whyhfs4, type: 'sage' },
        { id: 5, title: 'Creative Exploration', img: whyhfs5, type: 'maroon' },
        { id: 6, title: 'Experienced Faculty', img: whyhfs6, type: 'gold' },
        { id: 7, title: 'Active Engagement', img: whyhfs7, type: 'blue' },
        { id: 8, title: 'Life-Ready Skills', img: whyhfs8, type: 'sage' },
        { id: 9, title: 'Strong Value System', img: whyhfs9, type: 'maroon' }
    ];

    const prePrimaryFaqs = [
        {
            question: "What are the school timings for Pre-Primary?",
            answer: "Nursery and Jr. KG sessions run from 8:30 AM to 11:30 AM, while Sr. KG sessions are from 8:30 AM to 12:30 PM."
        },
        {
            question: "Is there a specific uniform for young children?",
            answer: "Yes, the school prescribes a specific uniform designed for comfort and ease of movement, suitable for active young learners."
        },
        {
            question: "What is the admission age for Nursery?",
            answer: "For admission to Nursery, a child should generally have completed 3 years by 31st December of the academic year."
        },
        {
            question: "Are meals provided by the school?",
            answer: "Parents are expected to send a healthy snack with the child. The school promotes nutritional eating habits and provides supervised breaks."
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, 300);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
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
        <div className="preprimary-page academics-atmosphere-wrapper" ref={atmosphereWrapperRef}>
            <section className="preprimary-hero">
                <div
                    className="preprimary-hero__bg"
                    style={{ backgroundImage: `url(${heroImage})` }}
                    role="img"
                    aria-label="Pre Primary Section Hero"
                />
                <div className="preprimary-hero__overlay" />
                <div className="preprimary-hero__content">
                    <div className="preprimary-hero__container">
                        <h1 className="preprimary-hero__title">Pre Primary</h1>
                        <div className="preprimary-hero__breadcrumb">
                            <span>Home</span>
                            <span className="preprimary-hero__separator">&gt;</span>
                            <span>Pre Primary</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRE-PRIMARY INTERACTIVE DIAGRAM - COSMIC MODE with SECRET REVEAL */}
            <section
                className={`preprimary-diagram cosmic-mode reveal-on-scroll ${isVisible ? 'is-assembled' : ''} ${universeRevealed ? 'is-revealed-universe' : ''} ${hoveredNode ? 'has-focus' : ''}`}
                ref={sectionRef}
            >
                {/* 1. HERO -> UNIVERSE TRANSITION BRIDGE */}
                <div className="cosmic-hero-transition" style={{ top: '-218px', height: '220px' }}></div>

                {/* 2. COSMIC BACKGROUND LAYERS */}
                <CosmicStarfield />

                {/* 3. SOLAR GLOW (The Living Core) */}
                <div className="primary-solar-glow"></div>

                <div className="preprimary-orbital-container">
                    {/* 4. ORBITAL DUST PARTICLES (New) */}
                    {/* Inner Track */}
                    <div className="cosmic-dust-track" style={{ width: '450px', height: '450px', animation: 'orbit-dust 60s linear infinite', '--radius': '225px' }}>
                        <div className="cosmic-dust-particle" style={{ top: 0, left: '50%' }}></div>
                        <div className="cosmic-dust-particle" style={{ top: '30%', left: '85%', width: '3px', height: '3px', opacity: 0.3 }}></div>
                    </div>
                    {/* Mid Track */}
                    <div className="cosmic-dust-track" style={{ width: '680px', height: '680px', animation: 'orbit-dust 90s linear infinite reverse', '--radius': '340px' }}>
                        <div className="cosmic-dust-particle" style={{ top: '10%', left: '20%', opacity: 0.5 }}></div>
                        <div className="cosmic-dust-particle" style={{ bottom: '10%', right: '20%', width: '1px', height: '1px' }}></div>
                    </div>
                    {/* Central Core */}
                    <div className="preprimary-core">
                        <h3 className="preprimary-core-heading">PRE-PRIMARY</h3>
                        <div className="preprimary-core-content">
                            {/* Default Text */}
                            <div className={`preprimary-content-layer ${!hoveredNode ? 'is-active' : ''}`}>
                                <p className="preprimary-core-text">
                                    Through play-based exploration, early learners develop foundational skills in language, numeracy, creativity, and social interaction within a joyful and nurturing environment.
                                </p>
                            </div>

                            {/* Hovered Content Layers */}
                            {prePrimaryNodes.map((node) => (
                                <div
                                    key={`content-${node.id}`}
                                    className={`preprimary-content-layer ${hoveredNode === node.id ? 'is-active' : ''}`}
                                >
                                    <p className="preprimary-core-text">{node.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Orbit Nodes */}
                    <div className="preprimary-orbit-nodes">
                        {prePrimaryNodes.map((node) => (
                            <div
                                key={node.id}
                                className={`preprimary-orbit-item item-${node.id} ${hoveredNode === node.id ? 'is-hovered' : ''} ${hoveredNode && hoveredNode !== node.id ? 'is-dimmed' : ''}`}
                                style={{
                                    '--node-angle': `${node.angle}deg`,
                                    '--node-delay': `${node.id * 0.1}s`
                                }}
                                onMouseEnter={() => setHoveredNode(node.id)}
                                onMouseLeave={() => setHoveredNode(null)}
                            >
                                <span className="preprimary-node-label">{node.label}</span>
                                <div className="preprimary-connector" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY HFS INTERACTIVE HONEYCOMB SECTION */}
            <div className="reveal-on-scroll">
                <WhyHFS items={whyHfsItems} />
            </div>

            {/* KNOWLEDGE FLOW TRANSITION */}
            <KnowledgeFlowTransition />

            {/* FAQ SECTION */}
            <div className="reveal-on-scroll">
                <FAQAccordion items={prePrimaryFaqs} />
            </div>
        </div>
    );
};

export default PrePrimary;

