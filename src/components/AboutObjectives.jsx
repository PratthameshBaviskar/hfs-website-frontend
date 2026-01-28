import React, { useEffect, useRef, useState } from "react";
import "./AboutObjectives.css";

// Import images for flip back
import imgObjective1 from "../assets/images/objectiveimg1.JPG";
import imgObjective2 from "../assets/images/objectiveimg2.jpg";
import imgObjective3 from "../assets/images/objectiveimg3.JPG";
import imgGlobal from "../assets/images/culturalexchange_event.jpeg";

const objectivesData = [
    {
        id: 1,
        icon: "fas fa-lightbulb",
        title: "Intellectual Curiosity",
        text: "Igniting a passion for learning through inquiry and critical thinking.",
        image: imgObjective1
    },
    {
        id: 2,
        icon: "fas fa-heart",
        title: "Emotional Integrity",
        text: "Developing resilience, empathy, and strong moral character.",
        image: imgObjective2
    },
    {
        id: 3,
        icon: "fas fa-users",
        title: "Social Responsibility",
        text: "Fostering community spirit and leadership for a better society.",
        image: imgObjective3
    },
    {
        id: 4,
        icon: "fas fa-globe-asia",
        title: "Global Citizenship",
        text: "Building awareness and readiness for a connected world.",
        image: imgGlobal
    }
];

const AboutObjectives = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section id="objectives" className="objectives-section" ref={sectionRef}>
            <div className="objectives-bg-overlay"></div>

            <div className="objectives-container">
                <h2 className="objectives-title">OUR OBJECTIVES</h2>

                <div className="objectives-grid">
                    {objectivesData.map((obj, index) => (
                        <div
                            key={obj.id}
                            className={`objective-card objective-card-${obj.id} ${isVisible ? "animate" : ""}`}
                            style={{ "--delay": `${index * 150}ms` }}
                        >
                            <div className="objective-card-inner">
                                <div className="objective-card-front">
                                    <div className="objective-icon-wrapper">
                                        <i className={obj.icon}></i>
                                    </div>
                                    <h3>{obj.title}</h3>
                                    <p>{obj.text}</p>
                                </div>
                                <div className="objective-card-back">
                                    <img src={obj.image} alt={obj.title} />
                                    <div className="objective-card-back-overlay"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutObjectives;
