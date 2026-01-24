// PrincipalsMessage.jsx
// A warm and formal section featuring the Principal's message to the community.

import principalImg from '../assets/images/Principal-and-Head-of-School-Mrs.-Kalyani-Patnaik-233x300.jpg';

function PrincipalsMessage({ className = "" }) {
    return (
        <section className={`section principals-section ${className}`} id="principals-desk">
            <div className="section-container">
                <div className="principals-grid">
                    {/* Side 1: Principal Photograph */}
                    <div className="principals-image-container">
                        <img
                            src={principalImg}
                            alt="Mrs. Kalyani Patnaik - Principal of HFS Powai"
                            className="principals-image"
                        />
                        <div className="image-accent-border"></div>
                    </div>

                    {/* Side 2: Text Content */}
                    <div className="principals-content soft-elevation">
                        <h2 className="principals-heading fade-up">From the Principal's Desk</h2>
                        <div className="section-divider"></div>
                        <div className="principals-text">
                            <p className="greeting">Dear Parents and Students,</p>

                            <p>
                                At Hiranandani Foundation School, Powai, we believe that education is about more than just
                                academic results; it is about uncovering the unique potential within every child.
                                Our mission is to provide a nurturing environment where students are encouraged to
                                think independently, act with integrity, and embrace the challenges of a
                                rapidly changing world.
                            </p>

                            <p>
                                We are committed to fostering a culture of excellence and compassion, where learning is
                                an inspiring journey of discovery. By combining a robust academic framework with a
                                rich array of co-curricular opportunities, we ensure that our students develop the
                                skills and values necessary to become global citizens and future leaders.
                            </p>

                            <div className="principals-signature">
                                <p className="signature-name">Mrs. Kalyani Patnaik</p>
                                <p className="signature-title">Principal, HFS Powai</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PrincipalsMessage;
