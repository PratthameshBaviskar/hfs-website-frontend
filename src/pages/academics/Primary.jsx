import React, { useEffect, useRef, useState } from 'react';
import './Primary.css';
import heroImage from '../../assets/images/primary_herobaner.JPG';
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

const Primary = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredNode, setHoveredNode] = useState(null);
    const atmosphereWrapperRef = useRef(null);

    // Apply atmosphere effects
    useAcademicsAtmosphere(atmosphereWrapperRef);

    // Primary specific learning nodes (Exactly 5)
    const primaryNodes = [
        {
            id: 1,
            label: 'EXPERIENTIAL',
            angle: 0,
            text: 'Students learn through hands-on activities, real-world experiences, and practical application, making education meaningful and memorable.'
        },
        {
            id: 2,
            label: 'HOLISTIC',
            angle: 72,
            text: 'We nurture intellectual, emotional, social, and physical development, ensuring every child grows into a well-rounded individual.'
        },
        {
            id: 3,
            label: 'CURRICULUM',
            angle: 144,
            text: 'Following the CISCE syllabus with NABET accreditation, we provide quality education that meets international standards of excellence.'
        },
        {
            id: 4,
            label: 'BALANCE',
            angle: 216,
            text: 'A balanced blend of academics, arts, sports, and creative pursuits ensures comprehensive development beyond the classroom.'
        },
        {
            id: 5,
            label: 'DEVELOPMENT',
            angle: 288,
            text: 'With around 1,400 students from Std I to IV, we provide personalized attention and care for each child\'s unique learning journey.'
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

    const primaryFaqs = [
        {
            question: "What curriculum is followed in the Primary section?",
            answer: "We follow the CISCE (ICSE) curriculum, enriched with experiential and hands-on learning methodologies to make education engaging."
        },
        {
            question: "Are extracurricular activities part of the weekly schedule?",
            answer: "Yes, activities like Music, Art, Physical Education, and Library sessions are integrated into the regular school timetable."
        },
        {
            question: "How is student progress assessed?",
            answer: "Student progress is tracked through continuous formative assessments and comprehensive term-end evaluations to ensure consistent growth."
        },
        {
            question: "Is there a school counselor available for students?",
            answer: "Yes, a dedicated school counselor is available to support the emotional and social well-being of our students."
        }
    ];

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
        <div className="primary-page academics-atmosphere-wrapper" ref={atmosphereWrapperRef}>
            <section className="primary-hero">
                <div
                    className="primary-hero__bg"
                    style={{ backgroundImage: `url(${heroImage})` }}
                    role="img"
                    aria-label="Primary Section Hero"
                />
                <div className="primary-hero__overlay" />
                <div className="primary-hero__content">
                    <div className="primary-hero__container">
                        <h1 className="primary-hero__title">Primary</h1>
                        <div className="primary-hero__breadcrumb">
                            <span>Home</span>
                            <span className="primary-hero__separator">&gt;</span>
                            <span>Primary</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRIMARY INTERACTIVE DIAGRAM - COSMIC MODE with SECRET REVEAL */}
            <section
                className={`primary-diagram cosmic-mode reveal-on-scroll ${isVisible ? 'is-assembled' : ''} ${universeRevealed ? 'is-revealed-universe' : ''} ${hoveredNode ? 'has-focus' : ''}`}
                ref={sectionRef}
            >
                {/* 1. HERO -> UNIVERSE TRANSITION BRIDGE */}
                <div className="cosmic-hero-transition" style={{ top: '-218px', height: '220px' }}></div>

                {/* 2. COSMIC BACKGROUND LAYERS */}
                <CosmicStarfield />

                {/* 3. SOLAR GLOW (The Living Core) */}
                <div className="primary-solar-glow"></div>

                <div className="primary-orbital-container">
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
                    <div className="primary-core">
                        <h3 className="primary-core-heading">PRIMARY</h3>
                        <div className="primary-core-content">
                            {/* Default Text */}
                            <div className={`primary-content-layer ${!hoveredNode ? 'is-active' : ''}`}>
                                <p className="primary-core-text">
                                    The Primary Section emphasizes holistic development through experiential and play-based learning, offering a balanced blend of curricular and co-curricular activities.
                                </p>
                            </div>

                            {/* Hovered Content Layers */}
                            {primaryNodes.map((node) => (
                                <div
                                    key={`content-${node.id}`}
                                    className={`primary-content-layer ${hoveredNode === node.id ? 'is-active' : ''}`}
                                >
                                    <p className="primary-core-text">{node.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Orbit Nodes */}
                    <div className="primary-orbit-nodes">
                        {primaryNodes.map((node) => (
                            <div
                                key={node.id}
                                className={`primary-orbit-item item-${node.id} ${hoveredNode === node.id ? 'is-hovered' : ''} ${hoveredNode && hoveredNode !== node.id ? 'is-dimmed' : ''}`}
                                style={{
                                    '--node-angle': `${node.angle}deg`,
                                    '--node-delay': `${node.id * 0.1}s`
                                }}
                                onMouseEnter={() => setHoveredNode(node.id)}
                                onMouseLeave={() => setHoveredNode(null)}
                            >
                                <span className="primary-node-label">{node.label}</span>
                                <div className="primary-connector" />
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
                <FAQAccordion items={primaryFaqs} />
            </div>
        </div>
    );
};

export default Primary;
