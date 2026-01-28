import React, { useEffect, useRef, useState } from 'react';
import './ISC.css';
import heroImage from '../../assets/images/Isc_herobanner.JPG';
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

const ISC = () => {
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

    // ISC specific learning nodes (Exactly 5)
    const iscNodes = [
        {
            id: 1,
            label: 'EXCELLENCE',
            angle: 0,
            text: 'Advanced subject mastery and rigorous preparation for competitive global academic standards.'
        },
        {
            id: 2,
            label: 'RESEARCH',
            angle: 72,
            text: 'Cultivating independent inquiry, critical analysis, and scholarly depth across disciplines.'
        },
        {
            id: 3,
            label: 'MATURITY',
            angle: 144,
            text: 'Developing personal accountability, ethical judgment, and readiness for adult responsibilities.'
        },
        {
            id: 4,
            label: 'FUTURE',
            angle: 216,
            text: 'Providing expert guidance for higher education pathways and diverse career opportunities.'
        },
        {
            id: 5,
            label: 'CHARACTER',
            angle: 288,
            text: 'Instilling lifelong values of humility, service, and global citizenship in every student.'
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

    const iscFaqs = [
        {
            question: "What streams are available for ISC students?",
            answer: "We offer both Science and Commerce streams with a wide range of subject combinations to suit diverse career aspirations."
        },
        {
            question: "What specific subjects are offered in the Science stream?",
            answer: "Our Science stream includes Physics, Chemistry, Biology, Mathematics, and Computer Science as primary subject options."
        },
        {
            question: "Are there career counseling sessions for college admissions?",
            answer: "Yes, we provide specialized career counseling and guidance for both national and international university applications."
        },
        {
            question: "Are the laboratories accessible for independent research projects?",
            answer: "Yes, senior students can access our advanced labs for research and project work under the expert supervision of our faculty."
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
        <div className="isc-page academics-atmosphere-wrapper" ref={atmosphereWrapperRef}>
            <section className="isc-hero">
                <div
                    className="isc-hero__bg"
                    style={{ backgroundImage: `url(${heroImage})` }}
                    role="img"
                    aria-label="ISC Section Hero"
                />
                <div className="isc-hero__overlay" />
                <div className="isc-hero__content">
                    <div className="isc-hero__container">
                        <h1 className="isc-hero__title">ISC</h1>
                        <div className="isc-hero__breadcrumb">
                            <span>Home</span>
                            <span className="isc-hero__separator">&gt;</span>
                            <span>ISC</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ISC INTERACTIVE DIAGRAM */}
            <section
                className={`isc-diagram cosmic-mode reveal-on-scroll ${isVisible ? 'is-assembled' : ''} ${universeRevealed ? 'is-revealed-universe' : ''} ${hoveredNode ? 'has-focus' : ''}`}
                ref={sectionRef}
            >
                {/* 1. HERO -> UNIVERSE TRANSITION BRIDGE */}
                <div className="cosmic-hero-transition" style={{ top: '-218px', height: '220px' }}></div>

                {/* 2. COSMIC BACKGROUND LAYERS */}
                <CosmicStarfield />

                {/* 3. SOLAR GLOW (The Living Core) */}
                <div className="primary-solar-glow"></div>

                <div className="isc-orbital-container">
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
                    <div className="isc-core">
                        <h3 className="isc-core-heading">ISC</h3>
                        <div className="isc-core-content">
                            {/* Default Text */}
                            <div className={`isc-content-layer ${!hoveredNode ? 'is-active' : ''}`}>
                                <p className="isc-core-text">
                                    The ISC program offers a specialized, rigorous curriculum designed to prepare senior students for university-level challenges and professional excellence on a global stage.
                                </p>
                            </div>

                            {/* Hovered Content Layers */}
                            {iscNodes.map((node) => (
                                <div
                                    key={`content-${node.id}`}
                                    className={`isc-content-layer ${hoveredNode === node.id ? 'is-active' : ''}`}
                                >
                                    <p className="isc-core-text">{node.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Orbit Nodes */}
                    <div className="isc-orbit-nodes">
                        {iscNodes.map((node) => (
                            <div
                                key={node.id}
                                className={`isc-orbit-item item-${node.id} ${hoveredNode === node.id ? 'is-hovered' : ''} ${hoveredNode && hoveredNode !== node.id ? 'is-dimmed' : ''}`}
                                style={{
                                    '--node-angle': `${node.angle}deg`,
                                    '--node-delay': `${node.id * 0.1}s`
                                }}
                                onMouseEnter={() => setHoveredNode(node.id)}
                                onMouseLeave={() => setHoveredNode(null)}
                            >
                                <span className="isc-node-label">{node.label}</span>
                                <div className="isc-connector" />
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
                <FAQAccordion items={iscFaqs} />
            </div>
        </div>
    );
};

export default ISC;
