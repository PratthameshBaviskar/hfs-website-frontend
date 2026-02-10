import React, { useEffect, useRef } from 'react';
import './AdmissionsProcess.css';

const AdmissionsProcess = () => {
    const steps = [
        {
            id: 1,
            title: "Application Submission",
            icon: "fa-regular fa-file-lines", // FontAwesome
            text: "Submit the online admission form with all required details and documents."
        },
        {
            id: 2,
            title: "Application Review",
            icon: "fa-solid fa-magnifying-glass",
            text: "Applications are carefully evaluated by our academic team for completeness."
        },
        {
            id: 3,
            title: "Interaction / Assessment",
            icon: "fa-solid fa-users-viewfinder",
            text: "An age-appropriate interaction or assessment to understand the child's potential."
        },
        {
            id: 4,
            title: "Parent Interaction",
            icon: "fa-solid fa-comments",
            text: "A meeting to align family values, expectations, and our educational vision."
        },
        {
            id: 5,
            title: "Confirmation & Enrollment",
            icon: "fa-solid fa-graduation-cap",
            text: "Formal confirmation of admission followed by fee submission and enrollment."
        }
    ];

    return (
        <section className="admissions-process-section">
            <div className="section-container">

                {/* Section Header */}
                <div className="process-header">
                    <h2 className="process-title">Admission Process</h2>
                    <div className="process-divider"></div>
                    <p className="process-subtitle">
                        Our admission journey is thoughtfully designed to ensure clarity, fairness, and a supportive experience for every family.
                    </p>
                </div>

                {/* Steps Flow */}
                <div className="process-steps-container">
                    {steps.map((step) => (
                        <div key={step.id} className="process-card fade-up">
                            <div className="process-icon-box">
                                <i className={`${step.icon} process-icon`}></i>
                            </div>
                            <h3 className="process-step-title">{step.title}</h3>
                            <p className="process-step-desc">{step.text}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AdmissionsProcess;
