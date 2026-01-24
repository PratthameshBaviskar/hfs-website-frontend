import React, { useEffect, useState } from "react";
import "./InfrastructureSliderV2.css";

// ✅ EXACT FILENAMES — MATCHING YOUR FOLDER
import img1 from "../../assets/images/aboutus_about-challenging-competitions.jpg";
import img2 from "../../assets/images/aboutus_career.jpg";
import img3 from "../../assets/images/aboutus_lab.jpg";
import img4 from "../../assets/images/aboutus_recreational.jpg";
import img5 from "../../assets/images/aboutus_sports.jpg";
import img6 from "../../assets/images/about-hfsphoto.jpg";

const slides = [
    {
        image: img1,
        caption: "Facilities that encourage challenging competitions and excellence",
    },
    {
        image: img2,
        caption: "Career guidance spaces supporting future-ready students",
    },
    {
        image: img3,
        caption: "Modern laboratories fostering scientific curiosity",
    },
    {
        image: img4,
        caption: "Recreational spaces that promote balance and well-being",
    },
    {
        image: img5,
        caption: "Sports infrastructure nurturing teamwork and discipline",
    },
    {
        image: img6,
        caption: "A vibrant learning environment across the campus",
    },
];

const InfrastructureSliderV2 = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="infra-slider-section">
            <div className="infra-slider-wrapper">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`infra-slide ${index === current ? "active" : ""}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="infra-caption">{slide.caption}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InfrastructureSliderV2;
