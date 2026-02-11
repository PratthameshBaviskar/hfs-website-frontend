import React, { useState } from 'react';
import './WhyHFS.css';

const WhyHFS = ({ items }) => {
    const [flippedId, setFlippedId] = useState(null);

    if (!items || items.length === 0) return null;

    // Split items into 5 and 4 for the honeycomb grid
    const row1 = items.slice(0, 5);
    const row2 = items.slice(5, 9);

    // Map the original 'type' to the new premium color palette
    const getColorClass = (originalType, index, rowIndex) => {
        // We want a balanced distribution of colors
        // Palette: teal, blue, sage, gold
        const palette = ['is-teal', 'is-blue', 'is-sage', 'is-blue', 'is-teal'];
        const row2Palette = ['is-gold', 'is-sage', 'is-blue', 'is-gold'];

        if (rowIndex === 0) return palette[index % palette.length];
        return row2Palette[index % row2Palette.length];
    };

    const handleHexClick = (id) => {
        setFlippedId(flippedId === id ? null : id);
    };

    return (
        <section id="why-hfs-honeycomb" className="why-hfs-section">
            <div className="why-hfs-container">
                <h2 className="section-heading">Why HFS</h2>

                <div className="why-hfs-honeycomb-grid">
                    {/* Row 1: 5 Hexagons */}
                    <div className="honeycomb-row">
                        {row1.map((item, index) => (
                            <div
                                key={item.id}
                                className={`hexagon-wrapper ${flippedId === item.id ? 'is-flipped' : ''}`}
                                onMouseEnter={() => setFlippedId(item.id)}
                                onMouseLeave={() => setFlippedId(null)}
                            >
                                <div className="hexagon-card">
                                    <div className={`hexagon-front ${getColorClass(item.type, index, 0)}`}>
                                        <span className="hexagon-text">{item.title}</span>
                                    </div>
                                    <div className="hexagon-back">
                                        <img src={item.img} alt={item.title} className="hexagon-img" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Row 2: 4 Hexagons */}
                    <div className="honeycomb-row">
                        {row2.map((item, index) => (
                            <div
                                key={item.id}
                                className={`hexagon-wrapper ${flippedId === item.id ? 'is-flipped' : ''}`}
                                onMouseEnter={() => setFlippedId(item.id)}
                                onMouseLeave={() => setFlippedId(null)}
                            >
                                <div className="hexagon-card">
                                    <div className={`hexagon-front ${getColorClass(item.type, index, 1)}`}>
                                        <span className="hexagon-text">{item.title}</span>
                                    </div>
                                    <div className="hexagon-back">
                                        <img src={item.img} alt={item.title} className="hexagon-img" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyHFS;
