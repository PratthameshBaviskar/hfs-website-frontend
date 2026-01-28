import React, { useEffect, useRef, useState } from 'react';
import './Secondary.css';
import heroImage from '../../assets/images/secondary_herobanner.JPG';
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

const Secondary = () => {
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

    // Secondary specific learning nodes (Exactly 5)
    const secondaryNodes = [
        {
            id: 1,
            label: 'ACADEMICS',
            angle: 0,
            text: 'Rigorous subject learning aligned with the CISCE framework.'
        },
        {
            id: 2,
            label: 'THINKING',
            angle: 72,
            text: 'Analytical reasoning, inquiry, and problem-solving skills.'
        },
        {
            id: 3,
            label: 'DISCIPLINE',
            angle: 144,
            text: 'Self-management, accountability, and academic integrity.'
        },
        {
            id: 4,
            label: 'GROWTH',
            angle: 216,
            text: 'Holistic development across intellectual, emotional, and social domains.'
        },
        {
            id: 5,
            label: 'LEADERSHIP',
            angle: 288,
            text: 'Nurturing initiative, responsibility, and the confidence to guide others with integrity.'
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

    const secondaryFaqs = [
        {
            question: "Which second languages are offered in the Secondary section?",
            answer: "Hindi and Marathi are offered as second and third language options, aligned with the board requirements and regional language policies."
        },
        {
            question: "What are the lab facilities for Science students?",
            answer: "We have state-of-the-art, well-equipped Physics, Chemistry, and Biology laboratories to facilitate practical learning and experimentation."
        },
        {
            question: "Is Information Technology part of the curriculum?",
            answer: "Yes, Computer Science is a core part of our curriculum with dedicated lab sessions to ensure students are tech-savvy and future-ready."
        },
        {
            question: "How does the school prepare students for competitive exams?",
            answer: "Our rigorous academic framework provides a solid foundation for various competitive entrance tests, supplemented by analytical and logical thinking exercises."
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
        <div className="secondary-page academics-atmosphere-wrapper" ref={atmosphereWrapperRef}>
            <section className="secondary-hero">
                <div
                    className="secondary-hero__bg"
                    style={{ backgroundImage: `url(${heroImage})` }}
                    role="img"
                    aria-label="Secondary Section Hero"
                />
                <div className="secondary-hero__overlay" />
                <div className="secondary-hero__content">
                    <div className="secondary-hero__container">
                        <h1 className="secondary-hero__title">Secondary</h1>
                        <div className="secondary-hero__breadcrumb">
                            <span>Home</span>
                            <span className="secondary-hero__separator">&gt;</span>
                            <span>Secondary</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECONDARY INTERACTIVE DIAGRAM */}
            <section
                className={`secondary-diagram cosmic-mode reveal-on-scroll ${isVisible ? 'is-assembled' : ''} ${universeRevealed ? 'is-revealed-universe' : ''} ${hoveredNode ? 'has-focus' : ''}`}
                ref={sectionRef}
            >
                {/* 1. HERO -> UNIVERSE TRANSITION BRIDGE */}
                <div className="cosmic-hero-transition" style={{ top: '-218px', height: '220px' }}></div>

                {/* 2. COSMIC BACKGROUND LAYERS */}
                <CosmicStarfield />

                {/* 3. SOLAR GLOW (The Living Core) */}
                <div className="primary-solar-glow"></div>

                <div className="secondary-orbital-container">
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
                    <div className="secondary-core">
                        <h3 className="secondary-core-heading">SECONDARY</h3>
                        <div className="secondary-core-content">
                            {/* Default Text */}
                            <div className={`secondary-content-layer ${!hoveredNode ? 'is-active' : ''}`}>
                                <p className="secondary-core-text">
                                    During the Secondary years, students strengthen academic depth, critical thinking, and personal responsibility, preparing them for higher academic challenges with confidence and independence.
                                </p>
                            </div>

                            {/* Hovered Content Layers */}
                            {secondaryNodes.map((node) => (
                                <div
                                    key={`content-${node.id}`}
                                    className={`secondary-content-layer ${hoveredNode === node.id ? 'is-active' : ''}`}
                                >
                                    <p className="secondary-core-text">{node.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Orbit Nodes */}
                    <div className="secondary-orbit-nodes">
                        {secondaryNodes.map((node) => (
                            <div
                                key={node.id}
                                className={`secondary-orbit-item item-${node.id} ${hoveredNode === node.id ? 'is-hovered' : ''} ${hoveredNode && hoveredNode !== node.id ? 'is-dimmed' : ''}`}
                                style={{
                                    '--node-angle': `${node.angle}deg`,
                                    '--node-delay': `${node.id * 0.1}s`
                                }}
                                onMouseEnter={() => setHoveredNode(node.id)}
                                onMouseLeave={() => setHoveredNode(null)}
                            >
                                <span className="secondary-node-label">{node.label}</span>
                                <div className="secondary-connector" />
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
                <FAQAccordion items={secondaryFaqs} />
            </div>
        </div>
    );
};

export default Secondary;
