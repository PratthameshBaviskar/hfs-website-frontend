
import React, { useState } from 'react';
import './MediaRoom.css';

const mediaYears = [2025, 2024, 2023, 2022, 2021];

const MediaRoom = () => {
    // 🧱 Normalized Demo data (Calendar Year Mapping)
    const mediaEvents = {
        "2025": [
            "Annual Day",
            "Sports Day",
            "HFS MUN",
            "Science Exhibition"
        ],
        "2024": [
            "Investiture Ceremony",
            "Annual Day",
            "Cultural Fest"
        ],
        "2023": [
            "Annual Day",
            "Sports Day"
        ],
        "2022": [
            "Annual Day",
            "Speech Day"
        ],
        "2021": [
            "Annual Day"
        ]
    };

    // 🧱 Photo Demo Data (Placeholder counts per event)
    const eventPhotosData = {
        "Annual Day": 12,
        "Sports Day": 15,
        "HFS MUN": 10,
        "Science Exhibition": 8,
        "Investiture Ceremony": 6,
        "Cultural Fest": 9,
        "Speech Day": 7
    };

    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleYearClick = (year) => {
        const yearStr = String(year);
        setSelectedYear(yearStr);
        setSelectedEvent(null); // Reset event selection when year changes

        // Scroll to events section smoothly
        setTimeout(() => {
            const element = document.getElementById('media-events-view');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 150);
    };

    const handleEventClick = (eventTitle) => {
        setSelectedEvent(eventTitle);

        // Scroll to gallery section smoothly
        setTimeout(() => {
            const element = document.getElementById('media-gallery-view');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 150);
    };

    return (
        <div className="media-room-container">
            {/* Hero Section */}
            <header className="media-hero">
                <h1>MEDIA ROOM</h1>
                <p>
                    Explore our journey through the years. A collection of memories,
                    achievements, and events that define the spirit of Hiranandani Foundation School.
                </p>
            </header>

            {/* Year-wise Navigation Section */}
            <section className="years-section">
                <h2 className="section-title">Select Academic Year</h2>

                <div className="year-grid">
                    {mediaYears.map((year) => {
                        const isSelected = selectedYear === String(year);
                        return (
                            <div
                                key={year}
                                className={`year-card ${isSelected ? 'selected' : ''}`}
                                onClick={() => handleYearClick(year)}
                                role="button"
                                tabIndex={0}
                                aria-pressed={isSelected}
                            >
                                <h3 className="year-number">{year}</h3>
                                <span className="year-label">
                                    {isSelected ? 'Viewing' : 'View Events'}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 🧩 Events Section - Isolated to Media Room only */}
            {selectedYear && (
                <section id="media-events-view" className="media-events-section">
                    <h2 className="section-title">EVENTS IN {selectedYear}</h2>

                    <div className="media-events-grid">
                        {(mediaEvents[selectedYear] || []).map((event, index) => {
                            const isEventSelected = selectedEvent === event;
                            return (
                                <div
                                    key={index}
                                    className={`media-event-card ${isEventSelected ? 'selected' : ''}`}
                                    onClick={() => handleEventClick(event)}
                                    role="button"
                                    tabIndex={0}
                                    aria-pressed={isEventSelected}
                                >
                                    {event}
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}


            {/* 🖼️ Photo Gallery Section - Isolated to Media Room only */}
            {selectedEvent && (
                <section id="media-gallery-view" className="media-gallery-section">
                    <h2 className="section-title">Photos — {selectedEvent}</h2>

                    <div className="media-photo-grid">
                        {Array.from({ length: eventPhotosData[selectedEvent] || 6 }).map((_, index) => (
                            <div key={index} className="media-photo-item">
                                <div className="photo-placeholder">
                                    MEMOIR {index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Bottom Spacing */}
            <div style={{ height: '120px' }}></div>

        </div>
    );
};

export default MediaRoom;
