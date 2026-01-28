import React, { useEffect, useRef, useState } from "react";
import "./AboutMission.css";
import missionImage from "../assets/images/mission_image.jpg";

const AboutMission = () => {
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Trigger only once when 30% of the section is visible
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, [hasAnimated]);

    return (
        <section
            id="mission"
            className={`mission-section ${hasAnimated ? "animate" : ""}`}
            ref={sectionRef}
        >
            <div className="mission-container">
                {/* Image Container - Starts Center, Moves Left */}
                <div className="mission-image-wrapper">
                    <img src={missionImage} alt="HFS Mission" />
                </div>

                {/* Content Container - Starts Behind/Hidden, Reveals Right */}
                <div className="mission-content-wrapper">
                    <h2 className="mission-title">OUR MISSION</h2>
                    <p className="mission-text">
                        To nurture students into open-minded, ethical, and compassionate global citizens who are committed to creating a sustainable and peaceful world.
                    </p>
                    <br />
                    <p className="mission-text">
                        We strive to provide a rigorous and holistic education that empowers students to excel academically, while also fostering their physical, emotional, and social well-being. Through a culture of inquiry and reflection, we inspire a lifelong love for learning and a desire to make a positive impact on society.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMission;
