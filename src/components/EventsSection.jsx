// EventsSection.jsx
// Displays school events with alternating layouts and dual-image collages.

import React, { useEffect, useRef, useState } from 'react';
import '../styles/EventsSection.css';

// Import images PROPERLY (Explicitly using both images)
import James1 from '../assets/images/jamesrobinson-photo.jpg';
import James2 from '../assets/images/jamesrobinson-photo-2.jpg';
import Founder1 from '../assets/images/founderdayphoto_event.jpg';
import Founder2 from '../assets/images/founderdayphoto_event-2.jpg';
import Independence1 from '../assets/images/independance_event.jfif';
import Independence2 from '../assets/images/independance_event-2.jfif';
import Cultural1 from '../assets/images/culturalexchange_event.jpeg';
import Cultural2 from '../assets/images/culturalexchange_event-2.jpeg';

const EventCard = ({ event, index }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const isEven = index % 2 === 0;

    return (
        <div
            ref={cardRef}
            className={`event-card soft-elevation ${isVisible ? 'visible' : ''} ${!isEven ? 'reverse' : ''}`}
        >
            {/* JSX Rendering with both images */}
            <div className="event-image-collage">
                <div className="collage-img-wrapper large">
                    <img src={event.images[0]} alt={`${event.title} - 1`} className="event-img" />
                </div>
                <div className="collage-img-wrapper small">
                    <img src={event.images[1]} alt={`${event.title} - 2`} className="event-img" />
                </div>
            </div>

            <div className="event-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
            </div>
        </div>
    );
};

const EventsSection = ({ className = "" }) => {
    const eventsData = [
        {
            title: "Student Lecture by Nobel Laureate",
            description: "An inspiring interaction with Nobel Laureate Professor James Robinson, offering students global perspectives on economics and institutions.",
            images: [James1, James2]
        },
        {
            title: "Founder’s Day Celebration",
            description: "Honouring the vision of Dr. L. H. Hiranandani through cultural performances, leadership addresses, and community celebration.",
            images: [Founder1, Founder2]
        },
        {
            title: "Independence Day Celebration",
            description: "A proud moment of patriotism marked by flag hoisting, student performances, and national spirit.",
            images: [Independence1, Independence2]
        },
        {
            title: "Cultural Exchange Programme",
            description: "A vibrant cultural exchange fostering global understanding, collaboration, and student creativity.",
            images: [Cultural1, Cultural2]
        }
    ];

    return (
        <section className={`section events-section ${className}`} id="events">
            <div className="section-container">
                <header className="events-header">
                    <h2 className="fade-up">Events at HFS Powai</h2>
                    <div className="section-divider"></div>
                    <p>Celebrating learning, leadership, culture, and global exposure</p>
                </header>

                <div className="events-container">
                    {eventsData.map((event, index) => (
                        <div key={index} className="fade-up soft-elevation-wrapper">
                            <EventCard event={event} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
