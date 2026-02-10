import React, { useEffect, useRef } from "react";
import contactHeroImage from "../assets/images/contact_us.jpg";
import "./ContactUs.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
    const formRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: "0px"
            }
        );

        if (formRef.current) {
            observer.observe(formRef.current);
        }

        return () => {
            if (formRef.current) {
                observer.unobserve(formRef.current);
            }
        };
    }, []);

    return (
        <div className="contact-page-root">
            {/* HERO SECTION - Matching Primary Structure */}
            <section className="contact-hero">
                <div
                    className="contact-hero__bg"
                    style={{ backgroundImage: `url(${contactHeroImage})` }}
                    role="img"
                    aria-label="Contact Us Hero Banner"
                />
                {/* NO Overlay div - Pure Image */}

                <div className="contact-hero__content">
                    <div className="contact-hero__container">
                        <h1 className="contact-hero__title">Contact Us</h1>

                        {/* Breadcrumb matches Primary: Below Title */}
                        <div className="contact-hero__breadcrumb">
                            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                            <span className="contact-hero__separator">&gt;</span>
                            <span>Contact Us</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Placeholder for future sections */}
            {/* GET IN TOUCH FORM SECTION */}
            <section className="contact-form-section">
                <div className="contact-form-container" ref={formRef}>
                    <div className="contact-form-header">
                        <h2>Get in Touch</h2>
                        <div className="contact-form-divider" />
                        <p>We welcome your questions and inquiries. Please fill out the form below, and we will get back to you shortly.</p>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-row">
                            <input
                                type="text"
                                className="form-input"
                                placeholder="First Name"
                                aria-label="First Name"
                            />
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Last Name"
                                aria-label="Last Name"
                            />
                        </div>

                        <div className="form-row">
                            <input
                                type="tel"
                                className="form-input"
                                placeholder="Phone Number"
                                aria-label="Phone Number"
                            />
                            <input
                                type="email"
                                className="form-input"
                                placeholder="Email Address"
                                aria-label="Email Address"
                            />
                        </div>

                        <div className="form-row full-width">
                            <textarea
                                className="form-textarea"
                                placeholder="How can we help you?"
                                rows="6"
                                aria-label="Message"
                            />
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="form-submit-btn">
                                Submit Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* LOCATION & CONTACT SECTION */}
            <section className="location-contact-section">

                {/* Header */}
                <div className="location-section-header">
                    <h3>Find Us</h3>
                    <div className="section-divider-center"></div>
                </div>

                {/* 2x2 Grid Layout */}
                <div className="location-grid-container">

                    {/* CARD 1: School Address */}
                    <div className="contact-card card-dark card-address">
                        <div className="card-icon-circle">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="card-text-content">
                            <h4>School Address</h4>
                            <div className="card-content">
                                <p className="school-name">Hiranandani Foundation School</p>
                                <p>Wood Street, Hiranandani Gardens,</p>
                                <p>Powai, Mumbai – 400076, India</p>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: Google Map */}
                    <div className="contact-card card-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.3364956895393!2d72.9112286!3d19.122182!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f189679999%3A0x6b453983226c4832!2sHiranandani%20Foundation%20School!5e0!3m2!1sen!2sin!4v1707000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="HFS Powai Location Map"
                        ></iframe>
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=Hiranandani+Foundation+School+Powai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="map-overlay-btn"
                        >
                            <i className="fa-solid fa-diamond-turn-right"></i>
                            Get Directions
                        </a>
                    </div>

                    {/* CARD 3: Email Address */}
                    <div className="contact-card card-dark card-email">
                        <div className="card-icon-circle">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="card-text-content">
                            <h4>Email Address</h4>
                            <div className="card-content">
                                <a href="mailto:info@hfs.edu.in" className="contact-link">info@hfs.edu.in</a>
                            </div>
                        </div>
                    </div>

                    {/* CARD 4: Phone Numbers */}
                    <div className="contact-card card-dark card-phone">
                        <div className="card-icon-circle">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="card-text-content">
                            <h4>Phone Numbers</h4>
                            <div className="card-content">
                                <p>+91 (22) 2570 4884</p>
                                <p>+91 (22) 2576 3002</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ContactUs;
