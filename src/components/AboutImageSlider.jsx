import React, { useState, useEffect, useCallback } from 'react';
import './AboutImageSlider.css';

// Image imports
import labImg from '../assets/images/aboutus_lab.jpg';
import sportsImg from '../assets/images/aboutus_sports.jpg';
import recreationalImg from '../assets/images/aboutus_recreational.jpg';
import careerImg from '../assets/images/aboutus_career.JPG';
import competitionsImg from '../assets/images/aboutus_about-challenging-competitions.JPG';

const images = [
    { src: labImg, alt: 'Science Laboratory' },
    { src: sportsImg, alt: 'Sports Facilities' },
    { src: recreationalImg, alt: 'Recreational Area' },
    { src: careerImg, alt: 'Career Guidance' },
    { src: competitionsImg, alt: 'Challenging Competitions' },
];

const AboutImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [nextSlide, currentIndex]);

    return (
        <div className="about-slider-container">
            <div className="about-slider-wrapper">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`about-slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="about-slider-image"
                            loading={index === 0 ? "eager" : "lazy"}
                        />
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button
                    className="slider-arrow prev"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                >
                    &#10094;
                </button>
                <button
                    className="slider-arrow next"
                    onClick={nextSlide}
                    aria-label="Next slide"
                >
                    &#10095;
                </button>

                {/* Navigation Dots */}
                <div className="slider-dots">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutImageSlider;
