// src/pages/about/AboutLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import AboutSidebar from "../../components/AboutSidebar";

const AboutLayout = () => {
    return (
        <section className="about-layout-root">
            <div className="about-layout-container">

                {/* LEFT: Fixed Sidebar */}
                <aside className="about-layout-sidebar">
                    <AboutSidebar />
                </aside>

                {/* RIGHT: Page Content */}
                <section className="about-layout-content">
                    <Outlet />
                </section>

            </div>
        </section>
    );
};

export default AboutLayout;
