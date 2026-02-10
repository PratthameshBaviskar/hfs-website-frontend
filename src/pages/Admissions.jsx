import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import admissionsBg from '../assets/images/admissions_herobanner.jpg';
import AdmissionsProcess from '../components/AdmissionsProcess';
import './Admissions.css';

const Admissions = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="admissions-page">
            {/* HERO SECTION - REPLICATED FROM CONTACT/PRIMARY */}
            <section className="admissions-hero">
                {/* Background Image */}
                <div
                    className="admissions-hero__bg"
                    style={{ backgroundImage: `url(${admissionsBg})` }}
                    role="img"
                    aria-label="Admissions Hero Banner"
                />

                {/* Overlay for text contrast */}
                <div className="admissions-hero__overlay"></div>

                <div className="admissions-hero__content">
                    <div className="admissions-hero__container">
                        <h1 className="admissions-hero__title">Admissions</h1>

                        <div className="admissions-hero__breadcrumb">
                            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                            <span className="admissions-hero__separator">&gt;</span>
                            <span>Admissions</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admissions Process Section */}
            <AdmissionsProcess />
        </div>
    );
};

export default Admissions;
